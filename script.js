


function isValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

document.getElementById('submit-btn').addEventListener("click", submitFunction);


function submitFunction() {


    let emailInput = document.forms["myForm"]["email"].value;

    let errorIcon = document.getElementById("error");

    let errorMsg = document.getElementById("valid");

    if (emailInput === 'null' || emailInput === '') {

        errorIcon.style.opacity = 1;
        errorMsg.style.opacity = 1;

    } else if (!isValid(emailInput)) {

        errorIcon.style.opacity = 1;
        errorMsg.style.opacity = 1;


    } else {


        errorIcon.style.opacity = 0;
        errorMsg.style.opacity = 0;

    }

}


