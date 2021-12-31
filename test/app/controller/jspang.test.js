'use strict';
// 单元测试｜异步单元测试
const { app } = require('egg-mock/bootstrap');

describe('jspang-index', () => {
  it('jspang index page', () => {
    return app.httpRequest()
      .get('/mycontroller')
      .expect('hi egg')
      .expect(200);
  });
  it('jspan girls page', async () => {
    return app.httpRequest()
      .get('/mygirls')
      .expect('zoulai')
      .expect(200);
  });
});
