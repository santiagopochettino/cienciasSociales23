const items = document.getElementById('items')


const alumno1 = {
  name: 'Amure, Angel',
  asistencias: 7,
  tbc:0,
  modulos: 'N/E',
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 7
}
const alumno2 = {
  name: 'Cuenca, Agostina',
  asistencias: 6,
  tbc:0,
  modulos: 5,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 11
}
const alumno3 = {
  name: 'Lucero, Morena',
  asistencias: 7,
  tbc:0,
  modulos: 5,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 12
}

const alumno4 = {
  name: 'Monzón, Abril',
  asistencias: 7,
  tbc:0,
  modulos: 'N/E',
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 7
}
const alumno5 = {
  name: 'Páez, Victoria',
  asistencias: 7,
  tbc:0,
  modulos: 'N/E',
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 7
}
const alumno6 = {
  name: 'Perez, Alma',
  asistencias: 6,
  tbc:0,
  modulos: 4,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 10
}
const alumno7 = {
  name: 'Quiroga, Ramiro',
  asistencias: 6,
  tbc:0,
  modulos: 5,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 11
}
const alumno8 = {
  name: 'Roux, Abigail',
  asistencias: 6,
  tbc:0,
  modulos: 5,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 11
}
const alumno9 = {
  name: 'Sandobal, Yazmin',
  asistencias: 6,
  tbc:0,
  modulos: 5,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 11
}
const alumno10 = {
  name: 'Valderrama, Sheila',
  asistencias: 5,
  tbc:0,
  modulos: 5,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 10
}
const alumno11 = {
  name: 'Chaile, Daiana',
  asistencias: 6,
  tbc:0,
  modulos: 5,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 11
}
const alumno12 ={
  name: 'Ale, Uriel',
  asistencias: 2,
  tbc:0,
  modulos: 'N/E',
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 2
}




items.innerHTML = `
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno3.name}</td>
  <td>${alumno3.asistencias}</td>
  <td>${alumno3.tbc}</td>
  <td>${alumno3.modulos}</td>
  <td>${alumno3.evaluaciones}</td>
  <td>${alumno3.recuperatorios}</td>
  <td>${alumno3.puntaje}</td>
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
  <td><i class="bi-trophy-fill"></i> ${alumno8.name}</td>
  <td>${alumno8.asistencias}</td>
  <td>${alumno8.tbc}</td>
  <td>${alumno8.modulos}</td>
  <td>${alumno8.evaluaciones}</td>
  <td>${alumno8.recuperatorios}</td>
  <td>${alumno8.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno11.name}</td>
  <td>${alumno11.asistencias}</td>
  <td>${alumno11.tbc}</td>
  <td>${alumno11.modulos}</td>
  <td>${alumno11.evaluaciones}</td>
  <td>${alumno11.recuperatorios}</td>
  <td>${alumno11.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno2.name}</td>
  <td>${alumno2.asistencias}</td>
  <td>${alumno2.tbc}</td>
  <td>${alumno2.modulos}</td>
  <td>${alumno2.evaluaciones}</td>
  <td>${alumno2.recuperatorios}</td>
  <td>${alumno2.puntaje}</td>
</tr>


<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno9.name}</td>
  <td>${alumno9.asistencias}</td>
  <td>${alumno9.tbc}</td>
  <td>${alumno9.modulos}</td>
  <td>${alumno9.evaluaciones}</td>
  <td>${alumno9.recuperatorios}</td>
  <td>${alumno9.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno6.name}</td>
  <td>${alumno6.asistencias}</td>
  <td>${alumno6.tbc}</td>
  <td>${alumno6.modulos}</td>
  <td>${alumno6.evaluaciones}</td>
  <td>${alumno6.recuperatorios}</td>
  <td>${alumno6.puntaje}</td>
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
  <td><i class="bi-trophy-fill"></i> ${alumno4.name}</td>
  <td>${alumno4.asistencias}</td>
  <td>${alumno4.tbc}</td>
  <td>${alumno4.modulos}</td>
  <td>${alumno4.evaluaciones}</td>
  <td>${alumno4.recuperatorios}</td>
  <td>${alumno4.puntaje}</td>
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
  <td><i class="bi-trophy-fill"></i> ${alumno1.name}</td>
  <td>${alumno1.asistencias}</td>
  <td>${alumno1.tbc}</td>
  <td>${alumno1.modulos}</td>
  <td>${alumno1.evaluaciones}</td>
  <td>${alumno1.recuperatorios}</td>
  <td>${alumno1.puntaje}</td>
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



`;