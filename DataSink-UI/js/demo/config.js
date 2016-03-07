/**
 * Created by double on 02/09/15.
 */

var DSINK_API_BASE_URI = 'http://127.0.0.1:20001/api/v0.1';

var DSINK_REGISTER_URI = DSINK_API_BASE_URI + '/user';
var DSINK_LOGIN_URI = DSINK_API_BASE_URI + '/auth';
var DSINK_RESOURCE_URI = DSINK_API_BASE_URI + '/resource';

//

//var CONFIG_URI = 'http://127.0.0.1:8080/config'
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
  "logging_server": {
    "1": {
      "name": "LoggingServer",
      "desc": "The LoggingServer",
      "network": {
        "ip_public": "",
        "ip_private": "",
        "port_api": "",
        "port_http": "",
        "port_https": ""
      }
    }
  },
  "operators": {
    "1": {
      "name": "DataOperator",
      "desc": "The DataOperator",
      "network": {
        "ip_public": "127.0.0.1",
        "ip_private": "127.0.0.1",
        "port_api": "8080",
        "port_http": "80",
        "port_https": "443"
      },
      "user_accounts": [
        {
          "username": "testuser",
          "password": "Hello",
          "user_id": "1",
          "status_id": "1",
          "is_admin": "0"
        },
        {
          "username": "Testeri",
          "password": "Hello",
          "user_id": "1",
          "status_id": "1",
          "is_admin": "0"
        }
      ],
      "users": [
        {
          "gender": "",
          "statuses_id": "1",
          "firstName": "Test",
          "lastName": "User",
          "email": "test@user.com",
          "address1": "Example road 45",
          "address2": "",
          "cities_id": "1",
          "regions_id": "1",
          "countries_id": "1",
          "nationalities_id": "1",
          "languages_id": "1",
          "img_url_avatar": "http://127.0.0.1:80/assets/img/icons/mydata-avatar.png"
        }
      ],
      "cities": [
        {
          "name": "Oulu",
          "region_id": "1"
        },
        {
          "name": "Tornio",
          "region_id": "2"
        }
      ],
      "regions": [
        {
          "name": "Pohjois-Pohjanmaa",
          "region_id": "1"
        },
        {
          "name": "Norrbotten",
          "country_id": "2"
        }
      ],
      "countries": [
        {
          "name": "Finland",
          "region_id": "1"
        },
        {
          "name": "Sweden",
          "region_id": "2"
        }
      ],
      "endpoints": [
        {
          "RPT_introspection_endpoint": "/verify_rpt"
        }
      ]
    }
  },
  "sources": {
    "1": {
      "name": "Running Free",
      "description": {
        "desc_long": "Running Free is lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus eget urna eu semper. Suspendisse ac fringilla sapien. Aliquam id sem nulla. Phasellus lobortis dolor magna, sed scelerisque ex vehicula a. Integer non posuere turpis. Sed lobortis ante massa, sed dictum mi maximus id.",
        "desc_short": "Running Free is lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim.",
        "img_url_banner": "http://127.0.0.1:80/assets/img/services/RunningFree.png",
        "img_url_logo": "http://127.0.0.1:80/assets/img/services/RunningFree.png",
        "img_url_overview": "http://127.0.0.1:80/assets/img/services/RunningFree.png"
      },
      "categories": [
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
      "category_details": {
        "Health.Diastolic-Blood-Pressure": {
          "unit": "mmHg"
        },
        "Health.Systolic-Blood-Pressure": {
          "unit": "mmHg"
        },
        "Health.Heart-Rate": {
          "unit": "bpm"
        },
        "Health.Sleep-efficiency": {
          "unit": "%"
        },
        "Health.Minutes-deep-sleep": {
          "unit": "minutes"
        },
        "Health.Awakenings-count": {
          "unit": "count"
        },
        "Health.Minutes-asleep": {
          "unit": "minutes"
        },
        "Health.Minutes-awake": {
          "unit": "minutes"
        },
        "Health.Minutes-in-bed": {
          "unit": "minutes"
        },
        "Health.Minutes-light-sleep": {
          "unit": "minutes"
        },
        "Health.Minutes-REM-sleep": {
          "unit": "minutes"
        },
        "Fitness.Weight": {
          "unit": "kg"
        },
        "Fitness.Distance-travelled": {
          "unit": "meters"
        },
        "Fitness.Calories-burned": {
          "unit": "kcal"
        },
        "Fitness.Fat-free": {
          "unit": "%"
        },
        "Fitness.Fat-mass": {
          "unit": "kg"
        },
        "Fitness.Elevation-travelled": {
          "unit": "meters"
        },
        "Fitness.Intense-exercise": {
          "unit": "seconds"
        },
        "Fitness.Moderate-exercise": {
          "unit": "seconds"
        },
        "Fitness.Number-of-steps": {
          "unit": "count"
        },
        "Fitness.Soft-exercise": {
          "unit": "seconds"
        }
      },
      "labels": [
        "new",
        "popular"
      ],
      "commonConsents": [
        "fa-hdd-o",
        "fa-building",
        "fa-diamond",
        "fa-cc"
      ],
      "network": {
        "ip_public": "127.0.0.1",
        "ip_private": "127.0.0.1",
        "port_api": "10001",
        "port_http": "80",
        "port_https": "443",
        "data_api": "/api/v0.1/resource"
      },
      "user_accounts": [
        {
          "username": "testuser",
          "password": "Hello",
          "email": "test@user.com"
        }
      ]
    },
    "2": {
      "name": "MyLocation",
      "description": {
        "desc_long": "MyLocation is orem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus eget urna eu semper. Suspendisse ac fringilla sapien. Aliquam id sem nulla. Phasellus lobortis dolor magna, sed scelerisque ex vehicula a. Integer non posuere turpis. Sed lobortis ante massa, sed dictum mi maximus id.",
        "desc_short": "MyLocation is orem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim.",
        "img_url_banner": "http://127.0.0.1:80/assets/img/services/myLocation.png",
        "img_url_logo": "http://127.0.0.1:80/assets/img/services/myLocation.png",
        "img_url_overview": "http://127.0.0.1:80/assets/img/services/myLocation.png"
      },
      "categories": [
        "Fitness.Location.Biking",
        "Fitness.Location.Hiking"
      ],
      "category_details": {
        "Fitness.Location.Biking": {
          "unit": "meters"
        },
        "Fitness.Location.Hiking": {
          "unit": "meters"
        }
      },
      "labels": [
        "new",
        "popular"
      ],
      "commonConsents": [
        "fa-hdd-o",
        "fa-building",
        "fa-diamond",
        "fa-cc"
      ],
      "network": {
        "ip_public": "127.0.0.1",
        "ip_private": "127.0.0.1",
        "port_api": "10002",
        "port_http": "80",
        "port_https": "443",
        "data_api": "/api/v0.1/resource"
      },
      "user_accounts": [
        {
          "username": "testuser",
          "password": "Hello",
          "email": "test@user.com"
        }
      ]
    },
    "3": {
      "name": "Sesko",
      "description": {
        "desc_long": "Sesko is lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus eget urna eu semper. Suspendisse ac fringilla sapien. Aliquam id sem nulla. Phasellus lobortis dolor magna, sed scelerisque ex vehicula a. Integer non posuere turpis. Sed lobortis ante massa, sed dictum mi maximus id.",
        "desc_short": "Sesko is lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim.",
        "img_url_banner": "http://127.0.0.1:80/assets/img/services/sesko-logo.png",
        "img_url_logo": "http://127.0.0.1:80/assets/img/services/sesko-logo.png",
        "img_url_overview": "http://127.0.0.1:80/assets/img/services/sesko-logo.png"
      },
      "categories": [
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
        "Shopping.Consumer-goods.Cleaning-Machine",
        "Shopping.Consumer-goods.Cleaning-Supplies",
        "Shopping.Consumer-goods.Clothes.Ladies.Cloth-sweaters",
        "Shopping.Consumer-goods.Clothes.Ladies.Dresses",
        "Shopping.Consumer-goods.Clothes.Ladies.Headdress",
        "Shopping.Consumer-goods.Clothes.Ladies.Knitwear-And-Shirts",
        "Shopping.Consumer-goods.Clothes.Ladies.Others",
        "Shopping.Consumer-goods.Clothes.Ladies.Socks-And-Tights",
        "Shopping.Consumer-goods.Clothes.Ladies.Trousers",
        "Shopping.Consumer-goods.Clothes.Ladies.Underwear",
        "Shopping.Consumer-goods.Clothes.Men.Headdress",
        "Shopping.Consumer-goods.Clothes.Men.Knitwear",
        "Shopping.Consumer-goods.Clothes.Men.Other-accessories",
        "Shopping.Consumer-goods.Clothes.Men.Shirts",
        "Shopping.Consumer-goods.Clothes.Men.Socks",
        "Shopping.Consumer-goods.Clothes.Men.Trousers",
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
        "Shopping.Groceries.Fruits.Bananas",
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
        "Shopping.Ladies.Outdoor.Clothing",
        "Shopping.Ladies.Shoes",
        "Shopping.Ladies.Shoes-And-Bags",
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
      "category_details": {
        "Shopping.Consumer-goods.Adhesives": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Batteries": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Beauty.Cosmetics-line": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Beauty.Daily-cosmetics": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Beauty.Deodorants": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Beauty.Hair-Care": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Beauty.Skin-Treatment": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Beauty.Soap": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Bicycles-Parts-And-Accessories": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Book-supplies": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Bottle-envelopes": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Bottle-Returns": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Cleaning-Machine": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Cleaning-Supplies": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Clothes.Ladies.Cloth-sweaters": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Clothes.Ladies.Dresses": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Clothes.Ladies.Headdress": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Clothes.Ladies.Knitwear-And-Shirts": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Clothes.Ladies.Others": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Clothes.Ladies.Socks-And-Tights": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Clothes.Ladies.Trousers": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Clothes.Ladies.Underwear": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Clothes.Men.Headdress": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Clothes.Men.Knitwear": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Clothes.Men.Other-accessories": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Clothes.Men.Shirts": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Clothes.Men.Socks": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Clothes.Men.Trousers": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Clothes.Sportswear.Others": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Clothes-Hangers": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Cooking-utensils": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Cut-flowers": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Detergents": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Empty.Recordings": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Filter-Papers": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Fitness-sports-equipment": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Freezing-supplies": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Home-decorative-accessories": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.HWA": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Laundry-Detergent": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Light-Bilbs": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Magazines": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Mounting-accessories": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Nameplates": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Note-taking": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Oral-Care-Products": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Packaging-supplies": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Paper-Adhesives": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Recreational-equipment": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Shoe-accessories": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Sports.Nutrition": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Storage-Cases": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Tableware.Disposable": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Tableware.Porcelain": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Toys": {
          "unit": "euro"
        },
        "Shopping.Consumer-goods.Toys.Baby": {
          "unit": "euro"
        },
        "Shopping.Groceries.Animal-Fats": {
          "unit": "euro"
        },
        "Shopping.Groceries.Bagery": {
          "unit": "euro"
        },
        "Shopping.Groceries.Bagery.Other": {
          "unit": "euro"
        },
        "Shopping.Groceries.Bagery.Prefabricated": {
          "unit": "euro"
        },
        "Shopping.Groceries.Baking-ingredients": {
          "unit": "euro"
        },
        "Shopping.Groceries.Baking-ingredients.Other": {
          "unit": "euro"
        },
        "Shopping.Groceries.Beer": {
          "unit": "euro"
        },
        "Shopping.Groceries.Beverage-Concentrates": {
          "unit": "euro"
        },
        "Shopping.Groceries.Candy.Bags": {
          "unit": "euro"
        },
        "Shopping.Groceries.Candy.Pastilles": {
          "unit": "euro"
        },
        "Shopping.Groceries.Canned-Food": {
          "unit": "euro"
        },
        "Shopping.Groceries.Canned-Food.Fruits-And-Berries": {
          "unit": "euro"
        },
        "Shopping.Groceries.Canned-Food.Vegetables": {
          "unit": "euro"
        },
        "Shopping.Groceries.Cereals-And-Muesli": {
          "unit": "euro"
        },
        "Shopping.Groceries.Cheece": {
          "unit": "euro"
        },
        "Shopping.Groceries.Chocolate-Confectionery": {
          "unit": "euro"
        },
        "Shopping.Groceries.Citrus-Fruits": {
          "unit": "euro"
        },
        "Shopping.Groceries.Cocoa": {
          "unit": "euro"
        },
        "Shopping.Groceries.Coffee": {
          "unit": "euro"
        },
        "Shopping.Groceries.Confectionery-Goods": {
          "unit": "euro"
        },
        "Shopping.Groceries.Cookies": {
          "unit": "euro"
        },
        "Shopping.Groceries.Cooking-Products": {
          "unit": "euro"
        },
        "Shopping.Groceries.Desserts": {
          "unit": "euro"
        },
        "Shopping.Groceries.Desserts.Milk-Based": {
          "unit": "euro"
        },
        "Shopping.Groceries.Dried.Fruits-And-Berries": {
          "unit": "euro"
        },
        "Shopping.Groceries.Dry-Bread": {
          "unit": "euro"
        },
        "Shopping.Groceries.Eggs": {
          "unit": "euro"
        },
        "Shopping.Groceries.Farinas": {
          "unit": "euro"
        },
        "Shopping.Groceries.Flakes": {
          "unit": "euro"
        },
        "Shopping.Groceries.Fresh.Bread": {
          "unit": "euro"
        },
        "Shopping.Groceries.Fresh.Fish": {
          "unit": "euro"
        },
        "Shopping.Groceries.Frozen-Foods": {
          "unit": "euro"
        },
        "Shopping.Groceries.Frozen-Foods.Fish-And-Shellfish": {
          "unit": "euro"
        },
        "Shopping.Groceries.Frozen-Foods.Fruits-Berries-And-Juices": {
          "unit": "euro"
        },
        "Shopping.Groceries.Frozen-Foods.Pastry": {
          "unit": "euro"
        },
        "Shopping.Groceries.Frozen-Foods.Potato": {
          "unit": "euro"
        },
        "Shopping.Groceries.Frozen-Foods.Vegetables": {
          "unit": "euro"
        },
        "Shopping.Groceries.Fruits.Apples": {
          "unit": "euro"
        },
        "Shopping.Groceries.Fruits.Other": {
          "unit": "euro"
        },
        "Shopping.Groceries.Fruits.Pears": {
          "unit": "euro"
        },
        "Shopping.Groceries.Fruits.Pome-fruits": {
          "unit": "euro"
        },
        "Shopping.Groceries.Fruits.Bananas": {
          "unit": "euro"
        },
        "Shopping.Groceries.Garden-Berries-And-Rhubarb": {
          "unit": "euro"
        },
        "Shopping.Groceries.Grapes": {
          "unit": "euro"
        },
        "Shopping.Groceries.Health-Foods": {
          "unit": "euro"
        },
        "Shopping.Groceries.Herring": {
          "unit": "euro"
        },
        "Shopping.Groceries.Honey": {
          "unit": "euro"
        },
        "Shopping.Groceries.Ice-Cream": {
          "unit": "euro"
        },
        "Shopping.Groceries.Juices": {
          "unit": "euro"
        },
        "Shopping.Groceries.Juices.Juice-Drinks": {
          "unit": "euro"
        },
        "Shopping.Groceries.Juices.Sweetened": {
          "unit": "euro"
        },
        "Shopping.Groceries.Marmalades": {
          "unit": "euro"
        },
        "Shopping.Groceries.Meat": {
          "unit": "euro"
        },
        "Shopping.Groceries.Meat.Beef": {
          "unit": "euro"
        },
        "Shopping.Groceries.Meat.Pork": {
          "unit": "euro"
        },
        "Shopping.Groceries.Meat.Poultry": {
          "unit": "euro"
        },
        "Shopping.Groceries.Mild-Cider-And-Mead": {
          "unit": "euro"
        },
        "Shopping.Groceries.Milk-And-Cream": {
          "unit": "euro"
        },
        "Shopping.Groceries.Mustard": {
          "unit": "euro"
        },
        "Shopping.Groceries.Nuts-And-Almonds": {
          "unit": "euro"
        },
        "Shopping.Groceries.Other-Cereal-Products": {
          "unit": "euro"
        },
        "Shopping.Groceries.Other-Sour-Milk-Products": {
          "unit": "euro"
        },
        "Shopping.Groceries.Pastes": {
          "unit": "euro"
        },
        "Shopping.Groceries.Pastry": {
          "unit": "euro"
        },
        "Shopping.Groceries.Pets.Food": {
          "unit": "euro"
        },
        "Shopping.Groceries.Potato": {
          "unit": "euro"
        },
        "Shopping.Groceries.Potato.Products": {
          "unit": "euro"
        },
        "Shopping.Groceries.Prefabricated-Broths": {
          "unit": "euro"
        },
        "Shopping.Groceries.Prefabricated-Meals": {
          "unit": "euro"
        },
        "Shopping.Groceries.Preserves": {
          "unit": "euro"
        },
        "Shopping.Groceries.Rice": {
          "unit": "euro"
        },
        "Shopping.Groceries.Root-Corps": {
          "unit": "euro"
        },
        "Shopping.Groceries.Rusks-And-Bagels": {
          "unit": "euro"
        },
        "Shopping.Groceries.Rye-Flours": {
          "unit": "euro"
        },
        "Shopping.Groceries.Sallads": {
          "unit": "euro"
        },
        "Shopping.Groceries.Salt": {
          "unit": "euro"
        },
        "Shopping.Groceries.Sauces-And-Mayonnaises": {
          "unit": "euro"
        },
        "Shopping.Groceries.Sausages": {
          "unit": "euro"
        },
        "Shopping.Groceries.Sausages.Slices": {
          "unit": "euro"
        },
        "Shopping.Groceries.Smoked.Fish": {
          "unit": "euro"
        },
        "Shopping.Groceries.Smoked.Meat": {
          "unit": "euro"
        },
        "Shopping.Groceries.Snacks": {
          "unit": "euro"
        },
        "Shopping.Groceries.Soft-Drinks": {
          "unit": "euro"
        },
        "Shopping.Groceries.Spices": {
          "unit": "euro"
        },
        "Shopping.Groceries.Spicy-Vegetables-And-Pod-Vegetables": {
          "unit": "euro"
        },
        "Shopping.Groceries.Sugars": {
          "unit": "euro"
        },
        "Shopping.Groceries.Sweeteners": {
          "unit": "euro"
        },
        "Shopping.Groceries.Tea": {
          "unit": "euro"
        },
        "Shopping.Groceries.Tex-Mex-Products": {
          "unit": "euro"
        },
        "Shopping.Groceries.Tissue-Papers": {
          "unit": "euro"
        },
        "Shopping.Groceries.Vegetable-oils": {
          "unit": "euro"
        },
        "Shopping.Groceries.Vegetables": {
          "unit": "euro"
        },
        "Shopping.Groceries.Wheat-Flours": {
          "unit": "euro"
        },
        "Shopping.Groceries.Vinegars": {
          "unit": "euro"
        },
        "Shopping.Groceries.Wines-And-Siders": {
          "unit": "euro"
        },
        "Shopping.Groceries.Yogurts": {
          "unit": "euro"
        },
        "Shopping.Ladies.Fashion-Showcase": {
          "unit": "euro"
        },
        "Shopping.Ladies.Outdoor.Clothing": {
          "unit": "euro"
        },
        "Shopping.Ladies.Shoes": {
          "unit": "euro"
        },
        "Shopping.Ladies.Shoes-And-Bags": {
          "unit": "euro"
        },
        "Shopping.OtherService.OtherSundryConcessionSales": {
          "unit": "euro"
        },
        "Shopping.Restaurant.Buffet": {
          "unit": "euro"
        },
        "Shopping.Restaurant.Cold-Drinks": {
          "unit": "euro"
        },
        "Shopping.Restaurant.Fastfood": {
          "unit": "euro"
        },
        "Shopping.Restaurant.Hot-Drinks": {
          "unit": "euro"
        },
        "Shopping.Restaurant.Savory-Pastries": {
          "unit": "euro"
        },
        "Shopping.Restaurant.Snacks": {
          "unit": "euro"
        },
        "Shopping.Restaurant.Sweet-Pastries": {
          "unit": "euro"
        },
        "Shopping.Sokos.Supplies": {
          "unit": "euro"
        }
      },
      "labels": [
        "new",
        "popular"
      ],
      "commonConsents": [
        "fa-hdd-o",
        "fa-building",
        "fa-diamond",
        "fa-cc"
      ],
      "network": {
        "ip_public": "127.0.0.1",
        "ip_private": "127.0.0.1",
        "port_api": "10003",
        "port_http": "80",
        "port_https": "443",
        "data_api": "/api/v0.1/resource"
      },
      "user_accounts": [
        {
          "username": "testuser",
          "password": "Hello",
          "email": "test@user.com"
        }
      ]
    },
    "4": {
      "name": "SWH-Source",
      "description": {
        "desc_long": "Sport-Welness-Health Center is lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus eget urna eu semper. Suspendisse ac fringilla sapien. Aliquam id sem nulla. Phasellus lobortis dolor magna, sed scelerisque ex vehicula a. Integer non posuere turpis. Sed lobortis ante massa, sed dictum mi maximus id.",
        "desc_short": "Sport-Welness-Health Center is lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim.",
        "img_url_banner": "http://127.0.0.1:80/assets/img/services/sportWellnessHealth.png",
        "img_url_logo": "http://127.0.0.1:80/assets/img/services/sportWellnessHealth.png",
        "img_url_overview": "http://127.0.0.1:80/assets/img/services/sportWellnessHealth.png"
      },
 "categories": [
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
        "Fitness.Weight"
      ],
      "category_details": {
        "Health.Diastolic-Blood-Pressure": {
          "unit": "mmHg"
        },
        "Health.Systolic-Blood-Pressure": {
          "unit": "mmHg"
        },
        "Health.Heart-Rate": {
          "unit": "bpm"
        },
        "Health.Sleep-efficiency": {
          "unit": "%"
        },
        "Health.Minutes-deep-sleep": {
          "unit": "minutes"
        },
        "Health.Awakenings-count": {
          "unit": "count"
        },
        "Health.Minutes-asleep": {
          "unit": "minutes"
        },
        "Health.Minutes-awake": {
          "unit": "minutes"
        },
        "Health.Minutes-in-bed": {
          "unit": "minutes"
        },
        "Health.Minutes-light-sleep": {
          "unit": "minutes"
        },
        "Health.Minutes-REM-sleep": {
          "unit": "minutes"
        },
        "Fitness.Weight": {
          "unit": "kg"
        }
      },
      "labels": [
        "new",
        "popular"
      ],
      "commonConsents": [
        "fa-hdd-o",
        "fa-building",
        "fa-diamond",
        "fa-cc"
      ],
      "network": {
        "ip_public": "127.0.0.1",
        "ip_private": "127.0.0.1",
        "port_api": "10004",
        "port_http": "80",
        "port_https": "443",
        "data_api": "/api/v0.1/resource"
      },
      "user_accounts": [
        {
          "username": "testuser",
          "password": "Hello",
          "email": "test@user.com"
        }
      ]
    }
  },
  "sinks": {
    "5": {
      "name": "PHR",
      "description": {
        "desc_long": "PHR is lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus eget urna eu semper. Suspendisse ac fringilla sapien. Aliquam id sem nulla. Phasellus lobortis dolor magna, sed scelerisque ex vehicula a. Integer non posuere turpis. Sed lobortis ante massa, sed dictum mi maximus id.",
        "desc_short": "PHR is lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim.",
        "img_url_banner": "http://127.0.0.1:80/assets/img/services/phr-logo.png",
        "img_url_logo": "http://127.0.0.1:80/assets/img/services/phr-logo.png",
        "img_url_overview": "http://127.0.0.1:80/assets/img/services/phr-logo.png"
      },
      "categories": [
        "Food",
        "Pharmacy",
        "Fitness",
        "Health",
        "Finance",
        "Insurance",
        "Shopping"
      ],
      "labels": [
        "new",
        "popular"
      ],
      "commonConsents": [
        "fa-hdd-o",
        "fa-building",
        "fa-diamond",
        "fa-cc"
      ],
      "network": {
        "ip_public": "127.0.0.1",
        "ip_private": "127.0.0.1",
        "port_api": "20001",
        "port_http": "80",
        "port_https": "443",
        "data_api": "/api/v0.1/resource"
      },
      "user_accounts": [
        {
          "username": "testuser",
          "password": "Hello",
          "email": "test@user.com"
        }
      ]
    },
    "6": {
      "name": "SWH-Sink",
      "description": {
        "desc_long": "Sport-Welness-Health Center is lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus eget urna eu semper. Suspendisse ac fringilla sapien. Aliquam id sem nulla. Phasellus lobortis dolor magna, sed scelerisque ex vehicula a. Integer non posuere turpis. Sed lobortis ante massa, sed dictum mi maximus id.",
        "desc_short": "Sport-Welness-Health Center is lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim.",
        "img_url_banner": "http://127.0.0.1:80/assets/img/services/sportWellnessHealth.png",
        "img_url_logo": "http://127.0.0.1:80/assets/img/services/sportWellnessHealth.png",
        "img_url_overview": "http://127.0.0.1:80/assets/img/services/sportWellnessHealth.png"
      },
      "categories": [
        "Food",
        "Pharmacy",
        "Fitness",
        "Health",
        "Shopping"
      ],
      "labels": [
        "new",
        "popular"
      ],
      "commonConsents": [
        "fa-hdd-o",
        "fa-building",
        "fa-diamond",
        "fa-cc"
      ],
      "network": {
        "ip_public": "127.0.0.1",
        "ip_private": "127.0.0.1",
        "port_api": "20003",
        "port_http": "80",
        "port_https": "443",
        "data_api": "/api/v0.1/resource"
      },
      "user_accounts": [
        {
          "username": "testuser",
          "password": "Hello",
          "email": "test@user.com"
        }
      ]
    }
  },
  "data_licenses": [
    "Research-use.Internal-use",
    "Research-use.External-partners",
    "Research-use.Anonymizes-data",
    "Development-use.Internal-use",
    "Development-use.External-partners",
    "Sales-and-Marketing",
    "Advertising",
    "Marketing-Partners",
    "Resale"
  ],
  "statuses": [
    "active",
    "paused",
    "withdrawn"
  ]
};
