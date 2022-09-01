<template>
    <div class="container mx-auto px-4 mt-4">
        <h1>Страница постов</h1>
        <button @click="showDialog">Создать пост</button>
        <my-dialogs v-model:show="dialogVisible">
            <PostForm @create="createPost"/>
        </my-dialogs>
        <PostList :posts="posts"/>
    </div>
</template>

<script>
    import PostList from "@/components/PostList";
    import PostForm from "@/components/PostForm";
    import MyDialogs from "@/components/MyDialogs";

    export default {
        components: {MyDialogs, PostForm, PostList},
        data() {
            return {
                posts: [
                    {title: 'Vue', body: '3'},
                    {title: 'Vue', body: '3'},
                    {title: 'Vue', body: '3'},
                ],
                dialogVisible: false,
            }
        },

        methods: {
            createPost(post) {
                this.posts.push(post)
                this.dialogVisible = false
            },
            showDialog() {
                this.dialogVisible = true
            }

        }
    }
</script>
