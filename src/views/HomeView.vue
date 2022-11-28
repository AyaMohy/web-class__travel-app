<script >
import HeroVue from '../components/Hero.vue';
import PopularDesinationVue from '../components/PopularDesination.vue';
import tourCardVue from '../components/tourCard.vue';
import { tours } from '../../tours';
export default{
  components:{
    HeroVue,
    PopularDesinationVue,
    tourCardVue
  },
  data(){
    return{
      tours:tours,
    }
  },
  computed:{
    last5Item(){
      return [...this.tours].splice(0,5)
    }
  }
}
</script>

<template>
  <main>
    <HeroVue/>
    <PopularDesinationVue/>
    <tourCardVue  :tourItems="last5Item"/>
    <div class="btn-explore"><router-link to="/tours">Explore All Tours</router-link></div>

  </main>
</template>

<style scoped>
  .card-container{
    display: flex;
    margin: auto;
    width: 90%;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .card{
    width: 32%;
    border: 1px solid gray;
    padding: 10px;
    margin-bottom: 40px;
    margin-top: 40px;
    position: relative;
  }
  .image{
    width: 100%;
  }
  .btn-explore{
    height: 40px;
    width: 150px;
    background-color: #e6003e;
    color: white;
    align-items: center;
    display: flex;
    justify-content: center;
    margin: auto;
  }
  .btn-explore a{
    display: inline-block;
    text-decoration: none;
    color: white;
  }
  .img-cirle{
    width: 100px;
    height: 100px;
    border: 1px solid green;
    border-radius: 100%;
    line-height: 100px;
    text-align: center;
    position: absolute;
    left: 50%;
    top: -20%;
    background-color: white;
    transform: translate(-50%, 20%);

  }
  .img-round{
    width: 90px;
    height: 90px;
    border-radius: 100%;
  }
  .tour-wrapper{
    margin-top: 50px;
    
  }
</style>
