const knex = require('knex')
const knexConfigs = require('../../knexfile')
const db = knex(knexConfigs.development)

const TABLE_NAME = 'tb_values'

module.exports = {

    async getInsertExpense() {
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

    async getInsertExpenseId(insertExpenseId) {
        let objRetorno = {};
        objRetorno.status = false;
        objRetorno.code = 500;

        await db(TABLE_NAME)
            .select('*')
            .where('id', insertExpenseId)
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

    async delInsertExpense(id) {
        let objRetorno = {};
        objRetorno.status = false;
        objRetorno.code = 500;
        
        await db(TABLE_NAME)
            .where('id', id)
            .del()
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

    async getInsertExpenseName(insertExpenseName) {
        let objRetorno = {};
        await db(TABLE_NAME)
            .select('id')
            .where(insertExpenseName)
            .then(result => {
                objRetorno.data = result;
            })
            .catch(err => {
                objRetorno.data = err;
            });
        return objRetorno.data[0].id;
    },

    newInsertExpense(insertExpense) {
        let obj = { insertion: insertExpense.fname, type: 'Despesa', value: insertExpense.fvalue, month: insertExpense.fmonth, year: insertExpense.fyear, user: 'lucas.paula' }
        //return db.insert(obj).into(TABLE_NAME)
        return db(TABLE_NAME)
            .insert(obj)
            .then(function () {
            }); 
    },

    async updateInsertExpense(insertExpense) {
        let objRetorno = {};
        objRetorno.status = false;
        objRetorno.code = 500;

        await db(TABLE_NAME)
            .where('id', insertExpense.fid)
            .update({
                insertion: insertExpense.fname,
                year: insertExpense.fyear,
                month: insertExpense.fmonth,
                value: insertExpense.fvalue,
                situation: insertExpense.fsituation,
                user: 'lucas.paula'
            })
            .then(result => {
                objRetorno.code = 200;
                objRetorno.status = true;
                objRetorno.data = result;
            });
            
        return objRetorno;
    }
}

