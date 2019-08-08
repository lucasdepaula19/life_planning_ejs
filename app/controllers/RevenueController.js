const knex = require('knex')
const knexConfigs = require('../../knexfile')
const db = knex(knexConfigs.development)

const TABLE_NAME = 'tb_revenue'

module.exports = {
    get() {
        return db(TABLE_NAME).select('*')
    },

    getProduct(revenue) {
        let revenueId = revenue.id;
        return db(TABLE_NAME).where('id', revenueId).select('');
    },

    insert(revenue) {
        return db(TABLE_NAME).insert(revenue);
    },

    delete(revenue) {
        return db(TABLE_NAME)
            .where('id', revenue.id)
            .del();
    },

    update(revenue) {
        return db(TABLE_NAME)
            .where('id', revenue.id)
            .update({
                name: revenue.nome,
                description: revenue.descricao,
                price: revenue.preco
            });
    }
}