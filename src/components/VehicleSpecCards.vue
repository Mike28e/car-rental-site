<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="12" sm="6" class="">
        <v-row v-scrollanimation class="slideFromLeft">
          <v-col cols="6" sm="6">
            <v-card color="transparent" elevation="0" dark>
              <v-card-title
                class="text-overline justify-center text-center"
                style="word-break: break-word"
                >Challenger SRT Hellcat
              </v-card-title>
              <v-card-text class="text-center justify-center">
                2-Door
                <br />Horsepower: 707 hp <br />Torque: 650 lb-ft <br />0-60 mph:
                3.9 seconds <br />1/4 Mile: 11.9 @ 124 mph <br />Top Speed: 199
                mph <br />Weight: 4,469lbs
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="6" sm="6">
            <v-card
              color="transparent"
              class=""
              tile
              elevation="0"
              v-scrollanimation
            >
              <v-img class="" dark src="@/assets/6625568.jpg" contain></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="6" class="">
        <v-row v-scrollanimation class="slideFromRight">
          <v-col cols="6" sm="6">
            <v-card
              color="transparent"
              class=""
              tile
              elevation="0"
              v-scrollanimation
            >
              <v-img class="" dark src="@/assets/6625568.jpg" contain></v-img>
            </v-card>
          </v-col>
          <v-col cols="6" sm="6">
            <v-card color="transparent" elevation="0" dark>
              <v-card-title
                class="text-overline justify-center text-center"
                style="word-break: break-word"
                >Charger SRT Hellcat
              </v-card-title>
              <v-card-text class="text-center justify-center">
                2-Door
                <br />Horsepower: 707 hp <br />Torque: 650 lb-ft <br />0-60 mph:
                3.9 seconds <br />1/4 Mile: 11.9 @ 124 mph <br />Top Speed: 199
                mph <br />Weight: 4,469lbs
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.before-enter.fadeIn {
  opacity: 0;
  // transform: translateX(100px);
  transition: all 2s ease-out;
}
.enter.fadeIn {
  opacity: 1;
  // transform: translateX(0px);
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
