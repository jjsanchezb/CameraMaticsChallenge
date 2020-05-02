module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/CameraMaticsChallenge/" : "/",
  transpileDependencies: ["vuetify"]
};
