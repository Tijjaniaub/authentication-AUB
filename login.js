var count = 2;
function validate ()
{
var user = document.login.username.value;
var password = document.login.password.value;
var valid = false;
var usernameArray = ["mohammed"]
var passwordArray = ["hello.1234"]
 for (var i = 0; i < usernameArray.length; i++)

 if (user == usernameArray[i])
 if (password == passwordArray [i])
 {
 valid = true;
 break;
 }

 if(valid)
 {
 alert("Login was successful");
 window.location = "wwww.google.com"
 return false ;
 }
 var again = "tries";
 if (count ==1)
 {
 again = "try"
 }
 if(count >= 1)
 {
 alert("Wrong password or username")
 count--;
 }
}