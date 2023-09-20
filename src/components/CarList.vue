<script setup>
import { defineProps, onMounted } from 'vue';
import CarItem from '@/components/CarItem.vue'
import {useAuto} from '@/composable/useAuto'
import {useRouter} from 'vue-router'

const {autoListRemake, getAutoList, auto} = useAuto()

const router = useRouter()

onMounted(async () =>{
    await getAutoList()
})
defineProps ({
    cars: {
        type: Array,
        required: true,
    }
})


function goToCarUrl(id) {
    console.log(id);
    router.push({name: 'car', params: {id}})
}
</script>

<template>
    <section class="cars" v-for="auto in autoListRemake" :key="auto">
        <CarItem @click="goToCarUrl(auto.id)" :auto="auto" />  
    </section>
</template>

<style scoped>

</style>s