/**
* PHP Email Form Validation - v3.6
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
function php_email_form_submit(thisForm, action, formData) {
  fetch(action, {
    method: 'POST',
    body: formData,
    headers: {'X-Requested-With': 'XMLHttpRequest'}
  })
  .then(response => {
    if (response.ok) {
      return response.json(); // Esta línea se cambió para analizar la respuesta como JSON
    } else {
      throw new Error(`${response.status} ${response.statusText} ${response.url}`); 
    }
  })
  .then(data => {
    thisForm.querySelector('.loading').classList.remove('d-block');
    if (data.ok) { // Esta línea se cambió para verificar el campo 'ok' en la respuesta
      thisForm.querySelector('.sent-message').classList.add('d-block');
      thisForm.reset(); 
    } else {
      throw new Error(data ? JSON.stringify(data) : 'Form submission failed and no error message returned from: ' + action); 
    }
  })
  .catch((error) => {
    displayError(thisForm, error);
  });
}
