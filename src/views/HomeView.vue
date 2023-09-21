<script setup>
import InfoItem from '../components/InfoItem.vue';
import SearchItem from '../components/SearchItem.vue';
</script>

<template>
  <main>
    <img src="../assets/pics/logo.png" class="logo" alt="logo">
    <div>
      ascinpaefijpacmjoadovadv
    </div>
    <div class="footer">
      <div class="position">
        <SearchItem />
        <InfoItem />
    </div>
      </div>
    
  </main>
</template>

<style scoped>
.logo {
  max-height: 100%;
  max-width: 100%;
}



.footer {
  position: absolute;
  bottom: 50px;
  width: 100%;
}


.position {
  display: flex;
  justify-content: space-evenly;
}

</style>