<script setup>
import NavigationBar from '@/components/NavigationBar.vue';
import Footer from '@/components/Footer.vue';
import Card from 'primevue/card';
import CarItem from '@/components/CarItem.vue'
import CarList from '@/components/CarList.vue'
import CarTable from '@/components/CarTable.vue'

const cars = [
    {
        brand : 'BMW',
        price : '2000000',
        year : 1994,
        volume: 2.4,
        color : '#FF0000',
        criticalNumber: 6,
        image: 'https://wipertech.sfo2.cdn.digitaloceanspaces.com/vehicles/bmw/_small/bmw-3-series-compact-e36-1994-2000.png'
    },
    {
        brand : 'Audi',
        price : '100000',
        year : 2000,
        volume: 2,
        color : '#FF0000',
        criticalNumber: 0,
        image: 'https://www.rolf.ru/uploads/stock/audi/a6_new/colors/6b68d859b82ab738f40fb09b8a007384.png'
    },
    
]

    console.log(cars);
</script>

<template>
    <NavigationBar />
    <CarList :cars="cars" />
    <CarTable :cars="cars" />
    <Footer />
</template>

<style scoped>

</style>
