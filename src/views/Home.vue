<template>
  <div>
    <v-img
      class="bg-white mt-n16"
      src="../assets/mainbg2.jpg"
      cover
      aspect-ratio=""
      height="100%"
      max-height="700px"
    >
      <v-custom-app-bar
        :inverted-scroll="false"
        color="transparent"
        :isHome="true"
      ></v-custom-app-bar>
      <v-container id="#home">
        <v-row>
          <v-col>
            <v-sheet
              class="d-flex align-end"
              min-height="200px"
              color="transparent"
              elevation="0"
            >
              <v-card-title
                class="display-2 font-weight-thin pb-0 px-0 hide-on-phone"
                style="line-height: 1.2; word-break: break-word"
              >
                Looking to Rent a Car?
                <!-- <br />Send a Request -->
              </v-card-title>
            </v-sheet>
            <!-- <v-sheet color="transparent" elevation="0">
              <v-card-subtitle
                class="display-2 text-subtitle-2 grey--text text--lighten-2 px-0"
              >
                Complete the form below and we'll contact you as soon as
                possible
              </v-card-subtitle>
            </v-sheet> -->
          </v-col>
        </v-row>
        <v-row
          ><v-col
            class="d-flex justify-center justify-sm-center justify-md-start justify-lg-start"
          >
            <v-btn
              large
              class="my-4 mr-8 blue-grey--text text--darken-2"
              color=""
              @click="openVehicleDialog(null)"
              >Book Now</v-btn
            >
            <v-btn
              large
              class="my-4 blue-grey--text text--darken-2"
              @click="scrollTo('#contact')"
              >Contact Us</v-btn
            >
          </v-col>
        </v-row>

        <!-- <v-row>
          <v-col sm="2" cols="12">
            <v-text-field
              label="Choose Location"
              persistent-hint
            ></v-text-field>
          </v-col>
          <v-col sm="2" cols="12">
            <v-text-field label="Pick-up Date" persistent-hint></v-text-field>
          </v-col>
          <v-col sm="2" cols="12">
            <v-text-field label="Pick-up Time" persistent-hint></v-text-field>
          </v-col>
          <v-col sm="2" cols="12">
            <v-text-field label="Drop-off Date" persistent-hint></v-text-field>
          </v-col>
          <v-col sm="2" cols="12">
            <v-btn large outlined><v-icon>mdi-plus</v-icon>Send</v-btn>
          </v-col>
        </v-row> -->
      </v-container>
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
              <v-hover>
                <v-card
                  flat
                  slot-scope="{ hover }"
                  :elevation="hover ? 12 : 0"
                  style="
                    border-bottom-right-radius: 0px;
                    border-bottom-left-radius: 0px;
                  "
                >
                  <v-img
                    class="cursor-pointer"
                    dark
                    :src="car.image"
                    :aspect-ratio="16 / 9"
                    v-on:click="openVehicleGalleryDialog(car.id)"
                  ></v-img>
                </v-card>
              </v-hover>

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
                  to="/fleet"
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
        src="../assets/banner2.jpg"
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
            <v-sheet elevation="0" color="transparent" class="pb-6">
              <v-row>
                <v-col
                  v-for="hotspot in vegasHotSpots"
                  :key="hotspot.name"
                  class="d-flex child-flex justify-center align-center"
                  cols="12"
                  md="6"
                  sm="12"
                >
                  <v-card
                    class=""
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
    link: [{ rel: "icon", href: "../assets/icons8-dice-90.png" }],
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
  computed: {
    // googleUrl() {
    //   return `https://www.google.com/maps/embed/v1/search?q=lanier%20luxury%20rentals&key=${process.env.VUE_APP_KEY}&center=36.107375,-115.174747&zoom=17`;
    // },
  },
  data: () => ({
    bookDialog: false,
    bookSelectedVehicleId: null,
    vehicleGalleryDialog: false,
    vehicleGalleryTitle: null,
    vehicleGalleryImages: [],
    vehicles: vehicleData,
    vegasHotSpots: hotspotData,
    socials: socialData,
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
  },
};
</script>

<style lang="scss" scoped>
.parallax {
  /* The image used */
  background-image: url("https://images.unsplash.com/photo-1619252584172-a83a949b6efd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

  /* Set a specific height */
  min-height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.background1 {
  /* The image used */
  background-image: url("../assets/pexels-pixabay-3.jpg");

  /* Set a specific height */
  min-height: 500px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
