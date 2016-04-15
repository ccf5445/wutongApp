// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

var mainServer = "http://192.168.3.136:8080/share/";
var theLoginCookieUserName = "";


angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'slick', 'starter.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.directive('hideTabs', function($rootScope) {
  return {
    restrict: 'A',
    link: function($scope, $el) {
      $rootScope.hideTabs = true;
      $scope.$on('$destroy', function() {
        $rootScope.hideTabs = false;
      });
    }
  };
})

.config(function($ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'homeCtrl'
  })

  // Each tab has its own nav history stack:

// * * * * * * * * * * * * * * * * * * * * * * 一级菜单下的路由 * * * * * * * * * * * * * * * * * * * * * *
  .state('tab.circle', {
    url: '/circle',
    views: {
      'tab-circle': {
        templateUrl: 'templates/tab-circle.html',
        controller: 'circleCtrl',
        abstract: true
      }
    }
  })

  .state('tab.post', {
      url: '/post',
      views: {
        'tab-post': {
          templateUrl: 'templates/tab-post.html',
          controller: 'postCtrl'
        }
      }
    })


  .state('tab.concrete', {
    url: '/concrete',
    views: {
      'tab-concrete': {
        templateUrl: 'templates/tab-concrete.html',
        controller: 'concreteCtrl'
      }
    }
  })

  .state('tab.homepage', {
    url: '/homepage',
    views: {
      'tab-homepage': {
        templateUrl: 'templates/tab-homepage.html',
        controller: 'homepageCtrl'
      }
    }
  })

// * * * * * * * * * * * * * * * * * * * * * * 一级菜单下的路由 * * * * * * * * * * * * * * * * * * * * * *




// * * * * * * * * * * * * * * * * * * * * * * 二级菜单 circle 下的路由 * * * * * * * * * * * * * * * * * *
  .state('tab.circle.commend', {
    url: "/commend",
    views: {
      'circle-commend': {
        templateUrl: "templates/circle-commend.html",
        controller: 'circleCommendCtrl'
      }
    }
  })

      .state('tab.circle.campaign', {
        url: "/campaign",
        views: {
          'circle-campaign': {
            templateUrl: "templates/circle-campaign.html",
            controller: 'circleCampaignCtrl'
          }
        }
      })


      .state('tab.circle.new', {
        url: "/new",
        views: {
          'circle-new': {
            templateUrl: "templates/circle-new.html",
            controller: 'circleNewCtrl'
          }
        }
      })


      .state('tab.circle.regard', {
        url: "/regard",
        views: {
          'circle-regard': {
            templateUrl: "templates/circle-regard.html",
            controller: 'circleRegardCtrl'
          }
        }
      })
// * * * * * * * * * * * * * * * * * * * * * * 二级菜单 circle 下的路由 * * * * * * * * * * * * * * * * * *




  //.state('section-question', {
  //  url: '/section-question',
  //  view: {
  //    'section-question': {
  //      abstract: true,
  //      templateUrl: 'templates/section-question.html',
  //      controller: 'sectionQuestionCtrl'
  //    }
  //  }
  //})
  //
  //.state('result-question', {
  //  url:''
  //})
  //
  //.state('result-user', {
  //
  //});

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/circle');

});
