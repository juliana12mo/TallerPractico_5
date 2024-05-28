eventoEncontrado = false;

function guardar() {
  eventos = JSON.parse(localStorage.getItem("eventos") || "[]");

  titulo = document.getElementById("titulo");
  fecha = document.getElementById("fecha");
  hora = document.getElementById("hora");
  descripcion = document.getElementById("descipcion");
  TablaParticipantes = document.getElementById("tablaDeParticipantes");
  participantes = [];

  for (let i = 1; i < TablaParticipantes.rows.length; i++) {
    participantes.push(TablaParticipantes.rows[i].cells[0].innerHTML);
  }

  evento = new Evento(
    titulo.value,
    fecha.value,
    hora.value,
    descripcion.value,
    participantes
  );

  eventos.push(evento);
  localStorage.setItem("eventos", JSON.stringify(eventos));

  nuevo();
}

function actualizar() {
  eventos = JSON.parse(localStorage.getItem("eventos") || "[]");

  titulo = document.getElementById("titulo");
  fecha = document.getElementById("fecha");
  hora = document.getElementById("hora");
  descripcion = document.getElementById("descipcion");
  participantes = [];
  tablaDeParticipantes = document.getElementById("tablaDeParticipantes");
  for (let i = 1; i < tablaDeParticipantes.rows.length; i++) {
    participantes.push(tablaDeParticipantes.rows[i].cells[0].innerHTML);
  }

  for (let i = 0; i < eventos.length; i++) {
    if (eventos[i].fecha == fecha.value && eventos[i].hora == hora.value) {
      eventos[i].descripcion = descripcion.value;
      eventos[i].participantes = participantes.value;
      eventos[i].titulo = titulo.value;

      break;
    }
  }

  localStorage.setItem("eventos", JSON.stringify(eventos));

  console.log(eventos);
}

function eliminar() {
  eventos = JSON.parse(localStorage.getItem("eventos") || "[]");

  fecha = document.getElementById("fecha");
  hora = document.getElementById("hora");

  for (let i = 0; i < eventos.length; i++) {
    if (eventos[i].fecha == fecha.value && eventos[i].hora == hora.value) {
      eventos.splice(i, 1);

      break;
    }
  }

  localStorage.setItem("eventos", JSON.stringify(eventos));

  nuevo();
}

function listar() {
  eventos = JSON.parse(localStorage.getItem("eventos") || "[]");

  console.log(eventos);
}

function consultar() {
  eventos = JSON.parse(localStorage.getItem("eventos") || "[]");

  fecha = document.getElementById("fecha");
  hora = document.getElementById("hora");
  descripcion = document.getElementById("descipcion");
  participantes = document.getElementById("participantes");

  for (let i = 0; i < eventos.length; i++) {
    if (eventos[i].fecha == fecha.value && eventos[i].hora == hora.value) {
      descripcion.value = eventos[i].descripcion;
      participantes.value = eventos[i].participantes;
      eventoEncontrado = true;
      break;
    }
  }

  if (eventoEncontrado == true) {
  } else {
    alert("No hay eventos en este espacio.");
  }
}

function nuevo() {
  titulo = document.getElementById("titulo");
  fecha = document.getElementById("fecha");
  hora = document.getElementById("hora");
  descripcion = document.getElementById("descipcion");

  titulo.value = "";
  fecha.value = "";
  hora.value = "";
  descripcion.value = "";

  titulo.focus();
}

function borrarDatos() {
  localStorage.removeItem("eventos");
}


