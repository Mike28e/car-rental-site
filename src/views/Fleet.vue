<template>
  <div>
    <v-custom-app-bar
      :inverted-scroll="false"
      color="transparent"
    ></v-custom-app-bar>

    <v-container>
      <v-card> <v-card-title>Testing</v-card-title></v-card>
    </v-container>
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
        name: "description",
        content:
          "Discover the thrill of the Las Vegas strip in style with Dyce Rentals. Cruise the city in luxury or explore the desert in comfort. Book now and experience Las Vegas like never before!",
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
  computed: {},
  data: () => ({
    vehicles: vehicleData,
  }),
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
