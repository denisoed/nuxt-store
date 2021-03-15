require('dotenv').config();

const { Keystone } = require('@keystonejs/keystone');
const { Text, File, Select, Relationship } = require('@keystonejs/fields');
const { S3Adapter } = require('@keystonejs/file-adapters');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { NuxtApp } = require('@keystonejs/app-nuxt');

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const nuxtConfig = require('./nuxt.config');
const PROJECT_NAME = 'Amado';
const adapterConfig = { mongoUri: 'mongodb://localhost/amado' };
const S3_PATH = 'uploads';


const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookieSecret: process.env.COOKIE_SECRET
});

const options = [
  { value: 'no', label: 'Out of stock' },
  { value: 'yes', label: 'In stock' },
];

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

keystone.createList('Gallery', {
  schemaDoc: 'A list of things which need to be done',
  fields: {
    image: { type: File, adapter: fileAdapter },
    alt: { type: Text, schemaDoc: 'Image alt' }
  }
});

keystone.createList('Product', {
  schemaDoc: 'A list of things which need to be done',
  fields: {
    status: { type: Select, options },
    category: { type: Relationship, ref: 'Category', many: false },
    name: { type: Text, schemaDoc: 'Name of product' },
    description: { type: Text, schemaDoc: 'Product description' },
    price: { type: Text, schemaDoc: 'Product price' },
    thumbnail: { type: File, adapter: fileAdapter },
    gallery: { type: Relationship, ref: 'Gallery', many: true },
  }
});

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
