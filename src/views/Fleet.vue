<template>
  <div>
    <v-custom-app-bar
      :inverted-scroll="false"
      color="transparent"
    ></v-custom-app-bar>

    <v-card tile flat :class="isMobile ? 'mx-0 px-0' : 'mx-12 px-12'">
      <v-card-text :class="isMobile ? 'mx-0 px-0' : ''">
        <v-carousel
          height="auto"
          next-icon="mdi-chevron-right"
          :hide-delimiters="isMobile"
        >
          <v-carousel-item
            v-for="(src, i) in selectedVehicle.images"
            :key="i"
            eager
          >
            <v-img :src="src" eager contain></v-img>
          </v-carousel-item>
        </v-carousel>
      </v-card-text>
      <v-card-title
        class="text-overline justify-center text-center"
        style="font-size: 18px !important"
      >
        {{ selectedVehicle.name }}
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
import vCustomAppBar from "../components/AppBar.vue";
import vehicleData from "../data/vehicles.js";
export default {
  name: "FleetView",
  metaInfo: {
    title: "Dyce Rentals - Fleet - Las Vegas Car Rentals",
    meta: [
      {
        name: "fleet",
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
    selectedVehicle() {
      return this.vehicles.find((v) => v.id == this.vehicleId);
    },
  },
  data: () => ({
    vehicles: vehicleData,
    vehicleId: null,
  }),
  watch: {
    "$route.params.id": {
      handler: function (id) {
        this.vehicleId = id;
      },
      deep: true,
      immediate: true,
    },
    //   (() => route.params.id, (newId, oldId) => {
    //   // react to route changes...
    // })
  },
  methods: {
    scrollTo(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    },
    openVehicleDialog(selectedVehicleId) {
      this.bookSelectedVehicleId = selectedVehicleId;
      this.bookDialog = true;
    },

    getVehicle(id) {
      return id != null ? this.vehicles.find((v) => v.id == id) : null;
    },
  },
};
</script>

<style lang="scss" scoped></style>
