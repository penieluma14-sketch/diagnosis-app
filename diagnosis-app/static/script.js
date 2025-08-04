document.getElementById('diagnosisForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const input = document.getElementById('symptoms').value;
  const result = document.getElementById('result');

  if (!input.trim()) {
    result.innerText = "Please enter your symptoms.";
    return;
  }

  // Call your backend with fetch
  fetch('https://your-backend-api-url.com/predict', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ symptoms: input })
  })
  .then(response => response.json())
  .then(data => {
    result.innerText = data.diagnosis || "No diagnosis received.";
  })
  .catch(error => {
    console.error('Error:', error);
    result.innerText = "An error occurred while fetching diagnosis.";
  });
});

  
