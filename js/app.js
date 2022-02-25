const items = document.getElementById('items')


const alumno1 = {
  name: 'juan',
  asistencias: 3,
  modulos: 10,
  evaluaciones: 8,
  recuperatorios: 0,
  puntaje: 21
}
const alumno2 = {
  name: 'carla',
  asistencias: 3,
  modulos: 5,
  evaluaciones: 4,
  recuperatorios: 7,
  puntaje: 15
}
const alumno3 = {
  name: 'pepe',
  asistencias: 3,
  modulos: 5,
  evaluaciones: 10,
  recuperatorios: 0,
  puntaje: 18
}


items.innerHTML = `
<tr>
  <td>${alumno1.name}</td>
  <td>${alumno1.asistencias}</td>
  <td>${alumno1.modulos}</td>
  <td>${alumno1.evaluaciones}</td>
  <td>${alumno1.recuperatorios}</td>
  <td>${alumno1.puntaje}</td>
</tr>
<tr>
  <td>${alumno3.name}</td>
  <td>${alumno3.asistencias}</td>
  <td>${alumno3.modulos}</td>
  <td>${alumno3.evaluaciones}</td>
  <td>${alumno3.recuperatorios}</td>
  <td>${alumno3.puntaje}</td>
</tr>

<tr>
  <td>${alumno2.name}</td>
  <td>${alumno2.asistencias}</td>
  <td>${alumno2.modulos}</td>
  <td>${alumno2.evaluaciones}</td>
  <td>${alumno2.recuperatorios}</td>
  <td>${alumno2.puntaje}</td>
</tr>
`;