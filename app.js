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
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

//VI DEKLARERAR VÅR UPPSÄTTNING FÖR NAVIGERING MED STATE GENOM CONFIG, STATEPROVIDER OCH URLROUTERPROVIDER
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })
  //Nedan är navigering till telefonbeställning av Taxi Nu
  .state('app.phonecall', {
    url: "/phonecall",
    views: {
      'menuContent': {
        templateUrl: "templates/phonecall.html"
      }
    }
  })
  //Nedan navigerar till bokningssidan
   .state('app.booking', {
    url: "/booking",
    views: {
      'menuContent': {
        templateUrl: "templates/booking.html"
      }
    }
  })
  //Nedan navigerar till bekräftelse även om denna lösning inte är den riktiga, utan en popup.  
  .state('app.confirm', {
    url: "/confirm",
    views: {
      'menuContent': {
        templateUrl: "templates/confirm.html"
      }
    }
  })
    //Navigerar till skapa konto.
  .state('app.create-account', {
    url: "/create-account",
    views: {
      'menuContent': {
        templateUrl: "templates/create-account.html"
      }
    }
  })
  
    //Här är vår förstasida. 
     .state('app.home', {
      url: "/home",
      views: {
        'menuContent': {
          templateUrl: "templates/home.html",
          controller: 'homeCtrl'
        }
      }
    })
	
	//Lite info till Fredrik Blanco om mina ansträngningar att lösa uppgiften med taxi-appen.
     .state('app.info', {
      url: "/info",
      views: {
       'menuContent': {
        templateUrl: "templates/info.html"
      }
    }
  })

  //NEDAN ÄR FALLBACK OM NÅGON AV OVAN DEKLARERADE STATE FUNGERAR. ÄNDRA FALLBACKEN TILL RÄTT VIEW FÖR TAXI-APPEN.
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
