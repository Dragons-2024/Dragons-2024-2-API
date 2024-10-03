const Climatizacion = [
    {
      "id": 1,
      "img": "https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761071/61_qtqyqz.png",
      "name": "Aire Acondicionado LG Dual Inverter",
      "rating": 5.0,
      "features": "12000 BTU, Eficiencia Energética A++",
      "normalPrice": "$2.599.900",
      "discountedPrice": "$2.079.200",
      "description": "El Aire Acondicionado LG Dual Inverter ofrece un alto rendimiento con menor consumo de energía. Ideal para habitaciones de tamaño mediano.",
      "details": {
        "capacidad": "12000 BTU",
        "eficiencia": "A++",
        "control": "Remoto incluido",
        "modo": "Enfriamiento rápido",
        "dimensiones": "70 x 20 x 30 cm"
      },
      "slug": "/pdp/aire%acondicionado%lg%dual%inverter"
    },
    {
      "id": 2,
      "img": "https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761074/62_huxgjo.png",
      "name": "Ventilador de Torre Dyson AM07",
      "rating": 4.5,
      "features": "Sin Aspas, Control Remoto",
      "normalPrice": "$1.499.000",
      "discountedPrice": "$1.199.000",
      "description": "El ventilador Dyson AM07 es un ventilador sin aspas, seguro y silencioso. Ideal para uso doméstico u oficinas.",
      "details": {
        "tipo": "Sin aspas",
        "control": "Remoto",
        "consumo": "Eficiencia energética",
        "ruido": "Silencioso",
        "altura": "100 cm"
      },
      "slug": "/pdp/ventilador%de%torre%dyson%am07"
    },
    {
      "id": 3,
      "img": "https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761076/63_hrwmy0.png",
      "name": "Calefactor Eléctrico DeLonghi",
      "rating": 4.0,
      "features": "1500W, Termostato Ajustable",
      "normalPrice": "$899.000",
      "discountedPrice": "$719.000",
      "description": "El calefactor DeLonghi proporciona calor eficiente y constante, ideal para calentar espacios pequeños o medianos en invierno.",
      "details": {
        "potencia": "1500W",
        "termostato": "Ajustable",
        "seguridad": "Protección contra sobrecalentamiento",
        "peso": "2.5 kg",
        "dimensiones": "30 x 20 x 15 cm"
      },
      "slug": "/pdp/calefactor%electrico%delonghi"
    },
    {
      "id": 4,
      "img": "https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761085/64_zbcxtr.png",
      "name": "Purificador de Aire Philips",
      "rating": 4.9,
      "features": "Filtro HEPA, Control por App",
      "normalPrice": "$1.199.000",
      "discountedPrice": "$959.100",
      "description": "El purificador de aire Philips con filtro HEPA elimina hasta el 99.97% de las partículas, ideal para mantener el aire limpio en casa.",
      "details": {
        "filtro": "HEPA",
        "control": "Por App",
        "tamaño": "Para espacios grandes",
        "ruido": "Operación silenciosa",
        "área efectiva": "Hasta 100 m²"
      },
      "slug": "/pdp/purificador%de%aire%philips"
    },
    {
      "id": 5,
      "img": "https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761095/65_od2orc.png",
      "name": "Humidificador Ultrasónico Levoit",
      "rating": 4.6,
      "features": "6L, Control Táctil",
      "normalPrice": "$499.000",
      "discountedPrice": "$399.200",
      "description": "El humidificador ultrasónico Levoit mejora la calidad del aire y mantiene el nivel de humedad adecuado, ideal para uso diario.",
      "details": {
        "capacidad": "6L",
        "control": "Táctil",
        "modo": "Silencioso",
        "tiempo de uso": "Hasta 12 horas",
        "dimensiones": "25 x 20 x 30 cm"
      },
      "slug": "/pdp/humidificador%ultrasonico%levoit"
    },
    {
      "id": 6,
      "img": "https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761097/66_yqmypt.png",
      "name": "Deshumidificador Pro Breeze",
      "rating": 4.3,
      "features": "12L, Auto Apagado",
      "normalPrice": "$799.920",
      "discountedPrice": "$639.920",
      "description": "El deshumidificador Pro Breeze ayuda a eliminar el exceso de humedad, previniendo moho y ácaros en habitaciones.",
      "details": {
        "capacidad": "12L",
        "apagado": "Automático",
        "uso": "Habitaciones medianas y grandes",
        "nivel de ruido": "35 dB",
        "dimensiones": "30 x 20 x 45 cm"
      },
      "slug": "/pdp/deshumidificador%pro%breeze"
    },
    {
      "id": 7,
      "img": "https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761101/67_dyxshn.png",
      "name": "Aire Acondicionado Portátil Honeywell",
      "rating": 4.7,
      "features": "10000 BTU, Control Remoto",
      "normalPrice": "$1.499.900",
      "discountedPrice": "$1.199.510",
      "description": "El aire acondicionado portátil Honeywell es perfecto para enfriar cualquier espacio con facilidad, siendo portátil y eficiente.",
      "details": {
        "capacidad": "10000 BTU",
        "control": "Remoto",
        "movilidad": "Ruedas para fácil transporte",
        "nivel de ruido": "55 dB",
        "dimensiones": "75 x 45 x 30 cm"
      },
      "slug": "/pdp/aire%acondicionado%portatil%honeywell"
    },
    {
      "id": 8,
      "img": "https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761110/68_oghf7c.png",
      "name": "Ventilador de Mesa Rowenta",
      "rating": 4.8,
      "features": "Silencioso, 5 Velocidades",
      "normalPrice": "$299.000",
      "discountedPrice": "$239.000",
      "description": "El ventilador de mesa Rowenta ofrece un funcionamiento silencioso y 5 velocidades ajustables, ideal para cualquier espacio.",
      "details": {
        "tipo": "Mesa",
        "velocidades": "5",
        "ruido": "Silencioso",
        "diámetro": "30 cm",
        "altura": "40 cm"
      },
      "slug": "/pdp/ventilador%de%mesa%rowenta"
    },
    {
      "id": 9,
      "img": "https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761118/69_ugzjpm.png",
      "name": "Calefactor Cerámico Lasko",
      "rating": 4.5,
      "features": "1500W, Oscilante",
      "normalPrice": "$399.400",
      "discountedPrice": "$319.380",
      "description": "El calefactor cerámico Lasko proporciona calefacción rápida y eficiente, con una función oscilante para una mejor distribución del calor.",
      "details": {
        "potencia": "1500W",
        "oscilante": "Sí",
        "peso": "1.8 kg",
        "dimensiones": "25 x 15 x 20 cm",
        "seguridad": "Protección contra sobrecalentamiento"
      },
      "slug": "/pdp/calefactor%ceramico%lasko"
    },
    {
      "id": 10,
      "img": "https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761122/70_puwr5b.png",
      "name": "Purificador de Aire Xiaomi Mi Air",
      "rating": 4.7,
      "features": "Filtro HEPA, Control por App",
      "normalPrice": "$599.000",
      "discountedPrice": "$479.000",
      "description": "El purificador de aire Xiaomi Mi Air ofrece un alto rendimiento en la filtración de aire con tecnología avanzada.",
      "details": {
        "filtro": "HEPA",
        "control": "Por App",
        "área efectiva": "Hasta 80 m²",
        "ruido": "Operación silenciosa",
        "dimensiones": "24 x 24 x 54 cm"
      },
      "slug": "/pdp/purificador%de%aire%xiaomi%mi%air"
    }
  
];

module.exports = Climatizacion;
