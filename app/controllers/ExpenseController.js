const knex = require('knex')
const knexConfigs = require('../../knexfile')
const db = knex(knexConfigs.development)

const TABLE_NAME = 'tb_expense'

module.exports = {
    get() {
        return db(TABLE_NAME).select('*')
    },

    getProduct(expense) {
        let expenseId = expense.id;
        return db(TABLE_NAME).where('id', expenseId).select('');
    },

    insert(expense) {
        return db(TABLE_NAME).insert(expense);
    },

    delete(expense) {
        return db(TABLE_NAME)
            .where('id', expense.id)
            .del();
    },

    update(expense) {
        return db(TABLE_NAME)
            .where('id', expense.id)
            .update({
                name: expense.nome,
                description: expense.descricao,
                price: expense.preco
            });
    }
}