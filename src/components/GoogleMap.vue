<template>
  <div>
    <gmap-map :center="center" :zoom="15" style="width:100%;  height: 400px;">
      <gmap-marker
        v-for="(m, index) in markers"
        :key="index"
        :position="m"
        @click="center = m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      currentPlace: null
    };
  },

  computed: { ...mapGetters(["markers"]) },

  methods: {
    // receives a place object via the autocomplete component
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>
