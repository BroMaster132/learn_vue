<template>
    <DataTable :value="cars">
      <Column v-for="column in carColumns" :key="column.field" :field="column.field" :header="column.header">
        <template #body="{ data }">
          <template v-if="column.field === 'criticScore'">
            <Dropdown :modelValue="data.criticalNumber" :options="numberMarks" optionLabel="mark" optionValue="mark" class="dropdown" @change="setCriticScore(data.criticalNumber, $event)" />
          </template>
          <template v-else>{{ data[column.field] }} </template>
        </template>
      </Column>
    </DataTable>
  </template>
  
  <script setup>
  import { defineProps, ref, computed, watch } from 'vue'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import Dropdown from 'primevue/dropdown'
  
  const props = defineProps({
    cars: {
      type: Array,
      required: true,
    },
  })
  
  const cars = props.cars
  
  function setCriticScore(criticalNumber, event) {
    criticalNumber = event.value
    console.log(criticalNumber)
  }
  
  watch(cars, () => {
    console.log(cars)
  })
  
  const carColumns = [
    {
      field: 'brand',
      header: 'Марка',
    },
    {
      field: 'price',
      header: 'Цена',
    },
    {
      field: 'year',
      header: 'Год выпуска',
    },
    {
      field: 'volume',
      header: 'Объем двигателя',
    },
    {
      field: 'color',
      header: 'Цвет',
    },
    {
      field: 'criticScore',
      header: 'Оценка критика',
    },
  ]
  
  const numberMarks = [
    {
      mark: 0,
      header: 'Это Део Нексия',
    },
    {
      mark: 1,
      header: 'Очень плохо',
    },
    {
      mark: 2,
      header: 'Плохо',
    },
    {
      mark: 3,
      header: 'Нормально',
    },
    {
      mark: 4,
      header: 'Хорошо',
    },
    {
      mark: 5,
      header: 'Отлично',
    },
    {
      mark: 6,
      header: 'Это Бентли',
    },
  ]
  </script>
  
  <style scoped>
  .dropdown {
    width: 100%;
  }
  </style>
  const cars = [
    {
      brand: 'BMW',
      price: '2000000',
      year: 1994,
      volume: 2.4,
      color: '#FF0000',
      criticalNumber: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFN0lN7T1WyAETO84V2umxeofkkkl6684bmI01rC_I&s',
    },
    {
      brand: 'Audi',
      price: '1000000',
      year: 2000,
      volume: 2.0,
      color: '#00FF00',
      criticalNumber: 2,
      image: 'https://www.cars.com/i/large/in/v2/stock_photos/66b70294-8e4a-4c5f-bca4-e1c7fcfc2aa2/d9e86d5c-25d2-48af-b643-fb99725067f2.png',
    },
  ]