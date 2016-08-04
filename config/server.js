module.exports = {
  SERVER_PORT: 8180,
  /** 秘钥 优先选取环境变量中配置的SECRET **/
  SERVER_SECRET: process.env.JULIYE_API_SECRET || 'secret@DevEnv',
  PUBLIC_PATHS: ['/3/sessions/loginc','/3/sessions/logind']
};
