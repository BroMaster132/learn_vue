<template>
    <div v-if="!auto">
        <skeleton />
    </div>
    <div v-if="auto">
        <Card style="width: 25em" >
            <template #header>
                <img style="width: 350px;" :src="auto.image" alt="car" class="car-image">
            </template>
            <template #title>{{autoRemake.brand}}</template>
            <template #content>
            <p>Цена: {{autoRemake.price }}</p>
            <p>Год выпуска: {{autoRemake.year}}</p>
            <p>Объем двигателя: {{autoRemake.volume}}</p>
            Цвет:
            <ColorPicker disabled v-model="autoRemake.color" />
            <p>Город: {{autoRemake.city }}</p>
            <p>Коробка передачи: {{autoRemake.gear}}</p>
            <p>Кузов: {{autoRemake.carcase }}</p>
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
import ColorPicker from 'primevue/colorpicker';
const route = useRoute()


const {auto,getAuto,} = useAuto()

onMounted(async () =>{
    await getAuto(route.params.id)
})

const autoRemake = computed(() =>{
    console.log(auto);
    return {
        ...auto.value,
        price : `${auto.value.price} KZT`,
        volume : `${auto.value.volume} л`,
        year : formatDate(auto.value.year) + ' г',
    }
})

console.log(autoRemake);

</script>

<style scoped>
:deep(.p-disabled){
    opacity: 1 !important; 
}
</style>