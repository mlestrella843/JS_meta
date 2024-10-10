// <!-- JavaScript code to manipulate the DOM -->
   
        // Selecting the elements
        const button = document.getElementById('changeTextButton');  // Select the button by ID
        const messageDiv = document.getElementById('message');       // Select the div by ID
        const userInput = document.getElementById('userInput');      // Select the input field by ID

        // Add an event listener to the button
        button.addEventListener('click', function() {
            // Get the value entered by the user
            const newMessage = userInput.value;
            
            // Update the content of the div with the user's input
            messageDiv.textContent = newMessage || "No input provided.";  // If input is empty, show a default message
        });
