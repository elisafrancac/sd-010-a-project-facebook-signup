const forms = document.querySelectorAll('form');
const buttonLogin = document.getElementById('button-login');
const buttonSignUp = document.getElementById('facebook-register');

function alertOnLogin(event) {
  const inputMailOrPhone = document.getElementById('user-email-phone');
  event.preventDefault();
  const valueOfInput = inputMailOrPhone.value;
  if (valueOfInput !== '') {
    alert(valueOfInput);
  }
}

function addErrorMessage(element) {
  const previousError = element.querySelector('.error');
  if (!previousError) {
    const errorMessage = document.createElement('div');
    errorMessage.innerText = 'Campos inválidos';
    errorMessage.classList.add('message');
    errorMessage.classList.add('error');
    element.appendChild(errorMessage);
  }
}

function clearErrors(element) {
  const form = element.target.parentElement;
  const errorMessage = form.querySelector('.error');
  if (errorMessage) {
    errorMessage.remove();
  }
}

function checkIfInputsAreEmpty(form) {
  const inputs = form.target.querySelectorAll('input');
  let emptyInputs = 0;
  for (let index = 0; index < inputs.length; index += 1) {
    const input = inputs[index];
    if (input.value === '' && input.required) {
      emptyInputs += 1;
    }
    input.addEventListener('keydown', clearErrors);
  }

  if (emptyInputs > 0) {
    form.preventDefault();
    addErrorMessage(form.target);
  }
}

function validateForms() {
  for (let index = 0; index < forms.length; index += 1) {
    const form = forms[index];
    form.addEventListener('submit', checkIfInputsAreEmpty);
  }
}

buttonLogin.addEventListener('click', alertOnLogin);
buttonSignUp.addEventListener('click', validateForms);
