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
      <HeroTerms />
      <section class="relative">

        <div class="relative max-w-6xl mx-auto px-4 sm:px-6 pb-12">
          <div class="pt-4 pb-2 md:pt-3 md:pb-2">

            <div class="max-w-3xl" data-aos="fade-down">

              <p class="text-xl text-gray-600 dark:text-gray-400 pb-4">
                By downloading or using the app, these terms will automatically apply to you – you should
                make sure therefore that you read them carefully before using the app. You’re not allowed to
                copy, or modify the app, any part of the app, or our trademarks in any way. You’re not allowed
                to attempt to extract the source code of the app, and you also shouldn’t try to translate
                the app into other languages, or make derivative versions. The app itself, and all the trade
                marks, copyright, database rights and other intellectual property rights related to it,
                still belong to Spare Lemons.
              </p>

              <p class="text-xl text-gray-600 dark:text-gray-400 pb-4">
                Spare Lemons is committed to ensuring that the app is as useful and efficient as possible.
                For that reason, we reserve the right to make changes to the app or to charge for its
                services, at any time and for any reason. We will never charge you for the app or its
                services without making it very clear to you exactly what you’re paying for.
              </p>

              <p class="text-xl text-gray-600 dark:text-gray-400 pb-4">
                The Alpha Squeeze app stores and processes personal data that you have provided to us,
                in order to provide our Service. It’s your responsibility to keep your phone and access
                to the app secure. We therefore recommend that you do not jailbreak or root your phone,
                which is the process of removing software restrictions and limitations imposed by the
                official operating system of your device. It could make your phone vulnerable to
                malware/viruses/malicious programs, compromise your phone’s security features and
                it could mean that the Alpha Squeeze app won’t work properly or at all.
              </p>

              <p class="text-xl text-gray-600 dark:text-gray-400 pb-4">
                The app does use third party services that declare their own Terms and Conditions.
                See <a target="_blank" href="https://developer.yahoo.com/flurry/legal-privacy/terms-service/flurry-analytics-terms-service.html#:~:text=You%20will%20not%20(and%20will,source%20as%20part%20of%20your" class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out">Flurry's TOS</a>.
              </p>

              <p class="text-xl text-gray-600 dark:text-gray-400 pb-4">
                You should be aware that there are certain things that Spare Lemons will not take responsibility for.
                Certain functions of the app will require the app to have an active internet connection.
                The connection can be Wi-Fi, or provided by your mobile network provider, but Spare Lemons
                cannot take responsibility for the app not working at full functionality if you don’t have
                access to Wi-Fi, and you don’t have any of your data allowance left.
              </p>

              <p class="text-xl text-gray-600 dark:text-gray-400 pb-4">
                If you’re using the app outside of an area with Wi-Fi, you should remember that your terms of the
                agreement with your mobile network provider will still apply. As a result, you may be charged
                by your mobile provider for the cost of data for the duration of the connection while accessing
                the app, or other third party charges. In using the app, you’re accepting responsibility for
                any such charges, including roaming data charges if you use the app outside of your home territory
                (i.e. region or country) without turning off data roaming. If you are not the bill payer for the
                device on which you’re using the app, please be aware that we assume that you have received
                permission from the bill payer for using the app.
              </p>

              <p class="text-xl text-gray-600 dark:text-gray-400 pb-4">
                Along the same lines, Spare Lemons cannot always take responsibility for the way you use the app
                i.e. You need to make sure that your device stays charged – if it runs out of battery and you
                can’t turn it on to avail the Service, Spare Lemons cannot accept responsibility.
              </p>

              <p class="text-xl text-gray-600 dark:text-gray-400 pb-4">
                With respect to Spare Lemons’s responsibility for your use of the app, when you’re using the
                app, it’s important to bear in mind that although we endeavour to ensure that it is updated
                and correct at all times, we do rely on third parties to provide information to us so that we
                can make it available to you. Spare Lemons accepts no liability for any loss, direct or indirect,
                you experience as a result of relying wholly on this functionality of the app.
              </p>

              <p class="text-xl text-gray-600 dark:text-gray-400 pb-4">
                At some point, we may wish to update the app. The app is currently available on iOS – and you’ll
                need to download the updates if you want to keep using the app. Spare Lemons does not promise
                that it will always update the app so that it is
                relevant to you and/or works with the iOS version that you have installed on your device.
                However, you promise to always accept updates to the application when offered to you. We may
                also wish to stop providing the app, and may terminate use of it at any time without giving
                notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the
                rights and licenses granted to you in these terms will end; (b) you must stop using the app,
                and (if needed) delete it from your device.
              </p>

            </div>

            <div class="max-w-3xl pt-8 md:pt-6" data-aos="fade-down">
              <h4 class="h4">Changes to This Terms and Conditions</h4>
              <p class="text-xl text-gray-600 dark:text-gray-400 pb-4">
                We may update our Terms and Conditions from time to time. Thus, you are advised to review this
                page periodically for any changes. We will notify you of any changes by posting the new Terms
                and Conditions on this page. These terms and conditions are effective as of <b>2020-12-26</b>.
              </p>
            </div>

            <div class="max-w-3xl pt-8 md:pt-6" data-aos="fade-down">
              <h4 class="h4">Contact Us</h4>
              <p class="text-xl text-gray-600 dark:text-gray-400 pb-4">
                If you have any questions or suggestions about our Terms and Conditions, do not hesitate
                to contact us at <a :href="composeAddy()" target="_blank" class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out">{{ composeLabel() }}</a>.
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
import HeroTerms from "./../partials/HeroTerms.vue";
import Footer from './../partials/Footer.vue'

export default {
  name: 'Terms',
  created () {
    document.title = "Terms";
  },
  components: {
    Header,
    PageIllustration,
    HeroTerms,
    Footer,
  },
  methods: {
    composeTo() {
      return "ma".concat("il", "to:");
    },
    composeLabel() {
      const part1 = "pr".concat(String.fromCharCode(100 + 5), "va", String.fromCharCode(90 + 9), String.fromCharCode(120 + 1));
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
};
</script>
