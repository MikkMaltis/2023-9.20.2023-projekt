<script setup>
import PlasticComponent from '../components/PlasticComponent.vue';
import BioComponent from '../components/BioComponent.vue';
import MixComponent from '../components/MixComponent.vue';
import OldpaperComponent from '../components/OldpaperComponent.vue';
import GlassComponent from '../components/GlassComponent.vue';
import CardboardComponent from '../components/CardboardComponent.vue';
</script>

<template>
    <div class="logo-card">
        <img src="../assets/pics/logoNEW.png" class="logo" alt="logo">
    </div>
    <table class="sorting-table">
        <ul>
            <RouterLink to="/plastic">
                <PlasticComponent />
            </RouterLink>   
        </ul>
        <ul>
            <RouterLink to="/bio">
                <BioComponent />
            </RouterLink>  
        </ul>
        <ul>
            <RouterLink to="/mix">
                <MixComponent />
            </RouterLink>  
        </ul>
        <ul>
            <RouterLink to="/oldpaper">
                <OldpaperComponent />
            </RouterLink>  
        </ul>
        <ul>
            <RouterLink to="/glass">
                <GlassComponent />
            </RouterLink>  
        </ul>
        <ul>
            <RouterLink to="/cardboard">
                <CardboardComponent />
            </RouterLink>  
        </ul>
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

.logo-card {
    display: flex;
    justify-content: center;
}
</style>