const items = document.getElementById('items')

const alumno1 = {
  name: 'Amure, Angel',
  asistencias: 5,
  tbc:5,
  modulos: 0,
  evaluaciones: 9,
  recuperatorios: '-',
  puntaje: 19
}
const alumno2 = {
  name: 'Cuenca, Agostina',
  asistencias: 8,
  tbc: 8,
  modulos: 0,
  evaluaciones: 4,
  recuperatorios: '-',
  puntaje: 20
}

const alumno4 = {
  name: 'Monzón, Abril',
  asistencias:  7,
  tbc: 7,
  modulos: 0,
  evaluaciones: 6,
  recuperatorios: '-',
  puntaje: 20
}
const alumno5 = {
  name: 'Páez, Victoria',
  asistencias: 8,
  tbc: 8,
  modulos: 0,
  evaluaciones: 8,
  recuperatorios: '-',
  puntaje: 24
}
const alumno6 = {
  name: 'Perez, Alma',
  asistencias: 8,
  tbc: 8,
  modulos: 0,
  evaluaciones: 8,
  recuperatorios: '-',
  puntaje: 24
}
const alumno7 = {
  name: 'Quiroga, Ramiro',
  asistencias: 7,
  tbc: 7,
  modulos: 0,
  evaluaciones: 8,
  recuperatorios: '-',
  puntaje: 22
}
const alumno8 = {
  name: 'Roux, Abigail',
  asistencias: 8,
  tbc: 8,
  modulos: 0,
  evaluaciones: 8,
  recuperatorios: '-',
  puntaje: 24
}

const alumno10 = {
  name: 'Valderrama, Sheila',
  asistencias: 7,
  tbc: 7,
  modulos: 0,
  evaluaciones: 2,
  recuperatorios: '-',
  puntaje: 16
}
const alumno12 ={
  name: 'Ale, Uriel',
  asistencias: 8,
  tbc: 8,
  modulos: 0,
  evaluaciones: 4,
  recuperatorios: '-',
  puntaje: 20
}
const alumno13 ={
  name: 'Palena, Valentina',
  asistencias: 8,
  tbc: 8,
  modulos:0,
  evaluaciones: 7,
  recuperatorios: '-',
  puntaje: 23
}
const alumno14 ={
  name: 'Rubieda, Nicolas',
  asistencias: 3,
  tbc: 3,
  modulos:0,
  evaluaciones: 'Aus',
  recuperatorios: '-',
  puntaje: 6
}
const alumno15 ={
  name: 'Orozco, Joaquin',
  asistencias: 7,
  tbc: 7,
  modulos:0,
  evaluaciones: 10,
  recuperatorios: '-',
  puntaje: 24
}
const alumno16 ={
  name: 'Morales, Lautaro',
  asistencias: 3,
  tbc: 3,
  modulos:0,
  evaluaciones: 2,
  recuperatorios: '-',
  puntaje: 8
}





items.innerHTML = `

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno15.name}</td>
  <td>${alumno15.asistencias}</td>
  <td>${alumno15.tbc}</td>
  <td>${alumno15.modulos}</td>
  <td><i class="bi-star-fill"></i>  ${alumno15.evaluaciones}</td>
  <td>${alumno15.recuperatorios}</td>
  <td>${alumno15.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno5.name}</td>
  <td>${alumno5.asistencias}</td>
  <td>${alumno5.tbc}</td>
  <td>${alumno5.modulos}</td>
  <td>${alumno5.evaluaciones}</td>
  <td>${alumno5.recuperatorios}</td>
  <td>${alumno5.puntaje}</td>
</tr>





<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno6.name}</td>
  <td>${alumno6.asistencias}</td>
  <td>${alumno6.tbc}</td>
  <td>${alumno6.modulos}</td>
  <td>${alumno6.evaluaciones}</td>
  <td>${alumno6.recuperatorios} </td>
  <td>${alumno6.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno8.name}</td>
  <td>${alumno8.asistencias}</td>
  <td>${alumno8.tbc}</td>
  <td>${alumno8.modulos}</td>
  <td>${alumno8.evaluaciones}</td>
  <td>${alumno8.recuperatorios} </td>
  <td>${alumno8.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno13.name}</td>
  <td>${alumno13.asistencias}</td>
  <td>${alumno13.tbc}</td>
  <td>${alumno13.modulos}</td>
  <td>${alumno13.evaluaciones}</td>
  <td>${alumno13.recuperatorios}</td>
  <td>${alumno13.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno7.name}</td>
  <td>${alumno7.asistencias}</td>
  <td>${alumno7.tbc}</td>
  <td>${alumno7.modulos}</td>
  <td>${alumno7.evaluaciones}</td>
  <td>${alumno7.recuperatorios}</td>
  <td>${alumno7.puntaje}</td>
</tr>





<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno2.name}</td>
  <td>${alumno2.asistencias}</td>
  <td>${alumno2.tbc}</td>
  <td>${alumno2.modulos}</td>
  <td>${alumno2.evaluaciones} </td>
  <td>${alumno2.recuperatorios}</td>
  <td>${alumno2.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno12.name}</td>
  <td>${alumno12.asistencias}</td>
  <td>${alumno12.tbc}</td>
  <td>${alumno12.modulos}</td>
  <td>${alumno12.evaluaciones}</td>
  <td>${alumno12.recuperatorios}</td>
  <td>${alumno12.puntaje}</td>
</tr>





<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno4.name}</td>
  <td>${alumno4.asistencias}</td>
  <td>${alumno4.tbc}</td>
  <td>${alumno4.modulos}</td>
  <td>${alumno4.evaluaciones}</td>
  <td>${alumno4.recuperatorios} </td>
  <td>${alumno4.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno1.name}</td>
  <td>${alumno1.asistencias}</td>
  <td>${alumno1.tbc}</td>
  <td>${alumno1.modulos}</td>
  <td>${alumno1.evaluaciones}</td>
  <td>${alumno1.recuperatorios}</td>
  <td>${alumno1.puntaje}</td>
</tr>


<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno10.name}</td>
  <td>${alumno10.asistencias}</td>
  <td>${alumno10.tbc}</td>
  <td>${alumno10.modulos}</td>
  <td>${alumno10.evaluaciones}</td>
  <td>${alumno10.recuperatorios}</td>
  <td>${alumno10.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno16.name}</td>
  <td>${alumno16.asistencias}</td>
  <td>${alumno16.tbc}</td>
  <td>${alumno16.modulos}</td>
  <td>${alumno16.evaluaciones}</td>
  <td>${alumno16.recuperatorios}</td>
  <td>${alumno16.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno14.name}</td>
  <td>${alumno14.asistencias}</td>
  <td>${alumno14.tbc}</td>
  <td>${alumno14.modulos}</td>
  <td>${alumno14.evaluaciones}</td>
  <td>${alumno14.recuperatorios}</td>
  <td>${alumno14.puntaje}</td>
</tr>

`;