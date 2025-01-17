<template>
  <div class="GameInfo ">
    <table class="table container mb-0">
      <thead>
        <tr>
          <th colspan="2" scope="colgroup" class="display-2 " id="ListTitle"> Next Game's </th>
        </tr>
      </thead>
      <tbody >
        <tr v-for="(partido, i) in listadoPartidos" :key="i">
          <td>
            <div  class="d-flex justify-content-between align-items-center">
              <small>Nº{{ partido.id }}</small>
              <h3 >{{ partido.participantes }}</h3>
              <!-- <button @click="functionLog(partido.id,partido.nombre,partido.descripcion,partido.participantes,partido.horario,partido.lugar)" class="btn btn-secondary btn-circle btn-circle-sm " ><i class="fa fa-search"></i></button> -->
              <!-- <router-link to="/DetallesPartido/1"><button class="btn btn-secondary btn-circle btn-circle-sm"><i class="fa fa-search"></i></button></router-link> -->
              <!-- <router-link :to="{name: '/DetallesPartido/'+ partido.descripcion + partido.Lugar + partido.participantes }"><button class="btn btn-secondary btn-circle btn-circle-sm"><i class="fa fa-search"></i></button></router-link> -->
              <router-link :to="{name: 'DetallesPartido', params: {id: partido.id, title: partido.participantes, info: partido.descripcion, date: partido.horario, adress: partido.Lugar} }"><button class="btn btn-outline-dark btn-circle btn-circle-sm"><i class="fa fa-search"></i></button></router-link>
            </div>
            <h6 cl>{{ partido.horario}} Hrs.</h6>
            <!--PARA PROPOSITOS DE PRUEBA 1
            <div>
              <button v-on:click="isHidden = !isHidden">WIP:showdata</button>
              <p v-if="!isHidden">{{partido}}</p>
            </div>-->
          </td>
        </tr>
        <tr id="casiFooter">
          <br><br>
        </tr>
      </tbody>
    </table>
    <div class=" fixed-bottom mb-1">
    <BotonHome />
    </div>
    </div>

</template>

<script>
import BotonHome from "@/components/BotonHome.vue"
//creamos el script para realizar el orden de un array al listado
export default {
  components: {
    BotonHome
  },
  methods:{
    functionLog: function(val0,val1,val2,val3,val4,val5) {
      /* PARA PROPOSITOS DE PRUEBA 2 */
      return alert(val0 + " | " + val1 + " | " + val2 + " | " + val3 + " | " + val4 + " | " + val5)
    }
  },
  //esto es lo que agregamos
  data(){
    return{
      //retorna el arreglo con los partidos y sus elementos contenidos
      listadoPartidos: [
        {
          id:1,
          descripcion: "este es la descripcion del partido",
          participantes: "U1 Vs. U4",
          horario: "01-09-2021, 09:30 A.M.",
          Lugar:"AJ Katzenmaier"
        },
        {
          id:2,
          descripcion: "este es la descripcion del partido",
          participantes: "U3 Vs. U2",
          horario: "01-09-2021, 01:00 P.M.",
          Lugar:"Greenbay"
        },
        {
          id:3,
          descripcion: "este es la descripcion del partido",
          participantes: "U5 Vs. U6",
          horario: "08-09-2021, 9:30 A.M.",
          Lugar:"Howard A Yeager"    
        },
        {
          id:4,
          descripcion: "este es la descripcion del partido",
          participantes: "U6 Vs. U1",
          horario: "08-09-2021, 01:00P.M.",
          Lugar:"Marjorie P Hart"    
        },
        {
          id:5,
          descripcion: "este es la descripcion del partido",
          participantes: "U2 Vs. U4",
          horario: "15-09-2021, 09:30 A.M.",
          Lugar:"North"    
        },
        {
          id:6,
          descripcion: "este es la descripcion del partido",
          participantes: "U3 Vs. U5",
          horario: "15-09-2021, 01:00 P.M.",
          Lugar:"AJ Katzenmaier"    
        },
        {
          id:7,
          descripcion: "este es la descripcion del partido",
          participantes: "U1 Vs. U3",
          horario: "22-09-2021, 09:30 A.M.",
          Lugar:"South"    
        },
        {
          id:8,
          descripcion: "este es la descripcion del partido",
          participantes: "U2 Vs. U6",
          horario: "22-09-2021, 01:00 P.M.",
          Lugar:"Howard A Yeager"    
        },
        {
          id:9,
          descripcion: "este es la descripcion del partido",
          participantes: "U2 Vs. U6",
          horario: "29-09-2021, 09:30 A.M.",
          Lugar:"Greenbay"    
        },
        {
          id:10,
          descripcion: "este es la descripcion del partido",
          participantes: "U2 Vs. U5",
          horario: "06-10-2021, 09:30 A.M.",
          Lugar:"Marjorie P Hart"    
        },
        {
          id:11,
          descripcion: "este es la descripcion del partido",
          participantes: "U1 Vs. U6",
          horario: "06-10-2021, 01:00 P.M.",
          Lugar:"South"    
        },
        {
          id:12,
          descripcion: "este es la descripcion del partido",
          participantes: "U3 Vs. U4",
          horario: "08-10-2021, 09:30 A.M.",
          Lugar:"Howard A Yeager"    
        },
        {
          id:13,
          descripcion: "este es la descripcion del partido",
          participantes: "U5 Vs. U1",
          horario: "08-10-2021, 01:00 P.M.",
          Lugar:"Greenbay"    
        },
        {
          id:14,
          descripcion: "este es la descripcion del partido",
          participantes: "U6 Vs. U3",
          horario: "20-10-2021, 09:30 A.M.",
          Lugar:"North"    
        },
        {
          id:15,
          descripcion: "este es la descripcion del partido",
          participantes: "U2 Vs. U4",
          horario: "20-10-2021, 01:00 P.M.",
          Lugar:"Marjorie P Hart"    
        },
        {
          id:16,
          descripcion: "este es la descripcion del partido",
          participantes: "U3 Vs. U1",
          horario: "27-10-2021, 09:30 A.M.",
          Lugar:"AJ Katzenmaier"    
        },
        {
          id:17,
          descripcion: "este es la descripcion del partido",
          participantes: "U5 Vs. U6",
          horario: "27-10-2021, 01:00 P.M.",
          Lugar:"Howard A Yeager"    
        }
      ],
      /* PARA PROPOSITOS DE PRUEBA 1 */
      isHidden:true
    }
  },
  //utilizamos el ciclo de vida created para procesar la informacion
}
</script>

<style scoped lang="sass">
#ListTitle
  margin-bottom: 0
  background-color:#009688
  color: white
h1,h6
  margin: 0

.btn-circle 
  width: 30px
  height: 30px
  line-height: 30px
  text-align: center
  padding: 0
  border-radius: 50%
#casiFooter
  background-color:#009688
  

</style>