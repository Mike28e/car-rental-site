<template>
  <v-app-bar
    app
    dark
    :inverted-scroll="invertedScroll"
    :color="color"
    :hide-on-scroll="!invertedScroll"
  >
    <v-toolbar-title
      class="text-overline"
      style="white-space: nowrap; overflow: visible"
    >
      Las Vegas Hellcats
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
      </template>
    </span>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    invertedScroll: { type: Boolean },
    color: { type: String },
  },
  data() {
    return {
      menuItems: [
        { title: "About Us", id: "#about" },
        { title: "Rentals", id: "#rentals" },
        { title: "Testimonials", id: "#testimonials" },
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
