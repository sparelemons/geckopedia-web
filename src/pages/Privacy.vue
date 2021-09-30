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
      <HeroPrivacy />
      <section class="relative">

        <div class="relative max-w-6xl mx-auto px-4 sm:px-6 pb-12">
          <div class="pt-4 pb-2 md:pt-3 md:pb-2">

            <div class="max-w-3xl" data-aos="fade-down">
              <p class="text-xl text-gray-600 dark:text-gray-400 pb-4">
                Spare Lemons built the Geckopedia app as a free app.
                This service is provided by Spare Lemons at no cost and is intended for use as is.
                This page is used to inform visitors regarding our policies with the collection, use, and
                disclosure of Personal Information if anyone decided to use our Service.
              </p>
              <p class="text-xl text-gray-600 dark:text-gray-400 pb-4">
                If you choose to use our Service, then you agree to the collection and use of information in
                relation to this policy. The Personal Information that we collect is used for providing and
                improving the Service. We will not use or share your information with anyone except as described
                in this Privacy Policy.
              </p>
              <p class="text-xl text-gray-600 dark:text-gray-400">
                The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions,
                which is accessible at Spare Lemons unless otherwise defined in this Privacy Policy.
              </p>
            </div>

            <div class="max-w-3xl pt-8 md:pt-6" data-aos="fade-down">
              <h4 class="h4">Information Collection and Use</h4>
              <p class="text-xl text-gray-600 dark:text-gray-400 pb-4">
                This app regularly collects information about how the app is being used via Flurry Analytics.
                This analytics service allows us to analyze how the app is used and how to improve it. Please see
                <a target="_blank" href="https://developer.yahoo.com/flurry/legal-privacy/terms-service/flurry-analytics-terms-service.html#:~:text=You%20will%20not%20(and%20will,source%20as%20part%20of%20your" class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out">Flurry's TOS for information on their privacy policies</a>.
              </p>
              <p class="text-xl text-gray-600 dark:text-gray-400 pb-4">
                Other than Flurry, we also may collect en email address via the feedback form inside the app. This
                address may be used to respond to comments or questions about the app. The email address is deleted
                after a year or until it's no longer needed, whichever comes first. It is <b>not</b>
                shared with any third party and is <b>not</b> used for promotional  emails.
              </p>
            </div>

            <div class="max-w-3xl pt-8 md:pt-6" data-aos="fade-down">
              <h4 class="h4">Log Data</h4>
              <p class="text-xl text-gray-600 dark:text-gray-400 pb-4">
                Whenever you use Geckopedia, the app creates and stores log data on your phone. This Log Data
                includes information about app usage (buttons being clicked, data being created, etc) and
                information related to errors, abnormal events, and other such data that may be useful during debugging.
                The log data <b>never</b> contains personally identifiable information.
              </p>
              <p class="text-xl text-gray-600 dark:text-gray-400 pb-4">Log data is <b>not</b> sent back to our servers.
                It's merely collected on the device and available for analysis by somebody with physical access
                to your device.
              </p>
            </div>

            <div class="max-w-3xl pt-8 md:pt-6" data-aos="fade-down">
              <h4 class="h4">Security</h4>
              <p class="text-xl text-gray-600 dark:text-gray-400 pb-4">
                We value your trust in providing us your Personal Information, thus we are striving to use
                commercially acceptable means of protecting it. But remember that no method of transmission over
                the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee
                its absolute security. Whenever possible, we use https to communicate between the app and
                servers on the internet.
              </p>
            </div>

            <div class="max-w-3xl pt-8 md:pt-6" data-aos="fade-down">
              <h4 class="h4">Links to Other Sites</h4>
              <p class="text-xl text-gray-600 dark:text-gray-400 pb-4">
                The Geckopedia website or app may contain links to other sites. If you click on a third-party
                link, you will be directed to that site. Note that these external sites are not operated by us.
                Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no
                control over and assume no responsibility for the content, privacy policies, or practices of
                any third-party sites or services.
              </p>
            </div>

            <div class="max-w-3xl pt-8 md:pt-6" data-aos="fade-down">
              <h4 class="h4">Children’s Privacy</h4>
              <p class="text-xl text-gray-600 dark:text-gray-400 pb-4">
                These Services do not address anyone under the age of 13. We do not knowingly collect
                personally identifiable information from children under 13. In the case we discover that a
                child under 13 has provided us with personal information, we immediately delete this from our
                servers. If you are a parent or guardian and you are aware that your child has provided us with
                personal information, please contact us so that we will be able to do necessary actions.
              </p>
            </div>

            <div class="max-w-3xl pt-8 md:pt-6" data-aos="fade-down">
              <h4 class="h4">Changes to This Privacy Policy</h4>
              <p class="text-xl text-gray-600 dark:text-gray-400 pb-4">
                We may update our Privacy Policy from time to time. Thus, you are advised to review this
                page periodically for any changes. We will notify you of any changes by posting the new
                Privacy Policy on this page. This policy is effective as of 2021-09-30.
              </p>
            </div>

            <div class="max-w-3xl pt-8 md:pt-6" data-aos="fade-down">
              <h4 class="h4">Changes to This Privacy Policy</h4>
              <p class="text-xl text-gray-600 dark:text-gray-400 pb-4">
                We may update our Privacy Policy from time to time. Thus, you are advised to review this
                page periodically for any changes. We will notify you of any changes by posting the new
                Privacy Policy on this page. This policy is effective as of 2021-09-30.
              </p>
            </div>

            <div class="max-w-3xl pt-8 md:pt-6" data-aos="fade-down">
              <h4 class="h4">Contact Us</h4>
              <p class="text-xl text-gray-600 dark:text-gray-400 pb-4">
                If you have any questions or suggestions about our Privacy Policy,
                do not hesitate to contact us at <a :href="composeAddy()" target="_blank" class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out">{{ composeLabel() }}</a>.
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
import HeroPrivacy from "./../partials/HeroPrivacy.vue";
import Footer from './../partials/Footer.vue'

export default {
  name: 'Privacy',
  created () {
    document.title = "Privacy Policy";
  },
  components: {
    Header,
    PageIllustration,
    HeroPrivacy,
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
