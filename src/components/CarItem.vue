<script setup>
import { computed, defineProps, onMounted } from 'vue';
import Card from 'primevue/card';
import Chip from 'primevue/chip';
import 'primeicons/primeicons.css';
import {useAuto} from '@/composable/useAuto'
import ColorPicker from 'primevue/colorpicker';

const {getAutoList} = useAuto()

onMounted(async () =>{
  await getAutoList()
})

console.log(props.auto);

const props = defineProps ({
    auto: {
        type: Object,
        required: true,
    }
})

const autoRemake = computed(() =>{
    return {
      ...props.auto,
      price: props.auto.price
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
  <div class="cards">
    <Card class="animation" style="width: 25em" >
      <template #header>
            <img style="width: 350px; max-height: 200px; " :src="autoRemake.image" alt="car" class="car-image">
      </template>
      <template #title>{{autoRemake.brand }}</template>
      <template #content>
        <p>Цена: {{autoRemake.price }}</p>
        <p>Год выпуска: {{autoRemake.year + ' г'}}</p>
        <p>Объем двигателя: {{autoRemake.volume }}</p>
        Цвет:
        <ColorPicker disabled v-model="autoRemake.color" />
        <p>Город: {{autoRemake.city }}</p>
        <p>Коробка передачи: {{autoRemake.gear}}</p>
        <p>Кузов: {{autoRemake.carcase }}</p>
      </template>
      <!-- <template #footer>
        <div class="chipes">
          <Chip v-if="Number(autoRemake.price.slice(0,-1)) > 1000000" label="Дорогой" icon="pi pi-dollar" />
          <Chip v-else-if="autoRemake.year <= 2000" label="Старый" icon="pi pi-facebook" />
          <Chip v-if="changeColor(autoRemake.color)" label="Конченный цвет" icon="pi pi-exclamation-triangle" />
          <Chip v-else label="Скучный" icon="pi pi-briefcase" />
          <Chip v-show="autoRemake.volume > 2" label="Большой объём" icon="pi pi-arrow-up" removable />
      </div>
      </template> -->
    </Card>
  </div>
</template>

<style scoped>

:deep(.p-card) {
  cursor: pointer;
  height: 600px;
  margin: 30px ;
}
.chipes {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
:deep(.p-disabled){
  opacity: 1 !important;
}
  


</style>