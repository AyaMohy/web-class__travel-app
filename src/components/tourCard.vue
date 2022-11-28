<script>
    export default{
        props:['tourItems']
    }
</script>

<template>
    <div>
        <div class="tour-wrapper">
      <div class="card-container">
        <div v-for="(tour, $index) in tourItems" :key="$index" class="card">
            <router-link :to="{name:'Destination', query:{country:tour.title}}"> 
          <div class="img-cirle"> <img src="./../assets/imgRound.jpg" class="img-round" alt="imgRound"></div>
          <div class="card-img"> 
            <img :src="tour.img" :alt="tour.title"  class="image">  
          </div>
          <div class="card-body">
            <h3>{{tour.title}}</h3>
            <p>{{tour.subTitle}}</p>

          </div>
        </router-link>
        </div>
      </div>
    </div> 
    </div>
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
  