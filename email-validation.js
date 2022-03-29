var alertText = document.getElementById("alertText");
var alertImage = document.getElementById("alertImage");
var emailBox = document.getElementById("emailBox");

function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)) {
       
        document.form1.text1.focus();
        alertText.style.display = "none";
        alertImage.style.display = "none";
        emailBox.style.borderColor = "hsl(0, 36%, 70%)";
        return true;
    } else {
        alertImage.style.display = "block";
        alertText.style.display = "block";
        emailBox.style.borderColor = "red";
        
        document.form1.text1.focus();
        return false;
    }
}