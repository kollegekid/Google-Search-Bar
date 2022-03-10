function go(){
	var input_value = document.getElementById("input").value;
	var search_value = "https://www.google.com/search?q="+input_value+"&oq="+input_value+"&aqs=chrome..69i57j46i199i465i512j46i512l3j0i512l3j46i512j46i199i465i512.893j0j15&sourceid=chrome&ie=UTF-8";
    window.open(search_value,"_parent");	

}
function enterKeyPressed(event) {
      if (event.keyCode == 13) {
         go();
         return true;
      } else{
      	var input_value = document.getElementById("input").value;

      }
   }