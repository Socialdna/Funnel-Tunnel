'use strict';

import events from './events.component';
import {
  EventsController
} from './events.component';

describe('Component: EventsController', function() {
  // load the controller's module
  //beforeEach(module('funnelTunnelApp.events'));
  //beforeEach(module('stateMock'));
  //beforeEach(module('socketMock'));

  beforeEach(angular.mock.module(events));
  beforeEach(angular.mock.module('stateMock'));
  beforeEach(angular.mock.module('socketMock'));
    
  var eventsComponent;
    var scope;
    var state;
    var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $http, $componentController, $rootScope, $state,
    socket) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/things')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    state = $state;
    eventsComponent = $componentController('events', {
      $http,
      $scope: scope,
      socket
    });
  }));

  it('should attach a list of things to the controller', function() {
    mainComponent.$onInit();
    $httpBackend.flush();
    expect(mainComponent.awesomeThings.length)
      .to.equal(4);
  });
});
