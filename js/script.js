var modal_open = document.querySelector(".contact-button")
  , modal_overlay = document.querySelector(".modal-overlay")
  , modal_window = document.querySelector(".modal-window")
  , close = document.querySelector(".modal-close")
  , form = modal_window.querySelector("form")
  , clientName = modal_window.querySelector("[name=name]")
  , clientEmail = modal_window.querySelector("[name=email]")
  , storage_name = localStorage.getItem("clientName")
  , storage_email = localStorage.getItem("clientEmail")
  , modal_alert = document.querySelector(".modal-alert");
modal_open.addEventListener("click", function(e) {
    e.preventDefault(),
    modal_overlay.classList.add("show-modal"),
    modal_window.classList.add("modal-animation"),
    storage_name ? (clientName.value = storage_name,
    clientEmail.focus()) : clientName.focus()
}),
close.addEventListener("click", function(e) {
    e.preventDefault(),
    modal_overlay.classList.remove("show-modal"),
    modal_window.classList.remove("modal-error")
}),
form.addEventListener("submit", function(e) {
    clientName.value && clientEmail.value ? isStorageSupport && localStorage.setItem("clientName", clientName.value) : (e.preventDefault(),
    modal_window.classList.remove("modal-error"),
    modal_window.offsetWidth,
    modal_window.classList.add("modal-error"))
}),
window.addEventListener("keydown", function(e) {
    27 === e.keyCode && (e.preventDefault(),
    modal_overlay.classList.contains("show-modal") && modal_overlay.classList.remove("show-modal"))
});