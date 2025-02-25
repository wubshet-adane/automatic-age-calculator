    
       function calculateAge() {
            const dobInput = document.getElementById("dob").value;
            const result_container = document.getElementById("result-container");
            //const result_month_and_date = document.getElementById("result-month-and-date");
            const birth_year = document.getElementById("birth-year");

            result_container.style.display = "block";
            if (dobInput) {
                const dob = new Date(dobInput);
                const today = new Date();
                const warning = document.getElementById("warning");
                
                let age = today.getFullYear() - dob.getFullYear();
                const monthDifference = today.getMonth() - dob.getMonth();
                let date = today.getDate() - dob.getDate();
                
                if (age < 0) {
                    document.getElementById("dob").style.border = "1px solid red";
                    warning.textContent = "pleace enter birth date lessthan today!"
                } else {
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
                }
                
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
  