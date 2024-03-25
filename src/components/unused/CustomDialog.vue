<template>
  <v-dialog v-model="show" width="500">
    <v-card>
      <v-card-title
        class="text-h5 font-weight-light grey lighten-2 grey--text text--darken-2"
      >
        {{ title }}
      </v-card-title>

      <v-card-text>
        {{ content }}
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: { type: Boolean },
    title: { type: String },
    content: { type: String },
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
};
</script>
<style lang="scss" scoped></style>
