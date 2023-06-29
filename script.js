document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
  
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
      <h2>Registration Details:</h2>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Password:</strong> ${password}</p>
      <p><strong>Confirm Password:</strong> ${confirmPassword}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Phone:</strong> ${phone}</p>
    `;
  });
  