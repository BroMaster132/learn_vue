<script setup>
import { computed, defineProps, ref, } from 'vue';
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dropdown from 'primevue/dropdown';
    



const critic = ref([
        { name: '1', code: '1' },
        { name: '2', code: '2' },
        { name: '3', code: '3' },
        { name: '4', code: '4' },
        { name: '5', code: '5' },
        { name: '6', code: '6' },
        { name: '7', code: '7' },
        { name: '8', code: '8' },
        { name: '9', code: '9' },
        { name: '10', code: '10' },
]);

const props = defineProps ({
    cars: {
        type: Array,
        required: true,
    }
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
    header: 'Оценка критика'
  }

]

const numberMarks = [
  {
  mark: 0,
  header: "Это Део Нексия"
 },
 {
  mark: 1,
  header: "Очень плохо"
 },
  {
    mark: 2,
    header: "Плохо"
  },
  {
    mark: 3,
    header: "Нормально"
  },
  {
    mark: 4,
    header: "Хорошо"
  },
  {
    mark: 5,
    header: "Отлично"
  },
  {
    mark: 6,
    header: "Это Бентли"
  },
]

const cars = props.cars


function changeDropdown(value) {
    console.log(value.value);
}
</script>

<template>

  <DataTable :value="cars">
    <Column v-for="column in carColumns" :key="column.field" :field="column.field" :header="column.header">
        <template #body="{data}">
            <template v-if="column.field === 'criticScore'">
                <Dropdown @change="changeDropdown" v-model="data.criticalNumber" :options="numberMarks" optionsValue="mark" optionLabel="header" class="dropDown" />
            </template>
            <template v-else>{{data[column.field]}}</template>
        </template>
    </Column>

  </DataTable>
  
</template>

<style scoped>
.dropDown {
    width: 180px;
}
</style>