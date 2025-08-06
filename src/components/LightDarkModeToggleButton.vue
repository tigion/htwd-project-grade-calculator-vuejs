<script setup>
import { ref } from 'vue'

import Button from 'primevue/button'

// The classes for the light and dark mode.
const lightModeIconClasses = 'pi pi-sun'
const darkModeIconClasses = 'pi pi-moon'
const darkModeClass = 'app-dark-mode'

// The icon of the toggle button.
const icon = ref(lightModeIconClasses)

// Gets the current light/dark mode.
let useDarkMode = isBrowserDarkMode()

// Returns true if the browser is in dark mode.
function isBrowserDarkMode() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

// Sets the button icon and the color scheme.
function setColorScheme() {
  if (useDarkMode == true) {
    // Uses dark mode.
    icon.value = darkModeIconClasses
    document.documentElement.classList.add(darkModeClass)
  } else {
    // Uses light mode.
    icon.value = lightModeIconClasses
    document.documentElement.classList.remove(darkModeClass)
  }
}

// Toggles the color scheme between light and dark mode.
function toggleColorScheme() {
  useDarkMode = !useDarkMode
  setColorScheme()
}

// Sets the initial color scheme.
setColorScheme()
</script>

<template>
  <Button :icon="icon" aria-label="Toggle light/dark mode" text @click="toggleColorScheme" />
</template>

<style scoped></style>
