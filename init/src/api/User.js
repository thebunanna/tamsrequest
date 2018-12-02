import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'

export default Users = Meteor.users;

if(Meteor.isServer)
{
    Meteor.publish('users', () => {
        return Users.find({});
    });
}
