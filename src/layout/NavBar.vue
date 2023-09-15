<script setup>
import Button from 'primevue/button'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useAuto } from '@/composable/useAuto'
import Menubar from 'primevue/menubar';

import { ref, watch } from "vue";


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


const signs = ref([
    {
        label: 'Sign in',
        icon: 'pi pi-fw pi-calendar',
        route: '/Sign_in'
    },
])

const {auto, createAuto} = useAuto()



const googleRegister = () => {
  const auth = getAuth()
  const provider = new GoogleAuthProvider()

  signInWithPopup(auth, provider)
    .then((userCredential) => {
      const user = userCredential.user
      localStorage.setItem('user', JSON.stringify(user))
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    })
}


function googleOut(){
    localStorage.removeItem('user')
}
</script>

<template>
    <div class="card relative z-2">
        <Menubar :model="items">
            <!-- <template #item="{ label, item, props, root }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                    <span :class="[root ? 'pi pi-fw pi-angle-down' : 'pi pi-fw pi-angle-right']" v-bind="props.submenuicon" />
                </a>
            </template> -->
            <template class="end" #end>
                <Button class='sign_in'  label='Sign in' @click="googleRegister()"/>
                <Button class='sign_out' style="display: none;"  label='Sign out' @click="checker()"/>
            </template>
        </Menubar>
    </div>
</template>

<style scoped>
.end{
    display: flex;
    flex-direction: row;
}
.right{
    margin-right: 20px;
}

</style>