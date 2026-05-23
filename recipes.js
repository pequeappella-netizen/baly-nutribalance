// recipes.js — 18 bilingual recipes (ES/DE)
// Each recipe has: macros per serving, scalable ingredients, step-by-step instructions
// with optional Baly tips. Tip objects: { es, de }.

export const RECIPES = [
  {
    "id": "milanesa-horno",
    "country": "ar",
    "emoji": "🥩",
    "time": 40,
    "kcal": 310,
    "rating": 4.9,
    "p": 32,
    "c": 18,
    "f": 12,
    "servings": 2,
    "tags": [
      "proteina"
    ],
    "name": {
      "es": "Milanesa al horno crocante",
      "de": "Knuspriges Ofen-Milanesa"
    },
    "desc": {
      "es": "La clásica milanesa pero al horno: misma textura crujiente sin litros de aceite. Truco de Baly: pan rallado mezclado con avena.",
      "de": "Das klassische Milanesa aus dem Ofen: knusprig ohne Öl. Balys Trick: Paniermehl mit Haferflocken mischen."
    },
    "ingredients": [
      {
        "qty": "400 g",
        "es": "Bifes de nalga finos",
        "de": "Dünne Rindersteaks"
      },
      {
        "qty": "2",
        "es": "Huevos",
        "de": "Eier"
      },
      {
        "qty": "1 taza",
        "es": "Pan rallado + avena (mitad y mitad)",
        "de": "Paniermehl + Haferflocken (halb/halb)"
      },
      {
        "qty": "2 dientes",
        "es": "Ajo picado",
        "de": "Knoblauchzehen, gehackt"
      },
      {
        "qty": "c/n",
        "es": "Perejil, sal, pimienta",
        "de": "Petersilie, Salz, Pfeffer"
      },
      {
        "qty": "spray",
        "es": "Aceite de oliva",
        "de": "Olivenöl-Spray"
      }
    ],
    "steps": [
      {
        "es": "Mezclar huevos con ajo y perejil picados. Sal y pimienta.",
        "de": "Eier mit gehacktem Knoblauch und Petersilie verquirlen. Würzen."
      },
      {
        "es": "Pasar los bifes por el huevo, luego por la mezcla de pan rallado y avena. Presionar bien.",
        "de": "Steaks erst durch das Ei, dann durch die Paniermehl-Hafer-Mischung ziehen. Gut andrücken.",
        "tip": {
          "es": "La avena le da una textura más crocante y aporta fibra.",
          "de": "Hafer macht es knuspriger und liefert Ballaststoffe."
        }
      },
      {
        "es": "Colocar en placa con papel manteca. Rociar con aceite en spray.",
        "de": "Auf Backblech mit Backpapier legen. Mit Öl besprühen."
      },
      {
        "es": "Horno fuerte (220°C) 12 minutos, dar vuelta y 8 minutos más.",
        "de": "Bei 220°C 12 Min. backen, wenden, 8 weitere Min."
      },
      {
        "es": "Servir con rodajas de limón y ensalada verde.",
        "de": "Mit Zitronenscheiben und grünem Salat servieren."
      }
    ]
  },
  {
    "id": "empanada-salteña",
    "country": "ar",
    "emoji": "🥟",
    "time": 50,
    "kcal": 230,
    "rating": 4.7,
    "p": 18,
    "c": 22,
    "f": 8,
    "servings": 4,
    "tags": [],
    "name": {
      "es": "Empanada salteña light",
      "de": "Leichte Salteña-Empanada"
    },
    "desc": {
      "es": "La empanada del norte argentino: papa, carne cortada a cuchillo, ají molido. Al horno, no frita.",
      "de": "Die Empanada aus Nordargentinien: Kartoffel, handgeschnittenes Rindfleisch, Paprika. Gebacken, nicht frittiert."
    },
    "ingredients": [
      {
        "qty": "12",
        "es": "Tapas de empanada",
        "de": "Empanada-Teigblätter"
      },
      {
        "qty": "300 g",
        "es": "Carne cortada a cuchillo",
        "de": "Handgeschnittenes Rindfleisch"
      },
      {
        "qty": "1",
        "es": "Papa hervida en cubos",
        "de": "Gekochte Kartoffel in Würfeln"
      },
      {
        "qty": "1",
        "es": "Cebolla picada",
        "de": "Zwiebel, gehackt"
      },
      {
        "qty": "1 cdita",
        "es": "Ají molido + comino",
        "de": "Paprikapulver + Kümmel"
      },
      {
        "qty": "2",
        "es": "Huevos duros picados",
        "de": "Hartgekochte Eier, gehackt"
      }
    ],
    "steps": [
      {
        "es": "Saltear cebolla 5 min. Agregar carne y dorar.",
        "de": "Zwiebel 5 Min. anbraten. Fleisch dazu, anbraten."
      },
      {
        "es": "Incorporar papa, ají molido, comino, sal. Cocinar 5 min más.",
        "de": "Kartoffel, Paprika, Kümmel, Salz dazu. Weitere 5 Min. kochen."
      },
      {
        "es": "Enfriar el relleno y agregar huevos duros.",
        "de": "Füllung abkühlen lassen, Eier untermischen.",
        "tip": {
          "es": "El relleno tiene que estar FRÍO antes de armar — si no, la masa se rompe.",
          "de": "Die Füllung muss KALT sein, sonst reißt der Teig."
        }
      },
      {
        "es": "Rellenar las tapas y cerrar con repulgue.",
        "de": "Teigblätter füllen und mit dem typischen Rand schließen."
      },
      {
        "es": "Horno 200°C, 15-20 min hasta dorar.",
        "de": "Bei 200°C 15-20 Min. backen bis goldbraun."
      }
    ]
  },
  {
    "id": "locro-liviano",
    "country": "ar",
    "emoji": "🍲",
    "time": 90,
    "kcal": 280,
    "rating": 4.8,
    "p": 22,
    "c": 42,
    "f": 5,
    "servings": 6,
    "tags": [],
    "name": {
      "es": "Locro liviano del 25",
      "de": "Leichter Locro-Eintopf"
    },
    "desc": {
      "es": "El guiso patrio reinventado: menos grasa, mismo sabor profundo. Baly usa pechito magro y triplica las verduras.",
      "de": "Der patriotische Eintopf neu erfunden: weniger Fett, gleicher Geschmack. Mit magerem Fleisch und mehr Gemüse."
    },
    "ingredients": [
      {
        "qty": "250 g",
        "es": "Maíz blanco partido (remojado)",
        "de": "Weißer Mais (eingeweicht)"
      },
      {
        "qty": "200 g",
        "es": "Zapallo en cubos",
        "de": "Kürbis in Würfeln"
      },
      {
        "qty": "150 g",
        "es": "Pechito de cerdo magro",
        "de": "Magere Schweinerippe"
      },
      {
        "qty": "100 g",
        "es": "Mondongo limpio",
        "de": "Saubere Kutteln"
      },
      {
        "qty": "2",
        "es": "Batatas en cubos",
        "de": "Süßkartoffeln in Würfeln"
      },
      {
        "qty": "c/n",
        "es": "Pimentón, comino, cebolla de verdeo",
        "de": "Paprika, Kümmel, Frühlingszwiebeln"
      }
    ],
    "steps": [
      {
        "es": "Hervir el maíz con el mondongo 40 min en olla grande.",
        "de": "Mais mit Kutteln 40 Min. in großem Topf kochen."
      },
      {
        "es": "Agregar pechito, zapallo y batata. Cocinar 30 min más.",
        "de": "Rippe, Kürbis, Süßkartoffel dazu. 30 Min. weiterkochen."
      },
      {
        "es": "En sartén aparte, hacer 'salsa pimentonada' con cebolla de verdeo y pimentón.",
        "de": "Separat 'salsa pimentonada' machen: Frühlingszwiebel, Paprika."
      },
      {
        "es": "Salar al final. Servir con la salsa por encima.",
        "de": "Am Ende salzen. Mit der Sauce servieren.",
        "tip": {
          "es": "Reposá una noche en heladera: al día siguiente está MEJOR.",
          "de": "Eine Nacht ruhen lassen — am nächsten Tag schmeckt's noch besser."
        }
      }
    ]
  },
  {
    "id": "tarta-acelga",
    "country": "ar",
    "emoji": "🥧",
    "time": 45,
    "kcal": 220,
    "rating": 4.5,
    "p": 14,
    "c": 18,
    "f": 10,
    "servings": 6,
    "tags": [
      "veg"
    ],
    "name": {
      "es": "Tarta de acelga y ricota",
      "de": "Mangold-Ricotta-Tarte"
    },
    "desc": {
      "es": "La tarta del domingo, livianita. Acelga blanqueada, ricota magra y un toque de nuez moscada.",
      "de": "Die Sonntags-Tarte, leicht gemacht. Blanchierter Mangold, magere Ricotta und Muskat."
    },
    "ingredients": [
      {
        "qty": "2",
        "es": "Tapas de tarta integral",
        "de": "Vollkorn-Tarteböden"
      },
      {
        "qty": "1 atado",
        "es": "Acelga",
        "de": "Mangold (1 Bund)"
      },
      {
        "qty": "250 g",
        "es": "Ricota magra",
        "de": "Magere Ricotta"
      },
      {
        "qty": "2",
        "es": "Huevos",
        "de": "Eier"
      },
      {
        "qty": "50 g",
        "es": "Queso rallado",
        "de": "Geriebener Käse"
      },
      {
        "qty": "c/n",
        "es": "Nuez moscada, sal, pimienta",
        "de": "Muskat, Salz, Pfeffer"
      }
    ],
    "steps": [
      {
        "es": "Blanquear la acelga 2 min en agua hirviendo. Escurrir muy bien.",
        "de": "Mangold 2 Min. blanchieren. Sehr gut abtropfen."
      },
      {
        "es": "Picar y mezclar con ricota, huevos, queso y especias.",
        "de": "Hacken und mit Ricotta, Eiern, Käse und Gewürzen mischen.",
        "tip": {
          "es": "Apretar la acelga con las manos para sacarle TODA el agua — si no la tarta queda aguada.",
          "de": "Den Mangold gut ausdrücken — sonst wird die Tarte wässrig."
        }
      },
      {
        "es": "Rellenar la tapa, cubrir con la otra y sellar.",
        "de": "Boden füllen, mit zweitem Boden bedecken, versiegeln."
      },
      {
        "es": "Pinchar la masa y hornear 30 min a 180°C.",
        "de": "Teig einstechen und 30 Min. bei 180°C backen."
      }
    ]
  },
  {
    "id": "provoleta-asador",
    "country": "ar",
    "emoji": "🧀",
    "time": 15,
    "kcal": 280,
    "rating": 4.6,
    "p": 18,
    "c": 2,
    "f": 22,
    "servings": 4,
    "tags": [],
    "name": {
      "es": "Provoleta a las brasas",
      "de": "Provoleta vom Grill"
    },
    "desc": {
      "es": "El entrada del asado argentino: queso provolone, orégano, ají molido. Servida en cazuelita.",
      "de": "Vorspeise des argentinischen Asado: Provolone-Käse mit Oregano und Paprika."
    },
    "ingredients": [
      {
        "qty": "1",
        "es": "Disco de provolone (200g)",
        "de": "Provolone-Scheibe (200g)"
      },
      {
        "qty": "1 cdita",
        "es": "Orégano seco",
        "de": "Getrockneter Oregano"
      },
      {
        "qty": "½ cdita",
        "es": "Ají molido",
        "de": "Paprikapulver"
      },
      {
        "qty": "1 cda",
        "es": "Aceite de oliva",
        "de": "Olivenöl"
      },
      {
        "qty": "c/n",
        "es": "Pan integral para acompañar",
        "de": "Vollkornbrot zum Servieren"
      }
    ],
    "steps": [
      {
        "es": "Espolvorear orégano y ají sobre el provolone. Un hilo de aceite.",
        "de": "Oregano und Paprika auf den Käse streuen. Etwas Öl."
      },
      {
        "es": "Cazuelita de hierro al fuego fuerte. Dorar 3 min cada lado.",
        "de": "Gusseisenpfanne stark erhitzen. Pro Seite 3 Min. braten.",
        "tip": {
          "es": "Tiene que estar BIEN caliente desde el inicio.",
          "de": "Sehr heiß anfangen — sonst zerläuft der Käse."
        }
      },
      {
        "es": "Servir burbujeando con el pan al lado.",
        "de": "Sprudelnd heiß mit Brot servieren."
      }
    ]
  },
  {
    "id": "mate-naranja",
    "country": "ar",
    "emoji": "🧉",
    "time": 5,
    "kcal": 15,
    "rating": 4.9,
    "p": 0,
    "c": 3,
    "f": 0,
    "servings": 1,
    "tags": [
      "quick",
      "veg"
    ],
    "name": {
      "es": "Mate con cáscara de naranja",
      "de": "Mate mit Orangenschale"
    },
    "desc": {
      "es": "Mate amargo con un toque cítrico que aporta vitamina C y antioxidantes naturales.",
      "de": "Bitterer Mate mit Zitrusnote — liefert Vitamin C und Antioxidantien."
    },
    "ingredients": [
      {
        "qty": "50 g",
        "es": "Yerba mate",
        "de": "Mate-Kraut"
      },
      {
        "qty": "1",
        "es": "Cáscara de naranja seca",
        "de": "Getrocknete Orangenschale"
      },
      {
        "qty": "500 ml",
        "es": "Agua a 75-80°C",
        "de": "Wasser bei 75-80°C"
      }
    ],
    "steps": [
      {
        "es": "Cargar 3/4 del mate con yerba.",
        "de": "Zu 3/4 mit Yerba füllen."
      },
      {
        "es": "Agregar trocitos de cáscara de naranja entre la yerba.",
        "de": "Orangenschalen-Stücke einmischen."
      },
      {
        "es": "Inclinar y formar la 'montañita'.",
        "de": "Kippen, 'Hügel' formen."
      },
      {
        "es": "Cebar con agua a 75-80°C SIN tapar la montaña.",
        "de": "Mit 75-80°C heißem Wasser aufgießen.",
        "tip": {
          "es": "Si el agua hierve, quema la yerba.",
          "de": "Kochendes Wasser verbrennt die Yerba."
        }
      }
    ]
  },
  {
    "id": "alfajor-avena",
    "country": "ar",
    "emoji": "🍪",
    "time": 30,
    "kcal": 180,
    "rating": 4.8,
    "p": 6,
    "c": 22,
    "f": 7,
    "servings": 6,
    "tags": [
      "veg"
    ],
    "name": {
      "es": "Alfajor de avena sin azúcar",
      "de": "Hafer-Alfajor ohne Zucker"
    },
    "desc": {
      "es": "El alfajor argentino versión saludable: tapitas de avena, dulce de leche light y coco rallado.",
      "de": "Der argentinische Alfajor gesund: Haferkekse, leichter Dulce de Leche und Kokosraspeln."
    },
    "ingredients": [
      {
        "qty": "1 taza",
        "es": "Avena fina",
        "de": "Feine Haferflocken"
      },
      {
        "qty": "1",
        "es": "Banana madura pisada",
        "de": "Reife Banane, zerdrückt"
      },
      {
        "qty": "2 cdas",
        "es": "Cacao amargo",
        "de": "Bitterkakao"
      },
      {
        "qty": "½ taza",
        "es": "Dulce de leche light",
        "de": "Leichter Dulce de Leche"
      },
      {
        "qty": "c/n",
        "es": "Coco rallado",
        "de": "Kokosraspeln"
      }
    ],
    "steps": [
      {
        "es": "Mezclar avena, banana y cacao hasta formar una masa.",
        "de": "Hafer, Banane und Kakao zu einem Teig mischen."
      },
      {
        "es": "Formar discos chatos y hornear 12 min a 170°C.",
        "de": "Flache Scheiben formen, 12 Min. bei 170°C backen."
      },
      {
        "es": "Enfriar y armar con dulce de leche en el medio.",
        "de": "Abkühlen, mit Dulce de Leche füllen.",
        "tip": {
          "es": "La banana reemplaza azúcar y manteca.",
          "de": "Banane ersetzt Zucker und Butter."
        }
      },
      {
        "es": "Pasar los bordes por coco rallado.",
        "de": "Ränder in Kokosraspeln wälzen."
      }
    ]
  },
  {
    "id": "choripan-art",
    "country": "ar",
    "emoji": "🌭",
    "time": 20,
    "kcal": 380,
    "rating": 4.7,
    "p": 22,
    "c": 32,
    "f": 18,
    "servings": 2,
    "tags": [],
    "name": {
      "es": "Choripán artesanal",
      "de": "Handwerklicher Choripán"
    },
    "desc": {
      "es": "Chori grillado, pan de masa madre y chimichurri casero.",
      "de": "Gegrillte Wurst, Sauerteigbrot und hausgemachtes Chimichurri."
    },
    "ingredients": [
      {
        "qty": "2",
        "es": "Chorizos parrilleros",
        "de": "Grillwürste"
      },
      {
        "qty": "2",
        "es": "Pan de masa madre",
        "de": "Sauerteigbrötchen"
      },
      {
        "qty": "½ taza",
        "es": "Perejil + ajo + ají + oliva + vinagre",
        "de": "Petersilie + Knoblauch + Chili + Öl + Essig"
      }
    ],
    "steps": [
      {
        "es": "Mariposear los chorizos.",
        "de": "Würste längs aufschneiden."
      },
      {
        "es": "A la parrilla 5 min cada lado.",
        "de": "Auf dem Grill 5 Min. pro Seite."
      },
      {
        "es": "Mezclar el chimichurri y reposar 10 min.",
        "de": "Chimichurri mischen, 10 Min. ruhen."
      },
      {
        "es": "Armar con generoso chimichurri.",
        "de": "Mit reichlich Chimichurri belegen."
      }
    ]
  },
  {
    "id": "pizza-espelta",
    "country": "ar",
    "emoji": "🍕",
    "time": 60,
    "kcal": 280,
    "rating": 4.6,
    "p": 12,
    "c": 34,
    "f": 11,
    "servings": 4,
    "tags": [
      "veg"
    ],
    "name": {
      "es": "Pizza de espelta y rúcula",
      "de": "Dinkel-Pizza mit Rucola"
    },
    "desc": {
      "es": "Masa de espelta, tomate fresco, mozzarella light y rúcula al final.",
      "de": "Dinkelteig, frische Tomate, leichte Mozzarella und Rucola obendrauf."
    },
    "ingredients": [
      {
        "qty": "300 g",
        "es": "Harina de espelta",
        "de": "Dinkelmehl"
      },
      {
        "qty": "180 ml",
        "es": "Agua tibia",
        "de": "Lauwarmes Wasser"
      },
      {
        "qty": "5 g",
        "es": "Levadura seca",
        "de": "Trockenhefe"
      },
      {
        "qty": "200 g",
        "es": "Mozzarella light",
        "de": "Leichter Mozzarella"
      },
      {
        "qty": "3",
        "es": "Tomates frescos",
        "de": "Frische Tomaten"
      },
      {
        "qty": "1 puñado",
        "es": "Rúcula fresca",
        "de": "Frische Rucola"
      }
    ],
    "steps": [
      {
        "es": "Mezclar harina, agua y levadura. Leudar 40 min.",
        "de": "Mehl, Wasser, Hefe mischen. 40 Min. gehen lassen."
      },
      {
        "es": "Estirar fina y precocinar 5 min a 220°C.",
        "de": "Dünn ausrollen, 5 Min. bei 220°C vorbacken."
      },
      {
        "es": "Cubrir con tomate y mozzarella. Horno 10 min más.",
        "de": "Mit Tomate und Mozzarella belegen. 10 Min. weiterbacken."
      },
      {
        "es": "Sacar y agregar rúcula recién al servir.",
        "de": "Erst beim Servieren Rucola dazugeben.",
        "tip": {
          "es": "La rúcula se pone amarga si va al horno.",
          "de": "Rucola wird im Ofen bitter."
        }
      }
    ]
  },
  {
    "id": "kartoffelsalat-light",
    "country": "de",
    "emoji": "🥗",
    "time": 25,
    "kcal": 220,
    "rating": 4.8,
    "p": 6,
    "c": 32,
    "f": 8,
    "servings": 2,
    "tags": [
      "veg",
      "featured"
    ],
    "name": {
      "es": "Kartoffelsalat light de Baly",
      "de": "Balys leichter Kartoffelsalat"
    },
    "desc": {
      "es": "La ensalada de papa clásica del sur de Alemania — pero sin mayonesa. Baly la reinventa con yogur griego, mostaza Dijon y pepino crocante.",
      "de": "Der süddeutsche Klassiker — aber ohne Mayo. Baly nutzt griechischen Joghurt, Dijon-Senf und knackige Gurke."
    },
    "ingredients": [
      {
        "qty": "400 g",
        "es": "Papas firmes",
        "de": "Festkochende Kartoffeln"
      },
      {
        "qty": "150 g",
        "es": "Yogur griego natural",
        "de": "Naturjoghurt (griechisch)"
      },
      {
        "qty": "1 cda",
        "es": "Mostaza Dijon",
        "de": "Dijon-Senf"
      },
      {
        "qty": "½",
        "es": "Pepino chico",
        "de": "Kleine Salatgurke"
      },
      {
        "qty": "2",
        "es": "Cebollitas de verdeo",
        "de": "Frühlingszwiebeln"
      },
      {
        "qty": "1 cda",
        "es": "Vinagre de manzana",
        "de": "Apfelessig"
      },
      {
        "qty": "c/n",
        "es": "Sal, pimienta, eneldo fresco",
        "de": "Salz, Pfeffer, frischer Dill"
      }
    ],
    "steps": [
      {
        "es": "Hervir las papas con piel 18-20 min.",
        "de": "Kartoffeln mit Schale 18-20 Min. kochen."
      },
      {
        "es": "Enfriar bajo agua fría, pelar y cortar en rodajas finas.",
        "de": "Abschrecken, schälen, in dünne Scheiben schneiden.",
        "tip": {
          "es": "Cortarlas tibias absorbe mejor el aliño.",
          "de": "Lauwarm geschnitten saugen sie das Dressing besser auf."
        }
      },
      {
        "es": "Mezclar yogur, mostaza, vinagre, sal y pimienta.",
        "de": "Joghurt, Senf, Essig, Salz und Pfeffer verrühren."
      },
      {
        "es": "Picar pepino en cubos y cebollitas en aros finos.",
        "de": "Gurke würfeln, Frühlingszwiebeln in feine Ringe schneiden."
      },
      {
        "es": "Combinar con cuidado y refrigerar 30 min.",
        "de": "Vorsichtig mischen, 30 Min. kühlen.",
        "tip": {
          "es": "El reposo es clave: los sabores se integran.",
          "de": "Ruhezeit ist entscheidend."
        }
      },
      {
        "es": "Espolvorear eneldo y servir frío.",
        "de": "Mit Dill bestreuen, kalt servieren."
      }
    ]
  },
  {
    "id": "schnitzel-horno",
    "country": "de",
    "emoji": "🍗",
    "time": 35,
    "kcal": 300,
    "rating": 4.9,
    "p": 34,
    "c": 12,
    "f": 11,
    "servings": 2,
    "tags": [
      "proteina"
    ],
    "name": {
      "es": "Schnitzel al horno crocante",
      "de": "Knuspriges Ofen-Schnitzel"
    },
    "desc": {
      "es": "El schnitzel vienés tradicional, pero al horno. Empanizado en panko para máxima textura.",
      "de": "Das traditionelle Wiener Schnitzel — aus dem Ofen. Mit Panko für extra Knusprigkeit."
    },
    "ingredients": [
      {
        "qty": "2",
        "es": "Filetes finos de pavo o cerdo",
        "de": "Dünne Puten- oder Schweinefilets"
      },
      {
        "qty": "2",
        "es": "Huevos",
        "de": "Eier"
      },
      {
        "qty": "1 taza",
        "es": "Panko",
        "de": "Panko"
      },
      {
        "qty": "½ taza",
        "es": "Harina",
        "de": "Mehl"
      },
      {
        "qty": "c/n",
        "es": "Sal, pimienta, paprika dulce",
        "de": "Salz, Pfeffer, Paprikapulver"
      },
      {
        "qty": "spray",
        "es": "Aceite",
        "de": "Öl-Spray"
      }
    ],
    "steps": [
      {
        "es": "Aplastar los filetes a 5mm.",
        "de": "Filets auf 5mm klopfen."
      },
      {
        "es": "Pasar por harina, huevo y panko.",
        "de": "Durch Mehl, Ei und Panko ziehen.",
        "tip": {
          "es": "El panko queda más crujiente que el pan rallado.",
          "de": "Panko wird knuspriger als Paniermehl."
        }
      },
      {
        "es": "Rociar con aceite ambos lados.",
        "de": "Beide Seiten mit Öl besprühen."
      },
      {
        "es": "Horno 220°C, 8 min de un lado, 6 del otro.",
        "de": "220°C, 8 Min. eine Seite, 6 Min. die andere."
      },
      {
        "es": "Servir con limón.",
        "de": "Mit Zitrone servieren."
      }
    ]
  },
  {
    "id": "bratwurst-pavo",
    "country": "de",
    "emoji": "🌭",
    "time": 20,
    "kcal": 250,
    "rating": 4.5,
    "p": 24,
    "c": 4,
    "f": 14,
    "servings": 4,
    "tags": [
      "proteina",
      "quick"
    ],
    "name": {
      "es": "Bratwurst de pavo",
      "de": "Puten-Bratwurst"
    },
    "desc": {
      "es": "La salchicha alemana versión liviana, hecha con pavo y especias tradicionales.",
      "de": "Die deutsche Wurst in leicht: Puten-Hack mit traditionellen Gewürzen."
    },
    "ingredients": [
      {
        "qty": "500 g",
        "es": "Pavo molido",
        "de": "Putenhack"
      },
      {
        "qty": "1 cdita",
        "es": "Mejorana seca",
        "de": "Getrockneter Majoran"
      },
      {
        "qty": "1 cdita",
        "es": "Nuez moscada",
        "de": "Muskatnuss"
      },
      {
        "qty": "1",
        "es": "Diente de ajo rallado",
        "de": "Knoblauchzehe, gerieben"
      },
      {
        "qty": "c/n",
        "es": "Sal, pimienta blanca",
        "de": "Salz, weißer Pfeffer"
      }
    ],
    "steps": [
      {
        "es": "Mezclar todos los ingredientes.",
        "de": "Alle Zutaten vermischen."
      },
      {
        "es": "Formar 4 salchichas y refrigerar 15 min.",
        "de": "4 Würste formen, 15 Min. kühlen."
      },
      {
        "es": "Sartén con manteca, dorar 5 min por lado.",
        "de": "In Pfanne mit Butter 5 Min. pro Seite braten."
      },
      {
        "es": "Acompañar con mostaza y chucrut.",
        "de": "Mit Senf und Sauerkraut servieren."
      }
    ]
  },
  {
    "id": "brezel-integral",
    "country": "de",
    "emoji": "🥨",
    "time": 90,
    "kcal": 180,
    "rating": 4.6,
    "p": 7,
    "c": 34,
    "f": 2,
    "servings": 6,
    "tags": [
      "veg"
    ],
    "name": {
      "es": "Brezel integral casero",
      "de": "Vollkorn-Brezel hausgemacht"
    },
    "desc": {
      "es": "El pretzel bávaro en versión integral.",
      "de": "Die bayerische Brezel als Vollkorn-Version."
    },
    "ingredients": [
      {
        "qty": "400 g",
        "es": "Harina integral",
        "de": "Vollkornmehl"
      },
      {
        "qty": "250 ml",
        "es": "Agua tibia",
        "de": "Lauwarmes Wasser"
      },
      {
        "qty": "7 g",
        "es": "Levadura",
        "de": "Hefe"
      },
      {
        "qty": "30 g",
        "es": "Bicarbonato",
        "de": "Natron"
      },
      {
        "qty": "c/n",
        "es": "Sal gruesa, semillas de sésamo",
        "de": "Grobes Salz, Sesam"
      }
    ],
    "steps": [
      {
        "es": "Amasar y leudar 1 hora.",
        "de": "Kneten, 1 Std. gehen lassen."
      },
      {
        "es": "Formar rollitos y darles forma de pretzel.",
        "de": "Rollen formen, in Brezel-Form bringen."
      },
      {
        "es": "Hervir 30s en agua con bicarbonato.",
        "de": "30 Sek. in Natronwasser kochen.",
        "tip": {
          "es": "El bicarbonato da el color marrón típico.",
          "de": "Natron gibt die typische braune Farbe."
        }
      },
      {
        "es": "Sal y sésamo. Horno 220°C, 15 min.",
        "de": "Salz und Sesam. 15 Min. bei 220°C."
      }
    ]
  },
  {
    "id": "sauerkraut-manzana",
    "country": "de",
    "emoji": "🥬",
    "time": 25,
    "kcal": 95,
    "rating": 4.4,
    "p": 3,
    "c": 18,
    "f": 1,
    "servings": 4,
    "tags": [
      "veg",
      "low",
      "quick"
    ],
    "name": {
      "es": "Sauerkraut con manzana",
      "de": "Sauerkraut mit Apfel"
    },
    "desc": {
      "es": "Chucrut tibio con manzana verde, comino y un toque de vino blanco. Probiótico natural.",
      "de": "Warmer Sauerkraut mit grünem Apfel, Kümmel und Weißwein. Natürliche Probiotika."
    },
    "ingredients": [
      {
        "qty": "500 g",
        "es": "Chucrut natural",
        "de": "Natürlicher Sauerkraut"
      },
      {
        "qty": "1",
        "es": "Manzana verde rallada",
        "de": "Geriebener grüner Apfel"
      },
      {
        "qty": "1 cdita",
        "es": "Comino entero",
        "de": "Ganze Kümmelsamen"
      },
      {
        "qty": "100 ml",
        "es": "Vino blanco",
        "de": "Weißwein"
      },
      {
        "qty": "1",
        "es": "Cebolla pequeña",
        "de": "Kleine Zwiebel"
      }
    ],
    "steps": [
      {
        "es": "Saltear cebolla 3 min.",
        "de": "Zwiebel 3 Min. anbraten."
      },
      {
        "es": "Agregar chucrut, manzana, comino y vino.",
        "de": "Sauerkraut, Apfel, Kümmel und Wein dazu."
      },
      {
        "es": "Fuego bajo 15 min, tapado.",
        "de": "15 Min. zugedeckt köcheln."
      }
    ]
  },
  {
    "id": "apfelstrudel",
    "country": "de",
    "emoji": "🥧",
    "time": 50,
    "kcal": 240,
    "rating": 4.7,
    "p": 4,
    "c": 38,
    "f": 7,
    "servings": 8,
    "tags": [
      "veg"
    ],
    "name": {
      "es": "Apfelstrudel sin azúcar",
      "de": "Apfelstrudel ohne Zucker"
    },
    "desc": {
      "es": "El strudel austríaco endulzado solo con manzana y pasas.",
      "de": "Der österreichische Strudel — nur mit Apfel und Rosinen gesüßt."
    },
    "ingredients": [
      {
        "qty": "6",
        "es": "Manzanas verdes",
        "de": "Grüne Äpfel"
      },
      {
        "qty": "1 paquete",
        "es": "Masa filo",
        "de": "Filoteig"
      },
      {
        "qty": "½ taza",
        "es": "Pasas",
        "de": "Rosinen"
      },
      {
        "qty": "50 g",
        "es": "Nueces picadas",
        "de": "Gehackte Walnüsse"
      },
      {
        "qty": "1 cdita",
        "es": "Canela",
        "de": "Zimt"
      },
      {
        "qty": "jugo",
        "es": "de medio limón",
        "de": "einer halben Zitrone"
      }
    ],
    "steps": [
      {
        "es": "Cortar manzanas. Mezclar con pasas, nueces, canela y limón.",
        "de": "Äpfel würfeln. Mit Rosinen, Nüssen, Zimt und Zitrone mischen."
      },
      {
        "es": "Extender 4 hojas de masa filo con manteca.",
        "de": "4 Filoteigblätter mit Butter bepinseln."
      },
      {
        "es": "Rellenar y enrollar con cuidado.",
        "de": "Füllen, vorsichtig aufrollen.",
        "tip": {
          "es": "La masa filo se seca rapidísimo: cubrirla con repasador húmedo.",
          "de": "Filoteig trocknet schnell — mit feuchtem Tuch abdecken."
        }
      },
      {
        "es": "Horno 180°C, 30 min.",
        "de": "180°C, 30 Min."
      }
    ]
  },
  {
    "id": "spätzle-espinaca",
    "country": "de",
    "emoji": "🍝",
    "time": 30,
    "kcal": 270,
    "rating": 4.6,
    "p": 11,
    "c": 42,
    "f": 6,
    "servings": 4,
    "tags": [
      "veg"
    ],
    "name": {
      "es": "Spätzle de espinaca",
      "de": "Spinat-Spätzle"
    },
    "desc": {
      "es": "Los fideos artesanales del sur de Alemania, con espinaca en la masa.",
      "de": "Die handgemachten Nudeln aus Süddeutschland mit Spinat im Teig."
    },
    "ingredients": [
      {
        "qty": "200 g",
        "es": "Harina",
        "de": "Mehl"
      },
      {
        "qty": "2",
        "es": "Huevos",
        "de": "Eier"
      },
      {
        "qty": "100 g",
        "es": "Espinaca cocida procesada",
        "de": "Pürierter Spinat"
      },
      {
        "qty": "50 ml",
        "es": "Leche",
        "de": "Milch"
      },
      {
        "qty": "c/n",
        "es": "Nuez moscada, sal",
        "de": "Muskat, Salz"
      }
    ],
    "steps": [
      {
        "es": "Mezclar todo hasta masa elástica.",
        "de": "Zu elastischem Teig vermischen."
      },
      {
        "es": "Pasar por colador grueso sobre agua hirviendo.",
        "de": "Durch grobes Sieb ins kochende Wasser drücken."
      },
      {
        "es": "Cuando floten, sacar con espumadera.",
        "de": "Sobald sie schwimmen, herausfischen."
      },
      {
        "es": "Saltear con manteca y nuez moscada.",
        "de": "In Butter und Muskat schwenken."
      }
    ]
  },
  {
    "id": "quark-beeren",
    "country": "de",
    "emoji": "🫐",
    "time": 5,
    "kcal": 135,
    "rating": 4.7,
    "p": 18,
    "c": 12,
    "f": 2,
    "servings": 1,
    "tags": [
      "quick",
      "veg",
      "low"
    ],
    "name": {
      "es": "Quark con frutos rojos",
      "de": "Quark mit Beeren"
    },
    "desc": {
      "es": "Postre alemán con 18g de proteína por porción.",
      "de": "Deutsches Dessert mit 18g Protein pro Portion."
    },
    "ingredients": [
      {
        "qty": "200 g",
        "es": "Quark magro",
        "de": "Magerquark"
      },
      {
        "qty": "1 cdita",
        "es": "Miel",
        "de": "Honig"
      },
      {
        "qty": "½ taza",
        "es": "Frutos rojos mixtos",
        "de": "Gemischte Beeren"
      },
      {
        "qty": "1 cda",
        "es": "Almendras laminadas",
        "de": "Mandelblättchen"
      }
    ],
    "steps": [
      {
        "es": "Mezclar quark con miel.",
        "de": "Quark mit Honig cremig rühren."
      },
      {
        "es": "Coronar con frutos rojos y almendras.",
        "de": "Mit Beeren und Mandeln toppen.",
        "tip": {
          "es": "Perfecto post-entrenamiento.",
          "de": "Perfekt nach dem Training."
        }
      }
    ]
  },
  {
    "id": "rote-grütze",
    "country": "de",
    "emoji": "🍓",
    "time": 20,
    "kcal": 110,
    "rating": 4.5,
    "p": 2,
    "c": 24,
    "f": 0,
    "servings": 4,
    "tags": [
      "veg",
      "low"
    ],
    "name": {
      "es": "Rote Grütze (frutos rojos)",
      "de": "Rote Grütze"
    },
    "desc": {
      "es": "Compota fría del norte alemán: frambuesa, cereza, grosella.",
      "de": "Kalte Beerenkompott aus Norddeutschland."
    },
    "ingredients": [
      {
        "qty": "500 g",
        "es": "Frutos rojos mixtos",
        "de": "Gemischte Beeren"
      },
      {
        "qty": "100 ml",
        "es": "Jugo de uva",
        "de": "Traubensaft"
      },
      {
        "qty": "2 cdas",
        "es": "Maicena",
        "de": "Speisestärke"
      },
      {
        "qty": "1 cda",
        "es": "Miel (opcional)",
        "de": "Honig (optional)"
      }
    ],
    "steps": [
      {
        "es": "Hervir los frutos rojos con jugo.",
        "de": "Beeren mit Saft aufkochen."
      },
      {
        "es": "Disolver maicena en agua fría e incorporar.",
        "de": "Stärke in kaltem Wasser auflösen, einrühren."
      },
      {
        "es": "Cocinar 2 min hasta espesar.",
        "de": "2 Min. eindicken lassen."
      },
      {
        "es": "Servir frío.",
        "de": "Kalt servieren."
      }
    ]
  }
];

// Goal calculation using Mifflin–St Jeor (clinical standard)
export function calcGoal(profile) {
  const p = profile;
  const bmr = (10 * p.weight) + (6.25 * p.height) - (5 * p.age) + (p.sex === 'm' ? 5 : -161);
  let tdee = Math.round(bmr * p.activity);
  if (p.goal === 'lose') tdee -= 400;
  else if (p.goal === 'gain') tdee += 300;
  return Math.max(1200, tdee);
}

// Scale a quantity string like "400 g" or "½ taza" by a ratio
export function scaleQty(qty, ratio) {
  if (ratio === 1) return qty;
  const m = String(qty).match(/^([\d.,/]+)\s*(.*)$/);
  if (!m) return qty;
  let n = parseFloat(m[1].replace(',', '.'));
  if (isNaN(n)) return qty;
  n = n * ratio;
  const display = n % 1 === 0 ? n.toString() : n.toFixed(1).replace(/\.0$/, '');
  return display + (m[2] ? ' ' + m[2] : '');
}

export function recipeMatchesFilter(r, f) {
  if (f === 'all') return true;
  if (f === 'ar' || f === 'de') return r.country === f;
  if (f === 'quick') return r.time <= 20;
  if (f === 'veg') return r.tags.includes('veg');
  if (f === 'low') return r.kcal < 250;
  return true;
}
