const { Comment } = require('../models')
const { Article } = require('../models')  
var sequelize = require('sequelize');
 module.exports = {
   getAllComments() {
     return Article.findAll({
      group : ['Article.id'],
      attributes: ['title', [sequelize.fn('COUNT', 'Comments.id'), 'NbrComments']],
      include: { model: Comment,attributes: []}
    });
   },
   countComments() {
    return Article.findAll({
     group : ['Article.id'],
     attributes: ['id','title','content','createdAt', [sequelize.fn('COUNT', 'Comments.id'), 'NbrComments']],
     include: { model: Comment,attributes: []}
   });
  },
   getComments(offset = 0, limit = 10){
    return  Comment.findAll({ offset: offset, limit: limit })
  } ,

  async countArticle(ida){
    return await Comment.count({
      where:  {
        id:ida 
      }
    });
  },
   getComments(id) {
    var x= Comment.findAll({
      where: {       
          id: id
      }
    });
    return x
    },
    getArticleComments(id) {
      var x= Comment.findAll({
        where: {       
          ArticleId: id
        }
      });
      return x
      },

    getPostComments(id) {
      var x= Comment.findAll({
        where: {       
          ArticleId: id
        }
      });
      return x
      },


    async addComments(Comments) { 
      await Comment.create(Tags);
    },
      

    async updateComments(id,Comments) { 
    await Comment.update(Tags, {
      where: {
        id: id
      }
    });
    },


    async deleteComments(id) { 
    await Comment.destroy({
      where: {
        id: id
      }
    });
  },
   // D'autres méthodes jugées utiles
 }