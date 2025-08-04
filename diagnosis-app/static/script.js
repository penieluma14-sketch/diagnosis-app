document.getElementById('diagnosisForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const input = document.getElementById('symptoms').value;
    const result = document.getElementById('result');
  
    if (!input.trim()) {
      result.innerText = "Please enter your symptoms.";
      return;
    }
  
    // Example dummy logic (replace with AI/ML backend later)
    if (input.toLowerCase().includes("fever") && input.toLowerCase().includes("cough")) {
      result.innerText = "Possible diagnosis: Flu or COVID-19. Please consult a doctor.";
    } else if (input.toLowerCase().includes("headache")) {
      result.innerText = "Possible diagnosis: Migraine or stress-related issues.";
    } else {
      result.innerText = "No clear diagnosis. Please seek professional medical help.";
    }
  });
  