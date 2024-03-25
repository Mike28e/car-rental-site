<template>
  <v-carousel
    cycle
    height="100%"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item v-for="(review, i) in reviews" :key="i">
      <v-row>
        <v-col cols="12" sm="4" v-for="(rev, idx) in reviews" :key="idx">
          <!-- <v-card color="blue-grey" class="darken-2">
            <v-card-text>
              <v-rating
                background-color="warning lighten-1"
                color="warning"
                empty-icon="mdi-star-outline"
                full-icon="mdi-star"
                half-icon="mdi-star-half-full"
                length="5"
                readonly
                size="100%"
                :value="4"
                class="text-center"
              ></v-rating>
              Seamless reservation process and prompt communication from
              owner/operator Sean made this a great experience. Can't recommend
              highly enough for an exotic car rental while in Vegas.
            </v-card-text>
          </v-card> -->
          <v-card
            color="blue-grey"
            class="mx-auto darken-3 mb-16"
            dark
            max-width="400"
          >
            <v-card-title>
              <v-icon large left> mdi-google </v-icon>
              <span class="text-h6 font-weight-light">Google</span>
            </v-card-title>
            <v-rating
              background-color="warning lighten-1"
              color="warning"
              empty-icon="mdi-star-outline"
              full-icon="mdi-star"
              half-icon="mdi-star-half-full"
              length="5"
              readonly
              size="100%"
              :value="rev.rating"
              class="text-center"
            ></v-rating>

            <v-card-text class="text-subtitle-1">
              "{{ rev.text }}"
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    alt="M"
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{ rev.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      reviews: [
        {
          rating: 5,
          text: "Seamless reservation process and prompt communication from owner/operator Sean made this a great experience. Can't recommend highly enough for an exotic car rental while in Vegas.",
          name: "Tom M",
        },
        {
          rating: 5,
          text: "Seamless reservation process and prompt communication from owner/operator Sean made this a great experience. Can't recommend highly enough for an exotic car rental while in Vegas.",
          name: "Tom M",
        },
        {
          rating: 5,
          text: "Seamless reservation process and prompt communication from owner/operator Sean made this a great experience. Can't recommend highly enough for an exotic car rental while in Vegas.",
          name: "Tom M",
        },
      ],
    };
  },
};
</script>
