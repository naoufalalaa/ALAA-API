const { Article } = require('../models')
var sequelize = require('sequelize');
 module.exports = {
   getAllArticles() {
     return Article.findAll()
   },
   // méthodes à implémenter

  async countarticle(){
    return await Article.count();
  },
   getArticles(offset = 0, limit = 10){
    return  Article.findAll({ offset: offset, limit: limit });
  } ,


   getArticlesById(id) {
    var x= Article.findAll({
      where: {       
          id: id
      }
    });
    return x
    },
    getUserArticles(id) {
      var x= Article.findAll({
        where: {       
          UserId: id
        }
      });
      return x
      },


    async addArticle(Article) { 
      await Article.create(Tags);
    },
      

    async updateArticle(Article) { 
    await Article.update(Tags, {
      where: {
        id: Article.id
      }
    });
    },


    async deleteArticle(id) { 
    await Article.destroy({
      where: {
        id: id
      }
    });
  },
   // D'autres méthodes jugées utiles
 }