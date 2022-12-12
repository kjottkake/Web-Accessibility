function validateForm() {
  let name = document.forms["contactMessage"]["name"].value;
  let message = document.forms["contactMessage"]["message"].value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  } if (message == ""){
    alert("Message must be filled out");
    return false;
  }
}