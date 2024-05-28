function cargarCalendario () {
    const cargarCalendario = document.getElementById("calendario") 
    const dias = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]

    const fecha = new Date()
    const dia = fecha.getDate()
    const mes = fecha.getMonth()
    const anio = fecha.getFullYear()

    const primerDiaDelMes = new Date(anio, mes, 1)
    console.log(primerDiaDelMes)
    const cantidadDeDias = new Date(anio, mes + 1, 0).getDate()
    console.log(cantidadDeDias)

    const fechaEscrita = primerDiaDelMes.toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric",
    })
    console.log(fechaEscrita)

    const diasDemas = dias.indexOf(fechaEscrita.split(", ")[0])
    console.log(diasDemas)

    for (let i = 1; i <= diasDemas + cantidadDeDias; i++){

        contenedorDias = document.createElement("div")

        contenedorDias.classList.add("dia")

        if (i > diasDemas) {
            contenedorDias.innerText = i - diasDemas
            contenedorDias.addEventListener("click", () => console.log("click"))
        } else{
            contenedorDias.classList.add("deMas")
        }

        cargarCalendario.appendChild(contenedorDias)

    }

}

cargarCalendario()
