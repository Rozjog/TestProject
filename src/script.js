const form = document.getElementById('contactForm');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('username');
const phoneInput = document.getElementById('phone');

emailInput.addEventListener('input', validateEmail);
nameInput.addEventListener('input', validateName);
phoneInput.addEventListener('input', validatePhone);

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

function validateName() {
    const nameRegex =/^(?:[А-ЯЁ][а-яё]+(?:-[А-ЯЁ][а-яё]+){0,2}(?:\s+[А-ЯЁ][а-яё]+(?:-[А-ЯЁ][а-яё]+){0,2}){1,2})$/; 
    if(nameRegex.test(nameInput.value)){
        removeError(nameInput);  
        return true;
    }
    else{
        showError(nameInput, "ФИО не соответствует формату. Пример: Иванов Иван Иванович");
        return false;
    }
}

function validatePhone() {
    const phoneRegex =/^(\+7|8)[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/; 
    if(phoneRegex.test(phoneInput.value)){
        removeError(phoneInput);  
        return true;
    }
    else{
        showError(phoneInput, "Номер телефона не соответствует формату. Пример: +7(123) 456 78 90");
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
