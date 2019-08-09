const knex = require('knex')
const knexConfigs = require('../../knexfile')
const db = knex(knexConfigs.development)

const TABLE_NAME = 'tb_expense'

module.exports = {
    get() {
        return db(TABLE_NAME).select('*')
    },

    getExpense(expense) {
        let expenseId = expense.id;
        return db(TABLE_NAME).where('id', expenseId).select('');
    },

    newExpense(expense) {
        let obj = { name: expense.fname, due: expense.fdue, user: 'lucas.paula' }
        return db.insert(obj).into(TABLE_NAME)
        .then(function () {
        });
    },

    delExpense(expense) {
        return db(TABLE_NAME)
            .where('id', expense.id)
            .del();
    },

    updateExpense(expense) {
        return db(TABLE_NAME)
            .where('id', expense.id)
            .update({
                name: expense.nome,
                description: expense.descricao,
                price: expense.preco
            });
    }
}