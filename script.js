function registerUser() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;

  var output = document.createElement("div");
  output.innerHTML = "<h3>Registration Details:</h3>" +
                     "<p><strong>First Name:</strong> " + firstName + "</p>" +
                     "<p><strong>LastName:</strong> " + lastName + "</p>" +
                     "<p><strong>Email:</strong> " + email + "</p>" +
                     "<p><strong>Phone Number:</strong> " + phone + "</p>" +
                     "<p><strong>Address:</strong> " + address + "</p>" +
                     "<p><strong>City:</strong> " + city + "</p>" +
                     "<p><strong>State:</strong> " + state + "</p>" +
                     "<p><strong>Country:</strong> " + country + "</p>";

  output.style.backgroundColor = "#f9f9f9";
  output.style.padding = "10px";
  output.style.marginTop = "20px";
  output.style.borderRadius = "5px";

  var registrationForm = document.getElementById("registration-form");
  registrationForm.appendChild(output);
}
