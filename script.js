function activeAlert() {
  const loginButton = document.querySelector('#button-login');
  loginButton.addEventListener('click', () => {
    const inputContent = document.querySelector('#user-email-phone').value;
    alert(inputContent);
  });
}

function checkInputs() {
  console.log(checkTextInputs());
  console.log(checkRadioInputs());
  if (checkTextInputs() === true || checkRadioInputs() === 0) {
    alert('Campos inválidos');
  }
}

function checkTextInputs() {
  const inputs = document.querySelectorAll('.main-form input');
    let emptyField = false;
    for (let index = 0; index < inputs.length - 3; index += 1) {
      if (inputs[index].value === '') {
        console.log(inputs[index]);
        emptyField = true;
      }
    }
  return emptyField;
}

function checkRadioInputs() {
  const inputsRadio = document.getElementsByName('gender');
  let count = 0;
  for (let indexRadio = 0; indexRadio < inputsRadio.length; indexRadio += 1) {
    if (inputsRadio[indexRadio].checked) {
      count += 1;
    }
  }
  return count;
}

const submitButton = document.querySelector('#facebook-register');
submitButton.addEventListener('click', checkInputs);

window.onload = function startSession() {
  activeAlert();
};
