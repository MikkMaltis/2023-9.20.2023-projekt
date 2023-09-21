<script setup>
import InfoItem from '../components/InfoItem.vue';
import SearchItem from '../components/SearchItem.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="container">
        <div class="command-container">
            <h2>Sisesta pakendi triipkood</h2>
        </div>
        <div class="input-container">
            <input type="number" class="input-field">
        </div>
        <div>
            <RouterLink to="/product">
                <button>OTSI</button>
            </RouterLink>
        </div>
    </div>
    <div class="footer">
      <div class="position">
        <RouterLink to="/scanner" class="manual">
          <SearchItem />
        </RouterLink>
        <RouterLink to="/info">
          <InfoItem />
        </RouterLink>
      </div>
    </div>
    
</template>

<style scoped>

.container  {
  text-align: center;
  height: 100%;
}
.command-container {
    height: 400px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    padding: 150px 0;
}

.input-container {
    margin-bottom: 20px;
}

.input-field {
    height: 50px;
    width: 70%;
    text-align: center;
    font-size: large;
}

button {
    width: 100px;
    height: 50px;
    border-radius: 10px;
    border: 0px;
    background-color: #00810D4D;
    color: #00670A;
    font-size: small;
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