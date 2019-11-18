const knex = require('knex')
const knexConfigs = require('../../knexfile')
const db = knex(knexConfigs.development)

const TABLE_NAME = 'tb_category'

module.exports = {
    getCategory() {
        return console.log(db(TABLE_NAME).select('*'));
    },

    getCategoryId(category) {
        let categoryId = category.id;
        return db(TABLE_NAME).where('id', categoryId).select('');
    },

    newCategory(category) {
        let obj = { name: category.fname, user: 'lucas.paula' }
        //return db(TABLE_NAME).insert(obj);
        return db.insert(obj).into(TABLE_NAME)
        .then(function () {
        });
    },

    delCategory(category) {
        console.log(category);
        //alert('Método delete funcionou com get: '+ category );
        // return db(TABLE_NAME)
        //     .where('id', category.id)
        //     .del();
    },

    updateCategory(category) {
        return db(TABLE_NAME)
            .where('id', category.id)
            .update({
                name: category.fname,
                user: category.fuser
            });
    }
}