window.fbAsyncInit = function() {
  FB.init({
    appId      : '34302297544701',
    cookie     : true,
    xfbml      : true,
    version    : 'v22.0'
  });
    
  FB.AppEvents.logPageView();   
    
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

FB.Event.subscribe('auth.login', function(response) {
  if (response.authResponse) {
    console.log('Logged in as ' + response.authResponse.userID);
    // Handle the login response here
  }
});