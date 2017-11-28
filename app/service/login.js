'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
  // 根据用户名和密码登录
  async login(username, userpwd) {
    const result = await this.app.mysql.get('shopdb').get('tb_users', { username, userpwd });
    return { user: result };
  }
}

module.exports = LoginService;
