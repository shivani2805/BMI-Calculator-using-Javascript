const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const userHeight = parseInt(document.querySelector('#height').value);
  const userWeight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  let errorMessage = ""; // Store error message for display

  // Validate height and weight
  if (userHeight === '' || userHeight < 0 || isNaN(userHeight)) {
    errorMessage = "Please enter a valid height (positive number).";
  } else if (userWeight === '' || userWeight < 0 || isNaN(userWeight)) {
    errorMessage = "Please enter a valid weight (positive number).";
  }

  // Display error message or calculate BMI
  if (errorMessage) {
    results.innerHTML = `<p>${errorMessage}</p>`;
  } else {
    const bmi = ((userWeight / (userHeight * userHeight)) * 10000).toFixed(3);
    results.innerHTML = `<span>Your BMI is ${bmi}</span>`;

    let bmiMessage = "";
    // Use if-else if for BMI interpretation
    if (bmi < 18.5) {
      bmiMessage = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      bmiMessage = "Normal";
    } else if (bmi >= 25 && bmi < 30) {
      bmiMessage = "Overweight";
    }

    if (bmiMessage) {
      results.innerHTML += `<p>${bmiMessage}</p>`;
    }
  }
});
