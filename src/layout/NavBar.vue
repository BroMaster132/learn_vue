<script setup>
import Button from 'primevue/button'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useAuto } from '@/composable/useAuto'
import { onMounted } from 'vue';
import { async } from '@firebase/util';

const {auto, createAuto} = useAuto()

onMounted(async () =>{
    await createAuto()
    
})

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
</script>

<template>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Authors</a></li>
            <li><a href="#">About</a></li>
        </ul>

        <li style="margin-left: 70%;"><a href="#" @click="googleRegister">Sign in</a></li>
        <button @click="createAuto">
            <i class="pi pi-plus" />
        </button>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20pt;
    background-color: rgb(17, 17, 17);
    height: 60px;
    color: rgb(24, 24, 24); 
    padding: 20px;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    
}

li{
    display: inline;
    margin-left: 20%;
}

a {
    text-decoration: none;
    color: white;
}

li :hover {
    color: gray;
}
nav div :hover {
    color: gray;
}

</style>