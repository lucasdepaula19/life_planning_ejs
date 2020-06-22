const knex = require('knex')
const knexConfigs = require('../../knexfile')
const db = knex(knexConfigs.development)

const TABLE_NAME = 'tb_values'

module.exports = {

    async getInsertRevenue() {
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

    async getInsertRevenueId(insertRevenueId) {
        let objRetorno = {};
        objRetorno.status = false;
        objRetorno.code = 500;

        await db(TABLE_NAME)
            .select('*')
            .where('id', insertRevenueId)
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

    async getInsertRevenueName(insertRevenueName) {
        let objRetorno = {};
        await db(TABLE_NAME)
            .select('id')
            .where(insertRevenue)
            .then(result => {
                objRetorno.data = result;
            })
            .catch(err => {
                objRetorno.data = err;
            });
        return objRetorno.data[0].id;
    },

    newInsertRevenue(insertRevenue) {
        let obj = { insertion: insertRevenue.fname, type: 'Receita', value: insertRevenue.fvalue, month: insertRevenue.fmonth, year: insertRevenue.fyear, user: 'lucas.paula' }
        //return db.insert(obj).into(TABLE_NAME)
        return db(TABLE_NAME)
            .insert(obj)
            .then(function () {
            });
    },

    async delInsertRevenue(id) {
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

    async updateInsertRevenue(insertRevenue) {
        let objRetorno = {};
        objRetorno.status = false;
        objRetorno.code = 500;

        await db(TABLE_NAME)
            .where('id', insertRevenue.fid)
            .update({
                insertion: insertRevenue.fname,
                year: insertRevenue.fyear,
                month: insertRevenue.fmonth,
                value: insertRevenue.fvalue,
                situation: insertRevenue.fsituation,
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

