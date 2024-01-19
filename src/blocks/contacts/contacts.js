$(function () {
  const inputName = document.querySelector('.contacts__field--name');
  const inputPhone = document.querySelector('.contacts__field--phone');
  const regSymbolName = /[0-9!@#$%^&*()+/_=]/g;
  const regSymbolPhone = /[a-zA-Z!@#$%^&*()/_=]/g;
  const btnReserve = document.querySelector('.contacts__reserve-btn');
  const formReserve = document.querySelector('.contacts__form');
  
  if(oninput) {
    inputName.oninput = function () {
      this.value = this.value.replace(regSymbolName, '');
    }
  }
  
  if(oninput) {
    inputPhone.oninput = function () {
      this.value = this.value.replace(regSymbolPhone, '');
      if (this.value.length > 0 && this.value.length < 11) {
        btnReserve.setAttribute('disabled', '');
        btnReserve.classList.add('contacts__reserve-btn--disabled');
        formReserve.classList.add('contacts__form--disabled');
      } else {
        btnReserve.removeAttribute('disabled', '');
        btnReserve.classList.remove('contacts__reserve-btn--disabled');
        formReserve.classList.remove('contacts__form--disabled');
      };
    };
  }
});


