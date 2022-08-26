<template>
    <nav>
        <h1 class="text-3xl font-bold underline">
            Hello world!
        </h1>
        <router-link to="/">Home</router-link>
        |
        <router-link to="/about">About</router-link>
        |
        <router-link :to="{name: 'posts'}">Posts</router-link>
    </nav>
    <router-view/>
</template>
