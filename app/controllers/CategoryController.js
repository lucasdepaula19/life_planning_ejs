const knex = require('knex')
const knexConfigs = require('../../knexfile')
const db = knex(knexConfigs.development)

const TABLE_NAME = 'tb_category'

module.exports = {
    getCategory() {
        return db(TABLE_NAME).select('*');
    },

    getCategoryId(category) {
        let categoryId = category.id;
        
        console.log(db.select().table(categoryId));
        //return db('tb_category').where('id', categoryId);
        //return db(TABLE_NAME).where('id', categoryId).select('');
        return categoryId;
    },

    newCategory(category) {
        let obj = { name: category.fname, user: 'lucas.paula' }
        return db(TABLE_NAME).insert(obj)
        //return db.insert(obj).into(TABLE_NAME)
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