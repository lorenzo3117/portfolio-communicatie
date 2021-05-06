const html = document.getElementById("html")
const modalOpenButton = document.getElementById("modal-open-button")
const modal = document.getElementById("modal")

modalOpenButton.addEventListener("click", event => {
    modal.classList.add("is-active")
    modal.classList.add("is-clipped")
    html.style.overflow = "hidden"
})

function closeModal() {
    modal.classList.remove("is-active")
    modal.classList.remove("is-clipped")
    html.style.overflow = "initial"
}