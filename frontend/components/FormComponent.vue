<template>
   <form @submit.prevent="handleSubmit" v-bind="$attrs">
        <slot />
   </form>
</template>

<script setup lang="ts">
const emit = defineEmits(["submit"])
const handleSubmit = () => {
    emit("submit")
}
</script>

<style scoped>

</style>