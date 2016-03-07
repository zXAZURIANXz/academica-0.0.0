// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('cursos',{
      url:'/cursos',
      views:{   
          cursos:{
              templateUrl:'templates/cursos.html',
                 }
            }
      
  })
  
  .state('biblioteca',{
      url:'/biblioteca',
      views:{   
          cursos:{
              templateUrl:'templates/biblioteca.html',
                 }
            }
      
  })
   
  .state('noticias',{
      url:'/noticias',
      views:{   
          cursos:{
              templateUrl:'templates/noticias.html',
                 }
            }
      
  })
  
  .state('eventos',{
      url:'/eventos',
      views:{   
          cursos:{
              templateUrl:'templates/eventos.html',
                 }
            }
      
  })
   
  

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.index', {
    url: '/index',
    views: {
      'menuContent': {
        templateUrl: 'templates/index.html'
      }
    }
  })
  .state('app.instituciones', {
    url: '/instituciones',
    views: {
      'menuContent': {
        templateUrl: 'templates/instituciones.html'
      }
    }
  })

  .state('app.notif', {
    url: '/notif',
    views: {
      'menuContent': {
        templateUrl: 'templates/notif.html'
      }
    }
  })

  .state('app.confi', {
      url: '/confi',
      views: {
        'menuContent': {
          templateUrl: 'templates/confi.html'
        }
      }
    })
    .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html',
          
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/index');
});
