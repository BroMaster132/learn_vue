<script setup>
    const props = defineProps ({
        car: {
            type: Object,
            required: true,
        }
    })
</script>

<template>
    <div class="car">
      <img width="175" :src="props.car.image" alt="car" />
      <h2>{{props.car.brand }}</h2>
      <p>Цена: {{props.car.price }}</p>
      <p>Год выпуска: {{props.car.year }}</p>
      <p>Объем двигателя: {{props.car.volume }}</p>
      <p>Цвет: {{props.car.color }}</p>
    </div>
  </template>

<style scoped>
    .car {
      padding-top: 30px;
      background-color: white;
      width: 200px;
      height: 320px;
      text-align: center;
      border-radius: 20px;
      font-family: 'Franklin Gothic Medium';
    }
</style>