const btn = document.getElementById("btn");
const span = document.getElementById("modalClose");

btn.onclick = () => {
  document.getElementById("modal").style.display = "block";
};

window.onclick = (event) => {
  if (event.target.id == "modal") {
    document.getElementById("modal").style.display = "none";
  }
};

const sendMessage = () => {
  const name = document.getElementById("messageName");
  const email = document.getElementById("messageEmail");
  const message = document.getElementById("message");
  alert(
    `Сообщение отправлено!\nИмя: ${name.value}\nEmail: ${email.value}\nСообщение: ${message.value}`
  );
  document.getElementById("modal").style.display = "none";
};