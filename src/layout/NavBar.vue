<script setup>
import Button from 'primevue/button'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import Menubar from 'primevue/menubar';
import CarAddModule from '../components/CarAddModule.vue';
import { ref } from "vue";
import Sidebar from '@/components/SideBar.vue';

const items = ref([
    {
        label: 'Something',
        icon: 'pi pi-fw pi-file',
    },
    {
        label: 'Something',
        icon: 'pi pi-fw pi-pencil',
    },
    {
        label: 'Something',
        icon: 'pi pi-fw pi-user',
    },
    {
        label: 'Something',
        icon: 'pi pi-fw pi-calendar',
    },
    {
        label: 'Something',
        icon: 'pi pi-fw pi-file',
    },
    {
        label: 'Something',
        icon: 'pi pi-fw pi-pencil',
    },
    {
        label: 'Something',
        icon: 'pi pi-fw pi-user',
    },
    {
        label: 'Something',
        icon: 'pi pi-fw pi-calendar',
    },
]);








function googleOut(){
    localStorage.removeItem('user')
}
console.log(items);
</script>

<template>
    <div class="card relative z-2">
        <Menubar :model="items">
            <template class="start" #start >
                <div class="addModule">
                    <CarAddModule />
                </div>
            </template>
            <template class="end" #end>
                <Sidebar />
                <Button class='sign_in'  label='Sign in' @click="googleRegister()"/> <!--Is developing-->
                <Button class='sign_out'  label='Sign out' @click="checker()"/> <!--Is developing-->
            </template>
        </Menubar>
    </div>
</template>

<style scoped>
.addModule {
    margin-right: 30px;
}
.end{
    display: flex;
    flex-direction: row;
}
.sign_in{
    margin-right: 20px;
}

</style>