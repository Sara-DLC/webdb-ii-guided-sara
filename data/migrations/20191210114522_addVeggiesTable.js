
// a migration describes the changes to apply to the DB


//the up function describes what will be done
exports.up = function(knex) {
  //always return the call to knex.schema
    return knex.schema.createTable('veggies', tbl =>{ 
    tbl
    .increments(); //primary key called "id", an integer, auto-increments and you can pass a name otherwise defaults to id

    tbl
    .string('name', 120)
    .notNullable()
    .unique()//unique() is a constraint (rules we define to help protect against invalid data)
    .index(); //searching for vegetable using this column faster

    tbl
    .boolean('Like')
    .defaultTo(false);
});
};

// the down function describes how to revert the changes (like undo the schema)
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('veggies')
};
