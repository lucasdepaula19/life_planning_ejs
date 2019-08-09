const knex = require('knex')
const knexConfigs = require('../../knexfile')
const db = knex(knexConfigs.development)

const TABLE_NAME = 'tb_revenue'

module.exports = {
    get() {
        return db(TABLE_NAME).select('*')
    },

    getRevenue(revenue) {
        let revenueId = revenue.id;
        return db(TABLE_NAME).where('id', revenueId).select('');
    },

    newRevenue(revenue) {
        let obj = { name: revenue.fname, user: 'lucas.paula' }
        return db.insert(obj).into(TABLE_NAME)
        .then(function () {
        });
    },

    delRevenue(revenue) {
        return db(TABLE_NAME)
            .where('id', revenue.id)
            .del();
    },

    updateRevenue(revenue) {
        return db(TABLE_NAME)
            .where('id', revenue.id)
            .update({
                name: revenue.nome,
                description: revenue.descricao,
                price: revenue.preco
            });
    }
}