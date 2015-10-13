/**********************************************************
*                SOFA ANGULAR API FACTORIES               *
* These factories are auto-generated. Do not modify them. *
**********************************************************/

angular.module('foliageFrontendApp').factory('MessageFactory', function ($http, $cookieStore) {
    "use strict";
    var factory = {}, root = 'http://localhost:6543/';

    factory.list = function (options) {
        return $http({
            method: "GET",
            url: root + "messages"
            + (options ? ("?" + Object.keys(options).map(function(val) {
                return val+"="+options[val];
            }).join("&")) : ""),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
    };

    factory.createMessage = function (data) {
        return $http({
            method: "POST",
            url: root + "messages",
            data: $.param(data),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
    };

    factory.getMessage = function (id, options) {
        return $http({
            method: "GET",
            url: root + "messages/:id".replace(":id", id)
            + (options ? ("?" + Object.keys(options).map(function(val) {
                return val+"="+options[val];
            }).join("&")) : ""),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
    };

    factory.updateMessage = function (id, data, options) {
        return $http({
            method: "PATCH",
            url: root + "messages/:id".replace(":id", id)
            + (options ? ("?" + Object.keys(options).map(function(val) {
                return val+"="+options[val];
            }).join("&")) : ""),
            data: $.param(data),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
    };

    factory.deleteMessage = function (id) {
        return $http({
            method: "DELETE",
            url: root + "messages/:id".replace(":id", id),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
    };

    return factory;
});

angular.module('foliageFrontendApp').factory('UserFactory', function ($http, $cookieStore) {
    "use strict";
    var factory = {}, root = foliageFrontendApp.apiURL;

    factory.list = function (options) {
        return $http({
            method: "GET",
            url: root + "users"
            + (options ? ("?" + Object.keys(options).map(function(val) {
                return val+"="+options[val];
            }).join("&")) : ""),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
    };

    factory.createUser = function (data) {
        return $http({
            method: "POST",
            url: root + "users",
            data: $.param(data),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
    };

    factory.getUser = function (id, options) {
        return $http({
            method: "GET",
            url: root + "users/:id".replace(":id", id)
            + (options ? ("?" + Object.keys(options).map(function(val) {
                return val+"="+options[val];
            }).join("&")) : ""),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
    };

    factory.updateUser = function (id, data, options) {
        return $http({
            method: "PATCH",
            url: root + "users/:id".replace(":id", id)
            + (options ? ("?" + Object.keys(options).map(function(val) {
                return val+"="+options[val];
            }).join("&")) : ""),
            data: $.param(data),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
    };

    factory.deleteUser = function (id) {
        return $http({
            method: "DELETE",
            url: root + "users/:id".replace(":id", id),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
    };

    return factory;
});
