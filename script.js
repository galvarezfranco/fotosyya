document.addEventListener("DOMContentLoaded", function () {

    const Rollo = document.getElementById("Rollo");
    const musica = document.getElementById("musica");

    Rollo. addEventListener("click", function () {

        if (musica.paused) {
            musica.play()
                .then(() => {
                    console.log("Música reproduciéndose");
                })
                .catch(error => {
                    console.error("Error al reproducir:", error);
                });
        } else {
            musica.pause();
            console.log("Música pausada");
        }

    });

});