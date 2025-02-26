    
       function calculateAge() {
            const dobInput = document.getElementById("dob").value;
            const result_container = document.getElementById("result-container");
            //const result_month_and_date = document.getElementById("result-month-and-date");
            const birth_year = document.getElementById("birth-year");

            result_container.style.display = "block";
            document.getElementById("dob").style.border = "1px solid green";
            const warning = document.getElementById("warning");
            warning.style.display = "none";


            if (dobInput) {
                const dob = new Date(dobInput);
                const today = new Date();
                
                let age = today.getFullYear() - dob.getFullYear();
                const monthDifference = today.getMonth() - dob.getMonth();
                let date = today.getDate() - dob.getDate();
                const result = document.getElementById("result");
                
                if (age < 0 || (age === 0 && monthDifference < 0) ||  (age === 0 && monthDifference === 0 && date < 0)) {
                    result_container.style.display = "none";
                    body.style.backgroundImage = "url('Age-Calculator.jpg')";
                    document.getElementById("dob").style.border = "1px solid red";
                    warning.style.display = "block";
                    warning.textContent = "pleace enter birth date that was one year ago!"
                } 
                
                else {
                    if (monthDifference == 0 && today.getDate() == dob.getDate()) {
                        body.style.backgroundImage = "url('birthday body.jpg')"; 
                        birth_year.style.display = "block";
                        result.textContent = `You are ${age} years old.`;
                        document.getElementById("result-month-and-date").style.display = "none";
                    }   
                    else {

                        if (monthDifference > 0 || (monthDifference === 0 && today.getDate() > dob.getDate())) {
                            body.style.backgroundImage = "url('Age-calculator.jpg')"; 
                            birth_year.style.display = "none";
                            result.textContent = "You are " + age + " years old.";
                            const possitiveMonth = Math.abs(monthDifference);
                            document.getElementById("result-month-and-date").style.display = "block";
                            document.getElementById("result-month-and-date").textContent =
                            `Your ${age + 1} th birth day will be after ${possitiveMonth}  months and  ${date} days.`;
                        }
                        else{
                            var nextMonth;
                            var nextDate;
                            var dateUncertainity;
                            if(monthDifference < 0 && today.getDate() == dob.getDate()) {
                                nextMonth = 12 - dob.getMonth() + today.getMonth();
                                nextDate = 0;
                                dateUncertainity = "";
                            }
                            else{
                                nextMonth = (12 - dob.getMonth() + today.getMonth()) -1;
                                nextDate = 30 - dob.getDate() + today.getDate();
                                dateUncertainity = "plus or minus 2days";
                            }

                                body.style.backgroundImage = "url('Age-calculator.jpg')"; 
                                birth_year.style.display = "none";
                                result.textContent = `You are ${age-1} years old.`;
                                document.getElementById("result-month-and-date").style.display = "block";
                                document.getElementById("result-month-and-date").textContent =
                                `Your ${age} th birth day will be after ${nextMonth}  months and  ${nextDate} ${dateUncertainity} days.`;
                        }
                    }
                }                
            } 
            
            else {
                result_container.style.display = "none";
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
        function turnOffDisplay(){
            const result_container = document.getElementById("result-container");
            const dob = document.getElementById("dob");
            dob.addEventListener("click", function(event){
                result_container.style.display = "none";
            });
        }