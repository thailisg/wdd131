//Script for manage localStorage
function setForm() {
    const name = document.getElementById("user-name").value.trim();
    const email = document.getElementById("user-email").value.trim();

    const formData = { name, email };

    localStorage.setItem("formData", JSON.stringify(formData));
}

function getForm() {
    return JSON.parse(localStorage.getItem("formData"));
}

function deleteForm() {
    localStorage.removeItem("formData");
}

document.getElementById("user-name").addEventListener("input", setForm);
document.getElementById("user-email").addEventListener("input", setForm);

window.addEventListener("DOMContentLoaded", () => {
    const saved = getForm();

    if (saved) {
        document.getElementById("user-name").value = saved.name || "";
        document.getElementById("user-email").value = saved.email || "";
    }
});

//script to manage the form submission
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");
    const message = document.getElementById("formMessage");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!form.checkValidity()) {
            message.textContent = "Please fill out the form correctly.";
            message.style.color = "yellow";
            return;
        }

        message.textContent = "Message sent successfully! 🎉";
        message.style.color = "lightgreen";

        deleteForm();
        form.reset();
    });

});
