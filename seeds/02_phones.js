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
