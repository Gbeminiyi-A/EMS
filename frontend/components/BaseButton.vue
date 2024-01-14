<template>
    <button :disbaled="disabled" v-bind="$attrs"
    @click="handleButtonClick">
        <slot />
    </button>
</template>

<script setup lang="ts">
defineProps({
    disabled: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits(["click"])
const handleButtonClick = () => {
    emit("click")
}
</script>

<style scoped>

</style>