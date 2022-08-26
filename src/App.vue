<template>
    <div class="container mx-auto px-4 mt-4">
        <form class="mb-4" @submit.prevent>
            <div class="flex flex-col py-4">
                <input class="border border-green-300 py-2 px-2 placeholder-black" v-model="title" type="text"
                       placeholder="Название">
                <input class="placeholder-black border border-green-300 py-2 px-2" v-model="body" type="text"
                       placeholder="Описание">
            </div>
            <button @click="createPost"
                    class="border border-green-300 text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Создать
            </button>
        </form>
        <PostList :posts="posts"/>
    </div>
</template>

<script>
    import PostList from "@/components/PostList";

    export default {
        components: {PostList},
        data() {
            return {
                posts: [
                    {title: 'Vue', body: '3'},
                    {title: 'Vue', body: '3'},
                    {title: 'Vue', body: '3'},
                ],
                title: '',
                body: '',
            }
        },

        methods: {
            createPost() {
                const newPost = {
                    id: Date.now(),
                    title: this.title,
                    body: this.body
                }
                this.posts.push(newPost);
                this.title = '';
                this.body = '';
            }

        }
    }
</script>
