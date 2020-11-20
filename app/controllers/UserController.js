const knex = require('knex')
const knexConfigs = require('../../knexfile')
const db = knex(knexConfigs.development)
const crypto = require("crypto");
const TABLE_NAME = 'tb_users'

module.exports = {

    async getUser() {
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

    async getUserId(userId) {
        let objRetorno = {};
        objRetorno.status = false;
        objRetorno.code = 500;

        await db(TABLE_NAME)
            .select('*')
            .where('id', userId)
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

    async getUserName(userName) {
        let objRetorno = {};
        await db(TABLE_NAME)
            .select('id')
            .where(userName)
            .then(result => {
                objRetorno.data = result;
            })
            .catch(err => {
                objRetorno.data = err;
            });
        return objRetorno.data[0].id;
    },

    newUser(user) {
        let obj = { user: user.fuser, name: user.fname, password: user.fpassword }
        
        let senha_criptografada = crypto.createHash("md5").update(obj.password).digest("hex");

        obj.password = senha_criptografada;

        return db(TABLE_NAME)
            .insert(obj)
            .then(function () {
            });
    },

    async delUser(user) {
        // let obj_name = { name: category.fname };
        // let exit;
    
        // await this.getCategoryName(obj_name)
        //     .then(result => {
        //         let obj = { id: result };
        //         exit = db(TABLE_NAME)
        //             .where(obj)
        //             .del()
        //             .then(function () {
        //             });
        //     })
        //     .catch(err => {
        //         exit = err;
        //     });
        // return exit;
    },

    updateUser(user) {
        // return db(TABLE_NAME)
        //     .where('id', category.id)
        //     .update({
        //         name: category.fname,
        //         user: 'lucas.paula'
        //     })
        //     .then(function () {
        //     });
    }
}

