const knex = require('knex')
const knexConfigs = require('../../knexfile')
const db = knex(knexConfigs.development)

const TABLE_NAME = 'tb_category'

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
        let obj = { insertion: insertRevenue.fname, user: 'lucas.paula' }
        //return db.insert(obj).into(TABLE_NAME)
        return db(TABLE_NAME)
            .insert(obj)
            .then(function () {
            });
    },

    async delInsertRevenue(insertRevenue) {
        let obj_name = { insertion: insertRevenue.fname };
        let exit;
    
        await this.getInsertRevenueName(obj_name)
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

    updateInsertRevenue(insertRevenue) {
        return db(TABLE_NAME)
            .where('id', insertRevenue.id)
            .update({
                name: insertRevenue.fname,
                user: 'lucas.paula'
            })
            .then(function () {
            });
    }
}

