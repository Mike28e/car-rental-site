<template>
  <v-app>
    <v-custom-app-bar
      :inverted-scroll="true"
      color=""
      :isHome="isHome"
      :isMainApp="true"
    ></v-custom-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-footer class="d-flex justify-center" dark color="#36454F">
      <v-card tile flat color="transparent">
        <template v-if="!isMobile">
          <v-row>
            <v-col class="px-2 pt-4 pb-0" cols="6">
              <strong class=""
                >Get connected with us on social networks!</strong
              >
            </v-col>
            <v-col class="px-2 pt-4 pb-0 d-flex justify-center" cols="6">
              <v-btn
                v-for="social in socials"
                :key="social.name"
                icon
                small
                class="mx-4"
                :href="social.link"
                target="_blank"
                ><v-icon>{{ social.icon }}</v-icon></v-btn
              >
              <v-btn icon small class="mx-4" href="mailto:DyceRentals@gmail.com"
                ><v-icon>mdi-email-outline</v-icon></v-btn
              >
            </v-col>
          </v-row>
        </template>
        <template v-else>
          <v-row>
            <v-col class="px-4 pt-4 pb-2 d-flex justify-center">
              <strong class=""
                >Get connected with us on social networks!</strong
              >
            </v-col>
          </v-row>
          <v-row>
            <v-col class="px-4 pt-1 d-flex justify-center">
              <v-btn
                v-for="social in socials"
                :key="social.name"
                icon
                small
                class="mx-4"
                :href="social.link"
                target="_blank"
                ><v-icon>{{ social.icon }}</v-icon></v-btn
              >
              <v-btn icon small class="mx-4" href="mailto:DyceRentals@gmail.com"
                ><v-icon>mdi-email-outline</v-icon></v-btn
              >
            </v-col>
          </v-row>
        </template>
        <v-row>
          <v-col class="px-4" cols="12">
            <div class="px-4 py-2 bg-black text-center w-100">
              ©{{ new Date().getFullYear() }} — <strong>Dyce Rentals</strong>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import vCustomAppBar from "./components/AppBar.vue";
// import Home from "./views/Home";
import socialData from "./data/socials.js";

export default {
  name: "App",

  components: {
    "v-custom-app-bar": vCustomAppBar,
    // Home,
  },
  watch: {
    "$route.name": {
      handler: function (name) {
        if (name == "home") this.isHome = true;
      },
      deep: true,
      immediate: true,
    },
  },

  data() {
    return {
      menuItems: [
        { title: "Rentals" },
        { title: "About Us" },
        { title: "Testimonials" },
        { title: "Contact" },
      ],
      socials: socialData,
      isHome: true,
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.width < 960;
    },
  },
};
</script>
