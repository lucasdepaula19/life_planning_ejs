const knex = require('knex')
const knexConfigs = require('../../knexfile')
const db = knex(knexConfigs.development)

const TABLE_NAME = 'tb_category'

module.exports = {

    async getCategory() {
        let objRetorno = {};
        objRetorno.status = false;
        objRetorno.code = 500;

        await db.select().table(TABLE_NAME)
            .then(result => {
                objRetorno.code = 200;
                objRetorno.status = true;
                objRetorno.data = result;
            })
            .catch(err => {
                objRetorno.data = err;
            });

        return objRetorno;
    },

    async getCategoryId(categoryId) {
        let objRetorno = {};
        objRetorno.status = false;
        objRetorno.code = 500;

        await db(TABLE_NAME)
            .select('*')
            .where('id', categoryId)
            .then(result => {
                objRetorno.code = 200;
                objRetorno.status = true;
                objRetorno.data = result;
            })
            .catch(err => {
                objRetorno.data = err;
            });

        return objRetorno;
    },

    newCategory(category) {
        let obj = { name: category.fname, user: 'lucas.paula' }
        //return db.insert(obj).into(TABLE_NAME)
        return db(TABLE_NAME).insert(obj)
            .then(function () {
            });
    },

    delCategory(categoryId) {
        let obj = { id: categoryId };
        return db(TABLE_NAME)
            .where(obj)
            .del()
            .then(function () {
            });
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

