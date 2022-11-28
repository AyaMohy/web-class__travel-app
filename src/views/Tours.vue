<script>
    import { tours } from '../../tours';
    import tourCardVue from '../components/tourCard.vue';
    export default{
        data(){
            return{
                tours
            }
        },
        components:{
            tourCardVue
        }
    }
</script>

<template>
  <div>
    <tourCardVue :tourItems="tours"/>
  </div> 
</template>

<style scoped>
.card{
    width: 400px;
    height: 400px;
    background-color: blueviolet;



}

.card img{
    width: 350px;
}
</style>