<script setup>
import { ref } from 'vue'

const variants = ref([
  { name: 'Informatik/Mathematik (2/3 + 1/3)', value: 1 },
  { name: 'Wirtschaftswissenschaften (3/4 + 1/4)', value: 2 }
])

const selectedVariant = ref()
</script>

<template>
  <Select
    v-model="selectedVariant"
    :options="variants"
    option-label="name"
    option-value="value"
    placeholder="Select a Variant"
    checkmark
    :highlight-on-select="false"
    class="w-full h-fit"
  />
</template>

<style scoped></style>
