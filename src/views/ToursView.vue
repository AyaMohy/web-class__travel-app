<script>
import detination from '../../destination.json'
export default {
    props: ['id'],
    data() {
        return {
            countries: detination.destinations
        }
    },
    computed: {
        targetCountry() {
            return this.countries.find((item) => item.id == this.id)
        }
    },
    methods:{
        back(){
            this.$router.back()
        }
    }
}
</script>
<template>
    <div>
        <div class="tour-wrapper">
            <div class="card-img"><img :src="`../${targetCountry.image}`" :alt="targetCountry.name" width="500"></div>

       
        <div class="card-info">
            <h3>{{targetCountry.name}}</h3>
            <p>{{targetCountry.description}}</p>
        </div>
    </div>

    
<button @click="back" class="btn-back">back</button>

    </div>
</template>
<style scoped>
.tour-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
}

.card-info,
.card-img {
    width: 50%;
}

.btn-back{
    margin-top: 1000px;
}
</style>