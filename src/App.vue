<template>
    <PostList :posts="posts"/>
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
                ]
            }
        }
    }
</script>
