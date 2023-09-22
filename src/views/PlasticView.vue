<script setup>
    import PlasticComponent from '../components/PlasticComponent.vue';
    import SearchItem from '../components/SearchItem.vue';
    import InfoItem from '../components/InfoItem.vue';
    import ManualItem from '../components/ManualItem.vue';
</script>

<template>


<div class="rinsing-container">
    <PlasticComponent />
    <p class="rinsing">
        Loputa vajadusel kergelt, et ei määriks teisi pakendeid ja kotti. Jäta korgid-kaaned peale.
    </p>
    <img class="fits" src="../assets/pics/sobibTEST.png" alt="sobibTEST">
    <ul class="plastic-info">
        <li>
            Kilekotid ja pakkekile
        </li>
        <li>
            Penoplast
        </li>
        <li>
            Kosmeetikatooted
        </li>
        <li>
            Leiva ja saia kotid
        </li>
        <li>
            Salatikarbid
        </li>
        <li>
            Konservikarbid
        </li>
        <li>
            Alumiiniumpurgid
        </li>
        <li>
            Metallkorgid ja -kaaned
        </li>
        <li>
            Piima-, mahla- ja veinitooted
        </li>
    </ul>
    <img class="fits" src="../assets/pics/eisobiuus.png" alt="eisobiuus">
    <ul class="plastic-info">
        <li>
            Küpsetuspaber 
        </li>
        <li>
            Toodet sisaldav pakend
        </li>
        <li>
            Plastist mänguasjad 
        </li>
        <li>
            Kodukeemia
        </li>
        <li>
            Mähkmed
        </li>
        <li>
            Pandimärgisega pudelid
        </li>
        <li>
            Kummist tooted
        </li>
        <li>
            Ehitusmaterjalid
        </li>
    </ul>

</div>
        <div class="footer">
    <div class="position">
        <RouterLink to="/scanner">
        <SearchItem />
        </RouterLink>
        <RouterLink to="/manual">
        <ManualItem />
        </RouterLink>
        <RouterLink to="/info">
        <InfoItem />
        </RouterLink>
    </div>
    </div>
</template>

<style scoped>

.rinsing-container {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    text-align: center;
}

.rinsing {
    font-size: 1.6rem;

}

.fits {
    height: 200px;
}

.plastic-info {
    font-size: 1.4rem;
    line-height: 35px;
    text-align: left;

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
