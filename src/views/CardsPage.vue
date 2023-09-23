<template>
    <div class="cards">
        <CarList />
    </div>
</template>

<script setup>
import  CarList  from "@/components/CarList.vue"
</script>

<style scoped>
.cards{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between ;
    align-content: space-around;
}
</style>