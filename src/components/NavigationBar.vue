<script setup>

</script>

<template>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Authors</a></li>
            <li><a href="#">About</a></li>
        </ul>
        <li style="margin-left: 70%;"><a href="#">Contact Us</a></li>
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