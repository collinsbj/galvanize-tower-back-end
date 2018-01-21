exports.up = function(knex, Promise) {
  return knex.schema.createTable("phones", phones => {
    phones.increments("id");
    phones.string("phoneName");
    phones.integer("price");
    phones.float("screenSize");
    phones.integer("resolutionWidth");
    phones.integer("resolutionHeight");
    phones.float("processorSpeed");
    phones.integer("storageAmount");
    phones.float("weightAmount");
    phones.integer("battery");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("phones");
};
