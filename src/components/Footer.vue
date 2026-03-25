<template>
  <footer class="footer footer-center p-6 bg-base-200 text-base-content">
    <div>
      <p>Research with AI Agents Workshop Series</p>
      <div class="flex items-center gap-4 justify-center">
        <RouterLink to="/about" class="link link-primary">About</RouterLink>
        <a href="https://twitter.com/yang3kc" target="_blank" rel="noopener noreferrer" class="text-base-content/60 hover:text-primary transition-colors">
          <font-awesome-icon :icon="['fab', 'twitter']" size="lg" />
        </a>
        <a href="https://bsky.app/profile/yang3kc.bsky.social" target="_blank" rel="noopener noreferrer" class="text-base-content/60 hover:text-primary transition-colors">
          <font-awesome-icon :icon="['fab', 'bluesky']" size="lg" />
        </a>
        <a href="https://www.linkedin.com/in/kaicheng-yang-43477213b/" target="_blank" rel="noopener noreferrer" class="text-base-content/60 hover:text-primary transition-colors">
          <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" />
        </a>
      </div>
    </div>
  </footer>
</template>
