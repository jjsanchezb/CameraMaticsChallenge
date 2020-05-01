import jbinary from "jbinary";

// const TrackTypeset = {
//   header: ["string", 177],
//   lenght: "uint64",
//   Sample: {
//     UTCTIME: "uint64",
//     TZO: "int16",
//     DSTO: "int16",
//     GPSTIME: "uint64",
//     GPSSTATUS: "uint8",
//     LAT: "float64",
//     LATDIR: "char",
//     LNG: "float64",
//     LNGDIR: "char",
//     GPSSPEED: "float32",
//     GPSCOURSE: "float32",
//     DIPSTATE: "uint8",
//     ACCSTATE: "uint8",
//   },
//   samples: [
//     "array",
//     "Sample",
//     function(context) {
//       return context.lenght; // total size except `size` field itself
//     },
//   ],
// };

const getTrackingData = async function() {
  jbinary.load("/data/track_2020-04-23T14-25-30.bin", function(err, binary) {
    console.log(binary.read({ header: ["string", 177] }));
    const binaryLenght = binary.read({ length: "uint64" });
    console.log(binaryLenght, binaryLenght.length);
    let counter = 0;
    for (let index = 1; index < binaryLenght.length; index++) {
      console.log(counter);
      console.log(
        binary.read({
          begin: "char",
          UTCTIME: "uint64",
          TZO: "int16",
          DSTO: "int16",
          GPSTIME: "uint64",
          GPSSTATUS: "uint8",
          LAT: "float64",
          LATDIR: "char",
          LNG: "float64",
          LNGDIR: "char",
          GPSSPEED: "float32",
          GPSCOURSE: "float32",
          DIPSTATE: "uint8",
          ACCSTATE: "uint8"
        })
      );
      counter += 1;
    }
  });
};

export default {
  getTrackingData
};
