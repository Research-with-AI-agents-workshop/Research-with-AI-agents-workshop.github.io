<script setup>
import { ref, onMounted, computed } from 'vue'
import EventCard from '@/components/EventCard.vue'

const events = ref([])

onMounted(async () => {
  const res = await fetch('/data/events.json')
  events.value = await res.json()
})

const nextEvent = computed(() => {
  const today = new Date().toISOString().split('T')[0]
  const upcoming = events.value
    .filter(e => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
  return upcoming[0] || events.value[0]
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="hero bg-neutral text-neutral-content py-16 md:py-24">
      <div class="hero-content text-center max-w-3xl">
        <div>
          <h1 class="text-4xl md:text-5xl font-bold leading-tight">Research with AI Agents</h1>
          <p class="text-lg md:text-xl mt-4 opacity-90">Workshop Series</p>
          <p class="mt-6 text-base opacity-80 max-w-2xl mx-auto">
            Exploring how AI agents are transforming the research process — from literature review and data analysis to writing and collaboration.
          </p>
        </div>
      </div>
    </section>

    <!-- Next Event -->
    <section class="max-w-3xl mx-auto px-4 py-12">
      <div v-if="nextEvent">
        <h2 class="text-2xl font-bold mb-6">Upcoming Talk</h2>
        <EventCard :event="nextEvent" :featured="true" />
      </div>

      <!-- About Blurb -->
      <div class="mt-12">
        <h2 class="text-2xl font-bold mb-4">About the Series</h2>
        <p class="leading-relaxed">
          The Research with AI Agents Workshop Series brings together researchers to discuss how AI agents, from coding assistants to autonomous research tools, are reshaping academic workflows. Each session features a speaker sharing their experiences, followed by open discussion.
        </p>
        <RouterLink to="/about" class="btn btn-primary btn-sm mt-4">
          Learn More
          <font-awesome-icon :icon="['fas', 'arrow-right']" class="ml-1" />
        </RouterLink>
      </div>
    </section>
  </div>
</template>
