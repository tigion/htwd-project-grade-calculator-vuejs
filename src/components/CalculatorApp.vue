<script setup>
import { ref } from 'vue'

// import InputNumber from 'primevue/inputnumber'
// import Button from 'primevue/button'

const number1 = ref(0)
const number2 = ref(0)
const result = ref(0)

function add() {
  result.value = parseInt(number1.value, 10) + parseInt(number2.value, 10)
}
</script>

<template>
  <h3>Calculator</h3>
  <form @submit.prevent="add">
    <!-- <input type="number" v-model="number1" /> -->
    <!-- <input type="number" v-model="number2" /> -->
    <InputNumber
      v-model="number1"
      input-id="minmax-buttons"
      mode="decimal"
      show-buttons
      :min="-1000"
      :max="1000"
      @change="add"
    />
    <InputNumber
      v-model="number2"
      input-id="minmax-buttons"
      mode="decimal"
      show-buttons
      :min="-1000"
      :max="1000"
    />

    <!-- <button type="submit">Add</button> -->
    <Button type="submit" label="Add" />
  </form>
  <p>Result: {{ result }}</p>
</template>

<style scoped></style>

<!-- <script> -->
<!-- import { ref } from 'vue' -->
<!---->
<!-- export default { -->
<!--   setup() { -->
<!--     const number1 = ref(0) -->
<!--     const number2 = ref(0) -->
<!--     const result = ref(0) -->
<!---->
<!--     function add() { -->
<!--       result.value = parseInt(number1.value, 10) + parseInt(number2.value, 10) -->
<!--     } -->
<!---->
<!--     return { -->
<!--       num1: number1, -->
<!--       num2: number2, -->
<!--       result: result, -->
<!--       add -->
<!--     } -->
<!--   } -->
<!-- } -->
<!-- </script> -->
