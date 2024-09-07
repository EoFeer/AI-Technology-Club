// Adicione o JavaScript aqui
document.getElementById("show-form-btn").addEventListener("click", function () {
  document.getElementById("contact-form").classList.add("active");
  document.getElementById("overlay").style.display = "block";
});

document
  .getElementById("close-form-btn")
  .addEventListener("click", function () {
    document.getElementById("contact-form").classList.remove("active");
    document.getElementById("overlay").style.display = "none";
  });

document.getElementById("overlay").addEventListener("click", function () {
  document.getElementById("contact-form").classList.remove("active");
  document.getElementById("overlay").style.display = "none";
});

// Exibir a div com a animação ao carregar o site
window.addEventListener("load", function () {
  const notice = document.querySelector(".chatgpt-notice");
  setTimeout(() => {
    notice.classList.add("active");
  }, 1000); // Delay de 1 segundo antes de exibir
});

// Ocultar a div após um tempo
setTimeout(() => {
  const notice = document.querySelector(".chatgpt-notice");
  notice.classList.remove("active");
}, 10000); // Oculta após 10 segundos


