<template>
  <div class="parallax">
    <v-custom-app-bar :inverted-scroll="false"></v-custom-app-bar>
    <v-container class="">
      <v-card
        tile
        flat
        :class="isMobile ? ' py-6' : 'py-6 my-8'"
        color="transparent"
      >
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
              style="font-size: 22px !important; word-break: break-word"
            >
              {{ selectedVehicle.name }}
            </v-card-title>
            <v-card-text class="body-1">
              <v-row>
                <v-col class="ma-0 pa-3">
                  <v-chip
                    outlined
                    label
                    v-for="feature in selectedVehicle.features"
                    :key="feature"
                    class="mr-1 mb-1"
                    >{{ feature }}</v-chip
                  >
                </v-col>
              </v-row>
              <v-row v-if="selectedVehicle.extras?.length > 0">
                <v-col class="mt-8 mb-4">
                  <v-card-subtitle
                    class="mx-0 px-0 pb-6 font-weight-normal"
                    style="font-size: 24px !important; word-break: break-word"
                  >
                    Extras
                  </v-card-subtitle>
                  {{ selectedVehicle.extras }}
                </v-col>
              </v-row>
              <v-row>
                <v-col class="my-0">
                  <v-card-subtitle
                    class="mx-0 px-0 pb-6 font-weight-normal"
                    style="font-size: 24px !important; word-break: break-word"
                  >
                    Reserve
                  </v-card-subtitle>
                  <v-row>
                    <v-col cols="12">
                      <v-btn
                        tile
                        class="my-1 white--text blue darken-2"
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
              class="px-4 mb-2 font-weight-normal grey--text text--darken-2"
              style="
                font-size: 26px !important;
                font-weight: 300 !important;
                word-break: break-word;
              "
            >
              {{ selectedVehicle.name }} Overview
            </v-card-title>
            <v-card-text
              class="body-1 px-4 px-0"
              style="word-break: break-word; white-space: pre-line"
            >
              {{ selectedVehicle.overview }}
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
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
  name: "VehicleView",
  metaInfo: {
    title: "Dyce Rentals - Vehicle - Las Vegas Car Rentals",
    meta: [
      {
        name: "rentals",
        content: "",
      },
    ],
    link: [{ rel: "icon", href: "../assets/logos/icons8-dice-90.png" }],
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
