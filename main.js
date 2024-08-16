function validEmail() {
    let email = document.getElementById("email1")
    let emailConf = document.getElementById("email2")
    if(email == emailConf) {
      return true;
    }
    else {
      alert("Emails do not match.");
    }
}
