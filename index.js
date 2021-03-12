require('dotenv').config();

const { Keystone } = require('@keystonejs/keystone');
const { Text } = require('@keystonejs/fields');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { NuxtApp } = require('@keystonejs/app-nuxt');

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'Amado';
const adapterConfig = { mongoUri: 'mongodb://localhost/amado' };


const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookieSecret: process.env.COOKIE_SECRET
});

keystone.createList('Todo', {
  schemaDoc: 'A list of things which need to be done',
  fields: {
    name: { type: Text, schemaDoc: 'This is the thing you need to do' },
  },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({ name: PROJECT_NAME }),
    new NuxtApp({
      srcDir: 'src',
      buildDir: 'dist',
      head: {
        script: [
          {
            src: 'js/jquery/jquery-2.2.4.min.js',
            body: true
          },
          {
            src: 'js/popper.min.js',
            body: true
          },
          {
            src: 'js/bootstrap.min.js',
            body: true
          },
          {
            src: 'js/plugins.js',
            body: true
          },
          {
            src: 'js/active.js',
            body: true
          },
        ]
      },
      css: [
        {
          src: '~/assets/css/core-style.css'
        }
      ],
      plugins: [
        '~/plugins/vue-fragment.js',
      ]
    })
  ]
};
