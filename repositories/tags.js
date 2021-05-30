const { Tag } = require('../models')
 module.exports = {
   getAllTags() {
     return Tag.findAll()
   },
   // méthodes à implémenter
   getTags(offset = 0, limit = 10){
    return  sequelize.query("SELECT * FROM Tags LIMIT "+ limit +" OFFSET "+offset)
  } ,


   getTags(id) {
    var x= Tag.findAll({
      where: {       
          id: id
      }
    });
    return x
    },


    async addTags(Tags) { 
      await Tag.create(Tags);
    },
      

    async updateTags(id,Tags) { 
    await Tag.update(Tags, {
      where: {
        id: id
      }
    });
    },


    async deleteTags(id) { 
    await Tag.destroy({
      where: {
        id: id
      }
    });
  },
   // D'autres méthodes jugées utiles
 }