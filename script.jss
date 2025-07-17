form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (counter < 5) {
    alert("Please share on WhatsApp 5 times before submitting!");
    return;
  }

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const college = document.getElementById('college').value;
  const file = document.getElementById('screenshot').files[0];

  // Upload file to Google Drive (we’ll handle this separately if needed)
  const fileUrl = "File upload feature here"; // Replace with actual file URL later

  // Send data to Google Sheets
  fetch("https://script.google.com/macros/s/AKfycbwaU3NX7uwYmTvUgRAcy3m9q4rGoDqGK9ygEQUdPHqYhROLqn9HU_3GlTkUNmv_WK_7vQ/exec", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      phone: phone,
      email: email,
      college: college,
      fileUrl: fileUrl
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    alert("🎉 Your submission has been recorded. Thanks for being part of Tech for Girls!");

    // Disable form and set flag
    form.style.display = "none";
    thankYouMessage.style.display = "block";
    localStorage.setItem("submitted", true);
  })
  .catch(error => {
    console.error('Error!', error.message);
    alert("There was an error submitting the form. Please try again.");
  });
});