<template>
  <v-dialog v-model="show" width="550px">
    <v-card>
      <v-card-title
        class="text-h5 font-weight-light grey lighten-2 grey--text text--darken-2"
      >
        Book Now
      </v-card-title>

      <v-card-text>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Vehicle</th>
                <th class="text-left">Booking Link</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filteredVehicles" :key="item.id">
                <td>{{ item.id }}</td>
                <td class="py-2">
                  <v-btn
                    class="my-1 mr-2 py-4 white blue-grey--text text--darken-2"
                    href=""
                    target="_blank"
                    :disabled="true"
                    small
                    >Book Direct<br />(Coming Soon)</v-btn
                  >
                  <v-btn
                    class="my-1 white blue-grey--text text--darken-2"
                    :href="item.turoUrl"
                    target="_blank"
                    small
                    >Book on Turo</v-btn
                  >
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import vehicleData from "../data/vehicles.js";
export default {
  props: {
    value: { type: Boolean },
    selectedVehicleId: { type: String },
  },
  data() {
    return {
      vehicles: vehicleData,
    };
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
    filteredVehicles() {
      if (this.selectedVehicleId != null)
        return this.vehicles.findIndex((v) => v.id == this.selectedVehicleId) >
          -1
          ? [this.vehicles.find((v) => v.id == this.selectedVehicleId)]
          : this.vehicles;
      else return this.vehicles;
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
