var modal_open = document.querySelector(".contact-button")
    modal_map_open = document.querySelector(".map")
  , modal_overlay = document.querySelector(".modal-overlay")
  , modal_contact = document.querySelector(".modal-contact")
  , modal_map = document.querySelector(".modal-map")
    modal_map_overlay = document.querySelector(".map-overlay")    
  , close = document.querySelector(".modal-close")
    map_close = document.querySelector(".modal-map-close")
  , form = modal_contact.querySelector("form")
  , clientName = modal_contact.querySelector("[name=user-name]")
  , clientEmail = modal_contact.querySelector("[name=user-email]")
  , storage_name = localStorage.getItem("clientName")
  , storage_email = localStorage.getItem("clientEmail")
  , modal_alert = document.querySelector(".modal-alert");
modal_open.addEventListener("click", function(e) {
    e.preventDefault(),
    modal_overlay.classList.add("show-modal"),
    modal_contact.classList.add("modal-animation")
    storage_name ? (clientName.value = storage_name,
        clientEmail.focus()) : clientName.focus()
    }),

close.addEventListener("click", function(e) {
    e.preventDefault(),
    modal_overlay.classList.remove("show-modal"),
    modal_contact.classList.remove("modal-error")
}),

form.addEventListener("submit", function(e) {
    clientName.value && clientEmail.value ? isStorageSupport && localStorage.setItem("clientName", clientName.value) : (e.preventDefault(),
    modal_contact.classList.remove("modal-error"),
    modal_contact.offsetWidth,
    modal_contact.classList.add("modal-error"))
}),
window.addEventListener("keydown", function(e) {
    27 === e.keyCode && (e.preventDefault(),
    modal_overlay.classList.contains("show-modal") && modal_overlay.classList.remove("show-modal")),
    modal_contact.classList.remove("modal-error")
});

modal_map_open.addEventListener("click", function(e) {
    e.preventDefault(),
    modal_map_overlay.classList.add("show-modal"),
    modal_map.classList.add("modal-animation")
});

map_close.addEventListener("click", function(e) {
    e.preventDefault(),
    modal_map_overlay.classList.remove("show-modal")
});

window.addEventListener("keydown", function(e) {
    27 === e.keyCode && (e.preventDefault(),
    modal_map_overlay.classList.contains("show-modal") && modal_map_overlay.classList.remove("show-modal"))
});