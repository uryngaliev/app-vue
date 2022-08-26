<template>
    <div class="container mx-auto px-4 mt-4">
        <PostForm @create="createPost"/>
        <PostList :posts="posts"/>
    </div>
</template>

<script>
    import PostList from "@/components/PostList";
    import PostForm from "@/components/PostForm";

    export default {
        components: {PostForm, PostList},
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
            createPost(post) {
                this.posts.push(post)

            }

        }
    }
</script>
