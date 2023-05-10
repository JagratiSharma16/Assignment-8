const form = document.getElementById('form');
        const first_name = document.getElementById('fn');
        const last_name = document.getElementById('ln');
        const phone_number = document.getElementById('mob');
        const email = document.getElementById('email');
        const password = document.getElementById('pass');
        const terms = document.getElementById('terms');

        //add event
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            Validate();
        });
        //more email validate
        const isEmail = (emailVal) => {
            var atSymbol = emailVal.indexOf("@");
            if (atSymbol < 1) return false;
            var dot = emailVal.lastIndexOf('.');
            if (dot <= atSymbol + 2) return false;
            if (dot === emailVal.length - 1) return false;//tha@p.a = 7-1 6 3 5
            return true;
        }

        //define the validate function
        const validate = () => {
            const first_nameVal = fn.value.trim();
            const last_nameVal = ln.value.trim();
            const phone_numberVal = mob.value.trim();
            const emailVal = email.value.trim();
            const passwordVal = pass.value.trim();
            const termsVal = terms.value.trim();
            // validate fn ln
            if (first_nameVal == "") {
                setErrorMsg(fn, 'First name cannot be blank');
            } else if (first_nameVal.length <= 2) {
                setErrorMsg(fn, 'Firstname should have min 3 char');
            } else {
                setSuccessMsg(fn);
            }
            //validate fn ln
            if (last_nameVal == "") {
                setErrorMsg(ln, 'Last name cannot be blank');
            } else if (last_nameVal.length <= 2) {
                setErrorMsg(ln, 'Lastname should have min 3 char');
            } else {
                setSuccessMsg(ln);
            }

            if (emailVal == "") {
                setErrorMsg(email, 'Email cannot be blank');
            } else if (!isEmail(emailVal)) {
                setErrorMsg(emailVal, 'Not a valid Email');
            } else {
                setSuccessMsg(email);
            }

        }
        function setErrorMsg(input, errormsgs) {
            const common = input.parentElement;
            const small = common.querySelector('small');
            common.className = "common error";
            small.innerText = errormsgs;
        }