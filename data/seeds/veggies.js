
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('veggies').truncate()//truncate()empties table and resets the primary id
  //del() does not reset the id
    .then(function () {
      // Inserts seed entries
      return knex('veggies').insert([
        {name: "broccoli", Like: 1},
        {name: "sprouts", Like: 0},
        {name: "cabbage", Like: 0}
      ]);
    });
};

//remember to change the table name in both places next to knex
