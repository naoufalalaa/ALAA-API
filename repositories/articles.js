const { Article } = require('../models')
 module.exports = {
   getAllArticles() {
     return Article.findAll()
   },
   // méthodes à implémenter
   getArticles(offset = 0, limit = 10){
    return  Article.findAll({ offset: offset, limit: limit });
  } ,


   getArticlesById(id) {
    return Article.findAll({
      where: {       
          id: id
      }
    })
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