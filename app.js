import React from "react";
import ReactDOM from "react-dom/client";

/*- Header
    -Logo
    -Nav Items
  - Body
    -Search
    -ReastaurantContainer
      -ReastauratCard
  - Footer
    -copyright
    -links
    -address
    -contact
*/

// Create separate component for each block
const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li className="cart">
            <img
              className="cart-image"
              src="https://cdn-icons-png.flaticon.com/128/2169/2169842.png"
            />
            <span margin="100px">Cart</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "912754",
      name: "Urban Cafe",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/21/dbe91f1f-b400-4f4b-a78d-c6b99bdc61c5_912754.JPG",
      locality: "SOUTH CIVIL LINE",
      areaName: "Chhindwara City",
      costForTwo: "₹300 for two",
      cuisines: ["Snacks", "Pizzas", "Pastas", "Fast Food", "Burgers", "Cafe"],
      avgRating: 3.4,
      veg: true,
      parentId: "1330",
      avgRatingString: "3.4",
      totalRatingsString: "2",
      sla: {
        deliveryTime: 57,
        lastMileTravel: 11.4,
        serviceability: "SERVICEABLE",
        slaString: "55-60 mins",
        lastMileTravelString: "11.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-03 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d6ff12cb-cc61-434d-81d5-d640f43c19ac",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/urban-cafe-south-civil-line-chhindwara-city-rest912754",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "830418",
      name: "Indian Coffee House",
      cloudinaryImageId: "2469fa88ee9b0b5d1366ba88f2a7fa7f",
      locality: "Chhindwara City",
      areaName: "Khajri Chowk",
      costForTwo: "₹300 for two",
      cuisines: [
        "South Indian",
        "North Indian",
        "Chinese",
        "Fast Food",
        "Beverages",
      ],
      avgRating: 4.5,
      veg: true,
      parentId: "106448",
      avgRatingString: "4.5",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 44,
        lastMileTravel: 11.2,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "11.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-03 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d6ff12cb-cc61-434d-81d5-d640f43c19ac",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/indian-coffee-house-city-khajri-chowk-rest830418",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "382152",
      name: "Shriji Namkeen",
      cloudinaryImageId: "wa8ek94fp9d97ru1tcyn",
      locality: "Palika Market",
      areaName: "Chhindwara City",
      costForTwo: "₹250 for two",
      cuisines: ["Snacks", "Beverages", "Desserts"],
      avgRating: 4.2,
      veg: true,
      parentId: "187168",
      avgRatingString: "4.2",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 51,
        lastMileTravel: 10.7,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "10.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-03 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d6ff12cb-cc61-434d-81d5-d640f43c19ac",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/shriji-namkeen-palika-market-chhindwara-city-rest382152",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "549580",
      name: "Fresh Meal's",
      cloudinaryImageId: "v5e3atn9tmtgcca1onnr",
      locality: "Teacher's Colony",
      areaName: "Chhindwara City",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "South Indian"],
      avgRating: 4.3,
      veg: true,
      parentId: "15219",
      avgRatingString: "4.3",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 59,
        lastMileTravel: 13.6,
        serviceability: "SERVICEABLE",
        slaString: "55-60 mins",
        lastMileTravelString: "13.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-03 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d6ff12cb-cc61-434d-81d5-d640f43c19ac",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/fresh-meals-teachers-colony-chhindwara-city-rest549580",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "195429",
      name: "Sanju Ka Dhaba",
      cloudinaryImageId: "hjao7sorzggaeqito6au",
      locality: "Vishnu Nagar",
      areaName: "Prasia Road",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "South Indian", "Chinese"],
      avgRating: 4.4,
      veg: true,
      parentId: "177443",
      avgRatingString: "4.4",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 54,
        lastMileTravel: 14,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "14.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-03 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d6ff12cb-cc61-434d-81d5-d640f43c19ac",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/sanju-ka-dhaba-vishnu-nagar-prasia-road-rest195429",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "870899",
      name: "Paras Mishthan",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/15/9de3a721-5e96-41d2-bb3e-3cbeff47fbd3_870899.jpg",
      locality: "Nagarpalika Complex",
      areaName: "Chhindwara City",
      costForTwo: "₹150 for two",
      cuisines: ["Beverages", "Sweets", "Snacks"],
      avgRating: 3.9,
      veg: true,
      parentId: "510613",
      avgRatingString: "3.9",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 45,
        lastMileTravel: 11.2,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "11.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-03 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹150",
        discountTag: "SAVE BIG",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d6ff12cb-cc61-434d-81d5-d640f43c19ac",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/paras-mishthan-nagarpalika-complex-chhindwara-city-rest870899",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "151649",
      name: "Hotel Sai Nath & Sai Restaurant",
      cloudinaryImageId: "vkhcohhmqfczycw9vsar",
      locality: "railway station",
      areaName: "Chhindwara Locality",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts",
      ],
      avgRating: 4.2,
      veg: true,
      parentId: "101802",
      avgRatingString: "4.2",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 51,
        lastMileTravel: 10,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "10.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-03 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "FREE ITEM",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d6ff12cb-cc61-434d-81d5-d640f43c19ac",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "509851",
      name: "Magic Momo",
      cloudinaryImageId: "dh0qsuqritnmbncwrni3",
      locality: "Parasia Road",
      areaName: "Prasia Road",
      costForTwo: "₹300 for two",
      cuisines: ["Momos", "Chinese"],
      avgRating: 4.2,
      veg: true,
      parentId: "129345",
      avgRatingString: "4.2",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 60,
        lastMileTravel: 12.3,
        serviceability: "SERVICEABLE",
        slaString: "60-65 mins",
        lastMileTravelString: "12.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-03 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d6ff12cb-cc61-434d-81d5-d640f43c19ac",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/magic-momo-parasia-road-prasia-road-rest509851",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const RestaurantCard = (props) => {
  // object destructuring
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    // Inline CSS in jsx => JS Object
    <div className="res-card" style={{ backgroundColor: "#d8e2dc" }}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      {/* {console.log(name)} */}
      <h4>{name}</h4>
      <p>{cuisines.join(", ")}</p>
      <span>{avgRating}⭐ </span>
      <span>{costForTwo}</span>
      <p>{resData.info.sla.deliveryTime} mins</p>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text"></input>
        <button>Search</button>
      </div>

      {/* not using keys (not acceptable) <<<< use indexs in place of keys instead <<<<<<<<<<<<<<< using unique id's(best practice) */}
      <div className="res-container">
        {resList.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h4 style={{ marginBottom: "2px" }}>Copyright@2025</h4>
        <h5 style={{ marginTop: "2px" }}>Foody Technologies Ltd.</h5>
      </div>
      <div className="links">
        <ul>
          <li>
            <h5>Links</h5>
          </li>
          <li>instagram</li>
          <li>facebook</li>
          <li>X</li>
        </ul>
      </div>
      <div className="help">
        <ul>
          <li>
            <h5>HelpDesk</h5>
          </li>
          <li>Contact us:+91 6788877940</li>
          <li>Write to us at: foody@help.com</li>
        </ul>
      </div>
    </div>
  );
};

const AppContainer = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <BodyComponent />
      <Footer />
    </div>
  );
};
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<AppContainer />);
