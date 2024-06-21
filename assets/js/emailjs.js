(function () {
    emailjs.init({
      publicKey: "7t5EFfWNxe35m0fsG",
    });
  })();
  window.onload = function () {
    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        emailjs.sendForm("service_8n4xc7r", "contact_form", this).then(
          () => {
            console.log("SUCCESS!");
            document.getElementById('success-message').classList.remove('hidden');
            document.getElementById('error-message').classList.add('hidden');
          },
          (error) => {
            console.log("FAILED...", error);
            document.getElementById('success-message').classList.add('hidden');
            document.getElementById('error-message').classList.remove('hidden');
          }
        );
      });
  };
  