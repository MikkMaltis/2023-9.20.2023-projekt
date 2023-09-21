<script setup>
import InfoItem from '../components/InfoItem.vue';
import SearchItem from '../components/SearchItem.vue';
</script>

<template>
  <main>
    <img src="../assets/pics/logoNEW.png" class="logo" alt="logo">
      
    <div class="footer">
      <div class="position">
        <RouterLink to="/scanner">
          <SearchItem />
        </RouterLink>
        <RouterLink to="/info">
          <InfoItem />
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>

.logo {
  display: flex;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.footer {
  position: fixed;
  bottom: 30px;
  width: 100%;
}

.position {
  display: flex;
  justify-content: space-evenly;
}

</style>