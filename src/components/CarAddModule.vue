<template>
    <Toast />
    <Button label="Add car" icon="pi pi-car" @click="toggleVisible()" />
    <div class="card flex justify-content-center">
        <Dialog v-model:visible="visible" modal header="Add car" :style="{ width: '50vw' }">
            <template #default>
                <div class="p-fluid">
                    <div class="p-field">
                        <label for="brand">Бренд</label>
                        <Dropdown id="brand" v-model="newAuto.brand"  :options="brandLabel" optionLabel="brand" placeholder="Бренд" option-value="brand"  />
                    </div>
                    <div class="p-field">
                        <label for="price">Цена</label>
                        <InputNumber id="price" v-model="newAuto.price" mode="currency" currency="KZT" locale="ru-ru" />
                    </div>
                    <div class="p-field">
                        <label for="year">Год</label>
                        <Calendar id="year" v-model="newAuto.year" view="year" dateFormat="yy" />
                    </div>
                    <div class="p-field">
                        <label for="volume">Объем</label>
                        <InputNumber id="volume" v-model="newAuto.volume" inputId="minmax" :min="0.5" :max="45" />
                    </div>
                    <div class="p-field">
                        <label for="color">Цвет:</label>
                        <br>
                        <ColorPicker id="color" style="width: 100px" v-model="newAuto.color"  />
                    </div>
                    <div class="p-field">
                        <label for="city">Город</label>
                        <Dropdown id="city" v-model="newAuto.city"  :options="cityLabel" option-label="city" option-value="city" placeholder="Город" />
                    </div>
                    <div class="p-field">
                        <label for="carcase">Кузов</label>
                        <Dropdown id="carcase" v-model="newAuto.carcase"  :options="carcaseLabel" option-label="carcase" option-value="carcase" placeholder="Кузов" />
                    </div>
                    <div class="p-field">
                        <label for="gear">Коробка</label>
                        <div class="flex flex-wrap gap-3">
                            <div class="flex align-items-center">
                                <RadioButton v-model="newAuto.gear" inputId="ingredient1" name="pizza" value="Механическая" />
                                <label for="ingredient1" class="ml-2">Механическая</label>
                            </div>
                            <div class="flex align-items-center">
                                <RadioButton v-model="newAuto.gear" inputId="ingredient2" name="pizza" value="Автоматическая" />
                                <label for="ingredient2" class="ml-2">Автоматическая </label>
                            </div>
                            <div class="flex align-items-center">
                                <RadioButton v-model="newAuto.gear" inputId="ingredient3" name="pizza" value="Роботизированная" />
                                <label for="ingredient3" class="ml-2">Роботизированная </label>
                            </div>
                            <div class="flex align-items-center">
                                <RadioButton v-model="newAuto.gear" inputId="ingredient4" name="pizza" value="Вариативная" />
                                <label for="ingredient4" class="ml-2">Вариативная </label>
                            </div>
                        </div>
                    </div>
                        <div class="p-field">
                        <label for="travel">Пробег</label>
                        <Slider v-model="newAuto.travel" max="500" />
                    </div>
                </div>
                <br>
                <div class="custom-button">
                    <FileUpload mode="basic" name="demo[]" url="./useAuto.js" accept="image/*" chooseLabel="Upload image" :maxFileSize="1000000" @input="onUpload($event)" />
                </div>
            </template>
            <template #footer>
                <Button label="Reset" icon="pi pi-times" @click="clearAuto()" text />
                <Button label="Add" icon="pi pi-check" @click="addAuto()" autofocus />
            </template>
        </Dialog>
    </div>
</template>

        
<script setup>
import RadioButton from 'primevue/radiobutton';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';
import ColorPicker from 'primevue/colorpicker';
import Slider from 'primevue/slider';
import FileUpload from 'primevue/fileupload';
import {useToast} from 'primevue/usetoast'
import {useAuto} from '@/composable/useAuto'
import { ref } from "vue";

const toast = useToast()

const visible = ref(false);

function test(data){
    console.log(data);
}

const {newAuto,createAuto, clear, uploadImage} = useAuto()


const toggleVisible = () =>{
    visible.value = !visible.value
}


const showWarn = () => {
    toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Fill all of the forms', life: 2000 });
};

async function onUpload(e) {
  const image = e.target.files[0]
  await uploadImage(image)
}

function clearAuto() {
    clear()
    toggleVisible()   
}

async function addAuto() {
    if (newAuto.value.brand === '' || newAuto.value.price === '' || newAuto.value.year === '' || newAuto.value.volume === '' || newAuto.value.city === '' || newAuto.value.carcase === ''  || newAuto.value.gear === '' ) {
        showWarn()
    }
    else{
        await createAuto()
        toggleVisible()
    }
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

const carcaseLabel = [
    {carcase: 'Внедорожник'},
    {carcase: 'Седан'},
    {carcase: 'Купе'},
    {carcase: 'Хэтчбек'},
    {carcase: 'Лифтбек'},
    {carcase: 'Фастбэк'},
    {carcase: 'Универсал'},
    {carcase: 'Кроссовер'}
]
const cityLabel = [
    {city: 'Almaty'},
    {city: 'Nur-Sultan'},
    {city: 'Shymkent'},
    {city: 'Karaganda'},
    {city: 'Aktobe'},
    {city: 'Taraz'},
    {city: 'Pavlodar'}
]

</script>

<style scoped>




</style>