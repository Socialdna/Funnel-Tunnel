'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routing from './events.routes';

export class EventsController {
    awesomeThings = [];
    newThing = '';

  /*@ngInject*/
  constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket =  socket;
      
      $scope.$on('destroy', function(){
          socket.unsyncUpdates('thing');
      });
    this.message = 'Hello';
  }

$onInit() {
    this.$http.get('/api/things')
      .then(response => {
        this.awesomeThings = response.data;
        this.socket.syncUpdates('thing', this.awesomeThings);
      });
  }

  addThing() {
    if(this.newThing) {
      this.$http.post('/api/things', {
        name: this.newThing
      });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete(`/api/things/${thing._id}`);
  }

}

export default angular.module('funnelTunnelApp.events', [uiRouter])
  .config(routing)
  .component('events', {
    template: require('./events.html'),
    controller: EventsController,
    controllerAs: 'eventsCtrl'
  })
  .name;
