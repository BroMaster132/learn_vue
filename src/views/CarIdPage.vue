<template>
    <div v-if="!autoRemake">
        <skeleton />
    </div>
    <div v-if="autoRemake">
        <Card style="width: 25em" >
            <template #header>
                <img style="width: 350px;" :src="auto.image" alt="car" class="car-image">
            </template>
            <template #title>{{auto.brand}}</template>
            <template #content>
            <p>Цена: {{auto.price }}</p>
            <p>Год выпуска: {{formatDate(auto.year)}}</p>
            <p>Объем двигателя: {{auto.volume}}</p>
            Цвет:
            <ColorPicker disabled v-model="auto.color" />
            <p>Город: {{auto.city }}</p>
            <p>Коробка передачи: {{auto.gear}}</p>
            <p>Кузов: {{auto.carcase }}</p>
            </template>
        </Card>
    </div>
</template>

<script setup>
import {useAuto} from '@/composable/useAuto'
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { formatDate } from "@/services/methods"
import Card from 'primevue/card';
import Skeleton from 'primevue/skeleton'
const route = useRoute()


const {auto,getAuto,} = useAuto()

onMounted(async () =>{
    await getAuto(route.params.id)
})


</script>

<style scoped>
:deep(.p-disabled){
    opacity: 1 !important; 
}
</style>