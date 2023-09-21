<script setup>
import InfoItem from '../components/InfoItem.vue';
import ManualItem from '../components/ManualItem.vue';
</script>

<template>
    <div class="container">
        <img src="../assets/pics/scan.png" class="scanner" alt="scan">
        
        <div class="text-container">
            <p>Palun skaneeri pakend ja sa saad teada, kuhu selle viskama peaksid</p>
        </div>
        <div class="button-container">
            <RouterLink to="/product">
                <button>SKANNEERI TRIIPKOOD</button>
            </RouterLink>
        </div>
    </div>

    <div class="footer">
      <div class="position">
        <RouterLink to="/manual" class="manual">
          <ManualItem />
        </RouterLink>
        <RouterLink to="/info">
          <InfoItem />
        </RouterLink>
      </div>
    </div>
</template>

<style scoped>

.manual {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container { 
    text-align: center;
}

.text-container {
    text-align: center;
    font-size: large;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
}

.button-container {
    margin-top: 20px;
}

button {
    width: 200px;
    height: 50px;
    border-radius: 10px;
    border: 0px;
    background-color: #00810D4D;
    color: #00670A;
}
.scanner {
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