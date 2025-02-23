<script>
        function calculateAge() {
            const dobInput = document.getElementById("dob").value;
            if (dobInput) {
                const dob = new Date(dobInput);
                const today = new Date();
                
                let age = today.getFullYear() - dob.getFullYear();
                const monthDifference = today.getMonth() - dob.getMonth();
                
                // Adjust age if birthday has not occurred yet this year
                if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
                    age--;
                }

                // Display the result
                document.getElementById("result").textContent = "You are " + age + " years old.";
            } else {
                alert("Please select a valid date of birth.");
            }
        }
    </script>