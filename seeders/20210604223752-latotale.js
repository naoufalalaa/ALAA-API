'use strict';
const faker = require('faker')
var _ = require('underscore');
const users = [...Array(20)].map((user) => (
  {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(8),
    role : faker.helpers.randomize(['admin', 'author', 'guest']),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))

const tags = [...Array(10)].map((tags) => (
  {
    name: faker.lorem.word(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))
const Article = [...Array(200)].map((Article) => (
  {
    title: faker.name.title(),
    content:faker.lorem.paragraph(),
    published:1,
    UserId:faker.helpers.randomize(_.range(1,20,1)),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))

const Comment = [...Array(2000)].map((Comment) => (
  {
    content:faker.lorem.paragraph(),
    ArticleId:faker.helpers.randomize(_.range(401,600,1)),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //return queryInterface.bulkInsert('Tags', tags, {})
    //return queryInterface.bulkInsert('Users', users, {})
    //return queryInterface.bulkInsert('Articles', Article, {})
    //return queryInterface.bulkInsert('Comments', Comment, {});
    for(var i=401;i<=600;i++){
      for(var j=1;j<=10;j++){
        await queryInterface.bulkInsert('ArticleTags', [{
          ArticleId:  i,
          Tagid:  j ,
          createdAt: new Date(),
          updatedAt: new Date()
        }], {});
      }
    }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};