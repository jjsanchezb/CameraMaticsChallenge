import jbinary from "jbinary";

const getSample = function(binary) {
  const sample = binary.read({
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
  });
  return sample;
};

const getAllSamples = function(binary) {
  let final = false;
  let samples = [];
  while (!final) {
    try {
      const sample = getSample(binary);
      samples.push(sample);
    } catch (error) {
      final = true;
    }
  }
  return samples;
};

const getDecodedFile = function(err, binary) {
  const header = binary.read({ header: ["string", 177] });
  const binaryLength = binary.read({ length: "uint64" });
  const samples = getAllSamples(binary);
  const file = {
    header: header.header,
    lenght: binaryLength.length,
    samples: samples
  };
  return file;
};

const getTrackingData = async function(url) {
  let err,
    binary = await jbinary.load(url);
  const result = getDecodedFile(err, binary, result);
  return result;
};

export default {
  getTrackingData
};
