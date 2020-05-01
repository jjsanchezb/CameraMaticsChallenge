<template>
  <div>
    <gmap-map :center="center" :zoom="5" style="width:100%;  height: 400px;">
      <gmap-marker
        v-for="(mark, index) in segmentedMarkers"
        :key="index"
        :position="mark"
        @click="center = mark"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: -1.1794446315870965e-287, lng: -1.2217753570287172e283 },
      currentPlace: null,
      segmentedMarkers: [
        {
          lat: -1.1794446315870965e-287,
          lng: -1.2217753570287172e283
        }
      ]
    };
  },

  computed: {
    ...mapState(["samples", "done"])
  },

  methods: {
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    addMaker(markers, index) {
      console.log("updating map");
      this.segmentedMarkers.push(markers[index]);
      index += 1;
    }
  },
  watch: {
    done: async function() {
      let markers = this.samples.map(sample => {
        return { lat: sample.LAT, lng: sample.LNG };
      });
      console.log(markers);
      let index = 0;
      setInterval(this.addMaker, 1000, markers, index);
      // for await (const marker of markers) {
      //   this.sleep(1000);
      //   this.segmentedMarkers.push(marker);
      //   this.center = marker;
      //   console.log(marker);
      //   console.log(this.segmentedMarkers);
      // }
    }
  }
};
</script>
