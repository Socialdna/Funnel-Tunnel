/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
var Event = require( '../api/event/event.model');
var User = require('../api/user/user.model');
var config = require('./environment/');

module.exports = function seedDatabaseIfNeeded() {
  if(config.seedDB) {
    Event.find({}).remove()
      .then(() => {
        let event = Event.create({
          summary: 'Sunshine Winery',
          description: 'Try our delicious dishes at the tasting room at  '
                + 'Sunshine Winery ',
          location:  '123 Main Street, San Diego, CA',
          start: {
              Date: '2017-10-22T11:00:00-07:00',
              DateTime: '2017-10-22T11:00:00-07:00',
              timeZone: 'pacific'
          },
          end: {
              Date: '2017-10-22T11:00:00-09:00',
              DateTime: '2017-10-22T11:00:00-09:00',
              timeZone:  'pacific'
          }
        }, {
          summary: 'Temecula Winery',
          description: 'Try our delicious dishes at the tasting room at  '
                + 'Temecula Winery',
          location:  '123 Main Street, Temecula, CA',
          start: {
              DateTime: '2017-10-24T11:00:00-07:00'},
          end: {
              DateTime: '2017-10-24T11:00:00-09:00'}
        }, {
          summary: 'Mega Brewery',
          description: 'Try our delicious dishes at the tasting room at  '
                + 'Mega Brewery',
          location:  '123 First Street, San Diego, CA',
          start: {
              DateTime: '2017-11-02T11:00:00-07:00'},
          end: {
              DateTime: '2017-11-02T11:00:00-09:00'}
        }, {
          summary: 'Valley View Apartments',
          description: 'Try our delicious dishes at the clubhouse at  '
                + 'Valley View apartments',
          location:  '23345 Carmel Creek Road, Del Mar, CA',
          start: {
              DateTime: '2017-11-04T11:00:00-07:00'},
          end: {
              DateTime: '2017-11-04T11:00:00-11:00'}
        }, {
          summary: 'Beer Festival',
          description: 'Try our delicious food that goes perfectly with beer '
                + 'at the center stage of the Beer Festival',
          location:  '456 Front Street, San Diego, CA',
          start: {
              DateTime: '2017-11-12T11:00:00-09:00'},
          end: {
              DateTime: '2017-11-12T11:00:00-09:00'}
        }, {
          summary: 'Restaurant Week',
          description: 'Try our delicious food at the heart of Gaslamp Quarter '
                + 'during the Restaurant Week',
          location:  '344 Fifth Avenue, San Diego, CA',
          start: {
              DateTime: '2017-11-22T11:00:00-10:00'},
          end: {
              DateTime: '2017-11-22T11:00:00-13:00'}
        });
        return event;
      })
      .then(() => console.log('finished populating events'))
      .catch(err => console.log('error populating events', err));

    User.find({}).remove()
      .then(() => {
        User.create({
          provider: 'local',
          name: 'Test User',
          email: 'test@example.com',
          password: 'test'
        }, {
          provider: 'local',
          role: 'admin',
          name: 'Admin',
          email: 'admin@example.com',
          password: 'admin'
        })
        .then(() => console.log('finished populating users'))
        .catch(err => console.log('error populating users', err));
      });
  }
}

