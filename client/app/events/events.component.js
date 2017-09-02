import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './events.routes';

export class EventsController {
  awesomeEvents = [];
  newEvent = {};

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;

    $scope.$on('$destroy', function(){
      socket.unsyncUpdates('event');
    });
    this.message = 'Hello';
  }

  $onInit() {
    this.$http.get('/api/events')
      .then(response => {
        this.awesomeEvents = response.data;
        this.socket.syncUpdates('event', this.awesomeEvents);
      });
  }

  addEvent() {
    if(this.newEvent) {
      this.$http.post('/api/events', {
        summary: this.newEvent.summary,
        description: this.newEvent.description,
        location: this.newEvent.location,
//      start: {
//          DateTime: this.newEvent
//      }        
      });
      this.newEvent = '';
    }
  }

  deleteEvent(event) {
    this.$http.delete(`/api/events/${event._id}`);
  }
}

export default angular.module('funnelTunnelApp.events', [uiRouter])
  .config(routing)
  .component('events', {
    template: require('./events.html'),
    controller: EventsController
  })
  .name;
