<script setup>
import CarItem from '@/components/CarItem.vue'

const carsArray = [
    {
        brand : 'BMW',
        price : '2000000',
        year : 1994,
        volume: 2.4,
        color : '#FF0000',
        image: 'https://wipertech.sfo2.cdn.digitaloceanspaces.com/vehicles/bmw/_small/bmw-3-series-compact-e36-1994-2000.png'
    },
    
]

    console.log(carsArray);
</script>

<template>
    <section class="cars" v-for="car in carsArray" :key="car">
        <CarItem :car="car" />  
    </section>
</template>

<style scoped>

</style>s