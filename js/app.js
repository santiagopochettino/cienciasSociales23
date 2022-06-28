const items = document.getElementById('items')

const alumno1 = {
  name: 'Amure, Angel',
  asistencias: 26,
  tbc:18,
  modulos: 5,
  evaluaciones: 7,
  evaluaciones2: 9,
  recuperatorios: '-',
  recuperatorios2:'-',
  puntaje: 65
}
const alumno2 = {
  name: 'Cuenca, Agostina',
  asistencias: 24,
  tbc:17,
  modulos: 5,
  evaluaciones: '-',
  evaluaciones2:'-',
  recuperatorios: 2,
  recuperatorios2:8,
  puntaje: 56
}
const alumno3 = {
  name: 'Lucero, Morena',
  asistencias: 18,
  tbc:10,
  modulos: 10,
  evaluaciones: '-',
  evaluaciones2:'Aus',
  recuperatorios: 7,
  recuperatorios2:'Aus',
  puntaje: 44
}

const alumno4 = {
  name: 'Monzón, Abril',
  asistencias: 28,
  tbc:20,
  modulos: 5,
  evaluaciones: 9,
  evaluaciones2:7,
  recuperatorios: '-',
  recuperatorios2:'-',
  puntaje: 69
}
const alumno5 = {
  name: 'Páez, Victoria',
  asistencias: 27,
  tbc:19,
  modulos: 9,
  evaluaciones: 9,
  evaluaciones2:8,
  recuperatorios: '-',
  recuperatorios2:'-',
  puntaje: 72
}
const alumno6 = {
  name: 'Perez, Alma',
  asistencias: 24,
  tbc:17,
  modulos: 9,
  evaluaciones: 7,
  evaluaciones2:8,
  recuperatorios: '-',
  recuperatorios2:'-',
  puntaje: 65
}
const alumno7 = {
  name: 'Quiroga, Ramiro',
  asistencias: 21,
  tbc:14,
  modulos: 10,
  evaluaciones: 7,
  evaluaciones2:9,
  recuperatorios: '-',
  recuperatorios2:'-',
  puntaje: 61
}
const alumno8 = {
  name: 'Roux, Abigail',
  asistencias: 26,
  tbc:17,
  modulos: 5,
  evaluaciones: 7,
  evaluaciones2:10,
  recuperatorios: '-',
  recuperatorios2:'-',
  puntaje: 63
}
const alumno9 = {
  name: 'Sandobal, Yazmin',
  asistencias: 21,
  tbc:14,
  modulos: 10,
  evaluaciones: 8,
  evaluaciones2:9,
  recuperatorios: '-',
  recuperatorios2:'-',
  puntaje: 62
}
const alumno10 = {
  name: 'Valderrama, Sheila',
  asistencias: 25,
  tbc:19,
  modulos: 9,
  evaluaciones: '-',
  evaluaciones2:'-',
  recuperatorios: 3,
  recuperatorios2:7,
  puntaje: 61
}
const alumno11 = {
  name: 'Chaile, Daiana',
  asistencias: 20,
  tbc:13,
  modulos: 10,
  evaluaciones: 7,
  evaluaciones2:9,
  recuperatorios: '-',
  recuperatorios2:'-',
  puntaje: 59
}
const alumno12 ={
  name: 'Ale, Uriel',
  asistencias: 19,
  tbc:17,
  modulos: 'N/E',
  evaluaciones: '-',
  evaluaciones2:'-',
  recuperatorios: 2,
  recuperatorios2: 8,
  puntaje: 46
}
const alumno13 ={
  name: 'Palena, Valentina',
  asistencias: 15,
  tbc:14,
  modulos:'N/E',
  evaluaciones: 'Aus',
  evaluaciones2:'-',
  recuperatorios: 'Aus',
  recuperatorios2: 10,
  puntaje: 39
}
const alumno14 ={
  name: 'Rubieda, Nicolas',
  asistencias: 3,
  tbc:2,
  modulos:'N/E',
  evaluaciones: 'Aus',
  evaluaciones2:'Aus',
  recuperatorios: 'Aus',
  recuperatorios2:'Aus',
  puntaje: 5
}
const alumno15 ={
  name: 'Orozco, Joaquin',
  asistencias: 4,
  tbc:4,
  modulos:'N/E',
  evaluaciones: 'Aus',
  evaluaciones2:'Aus',
  recuperatorios: 'Aus',
  recuperatorios2:'Aus',
  puntaje: 8
}





items.innerHTML = `
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno5.name}</td>
  <td>${alumno5.asistencias}</td>
  <td>${alumno5.tbc}</td>
  <td>${alumno5.modulos}</td>
  <td>${alumno5.evaluaciones} | ${alumno5.evaluaciones2}</td>
  <td>${alumno5.recuperatorios} | ${alumno5.recuperatorios2}</td>
  <td>${alumno5.puntaje}</td>
</tr>



<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno4.name}</td>
  <td>${alumno4.asistencias}</td>
  <td>${alumno4.tbc}</td>
  <td>${alumno4.modulos}</td>
  <td>${alumno4.evaluaciones} | ${alumno4.evaluaciones2}</td>
  <td>${alumno4.recuperatorios} | ${alumno4.recuperatorios2}</td>
  <td>${alumno4.puntaje}</td>
</tr>


<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno6.name}</td>
  <td>${alumno6.asistencias}</td>
  <td>${alumno6.tbc}</td>
  <td>${alumno6.modulos}</td>
  <td>${alumno6.evaluaciones} | ${alumno6.evaluaciones2}</td>
  <td>${alumno6.recuperatorios} | ${alumno6.recuperatorios2}</td>
  <td>${alumno6.puntaje}</td>
</tr>


<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno1.name}</td>
  <td>${alumno1.asistencias}</td>
  <td>${alumno1.tbc}</td>
  <td>${alumno1.modulos}</td>
  <td>${alumno1.evaluaciones} | ${alumno1.evaluaciones2}</td>
  <td>${alumno1.recuperatorios} | ${alumno1.recuperatorios2}</td>
  <td>${alumno1.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno8.name}</td>
  <td>${alumno8.asistencias}</td>
  <td>${alumno8.tbc}</td>
  <td>${alumno8.modulos}</td>
  <td>${alumno8.evaluaciones} | <i class="bi-star-fill"></i> ${alumno8.evaluaciones2}</td>
  <td>${alumno8.recuperatorios} | ${alumno8.recuperatorios2}</td>
  <td>${alumno8.puntaje}</td>
</tr>


<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno9.name}</td>
  <td>${alumno9.asistencias}</td>
  <td>${alumno9.tbc}</td>
  <td>${alumno9.modulos}</td>
  <td>${alumno9.evaluaciones} | ${alumno9.evaluaciones2}</td>
  <td>${alumno9.recuperatorios} | ${alumno9.recuperatorios2}</td>
  <td>${alumno9.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno7.name}</td>
  <td>${alumno7.asistencias}</td>
  <td>${alumno7.tbc}</td>
  <td>${alumno7.modulos}</td>
  <td>${alumno7.evaluaciones} | ${alumno7.evaluaciones2}</td>
  <td>${alumno7.recuperatorios} | ${alumno7.recuperatorios2}</td>
  <td>${alumno7.puntaje}</td>
</tr>





<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno10.name}</td>
  <td>${alumno10.asistencias}</td>
  <td>${alumno10.tbc}</td>
  <td>${alumno10.modulos}</td>
  <td>${alumno10.evaluaciones} | ${alumno10.evaluaciones2}</td>
  <td>${alumno10.recuperatorios} | ${alumno10.recuperatorios2}</td>
  <td>${alumno10.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno11.name}</td>
  <td>${alumno11.asistencias}</td>
  <td>${alumno11.tbc}</td>
  <td>${alumno11.modulos}</td>
  <td>${alumno11.evaluaciones} | ${alumno11.evaluaciones2}</td>
  <td>${alumno11.recuperatorios} | ${alumno11.recuperatorios2}</td>
  <td>${alumno11.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno2.name}</td>
  <td>${alumno2.asistencias}</td>
  <td>${alumno2.tbc}</td>
  <td>${alumno2.modulos}</td>
  <td>${alumno2.evaluaciones} | ${alumno2.evaluaciones2}</td>
  <td>${alumno2.recuperatorios} | ${alumno2.recuperatorios2}</td>
  <td>${alumno2.puntaje}</td>
</tr>



<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno12.name}</td>
  <td>${alumno12.asistencias}</td>
  <td>${alumno12.tbc}</td>
  <td>${alumno12.modulos}</td>
  <td>${alumno12.evaluaciones} | ${alumno12.evaluaciones2}</td>
  <td>${alumno12.recuperatorios} | ${alumno12.recuperatorios2}</td>
  <td>${alumno12.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno3.name}</td>
  <td>${alumno3.asistencias}</td>
  <td>${alumno3.tbc}</td>
  <td>${alumno3.modulos}</td>
  <td>${alumno3.evaluaciones} | ${alumno3.evaluaciones2}</td>
  <td>${alumno3.recuperatorios} | ${alumno3.recuperatorios2}</td>
  <td>${alumno3.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno13.name}</td>
  <td>${alumno13.asistencias}</td>
  <td>${alumno13.tbc}</td>
  <td>${alumno13.modulos}</td>
  <td>${alumno13.evaluaciones} | ${alumno13.evaluaciones2}</td>
  <td>${alumno13.recuperatorios} | <i class="bi-star-fill"></i>  ${alumno13.recuperatorios2}</td>
  <td>${alumno13.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno15.name}</td>
  <td>${alumno15.asistencias}</td>
  <td>${alumno15.tbc}</td>
  <td>${alumno15.modulos}</td>
  <td>${alumno15.evaluaciones} | ${alumno15.evaluaciones2}</td>
  <td>${alumno15.recuperatorios} | ${alumno15.recuperatorios2}</td>
  <td>${alumno15.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno14.name}</td>
  <td>${alumno14.asistencias}</td>
  <td>${alumno14.tbc}</td>
  <td>${alumno14.modulos}</td>
  <td>${alumno14.evaluaciones} | ${alumno14.evaluaciones2}</td>
  <td>${alumno14.recuperatorios} | ${alumno14.recuperatorios2}</td>
  <td>${alumno14.puntaje}</td>
</tr>



`;