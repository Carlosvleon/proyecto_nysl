<template>
    <div class="DetallesPArtido">
        <table class="table">
            <thead >
                <tr>
                    <th colspan="2" scope="colgroup" class="display-6 pb-2" id="ListTitle">{{$route.params.id}}º {{$route.params.title}} </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <h6>
                            {{$route.params.info}}
                        </h6>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>
                            <strong>
                                {{$route.params.date}} HRS.
                            </strong>
                        </h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>
                            <strong>
                                {{$route.params.adress}}
                            </strong>
                        </h3>
                    </td>
                </tr>
            </tbody>
        </table>
        <h3 class="pt-4">
            <strong>
                Google Maps
            </strong>
        </h3>
        <div class="container" id="sqareMap">
            map
        </div>
        <div id="casiFooter" class="fixed-bottom">
          <br><br>  
        </div>
        <div class="d-flex justify-content-between fixed-bottom mb-1" >
<div></div>
         <BotonHome/><BotonListado/>
         <div></div>
        </div>
    </div>
</template>

<script> 
import BotonHome from "@/components/BotonHome.vue"
import BotonListado from "@/components/BotonListado.vue"
export default {
    name:"DetallesPartido",
    components:{
        BotonHome,
        BotonListado
    }
  }
</script>

<style scoped lang="sass">
DetallesPArtido

#ListTitle
  background-color:#009688
  color: white


#sqareMap
    width: 200px
    height: 200px
    background-color:#009688

#casiFooter
  background-color:#009688

</style>