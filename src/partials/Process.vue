<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 font-red-hat-display mb-4">Manage risk.<br />Analyze your trades.</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Saving information means nothing if it doesn't help you refine your trading.
            <br />Keep track of key metrics to figure out what's working and what's not.
          </p>
        </div>

        <!-- Glow illustration -->
        <svg class="absolute left-1/2 transform -translate-x-1/2 mt-20 lg:mt-40 pointer-events-none -z-1 dark:opacity-20 hidden md:block" aria-hidden="true" width="854" height="509" viewBox="0 0 854 509" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="iphonesill__a">
              <stop stop-color="#667EEA" offset="0%" />
              <stop stop-color="#667EEA" stop-opacity="0" offset="100%" />
            </radialGradient>
            <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="iphonesill__b">
              <stop stop-color="#9F7AEA" offset="0%" />
              <stop stop-color="#9F7AEA" stop-opacity="0" offset="100%" />
            </radialGradient>
          </defs>
          <g transform="translate(-64 -64)" fill="none" fill-rule="evenodd">
            <circle fill-opacity=".64" fill="url(#iphonesill__a)" cx="300" cy="300" r="300" />
            <circle fill-opacity=".72" fill="url(#iphonesill__b)" cx="729" cy="384" r="240" />
          </g>
        </svg>

        <!-- Items -->
        <div class="max-w-sm mx-auto grid gap-12 md:gap-x-6 lg:gap-x-12 md:grid-cols-3 items-start md:max-w-none">

          <!-- 1st item -->
          <div class="relative flex flex-col items-center">

            <!-- Mobile mockup -->
            <div class="inline-flex relative justify-center items-center">
              <!-- Image inside mockup size: 290x624px (or 580x1248px for Retina devices) -->
              <img class="absolute" :src="require('@/images/screenshot-11-pro-max-journal.png')" width="290" height="624" style="max-width: 84.33%;" alt="App screen 02" />
              <!-- iPhone mockup -->
              <img class="relative max-w-full mx-auto h-auto pointer-events-none" :src="require('@/images/iphone-mockup.png')" width="344" height="674" alt="iPhone mockup" aria-hidden="true" />
            </div>
          </div>

          <!-- 2nd item -->
          <div class="relative flex flex-col items-center">

            <!-- Mobile mockup -->
            <div class="inline-flex relative justify-center items-center">
              <!-- Image inside mockup size: 290x624px (or 580x1248px for Retina devices) -->
              <img class="absolute" :src="require('@/images/screenshot-entry-with-images.jpg')" width="290" height="624" style="max-width: 84.33%;" alt="App screen 03" />
              <!-- iPhone mockup -->
              <img class="relative max-w-full mx-auto h-auto pointer-events-none" :src="require('@/images/iphone-mockup.png')" width="344" height="674" alt="iPhone mockup" aria-hidden="true" />
            </div>
          </div>

          <!-- 3rd item -->
          <div class="relative flex flex-col items-center">

            <!-- Mobile mockup -->
            <div class="inline-flex relative justify-center items-center">
              <!-- Image inside mockup size: 290x624px (or 580x1248px for Retina devices) -->
              <img class="absolute" :src="require('@/images/screenshot-11-pro-max-stats.png')" width="290" height="624" style="max-width: 84.33%;" alt="App screen 04" />
              <!-- iPhone mockup -->
              <img class="relative max-w-full mx-auto h-auto pointer-events-none" :src="require('@/images/iphone-mockup.png')" width="344" height="674" alt="iPhone mockup" aria-hidden="true" />
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Process',
}
</script>
