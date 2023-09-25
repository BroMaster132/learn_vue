<script setup>
import Menubar from 'primevue/menubar';
import CarAddModule from '../components/CarAddModule.vue';
import { ref } from "vue";
import Sidebar from '@/components/Sidebar.vue';
import { useRoute} from 'vue-router'
import SignIn from '../components/SignIn.vue';
const route = useRoute()

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
        route: '/'
    },
    {
        label: 'Table',
        icon: 'pi pi-bars',
        route: '/table'
    },
    {
        label: 'Cards',
        icon: 'pi pi-car',
        route: '/cards'
    },


]);

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
                <SignIn />
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


</style>