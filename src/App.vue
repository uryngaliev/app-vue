<template>
    <div class="container mx-auto px-4 mt-4">
        <form @submit.prevent>
            <input v-model="title" type="text" placeholder="Название">
            <input v-model="body" type="text" placeholder="Описание">
            <button @click="createPost">
                Создать запись
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
