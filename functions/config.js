const Multivocal = require('multivocal');

var enResponse = {
  "Intent.welcome": [
    "Welcome to multivocal auth demonstration."
  ],
  "Intent.user.email": [
    "Your email address is {{User.Profile.email}}."
  ],
  "Intent.user.name": [
    "Your name is {{User.Profile.name}}."
  ]
};

var enSuffix = {
  "Intent.welcome":[
    "What would you like to know?",
    "What can I tell you about you?"
  ],
  "Default": [
    "What else would you like to know?"
  ]
};

var requirements = {
  "Intent.user.email": "User/IsAuthenticated",
  "Intent.user.name":  "User/IsAuthenticated"
};

var config = {
  Local:{
    en:{
      Response: enResponse,
      Suffix:   enSuffix
    },
    und:{
      Requirements: requirements
    }
  },
  Setting:{
    Requirements: {
      Auth: {
        "https://accounts.google.com":{
          // The Client ID issued in Account Linking -> Client information
          "aud": "PUT YOUR CLIENT ID HERE"
        }
      }
    }
  }
};

exports.init = function(){
  new Multivocal.Config.Simple( config );
};