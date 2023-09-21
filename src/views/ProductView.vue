<script setup>
import InfoItem from "../components/InfoItem.vue";
import { RouterLink } from 'vue-router';
</script>

<template>
    <img src="../assets/pics/makaronid.png" class="product" alt="makaronid">
 
    <div class="container">
        <div class="desc-container">
            <p>See on Tartu Milli makaronide pakend</p>
        </div>
        <div class="package-container">
            Viska see pakendikonteinerisse
        </div>
        <div class="button-container">
            <RouterLink to="/scanner">
                <button>OTSI VEEL</button>
            </RouterLink>
        </div>

        <div class="footer">
            <RouterLink to="/info">
                <InfoItem />
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>

.container {
    text-align: center;
    height: 100%;
    font-size: x-large;
}

.button-container {
    margin: 30px;
}

button {
    width: 150px;
    height: 50px;
    border-radius: 10px;
    border: 0px;
    background-color: #00810D4D;
    color: #00670A;
    font-size: medium;
}

.desc-container {
    margin-left: auto;
    margin-right: auto;
    width: 60%;
}

.package-container {
    margin-top: 30px;
}

.footer {
  position: fixed;
  bottom: 30px;
  width: 100%;
}
.product {
    display: flex;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    padding: 30px;
}
</style>