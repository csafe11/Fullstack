<script setup>


const { data: scizor } = await useFetch('/api/scizor')
</script>


<template>
    <div>
    <h1>Home Page for Nuxt 3 Server Course</h1>
   <ul>
    <li>
        <img :src="scizor.sprite" alt="">
    </li>
    <li>
        {{ scizor.id }}: {{ scizor.name }}
    </li>
   </ul>

    </div>
</template>