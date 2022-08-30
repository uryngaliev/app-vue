<template>
    <form class="mb-4" @submit.prevent>
        <div class="flex flex-col py-4">
            <input
                    class="border border-green-300 py-2 px-2 placeholder-black" v-model="post.title" type="text"
                    placeholder="Название">
            <input class="placeholder-black border border-green-300 py-2 px-2" v-model="post.body" type="text"
                   placeholder="Описание">
        </div>
        <button @click="createPost"
                class="border border-green-300 text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Создать
        </button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                post: {
                    title: '',
                    body: '',
                }
            }
        },
        methods: {
            createPost() {
                this.$emit('create', this.post);
                this.post = {
                    title: '',
                    body: '',
                }
            },
        }
    }
</script>
