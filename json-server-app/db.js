const airconditioning = require("./data/airconditioning");
const audio = require("./data/audio");
const bathroom = require("./data/bathroom");
const camara = require("./data/camara");
const computers = require("./data/computers");
const diningroom = require("./data/diningroom");
const featuredproducts = require("./data/FeaturedProducts");
const kitchen = require("./data/kitchen");
const livingroom = require("./data/livingroom");
const phone = require("./data/phone");
const printer = require("./data/printer");
const refrigeration = require("./data/refrigeration");
const smartwatch = require("./data/smartwatch");
const tablet = require("./data/tablet");
const tv = require("./data/tv");
const video = require("./data/video");
const washingmachine = require("./data/washingmachine");

module.exports = () => {
  return {
    featuredproducts,
    climatizacion: airconditioning,
    audio:audio,
    baño:bathroom,
    camara: camara,
    computador: computers,
    comedor: diningroom,
    cocina: kitchen,
    sala: livingroom,
    telefono:phone,
    impresora: printer,
    refrigeracion: refrigeration,
    smartwatch: smartwatch,
    tablet: tablet,
    tv: tv,
    video: video,
    lavadora: washingmachine,
  };
};