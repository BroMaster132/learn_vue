<script setup>
// import ButtonDelete from '@/components/ButtonDelete.vue' Example
import CarList from '@/components/CarList.vue'
import NavigationBar from '@/components/NavigationBar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <NavigationBar />
    <ButtonDelete />

    <div class="content">
      <CarList />
      

    </div>
    <Footer />
</template>

<style scoped>

</style>
