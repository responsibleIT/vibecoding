// Progressive enhancement: simple client-side validation feedback

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    // Basic client-side validation
    let valid = true;
    form.querySelectorAll('input, textarea').forEach(field => {
      if (!field.checkValidity()) {
        field.classList.add('invalid');
        valid = false;
      } else {
        field.classList.remove('invalid');
      }
    });
    if (!valid) {
      e.preventDefault();
      alert('Please fill out all fields correctly.');
    }
  });
});
