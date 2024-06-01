<template>
  <div>
    <v-custom-app-bar :inverted-scroll="false"></v-custom-app-bar>

    <v-card tile flat :class="isMobile ? 'mx-1 px-0 py-6' : 'mx-8 px-8 py-6'">
      <v-row>
        <v-col cols="12" md="7">
          <v-skeleton-loader class="mx-auto" type="card, image">
            <v-row>
              <v-col cols="12">
                <v-img
                  class="cursor-pointer"
                  :src="selectedVehicle.images[0]"
                  v-on:click="openGallery(0)"
                ></v-img>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col
                cols="4"
                v-for="(image, idx) in selectedVehicle.images.slice(1, 7)"
                :key="idx"
              >
                <v-img
                  class="cursor-pointer"
                  :src="image"
                  v-on:click="openGallery(idx + 1)"
                ></v-img>
              </v-col>
            </v-row>
          </v-skeleton-loader>
        </v-col>
        <v-col cols="12" md="5">
          <v-card-title
            class="text-overline"
            style="font-size: 22px !important"
          >
            {{ selectedVehicle.name }}
          </v-card-title>
          <v-card-text class="body-1">
            <v-row>
              <v-col class="ma-3 pa-0">
                <v-chip
                  outlined
                  label
                  v-for="feature in selectedVehicle.features"
                  :key="feature"
                  class="mr-1"
                  >{{ feature }}</v-chip
                >
              </v-col>
            </v-row>
            <v-row>
              <v-col class="my-8">
                <v-card-subtitle
                  class="mx-0 px-0 pb-6 font-weight-normal"
                  style="font-size: 24px !important"
                >
                  Extras
                </v-card-subtitle>
                {{ selectedVehicle.extras }}
              </v-col>
            </v-row>
            <v-row>
              <v-col class="my-6">
                <v-card-subtitle
                  class="mx-0 px-0 pb-6 font-weight-normal blue--text text--darken-2"
                  style="font-size: 24px !important"
                >
                  Reserve
                </v-card-subtitle>
                <v-row>
                  <v-col cols="12">
                    <v-btn
                      tile
                      class="my-1 white blue-grey--text text--darken-2"
                      :href="selectedVehicle.turoUrl"
                      target="_blank"
                      >Book on Turo</v-btn
                    >
                    <v-divider class="mt-4"></v-divider>
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      tile
                      class="my-1 mr-2 py-4 white blue-grey--text text--darken-2"
                      href=""
                      target="_blank"
                      :disabled="true"
                      >Book Direct</v-btn
                    >
                    (Coming Soon)
                    <v-divider class="mt-4"></v-divider>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card-title
            class="mx-3 px-0 mb-2 font-weight-normal grey--text text--darken-2"
            style="font-size: 26px !important; font-weight: 300 !important"
          >
            {{ selectedVehicle.name }} Overview
          </v-card-title>
          <v-card-text class="body-1 mx-3 px-0">
            {{ selectedVehicle.overview }}
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
    <v-vehicle-gallery-dialog
      v-model="vehicleGalleryDialog"
      :title="vehicleGalleryTitle"
      :images="vehicleGalleryImages"
      :startIndex="vehicleGalleryIndex"
    ></v-vehicle-gallery-dialog>
  </div>
</template>

<script>
import vCustomAppBar from "../components/AppBar.vue";
import vehicleData from "../data/vehicles.js";
import vVehicleGalleryDialog from "../components/VehicleGalleryDialog.vue";
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
    "v-vehicle-gallery-dialog": vVehicleGalleryDialog,
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
    vehicleGalleryDialog: false,
    vehicleGalleryTitle: null,
    vehicleGalleryImages: [],
    vehicleGalleryIndex: 0,
  }),
  watch: {
    "$route.params.id": {
      handler: function (id) {
        this.vehicleId = id;
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
    openVehicleDialog(selectedVehicleId) {
      this.bookSelectedVehicleId = selectedVehicleId;
      this.bookDialog = true;
    },

    getVehicle(id) {
      return id != null ? this.vehicles.find((v) => v.id == id) : null;
    },
    openGallery(idx) {
      this.vehicleGalleryImages = this.selectedVehicle.images;
      this.vehicleGalleryIndex = idx;
      this.vehicleGalleryDialog = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
