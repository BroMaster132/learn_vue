<script setup>
import Button from 'primevue/button'
import Dialog from 'primevue/dialog';
import { ref } from "vue";
import InputText from 'primevue/inputtext';
import Divider from 'primevue/divider';
import 'primeicons/primeicons.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useToast } from 'primevue/usetoast';

const toast = useToast()


const showWarn = () => {
    toast.add({ severity: 'warn', summary: 'Warn Message', detail: "This function hasn't been added yet, because of the bad internet of owner", life: 3000 });
};


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
const visible = ref(false);
</script>

<template>
    <Button class='sign_in' label='Sign in' @click="visible = true"/> <!--Is developing-->
    <Button class='sign_out'  label='Sign up' @click="visible = true"/> <!--Is developing-->
    <div class="card flex justify-content-center">
        <Dialog v-model:visible="visible" st modal header="Sign in // Sign up to the website" :style="{ width: '40vw'}">
            <div class="card">
                <div class="Modal">
                    <div class="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                        <div class="flex align-items-center gap-2">
                            <label>Username:</label>
                            <br>
                            <InputText id="username" type="text" class="username" />
                        </div>
                        <br>
                        <div class="flex align-items-center gap-2">
                            <label>Password:</label>
                            <br>
                            <InputText id="password" type="password" class="w-full" />
                            
                        </div>
                        <br>
                        <Button label="Login" icon="pi pi-user" class="w-10rem"></Button>
                        <br><br>
                        <div>
                            <i class="pi pi-google" @click="googleRegister" />
                            <i class="pi pi-facebook" @click="showWarn" />
                            <i class="pi pi-twitter" @click="showWarn" />
                        </div>
                    </div>
                    <div class="divider">
                        <Divider layout="vertical" class="hidden md:flex"><b>OR</b></Divider>
                    </div>
                    <div class="sign_up">
                        <Button label="Sign Up" icon="pi pi-user-plus" severity="success" @click="Register()" class="w-10rem"></Button>
                    </div>
                </div>
            </div>
        </Dialog>
    </div>
</template>

<style scoped>
i {
    margin-left: 10px;
    cursor: pointer;
}
.sign_in{
    margin-right: 20px;
}
.Modal {
    display: flex;
    flex-direction: row;
}
.sign_up{
    margin: auto;
}
.divider {
    margin-left: 170px;
}
</style>