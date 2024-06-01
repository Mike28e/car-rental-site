<template>
  <v-app-bar
    app
    :inverted-scroll="invertedScroll"
    :color="color"
    :hide-on-scroll="!invertedScroll && isMainApp && isHome"
  >
    <v-container class="d-flex justify-center">
      <v-img
        src="../assets/icons8-dice-30.png"
        max-width="28px"
        max-height="28px"
      ></v-img>
      <v-toolbar-title
        class="text-overline pl-1"
        style="
          white-space: nowrap;
          overflow: visible;
          font-size: 16px !important;
        "
        >Dyce Rentals
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <span>
        <v-btn
          v-if="isHome"
          text
          class="subtitle-1"
          @click="scrollTo('#home')"
          active-class=""
        >
          <span class="mr-2" align="center">Home</span>
        </v-btn>
        <v-btn v-else text class="subtitle-1" to="/" active-class="">
          <span class="mr-2" align="center">Home</span>
        </v-btn>
        <template v-if="isMobile">
          <!-- Show menu for mobile -->
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" text>
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </template>

            <v-list v-if="isHome">
              <v-list-item
                v-for="item in menuItems"
                :key="item.title"
                @click="scrollTo(item.id)"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-list v-else>
              <v-list-item
                v-for="item in menuItems"
                :key="item.title"
                :to="item.link"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>

        <template v-else>
          <!-- Show buttons for larger screens -->
          <template v-if="isHome">
            <v-btn
              v-for="item in menuItems"
              :key="item.title"
              text
              class="subtitle-1"
              @click="scrollTo(item.id)"
            >
              <span class="mr-2">{{ item.title }}</span>
            </v-btn>
          </template>
          <template v-else>
            <v-btn
              v-for="item in menuItems"
              :key="item.title"
              text
              :to="item.link"
              class="subtitle-1"
            >
              <span class="mr-2">{{ item.title }}</span>
            </v-btn>
          </template>
          <v-btn
            v-for="social in socials"
            :key="social.name"
            icon
            small
            class="mx-1"
            :href="social.link"
            target="_blank"
            ><v-icon>{{ social.icon }}</v-icon></v-btn
          >
          <v-btn icon small class="mx-1" href="mailto:DyceRentals@gmail.com"
            ><v-icon>mdi-email-outline</v-icon></v-btn
          >
        </template>
      </span>
    </v-container>
  </v-app-bar>
</template>

<style lang="scss" scoped></style>

<script>
import socialData from "../data/socials.js";
export default {
  components: {},
  props: {
    invertedScroll: { type: Boolean },
    color: { type: String },
    isHome: { type: Boolean },
    isMainApp: { type: Boolean },
  },
  data() {
    return {
      menuItems: [
        // { title: "About Us", id: "#about" },
        { title: "Rentals", id: "#rentals", link: "/#rentals" },
        // { title: "Testimonials", id: "#testimonials" },
        { title: "Contact", id: "#contact", link: "/#contact" },
      ],
      socials: socialData,
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.width < 960;
    },
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing,
      };
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
