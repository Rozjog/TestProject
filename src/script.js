const form = document.getElementById('contactForm');
const emailInput = document.getElementById('email');

emailInput.addEventListener('input', validateEmail);

function validateEmail() {
    const emailRegex = /^[A-Za-z0-9_\-\.]{2,15}@[a-z0-9\.\-_]{1,10}\.[a-z]{2,3}$/;
    if(emailRegex.test(emailInput.value)){
        removeError(emailInput);  
        return true;
    }
    else{
        showError(emailInput, "Email не соответствует формату. Пример: ivanov@mail.ru");
        return false;
    }
}

function showError(input, message) {
    const formControl = input.parentElement;
    const errorElement = formControl.querySelector('.error') || document.createElement('div');

    errorElement.className = 'error';
    errorElement.textContent = message;
    
    if (!formControl.querySelector('.error')) {
        formControl.appendChild(errorElement);
    }
    
    input.style.borderColor = 'red';
}

function removeError(input) {
    const formControl = input.parentElement;
    const errorElement = formControl.querySelector('.error');

    if(errorElement){
        formControl.removeChild(errorElement);
    }

    input.style.borderColor = 'green';
}
