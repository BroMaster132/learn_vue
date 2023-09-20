<template>
    <div v-if="!auto">
        <skeleton />
    </div>
    <div v-if="auto">
        <Card style="width: 25em" >
            <template #header>
                  <img style="width: 350px;" :src="auto._value.image" alt="car" class="car-image">
            </template>
            <template #title>{{auto._value.brand }}</template>
            <template #content>
              <p>Цена: {{auto._value.price }}</p>
              <p>Год выпуска: {{auto._value.year + ' г'}}</p>
              <p>Объем двигателя: {{auto._value.volume }}</p>
              Цвет:
              <ColorPicker disabled v-model="auto._value.color" />
              <p>Город: {{auto._value.city }}</p>
              <p>Коробка передачи: {{auto._value.gear}}</p>
              <p>Кузов: {{auto._value.carcase }}</p>
            </template>
          </Card>
    </div>
    {{ autoRemake }}
</template>

<script setup>
import {useAuto} from '@/composable/useAuto'
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Card from 'primevue/card';
import Skeleton from 'primevue/skeleton'
const route = useRoute()
const {auto,getAuto} = useAuto()
console.log(auto);
getAuto(route.params.id)
setTimeout(() => {
    console.log(auto._value.brand); 
}, 2000);
onMounted(async () =>{
    await getAuto(route.params.id)
})

</script>