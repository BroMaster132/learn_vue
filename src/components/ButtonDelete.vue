<script setup>
    import {ref} from 'vue'
    const counter = ref(0)
    
    const increase = () => {
        counter.value++
    }
    const decrease = ()  =>{
        counter.value--
    }
</script>

<template>
    <div class="buttons">
        {{ counter }}
        <button class="increase" @click="increase">Increase</button>
        <button class="decrease" @click="decrease">Deacrease</button>
    </div>
</template>

<style scoped>
.buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}
.increase {
    border-radius: 2px;
    background-color: rgb(83, 83, 83);
    border: 1px solid ;
    margin-bottom: 5px;
    cursor: pointer;
}
.decrease {
    background-color: rgb(83, 83, 83);
    border-radius: 2px;
    border: 1px solid ;
    cursor: pointer;
}
</style>