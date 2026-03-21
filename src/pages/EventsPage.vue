<script setup>
import { ref, onMounted, computed } from 'vue'

const events = ref([])

onMounted(async () => {
  const res = await fetch('/data/events.json')
  events.value = await res.json()
})

const upcoming = computed(() => {
  const today = new Date().toISOString().split('T')[0]
  return events.value
    .filter(e => e.date > today)
    .sort((a, b) => a.date.localeCompare(b.date))
})

const past = computed(() => {
  const today = new Date().toISOString().split('T')[0]
  return events.value
    .filter(e => e.date <= today)
    .sort((a, b) => b.date.localeCompare(a.date))
})

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold mb-8">Events</h1>

    <div v-if="upcoming.length">
      <h2 class="text-xl font-semibold mb-4 text-primary">Upcoming</h2>
      <div class="space-y-3 mb-12">
        <RouterLink
          v-for="event in upcoming"
          :key="event.id"
          :to="`/events/${event.id}`"
          class="block card bg-base-100 shadow border-2 border-primary hover:shadow-lg transition-shadow"
        >
          <div class="card-body py-4 px-6">
            <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <span class="text-sm opacity-70 whitespace-nowrap">{{ formatDate(event.date) }}</span>
              <span class="font-semibold text-primary">{{ event.speaker }}</span>
            </div>
            <p class="text-lg font-medium mt-1">{{ event.title }}</p>
          </div>
        </RouterLink>
      </div>
    </div>

    <div v-if="past.length">
      <h2 class="text-xl font-semibold mb-4">Past Events</h2>
      <div class="space-y-3">
        <RouterLink
          v-for="event in past"
          :key="event.id"
          :to="`/events/${event.id}`"
          class="block card bg-base-100 shadow hover:shadow-lg transition-shadow"
        >
          <div class="card-body py-4 px-6">
            <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <span class="text-sm opacity-70 whitespace-nowrap">{{ formatDate(event.date) }}</span>
              <span class="font-semibold text-primary">{{ event.speaker }}</span>
            </div>
            <p class="text-lg font-medium mt-1">{{ event.title }}</p>
          </div>
        </RouterLink>
      </div>
    </div>

    <div v-if="!events.length" class="text-center py-12 opacity-60">
      <p>Events coming soon...</p>
    </div>
  </div>
</template>
