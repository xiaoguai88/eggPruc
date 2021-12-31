'use strict';
// 接口返回渲染html
const Controller = require('egg').Controller;
class JspangController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi egg';
  }
  async getGirls() {
    const { ctx } = this;
    ctx.body = await new Promise(resolve => {
      setTimeout(() => {
        resolve('zoulai');
      }, 5000);
    });

  }
  /**
   * get传参
   * 1.自由传参
   * 2.严格传参 /:name/:age
   */
  async getFree() {
      const {ctx} = this;
      ctx.body = ctx.query
  }
  async getStrict() {
      const { ctx } = this;
      ctx.body = '大家好我叫' + ctx.params.name + ',今年' + ctx.params.age + '欢迎来到阴阳学宫!' 
  }
}
module.exports = JspangController;
