// The most common usage of closure in JS is the module pattern

function User() {
  // usr, password is private
  var username, password;
  var publicAPI = {};

  // private also. You can't access outside function
  function doLogin(user, pw) {
    username = user;
    password = pw;
    // do the rest of the login work
  }

  publicAPI = {
    login: doLogin
  };

  return publicAPI;
}


// We are not calling new User() here, on purpose, despite the fact that probably seems more common
// to most readers. User() is just a function, not a class to be instantiated, so it’s just called
// normally. Using new would be inappropriate and actually waste resources.
var fred = User();

fred.login('fred', '12345');


// add something ... 1