const items = document.getElementById('items')


const alumno1 = {
  name: 'Amure, Angel',
  asistencias: 6,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 6
}
const alumno2 = {
  name: 'Cuenca, Agostina',
  asistencias: 5,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 5
}
// const alumno3 = {
//   name: 'Dotto, Matias',
//   asistencias: 2,
//   modulos: 0,
//   evaluaciones: 0,
//   recuperatorios: 0,
//   puntaje: 2
// }
const alumno4 = {
  name: 'Lucero, Morena',
  asistencias: 6,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 6
}
const alumno5 = {
  name: 'Monzón, Abril',
  asistencias: 6,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 6
}
const alumno6 = {
  name: 'Páez, Victoria',
  asistencias: 6,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 6
}
const alumno7 = {
  name: 'Perez, Alma',
  asistencias: 5,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 5
}
const alumno8 = {
  name: 'Quiroga, Ramiro',
  asistencias: 5,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 5
}
const alumno9 = {
  name: 'Roux, Abigail',
  asistencias: 5,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 5
}
// const alumno10 = {
//   name: 'Roux, Emilio',
//   asistencias: 4,
//   modulos: 0,
//   evaluaciones: 0,
//   recuperatorios: 0,
//   puntaje: 4
// }
const alumno11 = {
  name: 'Sandobal, Yazmin',
  asistencias: 5,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 5
}
const alumno12 = {
  name: 'Valderrama, Sheila',
  asistencias: 4,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 4
}
const alumno13 = {
  name: 'Chaile, Daiana',
  asistencias: 5,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 5
}
const alumno14 ={
  name: 'Ale, Uriel',
  asistencias: 2,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 2
}




items.innerHTML = `
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno5.name}</td>
  <td>${alumno5.asistencias}</td>
  <td>${alumno5.modulos}</td>
  <td>${alumno5.evaluaciones}</td>
  <td>${alumno5.recuperatorios}</td>
  <td>${alumno5.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno6.name}</td>
  <td>${alumno6.asistencias}</td>
  <td>${alumno6.modulos}</td>
  <td>${alumno6.evaluaciones}</td>
  <td>${alumno6.recuperatorios}</td>
  <td>${alumno6.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno4.name}</td>
  <td>${alumno4.asistencias}</td>
  <td>${alumno4.modulos}</td>
  <td>${alumno4.evaluaciones}</td>
  <td>${alumno4.recuperatorios}</td>
  <td>${alumno4.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno1.name}</td>
  <td>${alumno1.asistencias}</td>
  <td>${alumno1.modulos}</td>
  <td>${alumno1.evaluaciones}</td>
  <td>${alumno1.recuperatorios}</td>
  <td>${alumno1.puntaje}</td>
</tr>



<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno7.name}</td>
  <td>${alumno7.asistencias}</td>
  <td>${alumno7.modulos}</td>
  <td>${alumno7.evaluaciones}</td>
  <td>${alumno7.recuperatorios}</td>
  <td>${alumno7.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno11.name}</td>
  <td>${alumno11.asistencias}</td>
  <td>${alumno11.modulos}</td>
  <td>${alumno11.evaluaciones}</td>
  <td>${alumno11.recuperatorios}</td>
  <td>${alumno11.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno8.name}</td>
  <td>${alumno8.asistencias}</td>
  <td>${alumno8.modulos}</td>
  <td>${alumno8.evaluaciones}</td>
  <td>${alumno8.recuperatorios}</td>
  <td>${alumno8.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno9.name}</td>
  <td>${alumno9.asistencias}</td>
  <td>${alumno9.modulos}</td>
  <td>${alumno9.evaluaciones}</td>
  <td>${alumno9.recuperatorios}</td>
  <td>${alumno9.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno13.name}</td>
  <td>${alumno13.asistencias}</td>
  <td>${alumno13.modulos}</td>
  <td>${alumno13.evaluaciones}</td>
  <td>${alumno13.recuperatorios}</td>
  <td>${alumno13.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno2.name}</td>
  <td>${alumno2.asistencias}</td>
  <td>${alumno2.modulos}</td>
  <td>${alumno2.evaluaciones}</td>
  <td>${alumno2.recuperatorios}</td>
  <td>${alumno2.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno12.name}</td>
  <td>${alumno12.asistencias}</td>
  <td>${alumno12.modulos}</td>
  <td>${alumno12.evaluaciones}</td>
  <td>${alumno12.recuperatorios}</td>
  <td>${alumno12.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno14.name}</td>
  <td>${alumno14.asistencias}</td>
  <td>${alumno14.modulos}</td>
  <td>${alumno14.evaluaciones}</td>
  <td>${alumno14.recuperatorios}</td>
  <td>${alumno14.puntaje}</td>
</tr>



`;