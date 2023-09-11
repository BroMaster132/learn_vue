<script setup>
import Sidebar from 'primevue/sidebar';
import 'primeicons/primeicons.css';
import { ref } from "vue";
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';
import InputSwitch from 'primevue/inputswitch';

import { useToast } from "primevue/usetoast";
const toast = useToast();


const showInfo = () => {
    toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 });
};

const showWarn = () => {
    toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', life: 3000 });
};


const visible = ref(false);

const value = ref(null);

function check(value) {
    if(value == ''){
        showWarn()
    }
}

window.addEventListener("DOMContentLoaded", ()=>{
    showInfo()
})


const checked = ref(false);
</script>


<template>
    <Toast />
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible">
            <h2>Sidebar</h2>
            <div class="card flex justify-content-center" >
                <InputSwitch v-model="checked" />
                <span>Light/Dark Theme</span>
            </div>
            <br>
            <div class="card flex justify-content-center" >
                <InputText type="text" v-model="value" @change="check(value)" />
            </div>

                    
        </Sidebar>
        <i  class="pi pi-arrow-right" @click="visible = true" /> <span>Выдвигает sidebar</span>
    </div>

</template>

<style scoped>
    i {
        cursor: pointer;
    }   
</style>