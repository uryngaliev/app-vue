<template>
    <form class="mb-4" @submit.prevent>
        <div class="flex flex-col py-4">
            <input
                    class="border border-green-300 py-2 px-2 placeholder-black" v-model="post.title" type="text"
                    placeholder="Название">
            <input class="placeholder-black border border-green-300 py-2 px-2" v-model="post.body" type="text"
                   placeholder="Описание">
        </div>
        <my-button @click="createPost">
            Создать
        </my-button>
    </form>
</template>

<script>
    import MyButton from "@/components/MyButton";
    export default {
        components: {MyButton},
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
