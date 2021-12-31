'use strict';

const Service = require('egg').Service;
class studentService extends Service{
    async getStudentData(){
       try {
        const app = this.app;
        const res = await app.mysql.select('test')
        return res
       } catch (error) {
           console.log(error);
           return null;
       }
    }
}
module.exports = studentService