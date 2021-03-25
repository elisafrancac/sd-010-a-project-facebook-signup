// bloco de declaraçao de variaveis globais
const entrarButton = document.getElementById('button-login');
const formResults = document.querySelectorAll('.form-new input');
const buttonSubscrive = document.getElementById('facebook-register');
const result = document.querySelector('.result');
const selectCustonGender = document.querySelector('#other');
// const regularGender = document.querySelectorAll('.regular');
// const buttonLogin = document.getElementById('button-login');

// Bloco de declaração de funções

entrarButton.addEventListener('click', () => {
  const emailContent = document.getElementById('user-email-phone').value;
  window.alert(emailContent);
});

const isRadioChecked = (index) => {
  let checked = false;
  if (formResults[index].type === 'radio' && formResults[index].checked) {
    checked = true;
  }
  return checked;
};

const checkValues = (contentForm) => {
  const values = Object.values(contentForm);
  for (let index = 0; index < values.length; index += 1) {
    if (values[index] === '') {
      result.innerText = 'Campos inválidos';
    }
  }
};

buttonSubscrive.addEventListener('click', (event) => {
  event.preventDefault();
  result.innerText = '';
  const contentForm = {};
  for (let index = 0; index < formResults.length; index += 1) {
    if (formResults[index].checked) {
      contentForm[formResults[index].name] = formResults[index].value;
    } else if (formResults[index].type !== 'radio') {
      contentForm[formResults[index].name] = formResults[index].value;
      console.log(index, formResults[index].name, formResults[index].value);
    }
  }
  console.table(contentForm);
  checkValues(contentForm);
  console.log(contentForm);
});

selectCustonGender.addEventListener('change', () => {
  if (selectCustonGender.checked) {
    console.log('entrou');
  } else {
    console.log('saiu');
  }
});

selectCustonGender.addEventListener('select', () => {
  if (selectCustonGender.checked) {
    console.log('entrou2');
  } else {
    console.log('saiu');
  }
});

// Blodo de declaração de escutadores

// bloco de ações de inicialização
