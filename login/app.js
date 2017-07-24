function add() {
  var userName = document.getElementById("userName").value;
  var userNameFirstChar = userName.slice(0, 1);
  var userNameOtherChars = userName.slice(1);
  userNameFirstChar = userNameFirstChar.toUpperCase();
  userName = userNameFirstChar + userNameOtherChars;
  var userEmail = document.getElementById("userEmail").value;
  userEmail = userEmail.toLowerCase();
  var userPassword = document.getElementById("userPassword").value;
  var userCity = document.getElementById("userCity").value;
  var myObject = { Name: userName, Email: userEmail, Password: userPassword, City: userCity };
  localStorage.setItem("data", JSON.stringify(myObject));
  document.getElementById("userName").value = "";
  document.getElementById("userEmail").value = "";
  document.getElementById("userPassword").value = "";
  document.getElementById("userCity").value = "";
  alert("Successful Signup");
}
function todo() {
  var sel = document.getElementById('sel').value;
  var a = document.getElementById('todo');
  var b = document.createElement('li');
  // for deleting the input
  var del = document.createElement("IMG");
  del.src = "del.png";
  del.style.width = "25px";
  del.style.height = "25px";
  del.onclick = function () {
    var li = this.parentNode;
    var ol = li.parentNode;
    ol.removeChild(li);
  }
  switch (sel) {
    case "k-00":
      var c = document.createTextNode("||" + "'" +sel+"'" +" "+'chicken pizza....... '+"Price : 500pkr" + "||");
      break;
    case "k-01":
      var c = document.createTextNode("||"+"'"+sel+"'"+" "+'pizza with eggs......'+"Price : 450pkr" +"||");
      break;
    case "k-02":
      var c = document.createTextNode("||"+"'"+sel + "'" + " " + ' pizza with butter....   ' + "Price : 400pkr" +"||");
      break;
    case "k-03":
      var c = document.createTextNode("    ||    " + "'" + sel + "'" + " " + 'pizza with cream..  ' + "Price : 400pkr" +"||");
      break;
    default:
      var c = alert('enter correct code!!');
      break;
  }
  var date = new Date().toLocaleString();
  var datee = document.createTextNode(date);
  b.appendChild(datee);
  b.appendChild(c);
  b.appendChild(del);
  a.appendChild(b);
  document.body.appendChild(a);
  sel = document.getElementById('sel').value = "";
}
function verify() {
  var parseData = localStorage.getItem("data");
  JSON.parse(parseData);
  var userEnteredEmail = document.getElementById("userEnteredEmail").value;
  var userEnteredPassword = document.getElementById("userEnteredPassword").value;
  if (userEnteredEmail === JSON.parse(parseData).Email && userEnteredPassword === JSON.parse(parseData).Password) {
    window.open("todo.html")
  } else {
    (alert("Something Wrong! Please Enter the correct User name and password"))
  }
}
function cancel() {
  document.getElementById("userName").value = "";
  document.getElementById("userEmail").value = "";
  document.getElementById("userPassword").value = "";
  document.getElementById("userCity").value = "";
}