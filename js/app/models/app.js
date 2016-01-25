define([
    'backbone'
], function (Backbone){
    'use strict';

    var AppModel = Backbone.Model.extend({
        defaults: {
            'backgroundColor' : '#999',
            'celsius': 'true',
            'welcomeMessage': 'Welcome to Weather Watcher'
        }
    });

    return AppModel;
});