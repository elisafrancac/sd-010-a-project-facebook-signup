const loginBtn = document.querySelector('#button-login');
const userEmailPhone = document.querySelector('#user-email-phone');

console.log(userEmailPhone.innerText);
loginBtn.addEventListener('click', (e) => {
  if (userEmailPhone.innerText === '') {
    alert(userEmailPhone.value);
  }
  e.preventDefault();
});
