<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <google-map />
    <Table />
    <v-content> </v-content>
  </v-app>
</template>

<script>
import GoogleMap from "@/components/GoogleMap";
import Table from "@/components/Table";
import { mapActions } from "vuex";
export default {
  name: "App",

  components: {
    Table,
    GoogleMap
  },

  data: () => ({}),

  methods: {
    ...mapActions(["fillSamples"])
  },

  created: async function() {
    const urls = [
      "/data/track_2020-04-23T14-25-30.bin",
      "/data/track_2020-04-23T14-30-30.bin",
      "public/data/track_2020-04-23T14-51-29.bin",
      "public/data/track_2020-04-23T14-46-29.bin",
      "public/data/track_2020-04-23T14-41-30.bin",
      "public/data/track_2020-04-23T14-36-20.bin"
    ];
    this.fillSamples(urls);
  }
};
</script>
