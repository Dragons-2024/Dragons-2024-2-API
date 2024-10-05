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
const filterairconditioning = require("./data/filterairconditioning");
const filteraudio = require("./data/filteraudio");
const filterBathroom= require("./data/FilterBathroom");
const filterCamara = require("./data/FilterCamara");
const filterComputers = require("./data/FilterComputers");
const filterDinningRoom = require("./data/FilterDiningRoom");
const filterKitchen = require("./data/FilterKitchen");
const filterLivingRoom = require("./data/FilterLivingRoom");
const filterPhone= require("./data/FilterPhone");
const filterPrinter= require("./data/FilterPrinter");
const filterRefrigeration= require("./data/FilterRefrigeration");
const filterSmartwatch= require("./data/FilterSmartwatch");
const filterTablet= require("./data/FilterTablet");
const filtertv =require("./data/FilterTv");
const filtervideo =require("./data/filtervideo");
const filterwash =require("./data/FilterWashingmachine");

module.exports = () => {
  return {
    featuredproducts,
    PromotionalImages,  
    climatizacion: airconditioning,
    audio:audio,
    bano:bathroom,
    camara: camara,
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
    Filtroclimatizacion: filterairconditioning,
    Filtroaudio: filteraudio,
    Filtrobano: filterBathroom,
    Filtrocamara: filterCamara,
    Filtrocomputadores: filterComputers,
    Filtrocomedor: filterDinningRoom,
    Filtrococina: filterKitchen,
    FiltroSala: filterLivingRoom,
    Filtroimpresion: filterPrinter,
    Filtrorefrigeracion: filterRefrigeration,
    Filtrosmartwatch: filterSmartwatch,
    Filtrotabletas: filterTablet,
    Filtrotelevisores: filtertv,
    Filtrovideo: filtervideo,
    FiltroLavadorasSecadoras: filterwash,
    Filtrocelular: filterPhone,

  };
};

