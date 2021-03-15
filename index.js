require('dotenv').config();

const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { NuxtApp } = require('@keystonejs/app-nuxt');

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const nuxtConfig = require('./nuxt.config');
const initFields = require('./fields');
const PROJECT_NAME = 'Amado';
const adapterConfig = { mongoUri: 'mongodb://localhost/amado' };

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookieSecret: process.env.COOKIE_SECRET
});

initFields(keystone);

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({ name: PROJECT_NAME }),
    new NuxtApp({
      ...nuxtConfig
    })
  ]
};
