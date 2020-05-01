import jbinary from "jbinary";
const getTrackingData = async function() {
  jbinary.load("/data/track_2020-04-23T14-25-30.bin", function(err, binary) {
    console.log(binary.read({ header: ["string", 177] }));
  });
};
export default {
  getTrackingData
};
