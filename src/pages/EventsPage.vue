<script setup>
import { ref, onMounted, computed } from 'vue'
import EventCard from '@/components/EventCard.vue'

const events = ref([])

onMounted(async () => {
  const res = await fetch('/data/events.json')
  events.value = await res.json()
})

const upcoming = computed(() => {
  const today = new Date().toISOString().split('T')[0]
  return events.value
    .filter(e => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
})

const past = computed(() => {
  const today = new Date().toISOString().split('T')[0]
  return events.value
    .filter(e => e.date < today)
    .sort((a, b) => b.date.localeCompare(a.date))
})
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold mb-8">Events</h1>

    <div v-if="upcoming.length">
      <h2 class="text-xl font-semibold mb-4 text-primary">Upcoming</h2>
      <div class="space-y-6 mb-12">
        <EventCard v-for="event in upcoming" :key="event.id" :event="event" :featured="true" />
      </div>
    </div>

    <div v-if="past.length">
      <h2 class="text-xl font-semibold mb-4">Past Events</h2>
      <div class="space-y-6">
        <EventCard v-for="event in past" :key="event.id" :event="event" />
      </div>
    </div>

    <div v-if="!events.length" class="text-center py-12 opacity-60">
      <p>Events coming soon...</p>
    </div>
  </div>
</template>
