<script setup>
import Sidebar from 'primevue/sidebar';
import 'primeicons/primeicons.css';
import { ref } from "vue";
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';
import InputSwitch from 'primevue/inputswitch';
import InputMask from 'primevue/inputmask';
import { useToast } from "primevue/usetoast";
import 'primeicons/primeicons.css';
import {useDark, useToggle} from '@vueuse/core'
 

const toast = useToast();


const showInfo = () => {
    toast.add({ severity: 'warn', summary: 'Warn Message', detail: "This website isn't nice , because of the bad internet of owner", life: 3000 });
};


const showWarn = () => {
    toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Fill the form', life: 3000 });
};


const visible = ref(false);

const phone = ref(null)

function checkText(value) {
    if(value == ''){
        showWarn()
    }

}
function checkPhone(value) {
    if(phone.value == ''){
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

        <Sidebar v-model:visible="visible">
            <h2>Settings</h2>
             <div class="card flex justify-content-center" id="theme" > <!--Dont work yet -->
                <InputSwitch v-model="checked" @click="check()"/> <!--Dont work yet -->
                <span style="margin-left: 10px ;">Light/Dark Theme</span> <!--Dont work yet -->
            </div>
            <br>
            <div class="card flex justify-content-center" >
                <InputText type="text" v-model="value" @change="checkText(value)" placeholder="Введите текст"/>
            </div>
            <br>
            <div class="flex-auto">
                <label for="phone">Phone</label><br>
                <InputMask v-model="phone" @change="checkPhone()" date="phone" mask=" +9(999) 999-9999" placeholder="+9(999) 999-9999" />
            </div>    
        </Sidebar>
        <i class="pi pi-cog" @click="visible = true" />


</template>

<style scoped>
    i {
        cursor: pointer;
        margin-right: 40px;
        font-size: 22pt;
    }   
    #theme{
        display: flex;
        flex-direction: row;
    }

</style>