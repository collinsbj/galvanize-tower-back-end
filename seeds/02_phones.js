exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("phones")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("phones").insert([
        {
          id: 1,
          phoneName: "Apple iPhone X",
          phoneUrl:
            "https://images.apple.com/v/iphone-x/e/images/overview/primary/dual_cameras_smart_cameras_large.jpg",
          price: 999,
          screenSize: 5.8,
          resolutionWidth: 1125,
          resolutionHeight: 2436,
          processorSpeed: 0.0,
          storageAmount: 64,
          weightAmount: 6.14,
          battery: 12
        },
        {
          id: 2,
          phoneName: "Apple iPhone 8",
          phoneUrl:
            "https://apple.insidercdn.com/gallery/0-28089-iphone8andplustop1-l.jpg",
          price: 699,
          screenSize: 4.7,
          resolutionWidth: 750,
          resolutionHeight: 1334,
          processorSpeed: 0.0,
          storageAmount: 64,
          weightAmount: 5.22,
          battery: 12
        },
        {
          id: 3,
          phoneName: "Samsung Galaxy S8",
          phoneUrl:
            "https://drop.ndtv.com/TECH/product_database/images/329201783846PM_635_samsung_galaxy_s8.jpeg",
          price: 724,
          screenSize: 5.8,
          resolutionWidth: 1440,
          resolutionHeight: 2960,
          processorSpeed: 2.3,
          storageAmount: 64,
          weightAmount: 5.47,
          battery: 14
        },
        {
          id: 4,
          phoneName: "Google Pixel 2 XL",
          phoneUrl:
            "https://drop.ndtv.com/TECH/product_database/images/104201774205PM_635_google_pixel_2_xl.jpeg",
          price: 649,
          screenSize: 5.98,
          resolutionWidth: 1440,
          resolutionHeight: 2880,
          processorSpeed: 2.35,
          storageAmount: 64,
          weightAmount: 6.2,
          battery: 11
        },
        {
          id: 5,
          phoneName: "Samsung Galaxy Note 8",
          phoneUrl:
            "https://ss7.vzw.com/is/image/VerizonWireless/pdp-samsung-great-feature1-d-0817?$pngalpha$&scl=1&scl=2",
          price: 950,
          screenSize: 6.3,
          resolutionWidth: 1440,
          resolutionHeight: 2960,
          processorSpeed: 2.35,
          storageAmount: 64,
          weightAmount: 6.88,
          battery: 10
        }
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE phones_id_seq RESTART WITH 6;");
    });
};
