/* eslint valid-jsdoc: "off" */

'use strict';

const { mysql } = require("./plugin");

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1640856432140_1422';

  // add your middleware config here
  config.middleware = [];
  // mysql数据库配置
  config.mysql = mysql + {
    app:true,     //是否挂载到app下面
    agent:false,  //是否挂载到代理下面
    client:{
      host:'127.0.0.1',      // 数据库地址
      prot:'3306',           // 端口
      user:'wwj',           // 用户名
      password:'wwj123',    // 密码
      database:'test'    // 连接的数据库名称
    }
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
