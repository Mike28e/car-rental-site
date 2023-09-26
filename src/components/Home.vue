<template>
  <div>
    <v-img
      class="bg-white mt-n16"
      dark
      src="../assets/hellcat_cover3.jpg"
      cover
      aspect-ratio="16/9"
      height="100%"
    >
      <v-custom-app-bar
        :inverted-scroll="false"
        color="transparent"
      ></v-custom-app-bar>
      <v-container id="#home">
        <v-row>
          <v-col>
            <v-sheet
              class="d-flex align-end"
              min-height="550px"
              color="transparent"
              elevation="0"
            >
              <v-card-title
                class="display-2 font-weight-light pb-0 px-0"
                style="line-height: 1.2; word-break: break-word"
              >
                Looking to Rent a Dodge Hellcat?
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
        <v-btn large outlined rounded class="my-4 mr-8">Book Online</v-btn>
        <v-btn large outlined rounded class="my-4">Contact Us</v-btn>

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
    <v-sheet height="100%" color="#263238" id="#about" class="py-8">
      <v-container>
        <v-row>
          <v-col>
            <v-card
              elevation="0"
              class="fadeIn"
              color="transparent"
              dark
              v-scrollanimation
            >
              <v-card-text
                class="display-2 white--text font-weight-thin"
                style="line-height: 1.1"
              >
                Experience the thrill of true American muscle in a Dodge Hellcat
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card
              elevation="0"
              class="fadeIn"
              color="transparent"
              dark
              v-scrollanimation
            >
              <v-card-text class="text-subtitle-1">
                Welcome to Las Vegas Hellcats, where you can immerse yourself in
                the exhilarating world of true American muscle. Get ready to
                unleash the raw power and commanding presence of a Dodge
                Hellcat, as you embark on an unforgettable driving experience.
                Feel the adrenaline surge through your veins as you grip the
                wheel and unleash the beast under the hood.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-vehicle-spec-cards></v-vehicle-spec-cards>
    </v-sheet>
    <v-sheet height="100%" color="#37474F" id="#rentals" class="py-6">
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
              <v-card-text class="display-2 white--text font-weight-thin">
                Explore our Fleet
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="my-4">
          <v-col cols="12" sm="4" v-for="(car, idx) in vehicles" :key="idx">
            <v-card
              color="blue-grey"
              class="mt-2 darken-2 slideFromBottom"
              tile
              dark
              v-scrollanimation
            >
              <v-img
                class=""
                dark
                :src="car.image"
                :aspect-ratio="16 / 9"
              ></v-img>

              <v-card-title
                class="text-overline justify-center"
                style="word-break: break-word"
                >{{ car.name }}
              </v-card-title>
              <v-card-text class="text-center justify-center">
                <!-- Horsepower: 707 hp
                <br />Torque: 650 lb-ft <br />0-60 mph: 3.9 seconds <br />1/4
                Mile: 11.9 @ 124 mph <br />Top Speed: 199 mph <br />Weight:
                4,469lbs -->
              </v-card-text>
              <v-card-actions class="px-6">
                <v-card-text class="pa-0 ma-0 body-1"
                  ><strong class="">$299 / per day</strong></v-card-text
                >
                <v-spacer></v-spacer>
                <v-btn outlined prepend-icon="mdi-plus">Rent It</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet height="100%" class="pa-0 ma-0" color="#37474F">
      <!-- <v-container fluid class="pa-0 ma-0"> -->
      <!-- <v-parallax
          src="../assets/Hellcat_Orange_2.0_shifter.jpeg"
          height="400"
        ></v-parallax> -->
      <v-img
        class="pa-0 ma-0"
        dark
        src="../assets/Hellcat_Orange_2.0_shifter.jpeg"
        cover
        aspect-ratio="16/9"
        height="400px"
      ></v-img>
      <!-- </v-container> -->
    </v-sheet>
    <v-sheet height="100%" class="" color="#263238" id="#testimonials">
      <v-container>
        <v-row>
          <v-col cols="12" sm="9">
            <v-card elevation="0" class="my-12" color="transparent" dark>
              <v-card-text class="display-2 white--text font-weight-thin">
                We strive to meet the needs of our customers and we value their
                opinions about our work
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card elevation="0" color="transparent" dark>
              <v-review-carousel></v-review-carousel>
              <div
                class="elfsight-app-bdcb97ff-5ae0-42a7-b273-8040da025db6"
              ></div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet class="" color="#37474F" id="#contact">
      <v-container style="max-width: 100% !important">
        <v-row>
          <v-col class="" cols="12" sm="6">
            <v-card class="ma-12" tile elevation="5" color="#263238" dark>
              <v-card-text
                class="text-center pt-12 font-weight-bold white--text"
                style="
                  font-size: 48px !important;
                  word-break: break-word;
                  line-height: normal;
                "
              >
                CONTACT US
              </v-card-text>
              <v-card-text
                class="text-center pt-8 pb-4 font-weight-medium"
                style="font-size: 16px !important"
              >
                +1 (702) 123-4567<br />
                lanierluxuryrentals@gmail.com
              </v-card-text>
              <v-card-text class="text-center pb-8 font-weight-medium">
                <v-btn icon x-large><v-icon>mdi-instagram</v-icon></v-btn>
                <v-btn icon x-large><v-icon>mdi-twitter</v-icon></v-btn>
                <v-btn icon x-large><v-icon>mdi-facebook</v-icon></v-btn>
                <v-btn icon x-large><v-icon>mdi-email-outline</v-icon></v-btn>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col class="pa-0" cols="12" sm="6">
            <v-card>
              <div style="position: relative; height: 600px">
                <iframe
                  :src="googleUrl"
                  height="600"
                  width="100%"
                  style="
                    border: 0;
                    filter: grayscale(1);
                    min-height: 600;
                    position: absolute;
                  "
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import vCustomAppBar from "./AppBar.vue";
import vVehicleSpecCards from "./VehicleSpecCards.vue";
import vReviewCarousel from "./ReviewCarousel.vue";
export default {
  name: "HelloWorld",
  components: {
    "v-custom-app-bar": vCustomAppBar,
    "v-vehicle-spec-cards": vVehicleSpecCards,
    "v-review-carousel": vReviewCarousel,
  },
  mounted() {
    let elfsightScript = document.createElement("script");
    elfsightScript.setAttribute(
      "src",
      "https://apps.elfsight.com/p/platform.js"
    );
    document.head.appendChild(elfsightScript);
  },
  computed: {
    googleUrl() {
      return `https://www.google.com/maps/embed/v1/search?q=lanier%20luxury%20rentals&key=${process.env.VUE_APP_KEY}&center=36.107375,-115.174747&zoom=17`;
    },
  },
  data: () => ({
    vehicles: [
      {
        image: require("@/assets/Hellcat_Black_3.0.jpeg"),
        name: "Challenger SRT Hellcat",
        specs: [
          "Horsepower: 707 hp",
          "Torque: 650 lb-ft",
          "0-60 mph: 3.9 seconds",
          "1/4 Mile: 11.9 @ 124 mph",
          "Top Speed: 199 mph",
          "Weight: 4,469lbs",
        ],
        price: "299",
      },
      {
        image: require("@/assets/Hellcat_Orange_2.0.jpeg"),
        name: "Challenger SRT Hellcat",
        specs: [
          "Horsepower: 707 hp",
          "Torque: 650 lb-ft",
          "0-60 mph: 3.9 seconds",
          "1/4 Mile: 11.9 @ 124 mph",
          "Top Speed: 199 mph",
          "Weight: 4,469lbs",
        ],
        price: "299",
      },
      {
        image: require("@/assets/DSC02974.jpg"),
        name: "Challenger SRT Hellcat",
        specs: [
          "Horsepower: 707 hp",
          "Torque: 650 lb-ft",
          "0-60 mph: 3.9 seconds",
          "1/4 Mile: 11.9 @ 124 mph",
          "Top Speed: 199 mph",
          "Weight: 4,469lbs",
        ],
        price: "299",
      },
      {
        image: require("@/assets/hellcat_red.jpeg"),
        name: "Challenger SRT Hellcat",
        specs: [
          "Horsepower: 707 hp",
          "Torque: 650 lb-ft",
          "0-60 mph: 3.9 seconds",
          "1/4 Mile: 11.9 @ 124 mph",
          "Top Speed: 199 mph",
          "Weight: 4,469lbs",
        ],
        price: "299",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
// @media (min-device-width: 1600px) {
//   .container {
//     max-width: 1440px;
//   }
// }
/* Extra small devices (phones, 480px and down) */
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
    max-width: 769px;
  }
}

/* Large devices (desktops, 1025px and up) */
@media only screen and (min-width: 1025px) and (max-width: 1200px) {
  .container {
    max-width: 1025px;
  }
}

@media only screen and (min-width: 1201px) {
  .container {
    max-width: 1201px;
  }
}

.before-enter.fadeIn {
  opacity: 0;
  // transform: translateX(100px);
  transition: all 3s ease-out;
}
.enter.fadeIn {
  opacity: 1;
  // transform: translateX(0px);
}
.before-enter.slideFromBottom {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}
.enter.slideFromBottom {
  opacity: 1;
  transform: translateY(0px);
}
.before-enter.slideFromLeft {
  opacity: 0;
  transform: translateX(-100px);
  transition: all 2s ease-out;
}
.enter.slideFromLeft {
  opacity: 1;
  transform: translateX(0px);
}
.before-enter.slideFromRight {
  opacity: 0;
  transform: translateX(100px);
  transition: all 2s ease-out;
}
.enter.slideFromRight {
  opacity: 1;
  transform: translateX(0px);
}
</style>
