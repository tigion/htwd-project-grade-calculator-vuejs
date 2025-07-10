<script setup>
import { ref } from 'vue'

const defaultInputGrades = [1.0, 1.3, 1.7, 2.0, 2.3, 2.7, 3.0, 3.3, 3.7, 4.0, 5.0]

const grades = ref(getInputGrades())
const selectedGrade = ref()

function getInputGrades() {
  const grades = []
  defaultInputGrades.forEach((grade) => {
    grades.push({
      name: grade.toLocaleString(undefined, { minimumFractionDigits: 1 }),
      value: grade
    })
  })
  return grades
}
</script>

<template>
  <Select
    v-model="selectedGrade"
    :options="grades"
    option-label="name"
    option-value="value"
    placeholder="Select a Grade"
    checkmark
    :highlight-on-select="false"
    class="w-full h-fit"
  />
</template>

<style scoped></style>
