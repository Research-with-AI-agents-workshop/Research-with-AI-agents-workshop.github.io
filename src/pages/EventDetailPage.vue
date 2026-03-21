<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import EventCard from '@/components/EventCard.vue'

const route = useRoute()
const event = ref(null)
const notFound = ref(false)

onMounted(async () => {
  const res = await fetch('/data/events.json')
  const events = await res.json()
  const found = events.find(e => e.id === route.params.id)
  if (found) {
    event.value = found
  } else {
    notFound.value = true
  }
})
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 py-12">
    <RouterLink to="/events" class="btn btn-ghost btn-sm mb-6">
      <font-awesome-icon :icon="['fas', 'arrow-left']" class="mr-1" />
      Back to Events
    </RouterLink>

    <EventCard v-if="event" :event="event" />

    <div v-if="notFound" class="text-center py-12 opacity-60">
      <p>Event not found.</p>
      <RouterLink to="/events" class="btn btn-primary btn-sm mt-4">View All Events</RouterLink>
    </div>
  </div>
</template>
