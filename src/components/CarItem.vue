<script setup>
import { computed, defineProps } from 'vue';
import Card from 'primevue/card';
import Chip from 'primevue/chip';
import 'primeicons/primeicons.css';
const props = defineProps ({
    car: {
        type: Object,
        required: true,
    }
})

const carRemake = computed(() =>{
    return {
      ...props.car,
      price: props.car.price + " ₽",
      efficiency : props.car.price / props.car.year
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
  <Card>
      <template #header>
          <img :src="carRemake.image" alt="car" class="car-image">
      </template>
      <template #title>{{carRemake.brand }}</template>
      <template #content>
        <p>Цена: {{carRemake.price }}</p>
        <p>Год выпуска: {{carRemake.year }}</p>
        <p>Объем двигателя: {{carRemake.volume }}</p>
        <p :style="`color: ${carRemake.color}`">Цвет: {{carRemake.color }}</p>
        <p>Efficiency: {{Math.floor(carRemake.efficiency) }} </p>
      </template>
      <template #footer>
        <div class="chipes">
            <Chip v-if="Number(carRemake.price.slice(0,-1)) > 1000000" label="Дорогой" icon="pi pi-dollar" />
            <Chip v-else-if="carRemake.year <= 2000" label="Старый" icon="pi pi-facebook" />
            <Chip v-if="changeColor(carRemake.color)" label="Конченный цвет" icon="pi pi-exclamation-triangle" />
            <Chip v-else label="Скучый" icon="pi pi-briefcase" />
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
      align-items: center;
      flex-direction: column;
    }
    .chipes span {
      margin: 5px;
      padding: 5px;
      border: 1px solid black;
      border-radius: 5px;
    }
</style>