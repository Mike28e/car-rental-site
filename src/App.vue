<template>
  <v-app>
    <v-custom-app-bar :inverted-scroll="true" color=""></v-custom-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-footer class="d-flex flex-column" dark color="#36454F">
      <div class="d-flex w-100 align-center px-4">
        <strong class="pr-8">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

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
      </div>

      <div class="px-4 py-2 bg-black text-center w-100">
        ©{{ new Date().getFullYear() }} — <strong>Dyce Rentals</strong>
      </div>
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

  data() {
    return {
      menuItems: [
        { title: "Rentals" },
        { title: "About Us" },
        { title: "Testimonials" },
        { title: "Contact" },
      ],
      socials: socialData,
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.width < 960;
    },
  },
};
</script>
