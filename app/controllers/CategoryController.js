const knex = require('knex')
const knexConfigs = require('../../knexfile')
const db = knex(knexConfigs.development)

const TABLE_NAME = 'tb_category'

module.exports = {

    async getCategory() {
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

    async getCategoryId(categoryId) {
        let objRetorno = {};
        objRetorno.status = false;
        objRetorno.code = 500;

        await db(TABLE_NAME)
            .select('*')
            .where('id', categoryId)
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

    async getCategoryName(categoryName) {
        let objRetorno = {};
        console.log('categoryName: ' + JSON.stringify(categoryName));
        await db(TABLE_NAME)
            .select('id')
            .where(categoryName)
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

    newCategory(category) {
        let obj = { name: category.fname, user: 'lucas.paula' }
        //return db.insert(obj).into(TABLE_NAME)
        return db(TABLE_NAME)
            .insert(obj)
            .then(function () {
            });
    },

    async delCategory(category) {
        let obj_name = { name: category.fname };
        let exit;
        console.log('obj_name: ' + JSON.stringify(obj_name));

        await this.getCategoryName(obj_name)
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

    updateCategory(category) {
        return db(TABLE_NAME)
            .where('id', category.id)
            .update({
                name: category.fname,
                user: 'lucas.paula'
            })
            .then(function () {
            });
    }
}

