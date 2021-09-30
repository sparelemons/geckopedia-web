<template>
  <header class="absolute w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-20">

        <!-- Site branding -->
        <div class="flex-shrink-0 mr-5">
          <!-- Logo -->
          <router-link to="/" class="block" aria-label="Cruip">
            <img :src="require('@/images/geckopedia-logo.png')" width="50" alt="Geckopedia" aria-hidden="true" />
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="flex flex-grow">

          <!-- Desktop menu links -->
          <ul class="flex flex-grow flex-wrap items-center font-medium">
            <li>
              <router-link to="/faq" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out">FAQ</router-link>
            </li>
          </ul>

        </nav>

      </div>
    </div>
  </header>
</template>

<script>
// import Dropdown from './../utils/Dropdown.vue'

export default {
  name: 'Header',
  components: {
    // Dropdown
  },
  data: function () {
    return {
      mobileNavOpen: false,
      darkMode: this.handleLights()
    }
  },
  methods: {
    clickOutside(e) {
      if (!this.mobileNavOpen || this.$refs.mobileNav.contains(e.target) || this.$refs.hamburger.contains(e.target)) return
      this.mobileNavOpen = false
    },
    keyPress() {
      if (!this.mobileNavOpen || event.keyCode !== 27) return
      this.mobileNavOpen = false
    },
		handleLights: function() {
			const dark = localStorage.getItem('dark-mode')
			if (dark === null) {
				return true
			} else {
				return dark === 'true'
			}
		}
  },
	watch: {
		darkMode() {
      localStorage.setItem('dark-mode', this.darkMode)
      if (this.darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
		}
	},
  mounted() {
    document.addEventListener('click', this.clickOutside)
    document.addEventListener('keydown', this.keyPress)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.clickOutside)
    document.removeEventListener('keydown', this.keyPress)
  }
};
</script>
