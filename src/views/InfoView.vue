<script setup>
import PlasticComponent from '../components/PlasticComponent.vue';
import BioComponent from '../components/BioComponent.vue';
import MixComponent from '../components/MixComponent.vue';
import OldpaperComponent from '../components/OldpaperComponent.vue';
import GlassComponent from '../components/GlassComponent.vue';
import CardboardComponent from '../components/CardboardComponent.vue';
import InfoItem from '../components/InfoItem.vue';
import SearchItem from '../components/SearchItem.vue';
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
    <div class="footer">
      <div class="position">
        <RouterLink to="/scanner">
          <SearchItem />
        </RouterLink>
      </div>
    </div>

</template>

<style scoped>

.sorting-table {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 6em;
}

.logo {
    width: 200px;
    height: 200px;
}

.logo-card {
    display: flex;
    justify-content: center;
}

.footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  background-color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.position {
  display: flex;
  justify-content: space-evenly;
}

</style>