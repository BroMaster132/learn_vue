<template>
    <div class="test">
        {{ counter }}
        <button @click="increase">Increase</button>
        <button @click="decrease">Deacrease</button>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    const counter = ref()

    const increase = () => {
        this.counter++
    }
    const decrease = ()  =>{
        this.counter--
    }
</script>
