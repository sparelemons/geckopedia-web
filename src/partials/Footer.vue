<template>
  <footer class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-16 border-t border-gray-200 dark:border-gray-800 -mt-px">

        <!-- Footer illustration -->
        <div class="pointer-events-none -z-1" aria-hidden="true">
          <svg class="absolute bottom-0 left-0 transform -translate-x-1/2 ml-24 dark:opacity-40" width="800" height="264" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="400" cy="400" r="400" fill="url(#footerglow_paint0_radial)" fill-opacity=".4" />
            <defs>
              <radialGradient id="footerglow_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 0 400) scale(315.089)">
                <stop stop-color="#3ABAB4" />
                <stop offset="1" stop-color="#3ABAB4" stop-opacity=".01" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <!-- Top area: Blocks -->
        <!-- gone for now -->

        <!-- Bottom area -->
        <div class="md:flex md:items-center md:justify-between">

          <!-- Social links -->
          <ul class="flex mb-4 md:order-2 md:ml-16 md:mb-0">
            <li>
              <a class="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out" target="_blank" href="https://twitter.com/sparelemons" aria-label="Twitter">
                <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </a>
            </li>
          </ul>

          <!-- Middle links -->
          <div class="text-sm md:order-1 text-gray-700 mb-2 md:mb-0">
            <router-link class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="/terms">Terms</router-link>
            · <router-link class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="/privacy">Privacy Policy</router-link>
            · <a :href="composeAddy()"  class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out">Contact</a>
          </div>

          <!-- Copyrights note -->
          <div class="text-gray-600 dark:text-gray-400 text-sm mr-4">&copy; 2020 Spare Lemons. All rights reserved.</div>

        </div>

      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    composeTo() {
      return "ma".concat("il", "to:");
    },
    composeLabel() {
      const part1 = "in".concat(String.fromCharCode(100 + 2), String.fromCharCode(37 * 3));
      const part2 = String.fromCharCode(32 * 2);
      const part3 = "spa".concat(String.fromCharCode(14.25 * 8),
          "ele", String.fromCharCode(109), "ons", String.fromCharCode(23 * 2),
          "c", String.fromCharCode(111), "m");
      return "".concat(part1, part2, part3);
    },
    composeAddy() {
      return this.composeTo() + this.composeLabel();
    }

  }
}
</script>