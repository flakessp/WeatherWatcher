define([
    'backbone',
], function (Backbone) {
   'use strict';

    var DayModel = Backbone.Model.extend({
        defaults: {
            'highCelcius': null,
            'lowCelcius': null,
            'highFahrenheit': null,
            'lowFahrenheit': null,
            'icon_url': ''
        },
        parse: function (data) {
            var map = {
                'highCelcius': data.high.celsius,
                'lowCelcius': data.low.celsius,
                'highFahrenheit': data.high.fahrenheit,
                'lowFahrenheit': data.low.fahrenheit,
                'icon_url': data.icon_url

            };

            return map;
        }
    });

    return DayModel;
});