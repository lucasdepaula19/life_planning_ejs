const knex = require('knex')
const knexConfigs = require('../../knexfile')
const db = knex(knexConfigs.development)

const TABLE_NAME = 'tb_category'

module.exports = {
    get() {
        return db(TABLE_NAME).select('*')
    },

    getProduct(category) {
        let categoryId = category.id;
        return db(TABLE_NAME).where('id', categoryId).select('');
    },

    insert(category) {
        return db(TABLE_NAME).insert(category);
    },

    delete(category) {
        return db(TABLE_NAME)
            .where('id', category.id)
            .del();
    },

    update(category) {
        return db(TABLE_NAME)
            .where('id', category.id)
            .update({
                name: category.nome,
                description: category.descricao,
                price: category.preco
            });
    }
}