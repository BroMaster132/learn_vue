<template>
  <DataTable class="table" :value="autoListRemake" :loading="loading.autoList">
    <Column v-for="column in carColumns" :key="column.field" :field="column.field" :header="column.header">
      {{ column.field }}
      <template #body="slotProps">
        <span v-if="column.field === 'saled'">
          <Checkbox v-model="slotProps.data.saled" binary checked readonly />
        </span>
        <span v-else-if="column.field === 'color'">
          <ColorPicker style="opacity: 1 ;" v-model="slotProps.data.color" disabled />
        </span>
        <span v-else>{{ slotProps.data[column.field] }}</span>
      </template>
    </Column>
  </DataTable>
</template>

<script setup>
import Checkbox from 'primevue/checkbox';
import {onMounted, ref} from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { useAuto } from '@/composable/useAuto';
import ColorPicker from 'primevue/colorpicker';

const {autoListRemake, getAutoList, loading} = useAuto()
console.log(autoListRemake);
onMounted(() =>{
  getAutoList()
})

const carColumns = [
  { field: 'brand', header: 'Бренд' },
  { field: 'price', header: 'Цена' },
  { field: 'year', header: 'Год' },
  { field: 'age', header: 'Возраст авто' },
  { field: 'volume', header: 'Объем' },
  { field: 'color', header: 'Цвет' },
  { field: 'saled', header: 'Продано' },
  { field: 'city', header: 'Город' },
  { field: 'carcase', header: 'Кузов' },
  { field: 'gear', header: 'Коробка' },
  { field: 'travel', header: 'Пробег' },
]
</script>

<style scoped>
.table {
  height: 800px;
}
.dropdown {
  width: 100%;
}
:deep(.p-disabled){
  opacity: 1 !important; 
}
</style>
  