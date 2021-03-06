const knex = require('knex')
const knexConfigs = require('../../knexfile')
const db = knex(knexConfigs.development)

const TABLE_NAME = 'tb_expense'

module.exports = {

    async getExpense() {
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

    async getExpenseId(expenseId) {
        let objRetorno = {};
        objRetorno.status = false;
        objRetorno.code = 500;

        await db(TABLE_NAME)
            .select('*')
            .where('id', expenseId)
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

    async getExpenseName(expenseName) {
        let objRetorno = {};
        await db(TABLE_NAME)
            .select('id')
            .where(expenseName)
            .then(result => {
                objRetorno.data = result;
            })
            .catch(err => {
                objRetorno.data = err;
            });
        return objRetorno.data[0].id;
    },

    newExpense(expense) {
        let obj = { category: expense.fcategory, name: expense.fname, due: expense.fdue, user: 'lucas.paula' }
        //return db.insert(obj).into(TABLE_NAME)
        return db(TABLE_NAME)
            .insert(obj)
            .then(function () {
            });
    },

    async delExpense(expense) {
        let obj_name = { name: expense.fname };
        let exit;
        await this.getExpenseName(obj_name)
            .then(result => {
                let obj = { id: result };
                exit = db(TABLE_NAME)
                    .where(obj)
                    .del()
                    .then(function () {
                    });
            })
            .catch(err => {
                exit = err;
            });
        return exit;
    },

    updateExpense(expense) {
        return db(TABLE_NAME)
            .where('id', expense.id)
            .update({
                name: expense.fname,
                user: 'lucas.paula'
            })
            .then(function () {
            });
    }
}