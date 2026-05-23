// recipes.js — Now 26 bilingual recipes (ES/DE)
// 18 originals (9 AR + 9 DE) + 8 home recipes (tagged "casa")
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
  },
  {
    "id": "spaghetti-bolognese",
    "country": "ar",
    "emoji": "🍝",
    "time": 60,
    "kcal": 520,
    "rating": 4.9,
    "p": 28,
    "c": 58,
    "f": 16,
    "servings": 4,
    "tags": [
      "casa"
    ],
    "name": {
      "es": "Spaghetti bolognese",
      "de": "Spaghetti Bolognese"
    },
    "desc": {
      "es": "El clásico ragú italiano cocinado a fuego lento. Lo importante no es la receta, es el tiempo: cuanto más reposa la salsa, más rico queda.",
      "de": "Das klassische italienische Ragù — langsam geschmort. Das Geheimnis ist nicht das Rezept, sondern die Zeit: je länger die Sauce zieht, desto besser."
    },
    "ingredients": [
      {
        "qty": "400 g",
        "es": "Spaghetti",
        "de": "Spaghetti"
      },
      {
        "qty": "500 g",
        "es": "Carne picada (mitad vaca, mitad cerdo)",
        "de": "Hackfleisch (halb Rind, halb Schwein)"
      },
      {
        "qty": "1",
        "es": "Cebolla grande picada",
        "de": "Große Zwiebel, gehackt"
      },
      {
        "qty": "2",
        "es": "Zanahorias en cubitos",
        "de": "Karotten, gewürfelt"
      },
      {
        "qty": "2",
        "es": "Ramas de apio picadas",
        "de": "Selleriestangen, gehackt"
      },
      {
        "qty": "2",
        "es": "Dientes de ajo",
        "de": "Knoblauchzehen"
      },
      {
        "qty": "800 g",
        "es": "Tomate triturado",
        "de": "Passierte Tomaten"
      },
      {
        "qty": "150 ml",
        "es": "Vino tinto",
        "de": "Rotwein"
      },
      {
        "qty": "1 cdita",
        "es": "Orégano, hojas de laurel",
        "de": "Oregano, Lorbeerblätter"
      },
      {
        "qty": "c/n",
        "es": "Sal, pimienta, queso parmesano",
        "de": "Salz, Pfeffer, Parmesan"
      }
    ],
    "steps": [
      {
        "es": "En olla pesada, rehogar cebolla, zanahoria y apio 10 min a fuego suave (el famoso 'soffritto').",
        "de": "In schwerem Topf Zwiebel, Karotte und Sellerie 10 Min. bei mittlerer Hitze anschwitzen (das berühmte 'Soffritto').",
        "tip": {
          "es": "Este paso es clave: las verduras tienen que estar tiernas y dulces antes de meter la carne.",
          "de": "Dieser Schritt ist entscheidend: Das Gemüse muss weich und süß sein, bevor das Fleisch dazu kommt."
        }
      },
      {
        "es": "Agregar ajo y carne. Romper bien la carne con cuchara y dorar 8-10 min.",
        "de": "Knoblauch und Hackfleisch dazu. Mit dem Löffel zerkleinern und 8-10 Min. anbraten."
      },
      {
        "es": "Incorporar vino tinto y dejar evaporar el alcohol 3 min.",
        "de": "Rotwein angießen, 3 Min. einkochen lassen."
      },
      {
        "es": "Sumar tomate, laurel, orégano, sal y pimienta.",
        "de": "Tomaten, Lorbeer, Oregano, Salz und Pfeffer dazugeben."
      },
      {
        "es": "Tapar y cocinar a fuego mínimo 35-40 min, revolviendo de vez en cuando.",
        "de": "Zugedeckt 35-40 Min. auf kleinster Stufe köcheln, gelegentlich umrühren.",
        "tip": {
          "es": "Si la salsa queda muy seca, agregá un chorrito de agua de la pasta.",
          "de": "Wenn die Sauce zu trocken wird, etwas Nudelwasser dazugeben."
        }
      },
      {
        "es": "Hervir los spaghetti al dente (1 min menos que indica el paquete).",
        "de": "Spaghetti al dente kochen (1 Min. weniger als Packungsangabe)."
      },
      {
        "es": "Mezclar la pasta con la salsa en la olla 1 min. Servir con parmesano.",
        "de": "Pasta 1 Min. mit der Sauce vermengen. Mit Parmesan servieren."
      }
    ]
  },
  {
    "id": "carbonara",
    "country": "ar",
    "emoji": "🍝",
    "time": 25,
    "kcal": 580,
    "rating": 4.8,
    "p": 25,
    "c": 60,
    "f": 22,
    "servings": 4,
    "tags": [
      "casa",
      "quick"
    ],
    "name": {
      "es": "Carbonara auténtica",
      "de": "Echte Carbonara"
    },
    "desc": {
      "es": "La verdadera receta romana: sin crema, sin cebolla, solo huevos, panceta, pecorino y mucha paciencia. La textura sale de la técnica.",
      "de": "Das echte römische Rezept: keine Sahne, keine Zwiebel — nur Eier, Pancetta, Pecorino und Geduld. Die Cremigkeit kommt aus der Technik."
    },
    "ingredients": [
      {
        "qty": "400 g",
        "es": "Spaghetti o rigatoni",
        "de": "Spaghetti oder Rigatoni"
      },
      {
        "qty": "200 g",
        "es": "Panceta o guanciale en bastones",
        "de": "Pancetta oder Guanciale, in Stäbchen"
      },
      {
        "qty": "4",
        "es": "Yemas de huevo + 1 huevo entero",
        "de": "Eigelbe + 1 ganzes Ei"
      },
      {
        "qty": "80 g",
        "es": "Pecorino rallado fino (o parmesano)",
        "de": "Pecorino fein gerieben (oder Parmesan)"
      },
      {
        "qty": "c/n",
        "es": "Pimienta negra molida en el momento",
        "de": "Frisch gemahlener schwarzer Pfeffer"
      },
      {
        "qty": "c/n",
        "es": "Sal gruesa",
        "de": "Grobes Salz"
      }
    ],
    "steps": [
      {
        "es": "Poner agua a hervir con bastante sal.",
        "de": "Reichlich gesalzenes Wasser zum Kochen bringen."
      },
      {
        "es": "En sartén SIN aceite, dorar la panceta a fuego medio hasta que esté crocante (la grasa propia es suficiente).",
        "de": "Pancetta in Pfanne OHNE Öl bei mittlerer Hitze knusprig braten — das eigene Fett reicht."
      },
      {
        "es": "En un bol, batir yemas + huevo entero + pecorino + mucha pimienta hasta crema espesa.",
        "de": "In Schüssel Eigelbe + ganzes Ei + Pecorino + viel Pfeffer zu dicker Creme verquirlen."
      },
      {
        "es": "Hervir la pasta al dente. ANTES de colar, reservar 1 taza de agua de cocción.",
        "de": "Pasta al dente kochen. VOR dem Abgießen 1 Tasse Kochwasser aufbewahren.",
        "tip": {
          "es": "El agua de la pasta es ORO — el almidón es lo que liga la salsa.",
          "de": "Das Nudelwasser ist GOLD — die Stärke bindet die Sauce."
        }
      },
      {
        "es": "Apagar el fuego de la sartén con la panceta. Tirar la pasta encima y mezclar.",
        "de": "Hitze unter der Pancetta-Pfanne ausschalten. Pasta dazugeben und mischen."
      },
      {
        "es": "FUERA del fuego, agregar la mezcla de huevos revolviendo rápido. Sumar agua caliente de a poco hasta lograr salsa cremosa.",
        "de": "AUSSERHALB der Hitze die Eimischung schnell unterrühren. Heißes Nudelwasser nach und nach zugeben, bis cremig.",
        "tip": {
          "es": "Si dejás el fuego prendido, los huevos se cocinan y queda revuelto en vez de carbonara. El truco está en el calor RESIDUAL.",
          "de": "Wenn die Hitze an bleibt, gerinnen die Eier — dann hast du Rührei statt Carbonara. Die Restwärme reicht."
        }
      },
      {
        "es": "Servir inmediatamente con más pecorino y pimienta arriba.",
        "de": "Sofort servieren, mit mehr Pecorino und Pfeffer obendrauf."
      }
    ]
  },
  {
    "id": "milanesa-napolitana",
    "country": "ar",
    "emoji": "🍖",
    "time": 45,
    "kcal": 480,
    "rating": 4.9,
    "p": 38,
    "c": 22,
    "f": 24,
    "servings": 4,
    "tags": [
      "casa",
      "proteina"
    ],
    "name": {
      "es": "Milanesa napolitana",
      "de": "Milanesa Napolitana"
    },
    "desc": {
      "es": "La milanesa con jamón, salsa de tomate y mozzarella derretida arriba. El plato más argentino que existe, a pesar del nombre.",
      "de": "Das Milanesa mit Schinken, Tomatensauce und geschmolzenem Mozzarella obendrauf. Das argentinischste Gericht überhaupt — trotz des Namens."
    },
    "ingredients": [
      {
        "qty": "4",
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
        "es": "Pan rallado",
        "de": "Paniermehl"
      },
      {
        "qty": "4 fetas",
        "es": "Jamón cocido",
        "de": "Gekochter Schinken (4 Scheiben)"
      },
      {
        "qty": "200 g",
        "es": "Mozzarella en fetas o rallada",
        "de": "Mozzarella, in Scheiben oder gerieben"
      },
      {
        "qty": "1 taza",
        "es": "Salsa de tomate casera",
        "de": "Hausgemachte Tomatensauce"
      },
      {
        "qty": "c/n",
        "es": "Orégano, ajo, perejil",
        "de": "Oregano, Knoblauch, Petersilie"
      },
      {
        "qty": "c/n",
        "es": "Aceite para freír (o spray para horno)",
        "de": "Bratöl (oder Öl-Spray für den Ofen)"
      }
    ],
    "steps": [
      {
        "es": "Pasar los bifes por huevo batido con ajo y perejil, luego por pan rallado. Presionar bien.",
        "de": "Steaks durch Ei mit Knoblauch und Petersilie ziehen, dann durch Paniermehl. Gut andrücken."
      },
      {
        "es": "Freír las milanesas en aceite caliente 2 min cada lado (o al horno 220°C, 12 min con vuelta).",
        "de": "In heißem Öl 2 Min. pro Seite braten (oder im Ofen bei 220°C, 12 Min. mit Wenden)."
      },
      {
        "es": "Acomodar las milanesas en una placa.",
        "de": "Milanesas auf Backblech legen.",
        "tip": {
          "es": "Si te quedó muy aceitosa, pasala por papel absorbente antes de gratinar.",
          "de": "Falls zu fettig, vorher auf Küchenpapier abtropfen."
        }
      },
      {
        "es": "Cubrir cada una con salsa de tomate, una feta de jamón y mozzarella arriba.",
        "de": "Jede mit Tomatensauce, einer Scheibe Schinken und Mozzarella belegen."
      },
      {
        "es": "Espolvorear orégano y gratinar al horno 8-10 min hasta que la mozzarella burbujee.",
        "de": "Mit Oregano bestreuen und 8-10 Min. im Ofen gratinieren, bis der Mozzarella blubbert."
      },
      {
        "es": "Servir con papas al horno o ensalada.",
        "de": "Mit Ofenkartoffeln oder Salat servieren."
      }
    ]
  },
  {
    "id": "tarta-espinaca-sardinas",
    "country": "ar",
    "emoji": "🥧",
    "time": 50,
    "kcal": 340,
    "rating": 4.5,
    "p": 18,
    "c": 24,
    "f": 17,
    "servings": 6,
    "tags": [
      "casa"
    ],
    "name": {
      "es": "Tarta de espinaca y sardinas",
      "de": "Spinat-Sardinen-Tarte"
    },
    "desc": {
      "es": "Una combinación rara pero deliciosa: la espinaca cremosa con el sabor profundo de las sardinas. Plato económico, lleno de omega-3 y hierro.",
      "de": "Eine ungewöhnliche aber köstliche Kombination: cremiger Spinat trifft auf den intensiven Geschmack der Sardinen. Günstiges Gericht voller Omega-3 und Eisen."
    },
    "ingredients": [
      {
        "qty": "2",
        "es": "Tapas de tarta",
        "de": "Tarteböden"
      },
      {
        "qty": "500 g",
        "es": "Espinaca fresca (o 300g congelada)",
        "de": "Frischer Spinat (oder 300g tiefgekühlt)"
      },
      {
        "qty": "2 latas",
        "es": "Sardinas en aceite (escurridas)",
        "de": "Sardinen in Öl (abgetropft)"
      },
      {
        "qty": "3",
        "es": "Huevos",
        "de": "Eier"
      },
      {
        "qty": "100 ml",
        "es": "Crema de leche",
        "de": "Sahne"
      },
      {
        "qty": "1",
        "es": "Cebolla picada",
        "de": "Zwiebel, gehackt"
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
        "es": "Saltear la cebolla 5 min. Agregar la espinaca y cocinar hasta que se reduzca.",
        "de": "Zwiebel 5 Min. anbraten. Spinat dazu, einkochen lassen."
      },
      {
        "es": "Apretar la espinaca para sacar el agua y picarla.",
        "de": "Spinat gut ausdrücken und hacken.",
        "tip": {
          "es": "Si queda con agua, la tarta se humedece toda. Sacá hasta la última gota.",
          "de": "Wenn noch Wasser drin ist, wird die Tarte matschig — sehr gut ausdrücken."
        }
      },
      {
        "es": "Desmenuzar las sardinas con un tenedor (sin las espinas grandes).",
        "de": "Sardinen mit Gabel zerdrücken (große Gräten entfernen)."
      },
      {
        "es": "Mezclar espinaca, sardinas, huevos, crema, queso, nuez moscada, sal y pimienta.",
        "de": "Spinat, Sardinen, Eier, Sahne, Käse, Muskat, Salz und Pfeffer vermengen."
      },
      {
        "es": "Forrar molde con una tapa, volcar el relleno y cubrir con la otra. Sellar bordes.",
        "de": "Form mit einem Teigboden auslegen, Füllung einfüllen, mit zweitem Boden bedecken. Ränder gut verschließen."
      },
      {
        "es": "Pinchar la masa y hornear 30 min a 180°C hasta dorar.",
        "de": "Teig einstechen und 30 Min. bei 180°C goldbraun backen."
      }
    ]
  },
  {
    "id": "pollo-papas-crema",
    "country": "ar",
    "emoji": "🍗",
    "time": 75,
    "kcal": 520,
    "rating": 4.8,
    "p": 35,
    "c": 32,
    "f": 24,
    "servings": 4,
    "tags": [
      "casa",
      "proteina"
    ],
    "name": {
      "es": "Pollo al horno con papas y crema",
      "de": "Ofenhähnchen mit Kartoffeln und Sahne"
    },
    "desc": {
      "es": "El plato de los domingos en familia. Pollo jugoso, papas que se impregnan del jugo, y la crema que une todo. Una bandeja, todo al horno.",
      "de": "Das Sonntagsessen für die Familie. Saftiges Hähnchen, Kartoffeln die den Saft aufnehmen, und Sahne die alles verbindet. Eine Form, alles im Ofen."
    },
    "ingredients": [
      {
        "qty": "1",
        "es": "Pollo entero trozado (o 8 muslos)",
        "de": "Ganzes Hähnchen, zerlegt (oder 8 Schenkel)"
      },
      {
        "qty": "6",
        "es": "Papas medianas en gajos",
        "de": "Mittlere Kartoffeln, in Spalten"
      },
      {
        "qty": "2",
        "es": "Cebollas en aros",
        "de": "Zwiebeln, in Ringen"
      },
      {
        "qty": "200 ml",
        "es": "Crema de leche",
        "de": "Sahne"
      },
      {
        "qty": "100 ml",
        "es": "Vino blanco",
        "de": "Weißwein"
      },
      {
        "qty": "4",
        "es": "Dientes de ajo",
        "de": "Knoblauchzehen"
      },
      {
        "qty": "1 cda",
        "es": "Mostaza Dijon",
        "de": "Dijon-Senf"
      },
      {
        "qty": "c/n",
        "es": "Romero, tomillo, sal, pimienta, oliva",
        "de": "Rosmarin, Thymian, Salz, Pfeffer, Olivenöl"
      }
    ],
    "steps": [
      {
        "es": "Macerar el pollo 30 min con ajo machacado, mostaza, romero, sal, pimienta y un chorro de oliva.",
        "de": "Hähnchen 30 Min. marinieren mit zerdrücktem Knoblauch, Senf, Rosmarin, Salz, Pfeffer und Olivenöl."
      },
      {
        "es": "En una fuente grande, acomodar las papas y cebollas en la base.",
        "de": "In große Auflaufform Kartoffeln und Zwiebeln als Boden legen."
      },
      {
        "es": "Colocar el pollo encima con todo el adobo.",
        "de": "Hähnchen mit der ganzen Marinade darüber legen."
      },
      {
        "es": "Mezclar crema con vino blanco y verter por encima.",
        "de": "Sahne mit Weißwein verquirlen und darübergießen.",
        "tip": {
          "es": "La crema con vino se transforma en una salsa hermosa cuando se cocina con el jugo del pollo.",
          "de": "Sahne und Wein verwandeln sich mit dem Hähnchensaft in eine wunderbare Sauce."
        }
      },
      {
        "es": "Horno 200°C, 50-60 min. Tapar con papel aluminio los primeros 30 min para que no se queme la piel.",
        "de": "Bei 200°C 50-60 Min. backen. Die ersten 30 Min. mit Alufolie abdecken, damit die Haut nicht verbrennt."
      },
      {
        "es": "Destapar los últimos 15 min para que el pollo se dore.",
        "de": "Die letzten 15 Min. ohne Folie, damit das Hähnchen knusprig wird."
      },
      {
        "es": "Servir con la salsa de la fuente por encima.",
        "de": "Mit der Sauce aus der Form servieren."
      }
    ]
  },
  {
    "id": "salmon-verduras",
    "country": "ar",
    "emoji": "🐟",
    "time": 30,
    "kcal": 410,
    "rating": 4.7,
    "p": 32,
    "c": 18,
    "f": 22,
    "servings": 2,
    "tags": [
      "casa",
      "proteina"
    ],
    "name": {
      "es": "Salmón con verduras al horno",
      "de": "Lachs mit Ofengemüse"
    },
    "desc": {
      "es": "Rápido, saludable y de pocas calorías. Omega-3 + verduras = una de las mejores cenas posibles. Todo en una bandeja, mínimo lavado.",
      "de": "Schnell, gesund, kalorienarm. Omega-3 + Gemüse = eines der besten Abendessen. Alles auf einem Blech, minimaler Abwasch."
    },
    "ingredients": [
      {
        "qty": "2",
        "es": "Filetes de salmón (180g cada uno)",
        "de": "Lachsfilets (je 180g)"
      },
      {
        "qty": "1",
        "es": "Calabacín en rodajas",
        "de": "Zucchini, in Scheiben"
      },
      {
        "qty": "1",
        "es": "Morrón rojo en tiras",
        "de": "Rote Paprika, in Streifen"
      },
      {
        "qty": "200 g",
        "es": "Tomates cherry",
        "de": "Kirschtomaten"
      },
      {
        "qty": "1",
        "es": "Cebolla morada en aros",
        "de": "Rote Zwiebel, in Ringen"
      },
      {
        "qty": "2",
        "es": "Dientes de ajo en láminas",
        "de": "Knoblauchzehen, in Scheiben"
      },
      {
        "qty": "1",
        "es": "Limón en rodajas",
        "de": "Zitrone, in Scheiben"
      },
      {
        "qty": "c/n",
        "es": "Eneldo, oliva, sal, pimienta",
        "de": "Dill, Olivenöl, Salz, Pfeffer"
      }
    ],
    "steps": [
      {
        "es": "Precalentar horno a 200°C.",
        "de": "Ofen auf 200°C vorheizen."
      },
      {
        "es": "En placa con papel manteca, distribuir todas las verduras con ajo, sal, pimienta y un buen chorro de oliva.",
        "de": "Auf Backblech mit Backpapier alle Gemüse mit Knoblauch, Salz, Pfeffer und reichlich Olivenöl verteilen."
      },
      {
        "es": "Hornear las verduras 10 min solas.",
        "de": "Gemüse 10 Min. alleine vorbacken.",
        "tip": {
          "es": "Las verduras tardan más que el salmón, por eso van primero.",
          "de": "Gemüse braucht länger als Lachs — deshalb zuerst."
        }
      },
      {
        "es": "Sacar, hacer espacio y colocar los filetes de salmón.",
        "de": "Herausnehmen, Platz schaffen und Lachsfilets darauf legen."
      },
      {
        "es": "Salpimentar el salmón, agregar rodajas de limón y eneldo arriba.",
        "de": "Lachs würzen, Zitronenscheiben und Dill darauflegen."
      },
      {
        "es": "Horno 12-14 min más, hasta que el salmón se desmenuze fácil con un tenedor.",
        "de": "Weitere 12-14 Min. backen, bis der Lachs leicht mit der Gabel zerteilt werden kann."
      },
      {
        "es": "Servir directo de la placa.",
        "de": "Direkt vom Blech servieren."
      }
    ]
  },
  {
    "id": "flan-casero",
    "country": "ar",
    "emoji": "🍮",
    "time": 60,
    "kcal": 220,
    "rating": 4.9,
    "p": 7,
    "c": 32,
    "f": 7,
    "servings": 6,
    "tags": [
      "casa"
    ],
    "name": {
      "es": "Flan casero con caramelo",
      "de": "Hausgemachter Flan mit Karamell"
    },
    "desc": {
      "es": "El postre de la abuela. Cremoso, con caramelo amargo en la base. Tres ingredientes y mucha paciencia para que no se corte.",
      "de": "Das Dessert von Oma. Cremig, mit bitterem Karamell am Boden. Drei Zutaten und viel Geduld, damit es nicht gerinnt."
    },
    "ingredients": [
      {
        "qty": "6",
        "es": "Huevos",
        "de": "Eier"
      },
      {
        "qty": "1 lata",
        "es": "Leche condensada",
        "de": "Kondensmilch (1 Dose)"
      },
      {
        "qty": "500 ml",
        "es": "Leche entera",
        "de": "Vollmilch"
      },
      {
        "qty": "1 cdita",
        "es": "Esencia de vainilla",
        "de": "Vanilleextrakt"
      },
      {
        "qty": "½ taza",
        "es": "Azúcar (para el caramelo)",
        "de": "Zucker (für Karamell)"
      },
      {
        "qty": "2 cdas",
        "es": "Agua (para el caramelo)",
        "de": "Wasser (für Karamell)"
      }
    ],
    "steps": [
      {
        "es": "Caramelo: en olla a fuego medio, derretir el azúcar con el agua sin revolver hasta que tenga color ámbar.",
        "de": "Karamell: Zucker mit Wasser bei mittlerer Hitze ohne Rühren schmelzen, bis bernsteinfarben.",
        "tip": {
          "es": "Mové la olla con la mano, no la cuchara, así no se cristaliza.",
          "de": "Topf schwenken statt rühren — sonst kristallisiert der Zucker."
        }
      },
      {
        "es": "Volcar rápido el caramelo en el molde, girando para cubrir base y paredes. Cuidado, está hirviendo.",
        "de": "Karamell schnell in die Form gießen, drehen für Boden und Wände. Vorsicht, sehr heiß."
      },
      {
        "es": "Batir suavemente los huevos con la leche condensada y la vainilla. NO espumar.",
        "de": "Eier sanft mit Kondensmilch und Vanille verquirlen. NICHT schaumig schlagen.",
        "tip": {
          "es": "Si batís fuerte, te entra aire y quedan agujeritos en el flan.",
          "de": "Bei starkem Schlagen entstehen Luftblasen, die Löcher im Flan machen."
        }
      },
      {
        "es": "Incorporar la leche entera mezclando con cuchara, no batidor.",
        "de": "Vollmilch mit Löffel unterrühren, nicht mit Schneebesen."
      },
      {
        "es": "Colar la mezcla por un tamiz fino para eliminar grumos. Volcar sobre el caramelo.",
        "de": "Mischung durch feines Sieb gießen, um Klümpchen zu entfernen. Über das Karamell gießen."
      },
      {
        "es": "Cocinar a baño María en horno a 160°C durante 45-50 min. Está listo cuando tiembla apenas en el centro.",
        "de": "Im Wasserbad bei 160°C 45-50 Min. backen. Fertig, wenn die Mitte nur leicht wackelt."
      },
      {
        "es": "Enfriar a temperatura ambiente y luego MÍNIMO 4 horas en heladera antes de desmoldar.",
        "de": "Bei Raumtemperatur abkühlen, dann MINDESTENS 4 Std. im Kühlschrank ruhen lassen vor dem Stürzen."
      }
    ]
  },
  {
    "id": "tagliatelle-salmone",
    "country": "ar",
    "emoji": "🍝",
    "time": 25,
    "kcal": 490,
    "rating": 4.7,
    "p": 22,
    "c": 56,
    "f": 18,
    "servings": 4,
    "tags": [
      "casa",
      "quick"
    ],
    "name": {
      "es": "Tagliatelle al salmone",
      "de": "Tagliatelle al Salmone"
    },
    "desc": {
      "es": "El plato de pasta italiano más elegante en 25 minutos. Salmón ahumado, crema, eneldo y limón — pocos ingredientes, mucho sabor.",
      "de": "Das eleganteste italienische Pastagericht in 25 Minuten. Räucherlachs, Sahne, Dill und Zitrone — wenige Zutaten, viel Geschmack."
    },
    "ingredients": [
      {
        "qty": "400 g",
        "es": "Tagliatelle (mejor fresca)",
        "de": "Tagliatelle (am besten frisch)"
      },
      {
        "qty": "200 g",
        "es": "Salmón ahumado en tiras",
        "de": "Räucherlachs, in Streifen"
      },
      {
        "qty": "200 ml",
        "es": "Crema de leche",
        "de": "Sahne"
      },
      {
        "qty": "1",
        "es": "Cebolla pequeña picada",
        "de": "Kleine Zwiebel, gehackt"
      },
      {
        "qty": "50 ml",
        "es": "Vodka (opcional pero recomendado)",
        "de": "Wodka (optional, empfohlen)"
      },
      {
        "qty": "½",
        "es": "Limón (jugo y ralladura)",
        "de": "Zitrone (Saft und Schale)"
      },
      {
        "qty": "c/n",
        "es": "Eneldo fresco, sal, pimienta, manteca",
        "de": "Frischer Dill, Salz, Pfeffer, Butter"
      }
    ],
    "steps": [
      {
        "es": "Poner agua a hervir para la pasta con sal.",
        "de": "Gesalzenes Wasser für die Pasta aufsetzen."
      },
      {
        "es": "En sartén con una nuez de manteca, rehogar la cebolla a fuego suave hasta que esté translúcida (5 min).",
        "de": "In Pfanne mit Butter Zwiebel bei mittlerer Hitze glasig dünsten (5 Min.)."
      },
      {
        "es": "Agregar el vodka (si usás) y dejar evaporar 1 min.",
        "de": "Wodka (falls verwendet) zugeben, 1 Min. einkochen.",
        "tip": {
          "es": "El vodka realza el sabor del salmón sin dejar gusto a alcohol.",
          "de": "Wodka verstärkt den Lachsgeschmack, ohne nach Alkohol zu schmecken."
        }
      },
      {
        "es": "Sumar la crema y la mitad del salmón. Cocinar 3 min hasta espesar levemente.",
        "de": "Sahne und die Hälfte des Lachses zugeben. 3 Min. leicht eindicken lassen."
      },
      {
        "es": "Hervir la pasta al dente. Reservar ½ taza de agua antes de colar.",
        "de": "Pasta al dente kochen. ½ Tasse Kochwasser aufbewahren vor dem Abgießen."
      },
      {
        "es": "Mezclar la pasta con la salsa en la sartén. Agregar el resto del salmón, el jugo y ralladura de limón.",
        "de": "Pasta in der Pfanne mit der Sauce mischen. Restlichen Lachs, Zitronensaft und -schale zugeben."
      },
      {
        "es": "Si está seca, agregar agua de la pasta de a poco. Terminar con eneldo fresco arriba.",
        "de": "Falls zu trocken, Nudelwasser schluckweise zugeben. Mit frischem Dill garnieren."
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
  if (f === 'casa') return r.tags.includes('casa');
  if (f === 'quick') return r.time <= 20;
  if (f === 'veg') return r.tags.includes('veg');
  if (f === 'low') return r.kcal < 250;
  return true;
}
