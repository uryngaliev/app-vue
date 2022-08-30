<template>
    <div v-if="posts.length > 0" v-for="(post, i) in posts">
        <div class="flex justify-between border border-red-500 py-2 px-4">
            <div class="flex items-center">
                <h2 class="text-xl tracking-normal">
                    {{post.title}}
                </h2>
                <p class="text-xl">
                    {{post.body}}
                </p>
            </div>
            <button @click="removePost(i)"
                    class="border bg-red-500 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Удалить
            </button>
        </div>
    </div>
    <div v-else>
        Список пуст
    </div>
</template>

<script>
    export default {
        props: {
            posts: {
                type: Array
            }
        },
        methods: {
            removePost(i) {
                this.posts.splice(i, 1)
            }
        }
    }
</script>