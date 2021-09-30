<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="flex-grow">

      <!-- Page illustration -->
      <div class="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <PageIllustration />
      </div>

      <!-- Page sections -->
      <HeroFAQ />
      <section class="relative">

        <div class="relative max-w-6xl mx-auto px-4 sm:px-6 pb-12">
          <div class="pt-4 pb-2 md:pt-3 md:pb-2">

            <div class="max-w-3xl" data-aos="fade-down">
              <h4 class="h4">What is Geckopedia?</h4>
              <p class="text-xl text-gray-600 dark:text-gray-400">
                An app for gecko lovers everywhere. Geckopedia goes beyond the current rarity tool. It lets you browse geckos (by id or rank), search geckos, and keep a list of favorite geckos. What's not to like?
              </p>
            </div>

            <div class="max-w-3xl pt-8 md:pt-6" data-aos="fade-down">
              <h4 class="h4">What is GGSG?</h4>
              <p class="text-xl text-gray-600 dark:text-gray-400">
                Galactic Geckos Space Garage is an NFT Social Adventure Club featuring 10,000 warrior turned space racing geckos. Learn more at:
              </p>
              <ul>
                <li>🦎 <a href="https://galacticgeckos.app/">https://galacticgeckos.app/</a></li>
                <li>🦎 <a href="https://twitter.com/galacticgeckosg">https://twitter.com/galacticgeckosg</a></li>
              </ul>
            </div>

            <div class="max-w-3xl pt-8 md:pt-6" data-aos="fade-down">
              <h4 class="h4">Is this an official GGSG app?</h4>
              <p class="text-xl text-gray-600 dark:text-gray-400">
                This is not an official app! The GGSG team didn't commision this. Nobody paid me to build this. This app is built for the community, by the community. 🦎
              </p>
            </div>

            <div class="max-w-3xl pt-8 md:pt-6" data-aos="fade-down">
              <h4 class="h4">Why was this app built?</h4>
              <p class="text-xl text-gray-600 dark:text-gray-400">
                Because I like the geckos! 🦎 And I like the GGSG community!
              </p>
            </div>

            <div class="max-w-3xl pt-8 md:pt-6" data-aos="fade-down">
              <h4 class="h4">Have other questions or comments?</h4>
              <p class="text-xl text-gray-600 dark:text-gray-400">
                Message me on <a href="https://twitter.com/chart_garden">Twitter</a>!
              </p>
            </div>

          </div>
        </div>

      </section>

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import PageIllustration from './../partials/PageIllustration.vue'
import HeroFAQ from "./../partials/HeroFAQ.vue";
import Footer from './../partials/Footer.vue'

export default {
  name: 'FAQ',
  created () {
    document.title = "FAQ";
  },
  components: {
    Header,
    PageIllustration,
    HeroFAQ,
    Footer,
  },
};
</script>
