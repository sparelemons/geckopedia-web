<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-10 md:pt-40 md:pb-16">

        <!-- Hero content -->
        <div class="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">

          <!-- Content -->
          <div class="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
            <h1 class="h1 lg:text-6xl mb-4 font-red-hat-display font-extrabold" data-aos="fade-down">
<!--              <img :src="require('@/images/geckopedia-logo.png')" width="150" alt="Geckopedia" aria-hidden="true" />-->
              Geckopedia
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">
              We like the Geckos. We like looking at Geckos. Take a trip through the geckoverse with Geckopedia!
            </p>

            <ul class="max-w-sm sm:max-w-md mx-auto md:max-w-none text-gray-600 dark:text-gray-400 mt-8" data-aos="fade-down" data-aos-delay="450">
              <li class="flex items-center mb-2">
                <svg class="w-3 h-3 fill-current text-teal-400 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Browse by rank or ID</span>
              </li>
              <li class="flex items-center mb-2">
                <svg class="w-3 h-3 fill-current text-teal-400 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Search by ID or rank</span>
              </li>
              <li class="flex items-center mb-2">
                <svg class="w-3 h-3 fill-current text-teal-400 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Keep a list of favorite Geckos</span>
              </li>
            </ul>
            <p class="mt-8" data-aos="fade-down">
              <a href="#" target="_blank" onclick="firebase.analytics().logEvent('app_store_download_button')">
                <img :src="require('@/images/download-button-white.svg')" width="200" alt="Geckopedia" aria-hidden="true" />
              </a>
            </p>

          </div>

          <!-- Mobile mockup -->
          <div class="md:col-span-5 lg:col-span-5 text-center md:text-right" data-aos="fade-up" data-aos-delay="450">
            <div class="inline-flex relative justify-center items-center">
              <!-- Glow illustration -->
              <svg class="absolute mr-12 mt-32 pointer-events-none -z-1 dark:opacity-40" aria-hidden="true" width="678" height="634" viewBox="0 0 678 634" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="240" cy="394" r="240" fill="url(#piphoneill_paint0_radial)" fill-opacity=".4" />
                <circle cx="438" cy="240" r="240" fill="url(#piphoneill_paint1_radial)" fill-opacity=".6" />
                <defs>
                  <radialGradient id="piphoneill_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 -77 317) scale(189.054)">
                    <stop stop-color="#667EEA" />
                    <stop offset="1" stop-color="#667EEA" stop-opacity=".01" />
                  </radialGradient>
                  <radialGradient id="piphoneill_paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 99 339) scale(189.054)">
                    <stop stop-color="#9F7AEA" />
                    <stop offset="1" stop-color="#9F7AEA" stop-opacity=".01" />
                  </radialGradient>
                </defs>
              </svg>
              <!-- Image inside mockup size: 290x624px (or 580x1248px for Retina devices) -->
              <img class="absolute" :src="require('@/images/gecko-screen.jpg')" width="290" height="624" style="max-width: 84.33%;" alt="Trading Journal" />
              <!-- iPhone mockup -->
              <img class="relative max-w-full mx-auto md:mr-0 md:max-w-none h-auto pointer-events-none" :src="require('@/images/iphone-mockup.png')" width="344" height="674" alt="iPhone mockup" aria-hidden="true" />

            </div>

            <!-- Modal -->
            <Modal id="modal" ariaLabel="modal-headline" :show="videoModalOpen" @handleClose="videoModalOpen = false">
              <div class="relative pb-9/16">
                <iframe class="absolute w-full h-full" src="https://www.youtube.com/embed/qz4F1uMzihY" title="Video" allowFullScreen></iframe>
              </div>
            </Modal>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
import Modal from './../utils/Modal.vue'

export default {
  name: 'HeroHome',
  components: {
    Modal
  },
  data: function () {
    return {
      videoModalOpen: false
    }
  },
}
</script>
