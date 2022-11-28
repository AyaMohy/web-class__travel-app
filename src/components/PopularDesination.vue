<script>
import destination from '../../destination.json';
export default {
    data() {
        return {
            countries: destination.destinations
        }
    }
}
</script>
<template>
    <div class="wrapper">
        <div class="destination-wrapper">
            <div v-for="country in countries" :key="country.id" class="card">
                <router-link :to="`/tour/${country.id}`">
                    <img :src="`../${country.image}`" width="200" :alt="country.name" />
                    <h2>{{country.name}}</h2>
                    <span>{{country.flag}}</span>
                </router-link>

            </div>
        </div>
    </div>
</template>
<style scoped>
.wrapper {
    background-color: red;
}

.destination-wrapper {
    width: 90%;
    margin: auto;
    display: flex;

}

.card {
    width: 33.33%;
    position: relative;
    height: 200px;
    color: white;
}

.card img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;

}

.card h2 {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
}

.card:hover {
    opacity: 0.7;
}

.card span {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
}
.card a{
    color: white;
    text-decoration: none;
}
</style>