<script setup>
import { defineProps } from 'vue';
import CarItem from '@/components/CarItem.vue'
import {useAuto} from '@/composable/useAuto'

const {autoListRemake, getAutoList} = useAuto()

console.log(getAutoList());
defineProps ({
    cars: {
        type: Array,
        required: true,
    }
})
</script>

<template>
    <section class="cars" v-for="car in autoListRemake" :key="car">
        <CarItem :car="car" />  
    </section>
</template>

<style scoped>

</style>s