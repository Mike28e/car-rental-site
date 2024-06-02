<template>
  <div>
    <v-custom-app-bar :inverted-scroll="false"></v-custom-app-bar>

    <v-card
      tile
      flat
      :class="isMobile ? 'mx-0 px-4 py-6' : 'mx-8 px-8 mt-12 pt-12 pb-6'"
    >
      <v-card-title
        class=""
        style="font-size: 42px !important; font-weight: 300 !important"
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
                style="font-size: 20px !important; font-weight: 350 !important"
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
              :src="require('../assets/decor/pexels-autorecords-10394786.jpg')"
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
      {
        title: "Do you rent to international visitors?",
        content: "Unavailable",
      },
      {
        title: "Do you offer insurance?",
        content: "Unavailable",
      },
      {
        title: "How old do you have to be to rent a car?",
        content: "Unavailable",
      },
      {
        title: "What is your cancellation policy?",
        content: "Unavailable",
      },
      {
        title: "How many miles can I drive?",
        content: "Unavailable",
      },
      {
        title: "Can I drive out of state?",
        content: "Unavailable",
      },
      {
        title: "Do you charge a security deposit?",
        content: "Unavailable",
      },
      {
        title: "Is there a smoking fee?",
        content: "Unavailable",
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
