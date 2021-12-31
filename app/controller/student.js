'use strict';

const Controller = require('egg').Controller;
class studentController extends Controller {
    async getStudentData() {
        const { ctx } = this;
        const res = await ctx.service.student.getStudentData();
        ctx.body = 'student:'+ JSON.stringify(res);
    }
}

module.exports = studentController