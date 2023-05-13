function validation() {
    if (document.Formfill.Username.value == "") {
        document.getElementById("result").innerHTML = "Enter the Username*";
        return false;
    } else if (document.Formfill.Username.value.length < 6) {
        document.getElementById("result").innerHTML = "Enter atleast 6 letters*";
        return false;
    } else if (document.Formfill.Email.value == "") {
        document.getElementById("result").innerHTML = "Enter your mail address*";
        return false;
    } else if (document.Formfill.Password.value == "") {
        document.getElementById("result").innerHTML = "Enter your password*";
        return false;
    } else if (document.Formfill.Password.value.length < 6) {
        document.getElementById("result").innerHTML = "Password must be 6-digits*";
        return false;
    } else if (document.Formfill.CPassword.value == "") {
        document.getElementById("result").innerHTML = "Confirm password*";
        return false;
    } else if (document.Formfill.CPassword.value != document.Formfill.Password.value) {
        document.getElementById("result").innerHTML = "Entered password dosent match*";
        return false;
    } else if (document.Formfill.Password.value == document.Formfill.CPassword.value) {
        popup.classList.add("open-slide")
        return false;
    }
}
var pop = document.getElementById('popup');

function CloseSlide() {
    popup.ClassList.remove("open-slide");
}