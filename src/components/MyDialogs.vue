<template>
    <div class="dialog bg-black opacity-25 fixed inset-0 flex justify-center" v-if="show" @click="hideDialog">
        <div @click.stop
             class="dialog_content m-auto bg-white rounded-lg w-[300px] h-[200px] p-4">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyDialogs",
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            hideDialog() {
                this.$emit('update:show', false)
            }
        }
    }
</script>
