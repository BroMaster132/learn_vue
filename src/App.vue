<script setup>
import NavBar from '@/layout/NavBar.vue';
import Footer from '@/components/Footer.vue';
import { RouterView } from 'vue-router';
</script>

<template>
    <NavBar />
    <router-view />
    <Footer />

</template>

<style scoped>

</style>
