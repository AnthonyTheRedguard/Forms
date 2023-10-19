    // JavaScript code for form validation
	// Prevent form from submitting
    var form = document.getElementById("myForm");
    form.addEventListener("submit", function(event)
    {
      let inputField = document.getElementById("inputField").value; // Retrieve the input field value

      if (inputField === "")
      {
        alert("Input required!");
        event.preventDefault();
      }

      let regex = /^[a-zA-Z0-9]+$/; // Regular expression pattern for alphanumeric input

      if (!regex.test(inputField)) // Check if the input value matches the pattern
      {
        alert("Invalid Input!"); // Invalid input: display error message
        event.preventDefault();
      }
      else 
      {
        alert("Form submitted!"); // Valid input: display confirmation and submit the form
        form.submit();
      }
    });
      

      

      

      

      

        