require('dotenv').config();

const { Keystone } = require('@keystonejs/keystone');
const { Text, File } = require('@keystonejs/fields');
const { S3Adapter } = require('@keystonejs/file-adapters');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { NuxtApp } = require('@keystonejs/app-nuxt');

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'Amado';
const adapterConfig = { mongoUri: 'mongodb://localhost/amado' };
const S3_PATH = 'uploads';


const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookieSecret: process.env.COOKIE_SECRET
});

const fileAdapter = new S3Adapter({
  bucket: 'amadostore',
  folder: S3_PATH,
  publicUrl: ({ id, filename, _meta }) =>
    `https://${process.env.S3_DISTRIBUTION_DOMAIN_NAME}/${S3_PATH}/${filename}`,
  s3Options: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY
  },
  uploadParams: ({ filename, id, mimetype, encoding }) => ({
    Metadata: {
      keystone_id: `${id}`,
    }
  })
})

keystone.createList('Category', {
  schemaDoc: 'A list of things which need to be done',
  fields: {
    name: { type: Text, schemaDoc: 'Name of caterory' },
    priceFrom: { type: Text, schemaDoc: 'Minimum price of the product in the category' },
    image: { type: File, adapter: fileAdapter }
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
        '~/plugins/vue-frag.js',
      ]
    })
  ]
};
