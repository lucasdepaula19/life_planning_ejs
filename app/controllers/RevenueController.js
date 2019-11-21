const knex = require('knex')
const knexConfigs = require('../../knexfile')
const db = knex(knexConfigs.development)

const TABLE_NAME = 'tb_revenue'

module.exports = {

    async getRevenue() {
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

    async getRevenueId(revenueId) {
        let objRetorno = {};
        objRetorno.status = false;
        objRetorno.code = 500;

        await db(TABLE_NAME)
            .select('*')
            .where('id', revenueId)
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

    async getRevenueName(revenueName) {
        let objRetorno = {};
        console.log('revenueName: ' + JSON.stringify(revenueName));
        await db(TABLE_NAME)
            .select('id')
            .where(revenueName)
            .then(result => {
                console.log('result getByName: ' + JSON.stringify(result));
                objRetorno.data = result;
            })
            .catch(err => {
                objRetorno.data = err;
            });
        console.log('objRetorno:' + JSON.stringify(objRetorno.data[0].id));
        return objRetorno.data[0].id;
    },

    newRevenue(revenue) {
        let obj = { category: revenue.fcategory, name: revenue.fname, user: 'lucas.paula' }
        //return db.insert(obj).into(TABLE_NAME)
        return db(TABLE_NAME)
            .insert(obj)
            .then(function () {
            });
    },

    async delRevenue(revenue) {
        let obj_name = { name: revenue.fname };
        let exit;
        console.log('obj_name: ' + JSON.stringify(obj_name));

        await this.getRevenueName(obj_name)
            .then(result => {
                console.log('result: ' + JSON.stringify(result));
                let obj = { id: result };
                console.log('obj: ' + JSON.stringify(obj));
                exit = db(TABLE_NAME)
                    .where(obj)
                    .del()
                    .then(function () {
                    });
            })
            .catch(err => {
                exit = err;
            });
        console.log('exit: ' + JSON.stringify(exit) );
        return exit;
    },

    updateRevenue(revenue) {
        return db(TABLE_NAME)
            .where('id', revenue.id)
            .update({
                name: revenue.fname,
                user: 'lucas.paula'
            })
            .then(function () {
            });
    }
}