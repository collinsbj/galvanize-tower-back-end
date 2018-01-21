exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("laptops")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("laptops").insert([
        {
          id: 1,
          laptopName: "Apple MacBook Pro",
          laptopUrl:
            "https://images.apple.com/v/macbook-pro/n/images/overview/macos_large.jpg",
          price: 2399,
          screenSize: 15.4,
          resolutionWidth: 2880,
          resolutionHeight: 1800,
          processorSpeed: 2.8,
          storageAmount: 256,
          storageUnit: "GB",
          memoryAmount: 16,
          memoryType: "LPDDR3",
          weightAmount: 4.02,
          weightUnit: "pounds",
          battery: 10
        },
        {
          id: 2,
          laptopName: "Apple MacBook",
          laptopUrl:
            "https://images.apple.com/v/macbook/g/images/overview/pixel_macbook_large.jpg",
          price: 1299,
          screenSize: 12,
          resolutionWidth: 2304,
          resolutionHeight: 1440,
          processorSpeed: 1.2,
          storageAmount: 256,
          storageUnit: "GB",
          memoryAmount: 8,
          memoryType: "LPDDR3",
          weightAmount: 2.03,
          weightUnit: "pounds",
          battery: 10
        },
        {
          id: 3,
          laptopName: "Omen X by HP",
          laptopUrl:
            "http://www.www8-hp.com/us/en/images/Performance_548_425_tcm245_2508096_tcm245_2508123_tcm245-2508096.png",
          price: 2149,
          screenSize: 17.3,
          resolutionWidth: 1920,
          resolutionHeight: 1080,
          processorSpeed: 2.8,
          storageAmount: 1,
          storageUnit: "TB",
          memoryAmount: 32,
          memoryType: "DDR4-2400 SDRAM",
          weightAmount: 10.73,
          weightUnit: "pounds",
          battery: 7
        },
        {
          id: 4,
          laptopName: "Lenovo X1 Yoga",
          laptopUrl:
            "/medias/lenovo-thinkpad-x1-yoga-iF-design-award-2017-hero.pn…4ZTBiODViOWQyOTFmNmFlYTA2NzM4MWNiOGQwZDJiY2Y3ZjgwNTA4MzcwMzY",
          price: 2114,
          screenSize: 14,
          resolutionWidth: 2560,
          resolutionHeight: 1440,
          processorSpeed: 3.9,
          storageAmount: 1,
          storageUnit: "TB",
          memoryAmount: 16,
          memoryType: "LPDDR3",
          weightAmount: 2.99,
          weightUnit: "pounds",
          battery: 15
        },
        {
          id: 5,
          laptopName: "Dell Alienware 15",
          laptopUrl:
            "//i.dell.com/sites/imagecontent/products/PublishingImages/al…3G0018_aw_laptop_alienware15_gaming_pdp_polaris_module10.jpg",
          price: 3699,
          screenSize: 15.6,
          resolutionWidth: 1920,
          resolutionHeight: 1080,
          processorSpeed: 4.4,
          storageAmount: 3,
          storageUnit: "TB",
          memoryAmount: 32,
          memoryType: "DDR4",
          weightAmount: 6.6,
          weightUnit: "pounds",
          battery: 3
        }
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE laptops_id_seq RESTART WITH 6;");
    });
};
