module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name: 'volta',
      script: 'index.js',
      watch: true,
      merge_logs: true,
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user: 'alex',
      host: '138.68.68.61',
      ref: 'origin/master',
      repo: 'git@bitbucket.org:grozav/volta.git',
      path: '/var/www/volta',
      'post-deploy': 'pm2 startOrRestart config/deploy.config.js --env production'
    }
  }
};
