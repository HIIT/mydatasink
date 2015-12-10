/**
 * Created by double on 02/09/15.
 */

var DSINK_API_BASE_URI = 'http://dhr-demo.csc.fi:20001/api/v0.1';

var DSINK_REGISTER_URI = DSINK_API_BASE_URI + '/user';
var DSINK_LOGIN_URI = DSINK_API_BASE_URI + '/auth';
var DSINK_RESOURCE_URI = DSINK_API_BASE_URI + '/resource';

//

//var CONFIG_URI = 'http://178.62.244.150:8080/config'
//$.ajax({
//                type: "GET",
//                url: CONFIG_URI,
//                data: "",
//                dataType: "json",
//                contentType: "application/json",
//                success: function (data) {
//                    CONFIG = data;
//                },
//                error: function () {
//                    alert("Failed to get config file from:"+CONFIG_URI);
//                }
//        });





 // Basicly, this UI can't always get latest config file.
 // copy config file to config = {} instead
 // This UI won't use it
var config = {
  "operators": {
    "1": {
      "name": "DataOperator",
      "desc": "The one and only DataOperator",
      "network": {
        "ip_public": "86.50.28.136",
        "ip_private": "127.0.0.1",
        "port_api": "10000",
        "port_http": "80",
        "port_https": "443"
      }
    }
  },
  "sources": {
    "1": {
      "name": "DataSource-HealthAndFit",
      "description":{
        "desc_short":"DataSource based on Health and Fitness Data",
        "desc_long":"Health is the level of functional or metabolic efficiency of a living organism. In humans it is the ability of individuals or communities to adapt and self-manage when facing physical, mental or social challenges. The World Health Organization (WHO) defined health in its broader sense in its 1948 constitution as a state of complete physical, mental, and social well-being and not merely the absence of disease or infirmity. (en.wikipedia.org/wiki/Health)",
        "img_url_logo":"http://cc.oulu.fi/~jylikant/dhr/serviceIMGs/DataSource-Jogging-logo.png",
        "img_url_banner":"http://cc.oulu.fi/~jylikant/dhr/serviceIMGs/DataSource-Jogging-banner-image.png",
        "img_url_overview":"http://cc.oulu.fi/~jylikant/dhr/serviceIMGs/DataSource-Jogging-overview-image.png"
      },
      "categories":[
        "Health.Diastolic-Blood-Pressure",
        "Health.Systolic-Blood-Pressure",
        "Health.Heart-Rate",
        "Health.Sleep-efficiency",
        "Health.Minutes-deep-sleep",
        "Health.Awakenings-count",
        "Health.Minutes-asleep",
        "Health.Minutes-awake",
        "Health.Minutes-in-bed",
        "Health.Minutes-light-sleep",
        "Health.Minutes-REM-sleep",
        "Fitness.Weight",
        "Fitness.Distance-travelled",
        "Fitness.Calories-burned",
        "Fitness.Fat-free",
        "Fitness.Fat-mass",
        "Fitness.Elevation-travelled",
        "Fitness.Intense-exercise",
        "Fitness.Moderate-exercise",
        "Fitness.Number-of-steps",
        "Fitness.Soft-exercise"
      ],
      "labels":[
        "new",
        "popular"
      ],
      "commonConsents":[
        "fa-hdd-o",
        "fa-building",
        "fa-diamond",
        "fa-cc"
      ],
      "network": {
        "ip_public": "178.62.244.150",
        "ip_private": "10.133.57.249",
        "port_api": "8081",
        "port_http": "80",
        "port_https": "443",
        "data_api": "/api/v0.1/resource"
      }
    },
    "2": {
      "name": "DataSource-Location",
      "description":{
        "desc_short": "DataSource based on Location Data",
        "desc_long": "The terms location and place in geography are used to identify a point or an area on the Earth's surface or elsewhere. The term location generally implies a higher degree of certainty than place, which often indicates an entity with an ambiguous boundary, relying more on human/social attributes of place identity and sense of place than on geometry. The distinction between space and place is considered a central concern of geography, and has been addressed by prominent scholars such as Yi-Fu Tuan and John Agnew. (en.wikipedia.org/wiki/Location_(geography))",
        "img_url_logo": "http://cc.oulu.fi/~jylikant/dhr/serviceIMGs/DataSource-Location-logo.png",
        "img_url_banner": "http://cc.oulu.fi/~jylikant/dhr/serviceIMGs/DataSource-Location-banner-image.png",
        "img_url_overview": "http://cc.oulu.fi/~jylikant/dhr/serviceIMGs/DataSource-Location-overview-image.png"
      },
      "categories":[
        "Fitness.Location.Biking",
        "Fitness.Location.Hiking"
       ],
      "labels":[
        "new",
        "popular"
       ],
      "commonConsents":[
        "fa-hdd-o",
        "fa-building",
        "fa-diamond",
        "fa-cc"
      ],
      "network": {
        "ip_public": "178.62.229.148",
        "ip_private": "10.133.57.251",
        "port_api": "8084",
        "port_http": "80",
        "port_https": "443",
        "data_api": "/api/v0.1/resource"
      }
    },
    "3": {
      "name": "DataSource-Shopping",
      "description":{
        "desc_short": "DataSource based on Shopping Data",
        "desc_long": "A retail or a shop is a business that presents a selection of goods and offers to trade or sell them to customers for money or other goods. Shopping is an activity in which a customer browses the available goods or services presented by one or more retailers with the intent to purchase a suitable selection of them. In some contexts it may be considered a leisure activity as well as an economic one. (en.wikipedia.org/wiki/Shopping)",
        "img_url_logo": "http://cc.oulu.fi/~jylikant/dhr/serviceIMGs/DataSource-Shopping-logo.png",
        "img_url_banner": "http://cc.oulu.fi/~jylikant/dhr/serviceIMGs/DataSource-Shopping-banner-image.png",
        "img_url_overview": "http://cc.oulu.fi/~jylikant/dhr/serviceIMGs/DataSource-Shopping-overview-image.png"
      },
      "categories":[
        "Shopping.Consumer-goods.Adhesives",
        "Shopping.Consumer-goods.Batteries",
        "Shopping.Consumer-goods.Beauty.Cosmetics-line",
        "Shopping.Consumer-goods.Beauty.Daily-cosmetics",
        "Shopping.Consumer-goods.Beauty.Deodorants",
        "Shopping.Consumer-goods.Beauty.Hair-Care",
        "Shopping.Consumer-goods.Beauty.Skin-Treatment",
        "Shopping.Consumer-goods.Beauty.Soap",
        "Shopping.Consumer-goods.Bicycles-Parts-And-Accessories",
        "Shopping.Consumer-goods.Book-supplies",
        "Shopping.Consumer-goods.Bottle-envelopes",
        "Shopping.Consumer-goods.Bottle-Returns",
        "Shopping.Consumer-goods.CleaningMachine",
        "Shopping.Consumer-goods.Cleaning-Supplies",
        "Shopping.Consumer-goods.Clothes.Ladies.Cloth-sweaters",
        "Shopping.Consumer-goods.Clothes.Ladies.Dresses",
        "Shopping.Consumer-goods.Clothes.Ladies.Headdress",
        "Shopping.Consumer-goods.Clothes.Ladies.Knitwear-And-Shirts",
        "Shopping.Consumer-goods.Clothes.Ladies.Others",
        "Shopping.Consumer-goods.Clothes.Ladies.Socks-And-Tights",
        "Shopping.Consumer-goods.Clothes.Ladies.Trousers",
        "Shopping.Consumer-goods.Clothes.Ladies.Underwear",
        "Shopping.Consumer-goods.Clothes.MenHeaddress",
        "Shopping.Consumer-goods.Clothes.MenKnitwear",
        "Shopping.Consumer-goods.Clothes.MenOther-accessories",
        "Shopping.Consumer-goods.Clothes.MenShirts",
        "Shopping.Consumer-goods.Clothes.MenSocks",
        "Shopping.Consumer-goods.Clothes.MenTrousers",
        "Shopping.Consumer-goods.Clothes.Sportswear.Others",
        "Shopping.Consumer-goods.Clothes-Hangers",
        "Shopping.Consumer-goods.Cooking-utensils",
        "Shopping.Consumer-goods.Cut-flowers",
        "Shopping.Consumer-goods.Detergents",
        "Shopping.Consumer-goods.Empty.Recordings",
        "Shopping.Consumer-goods.Filter-Papers",
        "Shopping.Consumer-goods.Fitness-sports-equipment",
        "Shopping.Consumer-goods.Freezing-supplies",
        "Shopping.Consumer-goods.Home-decorative-accessories",
        "Shopping.Consumer-goods.HWA",
        "Shopping.Consumer-goods.Laundry-Detergent",
        "Shopping.Consumer-goods.Light-Bilbs",
        "Shopping.Consumer-goods.Magazines",
        "Shopping.Consumer-goods.Mounting-accessories",
        "Shopping.Consumer-goods.Nameplates",
        "Shopping.Consumer-goods.Note-taking",
        "Shopping.Consumer-goods.Oral-Care-Products",
        "Shopping.Consumer-goods.Packaging-supplies",
        "Shopping.Consumer-goods.Paper-Adhesives",
        "Shopping.Consumer-goods.Recreational-equipment",
        "Shopping.Consumer-goods.Shoe-accessories",
        "Shopping.Consumer-goods.Sports.Nutrition",
        "Shopping.Consumer-goods.Storage-Cases",
        "Shopping.Consumer-goods.Tableware.Disposable",
        "Shopping.Consumer-goods.Tableware.Porcelain",
        "Shopping.Consumer-goods.Toys",
        "Shopping.Consumer-goods.Toys.Baby",
        "Shopping.Groceries.Animal-Fats",
        "Shopping.Groceries.Bagery",
        "Shopping.Groceries.Bagery.Other",
        "Shopping.Groceries.Bagery.Prefabricated",
        "Shopping.Groceries.Baking-ingredients",
        "Shopping.Groceries.Baking-ingredients.Other",
        "Shopping.Groceries.Beer",
        "Shopping.Groceries.Beverage-Concentrates",
        "Shopping.Groceries.Candy.Bags",
        "Shopping.Groceries.Candy.Pastilles",
        "Shopping.Groceries.Canned-Food",
        "Shopping.Groceries.Canned-Food.Fruits-And-Berries",
        "Shopping.Groceries.Canned-Food.Vegetables",
        "Shopping.Groceries.Cereals-And-Muesli",
        "Shopping.Groceries.Cheece",
        "Shopping.Groceries.Chocolate-Confectionery",
        "Shopping.Groceries.Citrus-Fruits",
        "Shopping.Groceries.Cocoa",
        "Shopping.Groceries.Coffee",
        "Shopping.Groceries.Confectionery-Goods",
        "Shopping.Groceries.Cookies",
        "Shopping.Groceries.Cooking-Products",
        "Shopping.Groceries.Desserts",
        "Shopping.Groceries.Desserts.Milk-Based",
        "Shopping.Groceries.Dried.Fruits-And-Berries",
        "Shopping.Groceries.Dry-Bread",
        "Shopping.Groceries.Eggs",
        "Shopping.Groceries.Farinas",
        "Shopping.Groceries.Flakes",
        "Shopping.Groceries.Fresh.Bread",
        "Shopping.Groceries.Fresh.Fish",
        "Shopping.Groceries.Frozen-Foods",
        "Shopping.Groceries.Frozen-Foods.Fish-And-Shellfish",
        "Shopping.Groceries.Frozen-Foods.Fruits-Berries-And-Juices",
        "Shopping.Groceries.Frozen-Foods.Pastry",
        "Shopping.Groceries.Frozen-Foods.Potato",
        "Shopping.Groceries.Frozen-Foods.Vegetables",
        "Shopping.Groceries.Fruits.Apples",
        "Shopping.Groceries.Fruits.Other",
        "Shopping.Groceries.Fruits.Pears",
        "Shopping.Groceries.Fruits.Pome-fruits",
        "Shopping.Groceries.FruitsBananas",
        "Shopping.Groceries.Garden-Berries-And-Rhubarb",
        "Shopping.Groceries.Grapes",
        "Shopping.Groceries.Health-Foods",
        "Shopping.Groceries.Herring",
        "Shopping.Groceries.Honey",
        "Shopping.Groceries.Ice-Cream",
        "Shopping.Groceries.Juices",
        "Shopping.Groceries.Juices.Juice-Drinks",
        "Shopping.Groceries.Juices.Sweetened",
        "Shopping.Groceries.Marmalades",
        "Shopping.Groceries.Meat",
        "Shopping.Groceries.Meat.Beef",
        "Shopping.Groceries.Meat.Pork",
        "Shopping.Groceries.Meat.Poultry",
        "Shopping.Groceries.Mild-Cider-And-Mead",
        "Shopping.Groceries.Milk-And-Cream",
        "Shopping.Groceries.Mustard",
        "Shopping.Groceries.Nuts-And-Almonds",
        "Shopping.Groceries.Other-Cereal-Products",
        "Shopping.Groceries.Other-Sour-Milk-Products",
        "Shopping.Groceries.Pastes",
        "Shopping.Groceries.Pastry",
        "Shopping.Groceries.Pets.Food",
        "Shopping.Groceries.Potato",
        "Shopping.Groceries.Potato.Products",
        "Shopping.Groceries.Prefabricated-Broths",
        "Shopping.Groceries.Prefabricated-Meals",
        "Shopping.Groceries.Preserves",
        "Shopping.Groceries.Rice",
        "Shopping.Groceries.Root-Corps",
        "Shopping.Groceries.Rusks-And-Bagels",
        "Shopping.Groceries.Rye-Flours",
        "Shopping.Groceries.Sallads",
        "Shopping.Groceries.Salt",
        "Shopping.Groceries.Sauces-And-Mayonnaises",
        "Shopping.Groceries.Sausages",
        "Shopping.Groceries.Sausages.Slices",
        "Shopping.Groceries.Smoked.Fish",
        "Shopping.Groceries.Smoked.Meat",
        "Shopping.Groceries.Snacks",
        "Shopping.Groceries.Soft-Drinks",
        "Shopping.Groceries.Spices",
        "Shopping.Groceries.Spicy-Vegetables-And-Pod-Vegetables",
        "Shopping.Groceries.Sugars",
        "Shopping.Groceries.Sweeteners",
        "Shopping.Groceries.Tea",
        "Shopping.Groceries.Tex-Mex-Products",
        "Shopping.Groceries.Tissue-Papers",
        "Shopping.Groceries.Vegetable-oils",
        "Shopping.Groceries.Vegetables",
        "Shopping.Groceries.Wheat-Flours",
        "Shopping.Groceries.Vinegars",
        "Shopping.Groceries.Wines-And-Siders",
        "Shopping.Groceries.Yogurts",
        "Shopping.Ladies.Fashion-Showcase",
        "Shopping.Ladies.OutdoorClothing",
        "Shopping.Ladies.Shoes",
        "Shopping.Ladies.Shoes-And-Bags.",
        "Shopping.OtherService.OtherSundryConcessionSales",
        "Shopping.Restaurant.Buffet",
        "Shopping.Restaurant.Cold-Drinks",
        "Shopping.Restaurant.Fastfood",
        "Shopping.Restaurant.Hot-Drinks",
        "Shopping.Restaurant.Savory-Pastries",
        "Shopping.Restaurant.Snacks",
        "Shopping.Restaurant.Sweet-Pastries",
        "Shopping.Sokos.Supplies"
       ],
      "labels":[
        "new",
        "popular"
       ],
      "commonConsents":[
        "fa-hdd-o",
        "fa-building",
        "fa-diamond",
        "fa-cc"
      ],
      "network": {
        "ip_public": "178.62.229.148",
        "ip_private": "10.133.57.251",
        "port_api": "8084",
        "port_http": "80",
        "port_https": "443",
        "data_api": "/api/v0.1/resource"
      }
    }
  },
  "sinks": {
    "1": {
      "name": "DataSink-OneAndOnly",
      "description":{
        "desc_short":"Computer or any other medium capable of receiving data",
        "desc_long":"Able to receive and use Heath, Fitness and Shopping data",
        "img_url_logo":"http://cc.oulu.fi/~jylikant/dhr/serviceIMGs/DataSink-OneAndOnly-logo.png",
        "img_url_banner":"http://cc.oulu.fi/~jylikant/dhr/serviceIMGs/DataSink-OneAndOnly-banner-image.png",
        "img_url_overview":"http://cc.oulu.fi/~jylikant/dhr/serviceIMGs/DataSink-OneAndOnly-overview-image.png"
      },
      "categories":[
           "Health",
           "Fitness",
           "Shopping"
       ],
      "labels":[
           "new",
           "popular"
       ],
      "commonConsents":[
        "fa-hdd-o",
        "fa-building",
        "fa-diamond",
        "fa-cc"
      ],
      "network": {
        "ip_public": "178.62.194.218",
        "ip_private": "10.133.57.250",
        "port_api": "8082",
        "port_http": "80",
        "port_https": "443"
      }
    }
  }
};


