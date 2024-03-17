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
              <tr v-for="item in filteredVehicles" :key="item.name">
                <td>{{ item.name }}</td>
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
export default {
  props: {
    value: { type: Boolean },
    selectedVehicleId: { type: Number },
  },
  data() {
    return {
      vehicles: [
        {
          id: 1,
          name: "Porsche 911 (992)",
          turoUrl:
            "https://turo.com/us/en/car-rental/united-states/las-vegas-nv/porsche/911/2488172",
        },
        {
          id: 2,
          name: "Lamborghini Huracan",
          turoUrl:
            "https://turo.com/us/en/car-rental/united-states/las-vegas-nv/lamborghini/huracan/2487303",
        },
        {
          id: 3,
          name: "Dodge Charger SRT Hellcat",
          turoUrl:
            "https://turo.com/us/en/car-rental/united-states/las-vegas-nv/dodge/charger/2514350",
        },
        {
          id: 4,
          name: "BMW i8 (Grey)",
          turoUrl:
            "https://turo.com/us/en/car-rental/united-states/las-vegas-nv/bmw/i8/2496866",
        },
        {
          id: 5,
          name: "BMW i8 (White)",
          turoUrl:
            "https://turo.com/us/en/car-rental/united-states/las-vegas-nv/bmw/i8/2487256",
        },
        {
          id: 6,
          name: "Mitsubishi Outlander",
          turoUrl:
            "https://turo.com/us/en/suv-rental/united-states/las-vegas-nv/mitsubishi/outlander/2500004",
        },
        {
          id: 7,
          name: "Jeep Grand Cherokee",
          turoUrl:
            "https://turo.com/us/en/suv-rental/united-states/las-vegas-nv/jeep/grand-cherokee/2471751",
        },
      ],
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
