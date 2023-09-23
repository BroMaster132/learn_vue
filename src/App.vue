<script setup>
import NavBar from '@/layout/NavBar.vue';
import Footer from '@/components/Footer.vue';
import { RouterView } from 'vue-router';
import Button from 'primevue/button'
</script>

<template>
    <NavBar />
    <router-view />
    <Footer />
</template>

<style scoped>

</style>
