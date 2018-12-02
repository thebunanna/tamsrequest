import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'
import {check} from 'meteor/check'
import {Random} from 'meteor/random'

export const RequestData = new Mongo.Collection('req');

if (Meteor.isServer) {
    Meteor.publish('req', () => {
        return RequestData.find({})
    })
    Meteor.publish('req.byUser', () => {
        return RequestData.find({userId : Meteor.user()._id})
    })    
}

Meteor.methods({
    'req.make'(...info) {        
        RequestData.insert({/*userID: Meteor.user()._id, */...info})
    }
})

