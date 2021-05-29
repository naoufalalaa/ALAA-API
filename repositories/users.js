const { User } = require('../models')

 module.exports = {
  async getAllUsers() {
     return await User.findAll({
       attributes:['id', 'username', 'email', 'role']
     });
   },
   // méthodes à implémenter
   async getUsers(offset = 0, limit = 10) {
        return await User.findAll({ offset: offset, limit: limit });
    },
    async getAdmins() {
        return await User.findAll({
            where: {
              role: 'admin'
            }
          });
    },
    async getAuthors() { 
        return await User.findAll({
            where: {
            role: 'author'
            }
        });
   },
   async getGuests(){ 
        return await User.findAll({
            where: {
            role: 'guest'
            }
        });
   }, 
   async getUser(id) { 
        return await User.findOne({
            where: {
            id
            },
            attributes:['id', 'username', 'email', 'role']
        });
   },
   async getUserByEmail(email) { 
        return await User.findAll({
            where: {
            email: email
            },
            attributes:['id', 'username', 'email', 'role']
        });
   },
   async addUser(user) {
      let _user = {}
      const created = await User.create({ username: user.username,
          email: user.email, password: user.password,
          role: user.role, updatedAt : user.updatedAt, createdAt : user.createdAt});
      if (created != null){
        _user.id = created.id
        _user.username = created.username
        _user.email = created.email
        _user.role = created.role
      } else _user.error = "can't create this user"

      return _user
        
   },
   async updateUser(user) {
    const _user = await this.getUserByEmail(user.email)
    console.log("USER: ", user)
    if (_user == null) return {"error": "Can't update user"}
    try{
      const updated = await User.update(user, {
        where: {
          id: _user.id
        }
      });
      if (updated == 1) return user;
      else throw new Error()
    } catch(error){
      return {"error": "Can't update user"}
    }

   },
    async deleteUser(id) { 
    return await User.destroy({
        where: {
          id: id
        },
        attributes:['id', 'username', 'email', 'role']
      });
   },
   // D'autres méthodes jugées utiles
 }
