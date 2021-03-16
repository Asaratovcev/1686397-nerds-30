const modalLink = document.querySelector(".button-contacts");
const modalPopup = document.querySelector(".modal");
const modalClose = modalPopup.querySelector(".modal-close");
const senderForm = modalPopup.querySelector(".feedback-form");
const senderLogin = modalPopup.querySelector(".form-input-name");
const senderMail = modalPopup.querySelector(".form-input-mail");
const senderText = modalPopup.querySelector(".form-textarea");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}


modalLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal-show");

  if (storage) {
    senderLogin.value = storage;
    senderMail.focus();
} else {
    senderLogin.focus();
  }

  senderLogin.focus();
});

modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPopup.classList.remove("modal-show");
    modalPopup.classList.remove("modal-error");
});

senderForm.addEventListener("submit", function (evt) {
    if (!senderLogin.value || !senderMail.value || !senderText.value) {
      evt.preventDefault();
      modalPopup.classList.remove("modal-error");
      modalPopup.offsetWidth = modalPopup.offsetWidth;
      modalPopup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
        localStorage.setItem("login", senderLogin.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        modalPopup.classList.remove("modal-show");
        modalPopup.classList.remove("modal-error");
      }
    }
  });