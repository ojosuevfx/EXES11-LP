/* Front-end only: replace the submit callback with the CRM integration.
   No requests, storage, analytics payloads or simulated successful submissions. */
(function () {
  'use strict';
  var form = document.getElementById('lead-form');
  if (!form) return;
  var fields = document.getElementById('lead-fields');
  var phone = document.getElementById('lead-phone');
  var status = document.getElementById('lead-status');
  var dialog = document.getElementById('lead-dialog');
  var opener = null;
  document.querySelectorAll('[data-open-lead]').forEach(function (button) {
    button.addEventListener('click', function () {
      if (dialog.open) return;
      opener = button;
      dialog.showModal();
      document.documentElement.classList.add('lead-modal-open');
      if (window.lenis) window.lenis.stop();
      dialog.scrollTop = 0;
      document.getElementById('lead-name').focus({preventScroll: true});
    });
  });
  dialog.querySelector('.lead-dialog__close').addEventListener('click', function () { dialog.close(); });
  dialog.addEventListener('click', function (event) {
    var bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  // Native dialog handles Escape, focus trapping and an inert background.
  dialog.addEventListener('close', function () {
    document.documentElement.classList.remove('lead-modal-open');
    if (window.lenis) window.lenis.start();
    if (opener) opener.focus({preventScroll: true});
  });
  function validatePhone() {
    var digits = phone.value.replace(/\D/g, '');
    if (digits.length > 11 && digits.slice(0, 2) === '55') digits = digits.slice(2);
    var valid = /^[1-9]{2}(?:9\d{8}|[2-5]\d{7})$/.test(digits);
    phone.setCustomValidity(valid || !phone.value ? '' : 'Informe um telefone válido com DDD, como (11) 99999-9999.');
  }
  function validateText(input) {
    input.setCustomValidity(input.value.trim().length >= input.minLength || !input.value ? '' : 'Preencha este campo com pelo menos ' + input.minLength + ' caracteres.');
  }
  ['lead-name', 'lead-company'].forEach(function (id) {
    var input = document.getElementById(id);
    input.addEventListener('input', function () { validateText(input); });
  });
  phone.addEventListener('input', validatePhone);
  form.addEventListener('input', function () { status.hidden = true; });
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    validatePhone();
    ['lead-name', 'lead-company'].forEach(function (id) {
      var input = document.getElementById(id);
      input.value = input.value.trim();
      validateText(input);
    });
    if (!form.reportValidity()) return;
    // Integration point: validate, then submit FormData(form) to the approved CRM.
    // Only show a success state after the server confirms receipt.
    status.replaceChildren();
    status.append('O cadastro ainda não está disponível. Seus dados não foram enviados. Para informações sobre a oferta, ');
    var contact = document.createElement('a');
    contact.href = 'mailto:ri@exes.com.br';
    contact.textContent = 'fale com o RI';
    status.append(contact, '.');
    status.hidden = false;
    status.focus();
  });
  // Without JavaScript the fieldset stays disabled, preventing accidental native GET submissions.
  fields.disabled = false;
})();
