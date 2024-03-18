<template>
  <v-app-bar
    app
    :inverted-scroll="invertedScroll"
    :color="color"
    :hide-on-scroll="!invertedScroll"
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
        <v-btn text class="subtitle-1" @click="scrollTo('#home')">
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

            <v-list>
              <v-list-item
                v-for="item in menuItems"
                :key="item.title"
                @click="scrollTo(item.id)"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>

        <template v-else>
          <!-- Show buttons for larger screens -->
          <v-btn
            v-for="item in menuItems"
            :key="item.title"
            text
            class="subtitle-1"
            @click="scrollTo(item.id)"
          >
            <span class="mr-2">{{ item.title }}</span>
          </v-btn>
          <v-btn
            icon
            small
            class="mx-1"
            href="https://www.instagram.com/dycerentals"
            target="_blank"
            ><v-icon>mdi-instagram</v-icon></v-btn
          >
          <v-btn
            icon
            small
            class="mx-1"
            href="https://www.twitter.com/dycerentals"
            target="_blank"
            ><v-icon>mdi-twitter</v-icon></v-btn
          >
          <v-btn
            icon
            small
            class="mx-1"
            href="https://www.facebook.com/people/Dyce-Rentals/61557322134299/"
            target="_blank"
            ><v-icon>mdi-facebook</v-icon></v-btn
          >
          <v-btn icon small class="mx-1" href="mailto:DyceRentals@gmail.com"
            ><v-icon>mdi-email-outline</v-icon></v-btn
          >
        </template>
      </span>
    </v-container>
  </v-app-bar>
</template>

<style lang="scss" scoped>
@media only screen and (max-width: 480px) {
  .container {
    max-width: 480px;
  }
}

/* Small devices (portrait tablets and large phones, 481px to 768px) */
@media only screen and (min-width: 481px) and (max-width: 768px) {
  .container {
    max-width: 768px;
  }
}

/* Medium devices (landscape tablets, 769px to 1024px) */
@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

/* Large devices (desktops, 1025px and up) */
@media only screen and (min-width: 1025px) and (max-width: 1200px) {
  .container {
    max-width: 1200px;
  }
}

@media only screen and (min-width: 1201px) {
  .container {
    max-width: 1201px;
  }
}
</style>

<script>
export default {
  components: {},
  props: {
    invertedScroll: { type: Boolean },
    color: { type: String },
  },
  data() {
    return {
      menuItems: [
        // { title: "About Us", id: "#about" },
        { title: "Rentals", id: "#rentals" },
        // { title: "Testimonials", id: "#testimonials" },
        { title: "Contact", id: "#contact" },
      ],
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
