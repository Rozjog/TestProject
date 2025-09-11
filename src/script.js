const form = document.getElementById('contactform');
const emailInput = document.getElementById('email');

emailInput.addEventListener('input', validateEmail);

function validateEmail() {
    const emailRegex = /[A-Za-z0-9-\.]{2,10}@[a-z0-9\.-_]{1,10}\.{a-z]{2,3}/
    if (emailInput.test(emailInput.value))
    {
        removeError(emailInput);
        return true;
    }
    else
    {
        showError(emailInput,"email не соответствует формату");
        return false;
    }
}

function showError(input, message) {
    const formControl = input.parentElement;
    const errorElement = formControl.querySelector('.error') || document.createElement('div');

    errorElement.class = '.error';
    errorElement.textContent = message;
    
    formControl.appendChild(errorElement);
    input.style.borderColor = 'red';
}

function removeError(input) {
    const formControl = input.parentElement;
    const errorElement = formControl.querySelector('.error');
    
    if (errorElement)
    {
        formControl.removeChild(errorElement);
    }
    input.style.borderColor = 'green';
}