exports.up = function(knex, Promise) {
  return knex.schema.createTable("laptops", laptops => {
    laptops.increments("id");
    laptops.string("laptopName");
    laptops.string("laptopUrl");
    laptops.integer("price");
    laptops.float("screenSize");
    laptops.integer("resolutionWidth");
    laptops.integer("resolutionHeight");
    laptops.float("processorSpeed");
    laptops.integer("storageAmount");
    laptops.string("storageUnit");
    laptops.integer("memoryAmount");
    laptops.string("memoryType");
    laptops.float("weightAmount");
    laptops.string("weightUnit");
    laptops.integer("battery");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("laptops");
};
