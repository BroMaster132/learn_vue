<script setup>
import { computed, defineProps } from 'vue';

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
    <div class="car">
      <img width="175" :src="carRemake.image" alt="car" />
      <h2>{{carRemake.brand }}</h2>
      <p>Цена: {{carRemake.price }}</p>
      <p>Год выпуска: {{carRemake.year }}</p>
      <p>Объем двигателя: {{carRemake.volume }}</p>
      <p :style="`color: ${carRemake.color}`">Цвет: {{carRemake.color }}</p>
      <div class="chipes">
          <span v-if="Number(carRemake.price.slice(0,-1)) > 1000000">Дорогой</span>
          <span v-else-if="carRemake.year <= 2000">Старый</span>
          <span v-else>Скучный</span>
          <span v-if="changeColor(carRemake.color)">Конченный цвет</span>
          <span v-show="carRemake.volume > 2">Большой объём</span>
      </div>
      <p>Efficiency: {{Math.floor(carRemake.efficiency) }} </p>
    </div>
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