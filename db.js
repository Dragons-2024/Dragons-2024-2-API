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
const PromotionalImages = require("./data/PromotionalImages");


module.exports = () => {
  return {
    featuredproducts,
    PromotionalImages,  
    climatizacion: airconditioning,
    audio:audio,
    bano:bathroom,
    camaras: camara,
    computadores: computers,
    comedor: diningroom,
    cocina: kitchen,
    sala: livingroom,
    celular:phone,
    impresion: printer,
    refrigeracion: refrigeration,
    smartwatch: smartwatch,
    tabletas: tablet,
    televisores: tv,
    video: video,
    LavadorasSecadoras: washingmachine,
  };
};