<script setup>
import { computed, defineProps } from 'vue';
import Card from 'primevue/card';
import Chip from 'primevue/chip';
import 'primeicons/primeicons.css';
import {useAuto} from '@/composable/useAuto'
import ColorPicker from 'primevue/colorpicker';
const {getAutoList} = useAuto()
console.log(props.car);
const props = defineProps ({
    car: {
        type: Object,
        required: true,
    }
})

const carRemake = computed(() =>{
    return {
      ...props.car,
      price: props.car.price
    }
  })

function changeColor (color){
    const crappyColors = ['#FF0000','#00FF00','#0000FF']
    if(crappyColors.includes(color)){
      return true
    }
    return false
}


</script>

<template>

  <Card style="width: 25em">
    <template #header>
          <img style="width: 350px;" :src="carRemake.image" alt="car" class="car-image">
    </template>
    <template #title>{{carRemake.brand }}</template>
    <template #content>
      <p>Цена: {{carRemake.price }}</p>
      <p>Год выпуска: {{carRemake.year + ' г'}}</p>
      <p>Объем двигателя: {{carRemake.volume }}</p>
      Цвет:
      <ColorPicker disabled v-model="carRemake.color" />
      <p>Город: {{carRemake.city }}</p>
      <p>Коробка передачи: {{carRemake.gear}}</p>
      <p>Кузов: {{carRemake.carcase }}</p>
    </template>
    <template #footer>
      <div class="chipes">
        <Chip v-if="Number(carRemake.price.slice(0,-1)) > 1000000" label="Дорогой" icon="pi pi-dollar" />
        <Chip v-else-if="carRemake.year <= 2000" label="Старый" icon="pi pi-facebook" />
        <Chip v-if="changeColor(carRemake.color)" label="Конченный цвет" icon="pi pi-exclamation-triangle" />
        <Chip v-else label="Скучный" icon="pi pi-briefcase" />
        <Chip v-show="carRemake.volume > 2" label="Большой объём" icon="pi pi-arrow-up" removable />
    </div>
    </template>
</Card>
</template>

<style scoped>
    .car {
      padding-top: 30px;
      background-color: white;
      width: 200px;
      height: 480px;
      text-align: center;
      border-radius: 20px;
      font-family: 'Franklin Gothic Medium';
    }

    .chipes {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }
    .chipes span {
      margin: 5px;
      padding: 5px;
      border: 1px solid black;
      border-radius: 5px;
    }
    .card {
      border: solid 1px;
      width: 350px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-content: space-around;
    }
    :deep(.p-disabled){
      opacity: 1 !important;
    }
</style>