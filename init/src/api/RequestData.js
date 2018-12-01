import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'
import {check} from 'meteor/check'
import {Random} from 'meteor/random'

const RequestData = new Mongo.Collection('req');

if (Meteor.isServer) {
    Meteor.publish('req', () => {
        return RequestData.find({})
    })
    Meteor.publish('req.byUser', () => {
        return Bids.find({userId : Meteor.user()._id})
    })
}

Meteor.methods({
    'req.make'(...info) {
        console.log(info);
        RequestData,insert({userID: Meteor.user()._id})
    }
})

export default RequestData