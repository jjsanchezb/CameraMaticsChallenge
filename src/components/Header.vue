<template>
  <div id="header">
    <v-toolbar dense class="white--text" color="secondary">
      <h1 class="headline text-uppercase font-weight-light">
        CameraMatics
      </h1>

      <v-tabs slider-color="accent" slider-size="3" optional grow>
        <v-tab class="white--text title font-weight-light" to="/">Map</v-tab>
        <v-tab class="white--text title font-weight-light" to="/table"
          >Table</v-tab
        >
      </v-tabs>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  name: "Header",
  methods: {},
  data() {
    return {};
  }
};
</script>
