<template>
    <div class="container mx-auto px-4 mt-4" v-for="post in posts">
        <div class="flex border border-red-500 py-2 px-4">
            <h2 class="text-xl tracking-normal">
                {{post.title}}
            </h2>
            <p class="text-xl">
                {{post.body}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
       props: {
           posts: {
               type: Array
           }
       }
    }
</script>

<style scoped>

</style>