    // Add an event listener to the entire document to listen for clicks
    document.addEventListener('click', function(event) {
        const result_container = document.getElementById("result-container");

        // If the clicked element is outside the result container, hide it
        if (!result_container.contains(event.target)) {
            result_container.style.display = "none";
        }
    });
    
       function calculateAge() {
            const dobInput = document.getElementById("dob").value;
            const result_container = document.getElementById("result-container");
            //const result_month_and_date = document.getElementById("result-month-and-date");
            const birth_year = document.getElementById("birth-year");

            result_container.style.display = "block";
            if (dobInput) {
                const dob = new Date(dobInput);
                const today = new Date();
                
                let age = today.getFullYear() - dob.getFullYear();
                const monthDifference = today.getMonth() - dob.getMonth();
                let date = today.getDate() - dob.getDate();
                
                // Adjust age if birthday has not occurred yet this year
                if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
                    age--;
                }
                if (monthDifference == 0 && today.getDate() == dob.getDate()) {
                    body.style.backgroundImage = "url('birthday body.jpg')"; 
                    birth_year.style.display = "block";
                } else {
                    body.style.backgroundImage = "url('Age-calculator.jpg')"; 
                    birth_year.style.display = "none";
                    document.getElementById("result").textContent = "You are " + age + " years old.";
                    age = age + 1;
                    const possitiveMonth = Math.abs(monthDifference);
                    document.getElementById("result-month-and-date").textContent = "Your " + age +"th birth day will be after " + possitiveMonth + " months and " + date + " days.";
                }
                // Display the result
                
            } else {
                alert("Please select a valid date of birth.");
            }
        }
        function turnOnCalculator(){
            const onButton = document.getElementById("start-button");
            const calculatorForm = document.querySelector(".calculator");
                calculatorForm.style.display = "block";
                onButton.style.display = "none";
        }
        function close_button(){
            const calculatorForm = document.querySelector(".calculator");
            const onButton = document.getElementById("start-button");
            calculatorForm.style.display = "none";
            onButton.style.display = "block";
        }
  