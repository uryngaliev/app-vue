<template>
    <div class="container mx-auto px-4 mt-4">
        <h1 class="text-xl text-white text-medium bg-green-500 py-2 px-2 mb-4">Страница постов</h1>
        <my-button class="bg-blue-500 uppercase py-2 px-2 text-white mb-4" @click="showDialog">Создать пост</my-button>
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
    import MyButton from "@/components/MyButton";

    export default {
        components: {MyButton, MyDialogs, PostForm, PostList},
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
