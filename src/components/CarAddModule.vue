<template>
    <Button label="Show" icon="pi pi-external-link" @click="toggleVisible()" />
    <div class="card flex justify-content-center">
        <Dialog v-model:visible="visible" modal header="Add car" :style="{ width: '50vw' }">
            <template #default>
                <div class="p-fluid">
                    <div class="p-field">
                        <label for="brand">Бренд</label>
                        <Dropdown id="brand" v-model="auto.brand" editable :options="brandLabel" option-label="brand" option-value="brand" placeholder="Бренд" />
                    </div>
                    <div class="p-field">
                        <label for="price">Цена</label>
                        <InputNumber id="price" v-model="auto.price" mode="currency" currency="KZT" locale="ru-ru" />
                    </div>
                    <div class="p-field">
                        <label for="year">Год</label>
                        <Calendar id="year" v-model="auto.year" view="year" dateFormat="yy" />
                    </div>
                    <div class="p-field">
                        <label for="volume">Объем</label>
                        <InputNumber id="volume" v-model="auto.volume" inputId="minmax" :min="0.5" :max="45" />
                    </div>
                    <div class="p-field">
                        <label for="color">Цвет</label>
                        <ColorPicker id="color" v-model="auto.color" inline />
                    </div>
                    <div class="p-field">
                        <label for="city">Город</label>
                        <Dropdown id="city" v-model="auto.city" editable :options="brandLabel" option-label="brand" option-value="brand" placeholder="Бренд" />
                    </div>
                    <div class="p-field">
                        <label for="carcase">Кузов</label>
                        <Dropdown id="carcase" v-model="auto.carcase" editable :options="brandLabel" option-label="brand" option-value="brand" placeholder="Бренд" />
                    </div>
                    <div class="p-field">
                        <label for="gear">Коробка</label>
                        <div class="flex flex-wrap gap-3">
                            <div class="flex align-items-center">
                                <RadioButton v-model="auto.gear" inputId="ingredient1" name="pizza" value="Механическая" />
                                <label for="ingredient1" class="ml-2">Механическая</label>
                            </div>
                            <div class="flex align-items-center">
                                <RadioButton v-model="auto.gear" inputId="ingredient2" name="pizza" value="Автоматическая" />
                                <label for="ingredient2" class="ml-2">Автоматическая </label>
                            </div>
                            <div class="flex align-items-center">
                                <RadioButton v-model="auto.gear" inputId="ingredient3" name="pizza" value="Роботизированная" />
                                <label for="ingredient3" class="ml-2">Роботизированная </label>
                            </div>
                            <div class="flex align-items-center">
                                <RadioButton v-model="auto.gear" inputId="ingredient4" name="pizza" value="Вариативная" />
                                <label for="ingredient4" class="ml-2">Вариативная </label>
                            </div>
                        </div>
                    </div>
                        <div class="p-field">
                        <label for="travel">Пробег</label>
                        <InputText v-model.number="auto.travel"  />
                        <Slider v-model="auto.travel" max="500" />
                    </div>
                </div>
            </template>
            <template #footer>
                <Button label="Reset" icon="pi pi-times" @click="toggleVisible()" text />
                <Button label="Add" icon="pi pi-check" @click="toggleVisible()" autofocus />
            </template>
            
        </Dialog>
    </div>
</template>

        
<script setup>
import RadioButton from 'primevue/radiobutton';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';
import ColorPicker from 'primevue/colorpicker';
import Slider from 'primevue/slider';

import { useAuto } from '@/composable/useAuto';
const {auto} = useAuto()

console.log(auto.value);
import { ref } from "vue";

const value = ref(null);

const visible = ref(false);

const toggleVisible = () =>{
    visible.value = !visible.value
}

                    

const brandLabel = [
  { brand: 'BMW' },
  { brand: 'Audi' },
  { brand: 'Mercedes' },
  { brand: 'Volkswagen' },
  { brand: 'Volvo' },
  { brand: 'Toyota' },
  { brand: 'Nissan' },
  { brand: 'Mazda' },
  { brand: 'Honda' },
  { brand: 'Hyundai' },
  { brand: 'Kia' },
  { brand: 'Lexus' },
  { brand: 'Ford' },
  { brand: 'Chevrolet' },
  { brand: 'Skoda' },
  { brand: 'Renault' },
  { brand: 'Peugeot' },
]
</script>

<style scoped>

</style>