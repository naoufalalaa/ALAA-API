const { Comment } = require('../models')
 module.exports = {
   getAllComments() {
     return Comment.findAll()
   },
   getComments(offset = 0, limit = 10){
    return  sequelize.query("SELECT * FROM Comments LIMIT "+ limit +" OFFSET "+offset)
  } ,


   getComments(id) {
    var x= Comment.findAll({
      where: {       
          id: id
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