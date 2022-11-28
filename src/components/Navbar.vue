<template>
<div>
    <ul class="navbar">
        <li ><router-link to="/">Travel</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link :to="{name:'Register'}">Register</router-link></li>
    </ul>
</div>
</template>

<style scoped>
    .navbar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
    }
    .navbar li{
        width: 100px;
        font-size: 20px;
        cursor: pointer;
    }
    .navbar >li:nth-child(1){
        font-size: 35px;
        font-weight: 700;
        margin-right: auto;
    }

    .navbar a{
        text-decoration: none;
        color: black;
    }

    .router-link-active{
        color: red !important;
    }
    
</style>