<script>
    export default{
        methods:{
            openTourView(event){
                // console.log(event.target.value)
                this.$router.push({name:'Tour', params:{id:event.target.value}})

            }
        }
        
    }
</script>
<template>
<div class="wrapper">
   <div class="details">
    <div class="detaile-title">
        <h2>Find your adventure</h2>
    <h3>Book tours with local hosts and share experiences with a community of passionate travelers.</h3>
    </div>
   
   </div>
   <div class="search">
    <select name="" id="" @change="openTourView">
        <option selected disabled>where are you going ?</option>
        <option value="1">Split</option>
        <option value="2">Cape Town</option>
        <option value="3">Denver</option>
        <option value="4">Portland</option>
        <option value="5">San Diego</option>
    </select>
   </div>
</div>
</template>

<style scoped>
.wrapper{
    height: 600px;
    background-image: url("../assets/hike-in-crimea.jpg");
    width: 100%;
    display: flex;
    flex-direction: column;

}
.details{
    background-color: rgba(255, 255, 255, 0.5);
    flex-grow: 2;
}
.search{
    background-color: rgba(255, 255, 255, 0.3);

    height: 200px;
}
.detaile-title{
    background-color: rgba(255, 255, 255, 0.6);
    width: 60%;
    padding: 10px;
    text-align: center;
    margin: 150px auto;
    color: #666;
}
.detaile-title h2{
    font-size: 72px;
    /* line-height: 20px; */
}
.detaile-title h3{
    font-size: 22px;

}

.search{
    width: 500px;
    margin: auto;
    background-color: transparent;
    /* margin-top: 40px; */
}
.search select{
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
}
</style>