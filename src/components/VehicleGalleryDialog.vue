<template>
  <v-dialog v-model="show" :class="isMobile ? 'mx-0 px-0' : ''" width="800px">
    <v-card tile flat :class="isMobile ? 'mx-0 px-0' : ''">
      <v-card-title
        v-if="!isMobile"
        class="text-h5 font-weight-light grey lighten-2 grey--text text--darken-2 mb-8"
      >
        {{ title }}
      </v-card-title>

      <v-card-text :class="isMobile ? 'mx-0 px-0 my-0 py-0' : ''">
        <v-carousel height="auto" hide-delimiters>
          <v-carousel-item v-for="(src, i) in images" :key="i" eager>
            <v-img :src="src" eager contain></v-img>
          </v-carousel-item>
        </v-carousel>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: { type: Boolean },
    title: { type: String },
    images: { type: Array },
  },
  data() {
    return {};
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
    isMobile() {
      return this.$vuetify.breakpoint.width < 960;
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
