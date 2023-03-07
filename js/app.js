const items = document.getElementById('items')

const alumno1 = {
  name: 'Echevarria, Maite',
  asistencias: 1,
  tbc: 1,
  modulos: 0,
  evaluaciones: '-',
  recuperatorios: '-',
  puntaje: 2
}
const alumno2 = {
  name: 'Mendez, Lucero',
  asistencias: 1,
  tbc: 1,
  modulos: 0,
  evaluaciones: '-',
  recuperatorios: '-',
  puntaje: 2
}

const alumno4 = {
  name: 'Millaqueo, Abril',
  asistencias:  0,
  tbc: 0,
  modulos: 0,
  evaluaciones: '-',
  recuperatorios: '-',
  puntaje: 0
}
const alumno5 = {
  name: 'Palena, Kiara',
  asistencias: 1,
  tbc: 1,
  modulos: 0,
  evaluaciones: '-',
  recuperatorios: '-',
  puntaje: 2
}
const alumno6 = {
  name: 'Franchi, Isaias',
  asistencias: 1,
  tbc: 1,
  modulos: 0,
  evaluaciones: '-',
  recuperatorios: '-',
  puntaje: 2
}
const alumno7 = {
  name: 'Morales, Lautaro',
  asistencias: 1,
  tbc: 1,
  modulos: 0,
  evaluaciones: '-',
  recuperatorios: '-',
  puntaje: 2
}
const alumno8 = {
  name: 'Rubieda, Nicolás',
  asistencias: 0,
  tbc: 0,
  modulos: 0,
  evaluaciones: '-',
  recuperatorios: '-',
  puntaje: 0
}

// const alumno10 = {
//   name: 'Valderrama, Sheila',
//   asistencias: 0,
//   tbc: 0,
//   modulos: 0,
//   evaluaciones: '-',
//   recuperatorios: '-',
//   puntaje: 0
// }
// const alumno12 ={
//   name: 'Ale, Uriel',
//   asistencias: 0,
//   tbc: 0,
//   modulos: 0,
//   evaluaciones: '-',
//   recuperatorios: '-',
//   puntaje: 0
// }
// const alumno13 ={
//   name: 'Palena, Valentina',
//   asistencias: 0,
//   tbc: 0,
//   modulos:0,
//   evaluaciones: '-',
//   recuperatorios: '-',
//   puntaje: 0
// }
// const alumno14 ={
//   name: 'Rubieda, Nicolas',
//   asistencias: 0,
//   tbc: 0,
//   modulos:0,
//   evaluaciones: '-',
//   recuperatorios: '-',
//   puntaje: 0
// }
// const alumno15 ={
//   name: 'Orozco, Joaquin',
//   asistencias: 0,
//   tbc: 0,
//   modulos:0,
//   evaluaciones: '-',
//   recuperatorios: '-',
//   puntaje: 0
// }
// const alumno16 ={
//   name: 'Morales, Lautaro',
//   asistencias: 0,
//   tbc: 0,
//   modulos:0,
//   evaluaciones: '-',
//   recuperatorios: '-',
//   puntaje: 0
// }


//<i class="bi-star-fill"></i>   estrella del 10


items.innerHTML = `

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
  <td><i class="bi-trophy-fill"></i> ${alumno1.name}</td>
  <td>${alumno1.asistencias}</td>
  <td>${alumno1.tbc}</td>
  <td>${alumno1.modulos}</td>
  <td>${alumno1.evaluaciones}</td>
  <td>${alumno1.recuperatorios}</td>
  <td>${alumno1.puntaje}</td>
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
  <td><i class="bi-trophy-fill"></i> ${alumno8.name}</td>
  <td>${alumno8.asistencias}</td>
  <td>${alumno8.tbc}</td>
  <td>${alumno8.modulos}</td>
  <td>${alumno8.evaluaciones}</td>
  <td>${alumno8.recuperatorios} </td>
  <td>${alumno8.puntaje}</td>
</tr>
`;