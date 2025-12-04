(function () {
  'use strict';

  const form = document.getElementById('contactForm');
  const email = document.getElementById('email');

  email.addEventListener('input', function () {
    if (email.value.trim() === '') {
      email.setCustomValidity(''); 
      return;
    }

    if (email.validity.typeMismatch) {
      email.setCustomValidity('Por favor, forneça um endereço de email válido.');
    } else {

      email.setCustomValidity('');
    }
  });

  form.addEventListener('submit', function (event) {
    const inputEvent = new Event('input', { bubbles: true, cancelable: true });
    email.dispatchEvent(inputEvent);

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      console.log('Formulário válido — aqui faria o envio.');
    }

    form.classList.add('was-validated');
  }, false);

})();
