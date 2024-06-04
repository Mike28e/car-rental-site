<template>
  <div>
    <v-custom-app-bar :inverted-scroll="false"></v-custom-app-bar>
    <v-container>
      <v-card tile flat :class="isMobile ? 'py-6' : 'mt-12 pt-12 pb-6'">
        <v-card-title
          class=""
          style="
            font-size: 42px !important;
            font-weight: 300 !important;
            line-height: 1.2em;
          "
        >
          Frequently Asked Questions
        </v-card-title>
        <v-divider class="my-6"></v-divider>
        <v-row class="mb-8 pb-8">
          <v-col cols="0" md="3"></v-col>
          <v-col cols="12" md="9">
            <v-expansion-panels tile accordion>
              <v-expansion-panel
                class="py-2"
                v-for="faq in faqs"
                :key="faq.title"
              >
                <v-expansion-panel-header
                  class=""
                  style="
                    font-size: 20px !important;
                    font-weight: 350 !important;
                  "
                  >{{ faq.title }}</v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  {{ faq.content }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
        <v-row class="mt-8 pt-8" height="auto">
          <v-col cols="12" md="6">
            <v-skeleton-loader type="image">
              <v-img
                height="300px"
                :src="require('../assets/decor/pexels-rpnickson-3200057.jpg')"
              ></v-img>
            </v-skeleton-loader>
          </v-col>
          <v-col cols="12" md="3">
            <v-skeleton-loader type="image">
              <v-img
                height="300px"
                :src="
                  require('../assets/decor/pexels-autorecords-10394786.jpg')
                "
              ></v-img>
            </v-skeleton-loader>
          </v-col>
          <v-col cols="12" md="3">
            <v-skeleton-loader type="image">
              <v-img
                height="300px"
                :src="require('../assets/decor/pexels-jibarofoto-3689527.jpg')"
              ></v-img>
            </v-skeleton-loader>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import vCustomAppBar from "../components/AppBar.vue";
export default {
  name: "FAQView",
  metaInfo: {
    title: "Dyce Rentals - FAQ - Las Vegas Car Rentals",
    meta: [
      {
        name: "faq",
        content: "",
      },
    ],
    link: [{ rel: "icon", href: "../assets/icons8-dice-90.png" }],
    htmlAttrs: {
      lang: "en",
    },
  },
  components: {
    "v-custom-app-bar": vCustomAppBar,
  },
  mounted() {},
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.width < 960;
    },
  },
  data: () => ({
    faqs: [
      // {
      //   title: "Do you rent to international visitors?",
      //   content: "Yes, we welcome international visitors. To rent a car, you will need a valid driver's license from your home country and a passport. An International Driving Permit (IDP) may also be required.",
      // },
      {
        title: "How old do you have to be to rent a car?",
        content:
          "To rent a car, you must be at least 21 years old. Renters under the age of 25 may be subject to a young driver surcharge.",
      },
      {
        title: "Do you offer insurance?",
        content:
          "At the moment, we do not offer insurance. You must provide your own insurance.",
      },
      {
        title: "What is your cancellation policy?",
        content:
          "Our cancellation policy allows you to cancel your reservation up to 72 hours before the scheduled pick-up time without any penalty. Cancellations made within 72 hours of the pick-up time may incur a fee.",
      },
      {
        title: "How many miles can I drive?",
        content:
          "We offer limited mileage options. Based on the option you choose, you will have a set number of miles included, and additional miles will incur a fee.",
      },
      {
        title: "Can I drive out of state?",
        content:
          "Yes, you can drive our rental cars out of state. However, please inform us in advance if you plan to do so, as there may be additional requirements or restrictions depending on your destination.",
      },
      {
        title: "Do you charge a security deposit?",
        content:
          "Yes, a security deposit is required at the time of rental. The amount varies depending on the type of vehicle and the rental duration. The deposit will be refunded upon return of the vehicle, provided it is in the same condition as when it was rented.",
      },
      {
        title: "Is there a smoking fee?",
        content:
          "Yes, all our vehicles are non-smoking. If a vehicle is returned with evidence of smoking, a cleaning fee will be charged to remove odors and stains.",
      },
      {
        title: "What documents do I need to rent a car?",
        content:
          "You will need a valid driver's license and a credit or debit card. International visitors may also need an International Driving Permit (IDP).",
      },
      {
        title: "Can I add an additional driver?",
        content:
          "Yes, you can add additional drivers to your rental agreement. All additional drivers must meet the same age and license requirements as the primary driver, and there may be an additional fee.",
      },
    ],
  }),
  watch: {
    $route: {
      handler: function () {
        window.scrollTo(0, 0);
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    scrollTo(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
