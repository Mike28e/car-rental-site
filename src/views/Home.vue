<template>
  <div>
    <v-img
      max-height="700px"
      min-height="300px"
      src="../assets/backgrounds/mainbg2.jpg"
      class="bg-white mt-n16"
      width="100%"
    >
      <v-overlay
        absolute
        opacity="0.15"
        class="child-flex align-start pt-16"
        style=""
      >
        <v-custom-app-bar
          :inverted-scroll="false"
          color="rgb(255, 255, 255, 0.1)"
          textColor="black"
          :isHome="true"
        ></v-custom-app-bar>
        <v-card flat tile color="transparent" class="pt-16 pb-16">
          <v-container class="tight">
            <v-row id="#home">
              <v-col class="d-flex justify-end">
                <v-card
                  tile
                  flat
                  color="rgb(255, 255, 255, 0.0)"
                  class="px-4 py-2"
                >
                  <v-card-title
                    class="pb-0 px-0 hide-on-phone white--text display-2 text-right overline"
                    style="
                      font-size: 2.5em !important;
                      line-height: 1.2 !important;
                      word-break: break-word;
                      font-weight: 250 !important;
                      text-shadow: 1px 1px 2px black;
                    "
                  >
                    Luxury & Economy <br />Car Rentals
                    <!-- <br />Send a Request -->
                  </v-card-title>
                </v-card>
              </v-col>
            </v-row>
            <v-row
              ><v-col
                :class="
                  isMobile ? 'd-flex justify-center' : 'd-flex justify-end'
                "
              >
                <v-btn
                  large
                  tile
                  class="my-4 mr-8 blue-grey--text text--darken-2"
                  color="white"
                  @click="openVehicleDialog(null)"
                  >Book Now</v-btn
                >
                <v-btn
                  large
                  tile
                  class="my-4 blue-grey--text text--darken-2"
                  color="white"
                  @click="scrollTo('#contact')"
                  >Contact Us</v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-overlay>
    </v-img>

    <v-sheet height="100%" color="#37474F" id="#rentals" class="py-6 parallax">
      <v-container>
        <v-row>
          <v-col cols="12" sm="9">
            <v-card
              elevation="0"
              class="fadeIn"
              color="transparent"
              dark
              v-scrollanimation
            >
              <v-card-text class="display-1 black--text font-weight-thin">
                Las Vegas Fleet
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="my-4">
          <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="(car, idx) in vehicles"
            :key="idx"
          >
            <v-card
              color="transparent"
              class="mt-2 darken-2 slideFromBottom"
              v-scrollanimation
            >
              <v-card
                flat
                style="
                  border-bottom-right-radius: 0px;
                  border-bottom-left-radius: 0px;
                "
              >
                <router-link :to="getVehiclePageUrl(car.id)">
                  <v-img
                    class="cursor-pointer"
                    dark
                    :src="car.image"
                    :aspect-ratio="16 / 9"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-3"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </router-link>
              </v-card>

              <v-card-title
                class="text-overline pb-0 mb-0"
                style="word-break: break-word"
                >{{ car.name }}
              </v-card-title>
              <!-- <v-card-text class="text-center justify-center">
                Horsepower: 707 hp
                <br />Torque: 650 lb-ft <br />0-60 mph: 3.9 seconds <br />1/4
                Mile: 11.9 @ 124 mph <br />Top Speed: 199 mph <br />Weight:
                4,469lbs
              </v-card-text> -->
              <v-card-actions class="">
                <!-- <v-card-text class="pa-0 ma-0 pl-2 body-1"
                  ><strong class=""
                    >${{ car.price }} / per day</strong
                  ></v-card-text
                > -->

                <v-btn
                  text
                  prepend-icon="mdi-plus"
                  color="grey darken-2"
                  :to="getVehiclePageUrl(car.id)"
                  >Details</v-btn
                >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  prepend-icon="mdi-plus"
                  color="blue darken-2"
                  @click="openVehicleDialog(car.id)"
                  >Reserve</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet height="100%" class="pa-0 ma-0" color="#37474F">
      <v-img
        class="pa-0 ma-0"
        src="../assets/banners/banner2.jpg"
        cover
        aspect-ratio="16/9"
        height="350px"
      ></v-img>
    </v-sheet>
    <v-sheet height="100%" class="parallax" color="#263238" id="#vegas">
      <v-container>
        <v-row>
          <v-col cols="12" sm="9">
            <v-card elevation="0" class="my-4" color="transparent" dark>
              <v-card-text class="display-2 black--text font-weight-thin">
                Explore what Las Vegas has to offer
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-sheet elevation="0" color="transparent" class="pb-4">
              <v-carousel
                v-model="hotspotModel"
                hide-delimiter-background
                class=""
                height="100%"
                max-height="600px"
              >
                <v-carousel-item
                  v-for="(hotspotSection, idx) in vegasHotSpotCatalog"
                  :key="idx"
                  class=""
                >
                  <v-row class="px-12">
                    <v-col
                      v-for="hotspot in hotspotSection"
                      :key="hotspot.name"
                      class="d-flex child-flex justify-center align-center"
                      cols="12"
                      md="6"
                      sm="12"
                    >
                      <v-card
                        class="mb-12"
                        style="background-color: transparent; overflow: hidden"
                        max-height="100%"
                        max-width="500px"
                      >
                        <v-img
                          :src="hotspot.image"
                          aspect-ratio="1"
                          class="grey lighten-2"
                          max-height="400px"
                          max-width="500px"
                        >
                          <template v-slot:placeholder>
                            <v-row
                              class="fill-height ma-0"
                              align="center"
                              justify="center"
                            >
                              <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                              ></v-progress-circular>
                            </v-row>
                          </template>
                        </v-img>
                        <v-card-title
                          class="text-overline pb-0 mb-0"
                          style="word-break: break-word"
                          >{{ hotspot.name }}
                        </v-card-title>
                        <v-card-text class="">
                          {{ hotspot.description }}
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-carousel-item>
              </v-carousel>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <!-- <v-sheet height="100%" class="pa-0 ma-0" color="#37474F">
      <v-img
        class="pa-0 ma-0"
        src="../assets/banner3.jpg"
        cover
        aspect-ratio="16/9"
        height="350px"
      ></v-img>
    </v-sheet>
    <v-sheet height="100%" class="parallax" color="#263238" id="#testimonials">
      <v-container>
        <v-row>
          <v-col cols="12" sm="9">
            <v-card elevation="0" class="my-4" color="transparent" dark>
              <v-card-text class="display-2 black--text font-weight-thin">
                We strive to meet the needs of our customers and we value their
                opinions about our work
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card elevation="0" color="transparent" dark class="pb-6">
              <div
                class="elfsight-app-bdcb97ff-5ae0-42a7-b273-8040da025db6"
                style="background: rgba(255, 255, 255, 0)"
              ></div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet> -->
    <v-sheet class="background1" color="#37474F" id="#contact">
      <v-container style="max-width: 100% !important">
        <v-row>
          <v-col cols="0" md="3" sm="2"></v-col>
          <v-col class="" cols="12" md="6" sm="8">
            <v-card
              class="ma-12"
              tile
              elevation="5"
              color="rgba(255,255,255,0.6)"
            >
              <v-card-text
                class="text-center text-h2 pt-12 black--text"
                style="
                  font-size: 48px !important;
                  word-break: break-word;
                  line-height: normal;
                "
              >
                CONTACT US
              </v-card-text>
              <v-card-text
                class="text-center pt-8 pb-4 font-weight-medium black--text"
                style="font-size: 16px !important"
              >
                <!-- +1 (248) 457-5226<br /> -->
                DyceRentals@gmail.com
              </v-card-text>
              <v-card-text
                class="text-center pb-8 font-weight-medium black--text"
              >
                <v-btn
                  v-for="social in socials"
                  :key="social.name"
                  icon
                  x-large
                  color="black"
                  :href="social.link"
                  target="_blank"
                  ><v-icon>{{ social.icon }}</v-icon></v-btn
                >
                <v-btn
                  icon
                  x-large
                  color="black"
                  href="mailto:DyceRentals@gmail.com"
                  ><v-icon>mdi-email-outline</v-icon></v-btn
                >
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="0" md="3" sm="2"></v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-booking-dialog
      v-model="bookDialog"
      :selectedVehicleId="bookSelectedVehicleId"
    ></v-booking-dialog>
    <v-vehicle-gallery-dialog
      v-model="vehicleGalleryDialog"
      :title="vehicleGalleryTitle"
      :images="vehicleGalleryImages"
    ></v-vehicle-gallery-dialog>
  </div>
</template>

<script>
import vCustomAppBar from "../components/AppBar.vue";
import vBookingDialog from "../components/BookingDialog.vue";
import vVehicleGalleryDialog from "../components/VehicleGalleryDialog.vue";
import vehicleData from "../data/vehicles.js";
import hotspotData from "../data/hotspots.js";
import socialData from "../data/socials.js";
export default {
  name: "MainView",
  metaInfo: {
    title: "Dyce Rentals - Las Vegas Car Rentals",
    meta: [
      {
        name: "description",
        content:
          "Discover the thrill of the Las Vegas strip in style with Dyce Rentals. Cruise the city in luxury or explore the desert in comfort. Book now and experience Las Vegas like never before!",
      },
    ],
    link: [{ rel: "icon", href: "../assets/logos/icons8-dice-90.png" }],
    htmlAttrs: {
      lang: "en",
    },
  },
  components: {
    "v-custom-app-bar": vCustomAppBar,
    "v-booking-dialog": vBookingDialog,
    "v-vehicle-gallery-dialog": vVehicleGalleryDialog,
  },
  mounted() {
    if (this.$router.currentRoute["hash"]) {
      this.scrollTo(this.$router.currentRoute["hash"]);
    }

    // if (this.$router.currentRoute["hash"]) {
    //   Vue.use(VueScrollTo);
    //   VueScrollTo.scrollTo(this.$router.currentRoute["hash"], 500);
    // }
    // let elfsightScript = document.createElement("script");
    // elfsightScript.setAttribute(
    //   "src",
    //   "https://apps.elfsight.com/p/platform.js"
    // );
    // document.head.appendChild(elfsightScript);
  },
  watch: {
    "$route.hash": {
      handler: function (hash) {
        if (hash != null) this.scrollTo(hash);
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    // googleUrl() {
    //   return `https://www.google.com/maps/embed/v1/search?q=lanier%20luxury%20rentals&key=${process.env.VUE_APP_KEY}&center=36.107375,-115.174747&zoom=17`;
    // },
    isMobile() {
      return this.$vuetify.breakpoint.width < 769;
    },
    vegasHotSpotCatalog() {
      const result = [];
      const size = this.isMobile ? 1 : 2;
      this.vegasHotSpots.forEach((_, i) => {
        if (i % size === 0) result.push(this.vegasHotSpots.slice(i, i + size));
      });
      return result;
    },
  },
  data: () => ({
    bookDialog: false,
    bookSelectedVehicleId: null,
    vehicleGalleryDialog: false,
    vehicleGalleryTitle: null,
    vehicleGalleryImages: [],
    vehicles: vehicleData,
    vegasHotSpots: hotspotData,
    hotspotModel: 0,
    socials: socialData,
  }),
  methods: {
    scrollTo(id) {
      if (document.getElementById(id)) {
        document.getElementById(id).scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }
    },
    openVehicleDialog(selectedVehicleId) {
      this.bookSelectedVehicleId = selectedVehicleId;
      this.bookDialog = true;
    },
    openVehicleGalleryDialog(selectedVehicleId) {
      var vehicle = this.getVehicle(selectedVehicleId);
      if (vehicle != null) {
        this.vehicleGalleryTitle = vehicle.name;
        this.vehicleGalleryImages = vehicle.images;
        this.vehicleGalleryDialog = true;
      }
    },
    getVehicle(id) {
      return id != null ? this.vehicles.find((v) => v.id == id) : null;
    },
    getVehiclePageUrl(id) {
      return `/rentals/vehicle/${id}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.background1 {
  /* The image used */
  background-image: url("../assets/backgrounds/pexels-pixabay-3.jpg");

  /* Set a specific height */
  min-height: 500px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
