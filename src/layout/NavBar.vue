<script setup>
import Button from 'primevue/button'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import Menubar from 'primevue/menubar';
import CarAddModule from '../components/CarAddModule.vue';
import { ref } from "vue";
import Sidebar from '@/components/SideBar.vue';
import { useRoute} from 'vue-router'

const route = useRoute()

const items = ref([
    {
        label: 'Table',
        icon: 'pi pi-fw pi-file',
        route: '/table'
    },
    {
        label: 'Cards',
        icon: 'pi pi-fw pi-pencil',
        route: '/cards'
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
        <Menubar v-model:activeIndex="active" :model="items">
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
            <template #item="{ label, item, props, root, hasSubmenu }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                    <span :class="[hasSubmenu && (root ? 'pi pi-fw pi-angle-down' : 'pi pi-fw pi-angle-right')]" v-bind="props.submenuicon" />
                </a>
                
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