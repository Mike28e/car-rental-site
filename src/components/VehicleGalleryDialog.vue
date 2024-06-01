<template>
  <v-dialog v-model="show" class="mx-0 px-0" width="800px">
    <v-card tile flat class="mx-0 px-0">
      <v-card-text class="mx-0 px-0 my-0 py-0">
        <v-carousel
          height="auto"
          :hide-delimiters="isMobile"
          v-model="currentIndex"
        >
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
    startIndex: { type: Number },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  watch: {
    startIndex(idx) {
      this.currentIndex = idx;
    },
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
