<template>
  <v-dialog v-model="show" width="800px">
    <v-card>
      <v-card-title
        class="text-h5 font-weight-light grey lighten-2 grey--text text--darken-2 mb-8"
      >
        {{ title }}
      </v-card-title>

      <v-card-text>
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
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
