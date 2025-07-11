<script setup>
import { ref } from 'vue'
// import { ref, defineExpose } from 'vue'

const lightIconClasses = 'pi pi-sun'
const darkIconClasses = 'pi pi-moon'

// Uses dark mode if this is preferred in the browser settings.
// Default is light mode.
// let isDarkMode = isBrowserDarkMode()
let isDarkMode = defineModel({ type: Boolean }) // to expose the state to parent

const icon = ref()

function isBrowserDarkMode() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}
console.log('isDarkMode', isDarkMode.value)

function setColorScheme() {
  let isDarkMode2
  if (isDarkMode.value == null) {
    isDarkMode2 = isBrowserDarkMode()
    isDarkMode.value = isBrowserDarkMode()
  } else {
    isDarkMode2 = isDarkMode.value
  }
  console.log('isDarkMode2:', isDarkMode2)
  if (isDarkMode2) {
    // if (isDarkMode.value == false) {
    icon.value = darkIconClasses
    document.documentElement.classList.add('dark')
  } else {
    icon.value = lightIconClasses
    document.documentElement.classList.remove('dark')
  }
}

function toggleColorScheme() {
  console.log('isDarkMode 1:', isDarkMode.value)
  isDarkMode.value = !isDarkMode.value
  console.log('isDarkMode 2:', isDarkMode.value)
  setColorScheme()
}

setColorScheme()

// TODO: Three states: light, dark, system
// TODO: Use dark mode like:
//       - https://tailwindcss.com/docs/dark-mode#supporting-system-preference-and-manual-selection
//
// localStorage.removeItem('theme')
// if (
//   localStorage.theme === 'dark' ||
//   (!('theme' in localStorage) && isDarkMode)
// ) {
//   isDarkMode = true
// } else {
//   isDarkMode = false
// }
// if (isDarkMode) {
//   localStorage.theme = 'light'
// } else {
//   localStorage.theme = 'dark'
// }
</script>

<template>
  <Button :icon="icon" aria-label="Toggle light/dark mode" text @click="toggleColorScheme" />
</template>

<style scoped></style>
