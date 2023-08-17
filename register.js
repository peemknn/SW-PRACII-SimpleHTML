function validateForm() {
  let name = document.forms["myForm"]["fName"].value;
  let companyName = document.forms["myForm"]["comName"].value;
  let telNum = document.forms["myForm"]["telNum"].value;
  let chairAmount = document.forms["myForm"]["chairAmount"].value;

  if (!companyName) {
    alert("Company name must be filled out");
  }

  if (!name) {
    alert("Name must be filled out");
  }

  if (!telNum) {
    alert("Telephone number must be filled out");
  }
  if (!chairAmount) {
    alert("Chair amount must be filled out");
  } else if (chairAmount < 1 || chairAmount > 10) {
    alert("Chair amount must be between 1 to 10");
  }
}
