<script setup>
import InfoItem from '../components/InfoItem.vue';
import SearchItem from '../components/SearchItem.vue';
</script>

<template>
    <div class="container">
        <div class="commandContainer">
            <h2>Sisesta pakendi triipkood</h2>
        </div>
        <div class="inputContainer">
            <input type="number" class="input_field">
        </div>
        <div class="buttonContainer">
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
.commandContainer {
    height: 400px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    padding: 150px 0;
}

.inputContainer {
    margin-bottom: 20px;
}

.input_field {
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