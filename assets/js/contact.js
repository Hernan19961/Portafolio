emailjs.init("WcoQh0NVCb_S04XXs");

document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_4twl9so",
            "template_ahmef24",
            this
        )
            .then(() => {
                alert("Mensaje enviado correctamente.");
                this.reset();
            })
            .catch((error) => {
                console.error(error);
                alert("Error al enviar el mensaje.");
            });

    });