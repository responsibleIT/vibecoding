// Progressive enhancement for contact form
// - Uses native HTML validation first
// - If JS is available, intercept submit and simulate async send

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    // Let HTML validation run first
    if (!form.checkValidity()) {
      // Show native error UI and do not proceed with JS submission
      form.reportValidity();
      e.preventDefault();
      return;
    }

    // Prevent default submit to progressively enhance with AJAX
    e.preventDefault();

    // Collect data
    var data = new FormData(form);

    // Provide immediate UI feedback
    status.textContent = 'Sending…';

    // Simulate network request (replace with fetch to real endpoint)
    setTimeout(function () {
      // Simulate success
      status.textContent = 'Message sent — thank you!';
      status.style.color = getComputedStyle(document.documentElement).getPropertyValue('--success') || 'lightgreen';

      // Optionally clear form for better UX
      form.reset();
    }, 800);
  });
});
