'use strict';

var mongoose = require('mongoose');
var registerEvents = require('./event.events');

var EventSchema = new mongoose.Schema({
  "kind": String,
  "etag": String,
  "id": String,
  "status": String,
  "htmlLink": String,
  "created": Date,
  "upDated": Date,
  "summary": String,
  "description": String,
  "location": String,
  "colorId": String,
  "creator": {
    "id": String,
    "email": String,
    "displayName": String,
    "self": Boolean
  },
  "organizer": {
    "id": String,
    "email": String,
    "displayName": String,
    "self": Boolean
  },
  "start": {
    "Date": Date,
    "DateTime": Date,
    "timeZone": String
  },
  "end": {
    "Date": Date,
    "DateTime": Date,
    "timeZone": String
  },
  "endTimeUnspecified": Boolean,
  "recurrence": [
    String
  ],
  "recurringEventId": String,
  "originalStartTime": {
    "Date": Date,
    "DateTime": Date,
    "timeZone": String
  },
  "transparency": String,
  "visibility": String,
  "iCalUID": String,
  "sequence": Number,
  "attendees": [
    {
      "id": String,
      "email": String,
      "displayName": String,
      "organizer": Boolean,
      "self": Boolean,
      "resource": Boolean,
      "optional": Boolean,
      "responseStatus": String,
      "comment": String,
      "additionalGuests": Number
    }
  ],
  "attendeesOmitted": Boolean,
  "extendedProperties": {
    "private": [ String ],
    "shared": [ String ]    
  },
  "hangoutLink": String,
  "gadget": {
    "type": String,
    "title": String,
    "link": String,
    "iconLink": String,
    "width": Number,
    "height": Number,
    "display": String,
    "preferences": [ String ]
    
  },
  "anyoneCanAddSelf": Boolean,
  "guestsCanInviteOthers": Boolean,
  "guestsCanModify": Boolean,
  "guestsCanSeeOtherGuests": Boolean,
  "privateCopy": Boolean,
  "locked": Boolean,
  "reminders": {
    "useDefault": Boolean,
    "overrides": [
      {
        "method": String,
        "minutes": Number
      }
    ]
  },
  "source": {
    "url": String,
    "title": String
  },
  "attachments": [
    {
      "fileUrl": String,
      "title": String,
      "mimeType": String,
      "iconLink": String,
      "fileId": String
    }
  ]
});

registerEvents(EventSchema);
module.exports;
// export default mongoose.model('Event', EventSchema);
