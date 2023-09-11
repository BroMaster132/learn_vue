<script setup>
import NavBar from '@/layout/NavBar.vue';
import Footer from '@/components/Footer.vue';
import Card from 'primevue/card';
import CarItem from '@/components/CarItem.vue'
import CarList from '@/components/CarList.vue'
import CarTable from '@/components/CarTable.vue'
import Sidebar from '@/components/Sidebar.vue';
import CarAddModule from './components/CarAddModule.vue';

</script>

<template>
    <NavBar />
    <CarAddModule />
    <Sidebar />
    <CarList :cars="cars" />
    <CarTable :cars="cars" />
    <Footer />

</template>

<style scoped>

</style>
