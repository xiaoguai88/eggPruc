'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/jspan', controller.home.jspan);
  router.get('/mycontroller', controller.jspang.index);
  router.get('/mygirls', controller.jspang.getGirls);
  router.get('/myget/:name/:age', controller.jspang.getStrict);
  router.get('/student', controller.student.getStudentData);
};
