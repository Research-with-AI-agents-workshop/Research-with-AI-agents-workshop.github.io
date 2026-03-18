<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  }
})

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <div class="card bg-base-100 shadow-xl" :class="{ 'border-2 border-primary': featured }">
    <div class="card-body">
      <div v-if="featured" class="badge badge-primary mb-2">Next Event</div>
      <h2 class="card-title text-xl md:text-2xl">{{ event.title }}</h2>
      <p class="text-lg font-semibold text-primary">{{ event.speaker }}</p>
      <div class="flex flex-wrap gap-4 text-sm opacity-70 mt-1">
        <span>
          <font-awesome-icon :icon="['fas', 'calendar-days']" class="mr-1" />
          {{ formatDate(event.date) }}
        </span>
        <span>
          <font-awesome-icon :icon="['fas', 'clock']" class="mr-1" />
          {{ event.time }}
        </span>
        <span v-if="event.location">
          <font-awesome-icon :icon="['fas', 'location-dot']" class="mr-1" />
          {{ event.location }}
        </span>
      </div>
      <p class="mt-3 leading-relaxed">{{ event.abstract }}</p>
      <p v-if="event.bio" class="mt-2 text-sm italic opacity-80">{{ event.bio }}</p>
      <div v-if="event.links && Object.keys(event.links).length" class="card-actions justify-end mt-4">
        <a v-for="(url, label) in event.links" :key="label" :href="url" target="_blank" class="btn btn-sm btn-outline btn-primary">
          {{ label }}
        </a>
      </div>
    </div>
  </div>
</template>
