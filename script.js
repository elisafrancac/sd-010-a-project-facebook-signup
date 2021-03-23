const genderCustomConst = 'gender-custom';
const idDuccessButton = document.querySelector('#facebook-register');
const inputsText = document.querySelectorAll('.createUser input');
const radioElement = document.form1;
const idMessageInvalid = document.querySelector('#messageInvalid');

const generateInvalidMessage = () => {
  idMessageInvalid.innerHTML = '';
  const newMsg = document.createElement('p');
  newMsg.innerHTML = 'Campos inválidos';
  idMessageInvalid.appendChild(newMsg);
};

const validRadio = () => {
  if (radioElement.gender[0].checked === false
  && radioElement.gender[1].checked === false
  && radioElement.gender[2].checked === false) {
    return false;
  }
  return true;
};

const validTextField = (el) => {
  if ((el.type === 'text' || el.type === 'password') && el.value === '') {
    return false;
  }
};

const validateForm = (e) => {
  e.preventDefault();
  let check = true;
  inputsText.forEach((el) => {
    if (validTextField(el) === false) {
      check = false;
    }
  });
  if (!validRadio()) {
    check = false;
  }
  if (check === false) {
    generateInvalidMessage();
  } else {
    idMessageInvalid.innerHTML = '';
  }
};

window.onload = () => {
  document.querySelector('#button-login').addEventListener('click', () => {
    alert(document.querySelector('#user-email-phone').value);
  });
  idDuccessButton.addEventListener('click', validateForm);
};

function genderCustom() {
  if (document.querySelector('#customGender').checked === true) {
    const parentEle = document.querySelector('#personalizedGender');
    const elem = document.createElement('input');
    parentEle.appendChild(elem);
    Object.assign(elem, {
      name: genderCustomConst,
      type: 'text',
      placeholder: 'Gênero (opcional)',
      id: genderCustomConst,
    });
  }
}

function Clicou1() {
  genderCustom();
}

document.getElementById('customGender').addEventListener('click', Clicou1);

function clickParaSelecionar() {
  document.getElementById(genderCustomConst).remove();
}

document.querySelectorAll('.genderRadio1').forEach((elementoSelecionado) => {
  elementoSelecionado.addEventListener('click', clickParaSelecionar);
});
