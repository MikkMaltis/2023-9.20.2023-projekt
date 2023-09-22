<script setup>
import PlasticView from './PlasticView.vue';
</script>

<template>
    <div>
        <img src="../assets/pics/logoNEW.png" class="logo" alt="logo">
    </div>
    <table class="sorting-table">
        <ul>
            <RouterLink to="/plastic">
                <img src="../assets/pics/carton.png" class="carton" alt="carton">
                <p class="cartong-text">Plast- ja metallpakend, joogikartong</p>
            </RouterLink>
        </ul>
        <ul></ul>
        <ul></ul>
        <ul></ul>
        <ul></ul>
        <ul></ul>
    </table>
</template>

<style scoped>

.sorting-table {
    margin-left: auto;
    margin-right: auto;
    width: 90%;
}

.logo {
    width: 200px;
    height: 200px;
}
.carton {
    height: 10px;
    width: 10px;
}

.cartong-text {
    font-size: x-large;
}
</style>