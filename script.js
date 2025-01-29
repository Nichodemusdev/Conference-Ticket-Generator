document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const container2 = document.querySelector(".container-2");
  const clientName = document.querySelector(".client-name");
  const clientEmail = document.querySelector(".client-email");
  const ticketName = document.querySelector(".name");
  const ticketGithub = document.querySelector(".github span");
  const clientImage = document.querySelector(".client-image");
  const ticketNumber = document.querySelector(".ticket-number");
  const headerH1 = document.querySelector(".header h1"); 
  const headerP = document.querySelector(".header p"); 

  form.addEventListener("submit", function (event) {
      event.preventDefault(); 

      const fullName = document.getElementById("full-name").value;
      const email = document.getElementById("email").value;
      const github = document.getElementById("github").value;
      const avatarInput = document.getElementById("avatar");

      clientName.innerHTML = `${fullName}<span class="exclamation">!</span>`; 
      clientEmail.textContent = email;
      ticketName.textContent = fullName;
      ticketGithub.textContent = github;

      if (avatarInput.files.length > 0) {
          const reader = new FileReader();
          reader.onload = function (e) {
              clientImage.src = e.target.result; 
          };
          reader.readAsDataURL(avatarInput.files[0]);
      }

      ticketNumber.textContent = `#${Math.floor(100000 + Math.random() * 900000)}`;

      document.querySelector(".form-container").style.display = "none";
      container2.style.display = "block";
      headerH1.style.display = "none"; 
      headerP.style.display = "none"; 
  });
});
document.getElementById("avatar").addEventListener("change", function(event) {
  const file = event.target.files[0]; 
  if (file) {
      const reader = new FileReader(); 
      reader.onload = function(e) {
          
          const preview = document.querySelector(".upload-label");
          preview.innerHTML = `<img src="${e.target.result}" alt="Selected Avatar" class="preview-image">`;
      };
      reader.readAsDataURL(file); 
  }
});
