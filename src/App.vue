<script setup>
import { ref } from 'vue'

import Menubar from 'primevue/menubar'
import Button from 'primevue/button'

// Imports the necessary components.
import LightDarkModeToggleButton from './components/LightDarkModeToggleButton.vue'
import GradeSelect from './components/GradeSelect.vue'
import VariantSelect from './components/VariantSelect.vue'

// Imports the grade calculation logic.
import { Calculation } from './logic/Calculation.js'

const lightDarkModeToggleButton = ref()

const gradeRating1 = ref()
const gradeRating2 = ref()
const gradePresentation = ref()
const gradeDiscussion = ref()
const calcVariant = ref()

const gradeWrittenThesis = ref()
const gradeWrittenThesisCheck = ref()
const gradeDefense = ref()
const gradeDefenseCheck = ref()
const gradeThesis = ref()
const gradeThesisCheck = ref()
const gradeThesisAsText = ref()

const factorWrittenThesis = ref()
const factorDefense = ref()
const factorDivisor = ref()

const calc = new Calculation()

init()

// Initializes the app.
function init() {
  // TODO: Are other initializations needed?

  reset()
}

// Resets the inputs and updates the calculation.
function reset() {
  gradeRating1.value = validateInputGrade(1.3)
  gradeRating2.value = validateInputGrade(1.3)
  gradePresentation.value = validateInputGrade(1.3)
  gradeDiscussion.value = validateInputGrade(1.3)
  calcVariant.value = validateInputVariant(1)
  update()
}

// Updates the calculation and the results.
function update() {
  // Calculates the results with the validated inputs.
  calc.setInputGrades(
    validateInputGrade(gradeRating1.value),
    validateInputGrade(gradeRating2.value),
    validateInputGrade(gradePresentation.value),
    validateInputGrade(gradeDiscussion.value),
    validateInputVariant(calcVariant.value)
  )

  // Updates the results.
  gradeWrittenThesis.value = calc.gradeWrittenThesis.valueShortAsString
  gradeWrittenThesisCheck.value = calc.gradeWrittenThesis.valueAsString
  gradeDefense.value = calc.gradeDefense.valueShortAsString
  gradeDefenseCheck.value = calc.gradeDefense.valueAsString
  gradeThesis.value = calc.gradeThesis.valueShortAsString
  gradeThesisAsText.value = calc.gradeThesisAsText
  gradeThesisCheck.value = calc.gradeThesis.valueAsString
  factorWrittenThesis.value = calc.factorWrittenThesis
  factorDefense.value = calc.factorDefense
  factorDivisor.value = calc.factorDivisor
}

// Returns the grade if it is valid, otherwise 0.
function validateInputGrade(grade) {
  const validInputGrades = [1.0, 1.3, 1.7, 2.0, 2.3, 2.7, 3.0, 3.3, 3.7, 4.0, 5.0]
  return validInputGrades.includes(grade) ? grade : 0
}

// Returns the variant if it is valid, otherwise the first valid variant.
function validateInputVariant(variant) {
  const validVariants = [1, 2]
  return validVariants.includes(variant) ? variant : validVariants[0]
}
</script>

<template>
  <div class="limit-max-width">
    <div class="flex flex-col gap-4 h-dvh text-center">
      <Menubar>
        <template #start> Bewertung Abschlussarbeit </template>
        <template #end>
          <div class="flex items-center gap-2">
            <LightDarkModeToggleButton v-model="lightDarkModeToggleButton" />
            <Button icon="pi pi-refresh" aria-label="Reset" text @click="reset" />
          </div>
        </template>
      </Menubar>
      <div class="flex flex-row mx-4">
        <div class="basis-full text-2xl text-gray-400/80">Schriftliche Arbeit</div>
      </div>
      <div class="flex flex-row gap-4 mx-4">
        <div class="basis-1/3">
          <label for="" class="inline-block pb-2">1. Gutachten</label>
          <GradeSelect v-model="gradeRating1" @change="update" />
        </div>
        <div class="basis-1/3">
          <label for="" class="inline-block pb-2">2. Gutachten</label>
          <GradeSelect v-model="gradeRating2" @change="update" />
        </div>
        <div class="basis-1/4">
          <label for="" class="inline-block pb-2">Note</label>
          <p class="font-bold text-3xl text-sky-500/90">
            {{ gradeWrittenThesis }}
          </p>
          <p class="text-gray-400/60">
            {{ gradeWrittenThesisCheck }}
          </p>
        </div>
      </div>
      <div class="flex flex-row mx-4">
        <div class="basis-full text-2xl text-gray-400/80">Verteidigung</div>
      </div>
      <div class="flex flex-row gap-4 mx-4">
        <div class="basis-1/3">
          <label for="" class="inline-block pb-2">Vortrag</label>
          <GradeSelect v-model="gradePresentation" @change="update" />
        </div>
        <div class="basis-1/3">
          <label for="" class="inline-block pb-2">Diskussion</label>
          <GradeSelect v-model="gradeDiscussion" @change="update" />
        </div>
        <div class="basis-1/4">
          <label for="" class="inline-block pb-2">Note</label>
          <p class="font-bold text-3xl text-orange-500/90">
            {{ gradeDefense }}
          </p>
          <p class="text-gray-400/60">
            {{ gradeDefenseCheck }}
          </p>
        </div>
      </div>
      <div class="flex flex-row mx-4">
        <div class="basis-full text-2xl text-gray-400/80">Gesamtnote</div>
      </div>
      <div class="flex flex-row mx-4">
        <div class="basis-full">
          <p class="font-bold text-5xl text-green-500/90">
            {{ gradeThesis }}
          </p>
          <p class="mt-2">"{{ gradeThesisAsText }}"</p>
          <p class="text-gray-400/60 mt-2">
            ({{ factorWrittenThesis }} ×
            <span class="text-sky-500/90">{{ gradeWrittenThesis }}</span> + {{ factorDefense }} ×
            <span class="text-orange-500/90">{{ gradeDefense }}</span
            >) : {{ factorDivisor }} =
            <span class="text-green-500/90">{{ gradeThesisCheck }}</span>
          </p>
          <p class="text-xs text-gray-400/50 mt-2">Angaben ohne Gewähr</p>
        </div>
      </div>
      <div class="flex flex-row flex-grow items-end mx-4">
        <VariantSelect v-model="calcVariant" @change="update" />
      </div>
      <div class="flex flex-row mx-4">
        <p class="basis-full text-xs text-gray-400/60 mb-5">
          Grade Calculator auf
          <a class="underline" href="https://github.com/tigion/htwd-project-grade-calculator-vuejs"
            >GitHub</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.limit-max-width {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.p-menubar {
  border-radius: 0;
  border-top: none;
  border-right: none;
  border-left: none;
}
</style>
