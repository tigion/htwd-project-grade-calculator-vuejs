<script setup>
import { ref } from 'vue'
import SelectGrade from './components/SelectGrade.vue'
import SelectVariant from './components/SelectVariant.vue'
import ButtonLightDark from './components/ButtonLightDark.vue'

import { Calculation } from './assets/js/Calculation.js'

const calc = new Calculation()

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

const buttonToggleDarkMode = ref()

init()

function init() {
  // Resets to initial values.
  reset()
}

function reset() {
  gradeRating1.value = checkInputGrade(1.3)
  gradeRating2.value = checkInputGrade(1.3)
  gradePresentation.value = checkInputGrade(1.3)
  gradeDiscussion.value = checkInputGrade(1.3)
  calcVariant.value = checkInputVariant(1)
  update()
}

function update() {
  calc.setInputGrades(
    checkInputGrade(gradeRating1.value),
    checkInputGrade(gradeRating2.value),
    checkInputGrade(gradePresentation.value),
    checkInputGrade(gradeDiscussion.value),
    checkInputVariant(calcVariant.value)
  )

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

function checkInputGrade(grade) {
  const defaultInputGrades = [1.0, 1.3, 1.7, 2.0, 2.3, 2.7, 3.0, 3.3, 3.7, 4.0, 5.0]
  return defaultInputGrades.includes(grade) ? grade : 0
}

function checkInputVariant(variant) {
  const variants = [1, 2]
  return variants.includes(variant) ? variant : variants[0]
}
</script>

<template>
  <div class="limit-max-width">
    <div class="flex flex-col gap-4 h-dvh text-center">
      <!-- <Menubar :model="items"> -->
      <Menubar>
        <template #start> Bewertung Abschlussarbeit </template>
        <template #end>
          <div class="flex items-center gap-2">
            <p>{{ buttonToggleDarkMode }}</p>
            <ButtonLightDark v-model="buttonToggleDarkMode" />
            <Button icon="pi pi-refresh" aria-label="Reset" text @click="reset" />
          </div>
        </template>
      </Menubar>
      <!-- </div> -->
      <div class="flex flex-row mx-4">
        <div class="basis-full text-2xl text-gray-400/50">Schriftliche Arbeit</div>
      </div>
      <div class="flex flex-row gap-4 mx-4">
        <div class="basis-1/3">
          <label for="" class="inline-block pb-2">1. Gutachten</label>
          <SelectGrade v-model="gradeRating1" @change="update" />
        </div>
        <div class="basis-1/3">
          <label for="" class="inline-block pb-2">2. Gutachten</label>
          <SelectGrade v-model="gradeRating2" @change="update" />
        </div>
        <div class="basis-1/4">
          <label for="" class="inline-block pb-2">Note</label>
          <p class="font-bold text-3xl text-blue-500">
            {{ gradeWrittenThesis }}
          </p>
          <p class="text-gray-500/50">
            {{ gradeWrittenThesisCheck }}
          </p>
        </div>
      </div>
      <div class="flex flex-row mx-4">
        <div class="basis-full text-2xl text-gray-500/50">Verteidigung</div>
      </div>
      <div class="flex flex-row gap-4 mx-4">
        <div class="basis-1/3">
          <label for="" class="inline-block pb-2">Vortrag</label>
          <SelectGrade v-model="gradePresentation" @change="update" />
        </div>
        <div class="basis-1/3">
          <label for="" class="inline-block pb-2">Diskussion</label>
          <SelectGrade v-model="gradeDiscussion" @change="update" />
        </div>
        <div class="basis-1/4">
          <label for="" class="inline-block pb-2">Note</label>
          <p class="font-bold text-3xl text-orange-500">
            {{ gradeDefense }}
          </p>
          <p class="text-gray-500/50">
            {{ gradeDefenseCheck }}
          </p>
        </div>
      </div>
      <div class="flex flex-row mx-4">
        <div class="basis-full text-2xl text-gray-500/50">Gesamtnote</div>
      </div>
      <div class="flex flex-row mx-4">
        <div class="basis-full">
          <p class="font-bold text-4xl text-green-500">
            {{ gradeThesis }}
          </p>
          <p>{{ gradeThesisAsText }}</p>
          <p class="text-gray-500/50 mt-2">
            ({{ factorWrittenThesis }} ×
            <span class="text-blue-500">{{ gradeWrittenThesis }}</span> + {{ factorDefense }} ×
            <span class="text-orange-500">{{ gradeDefense }}</span
            >) : {{ factorDivisor }} =
            <span class="text-green-500">{{ gradeThesisCheck }}</span>
          </p>
          <p class="text-xs text-gray-500/50 mt-2">Angaben ohne Gewähr</p>
        </div>
      </div>
      <div class="flex flex-row flex-grow items-end mx-4">
        <SelectVariant v-model="calcVariant" @change="update" />
      </div>

      <div class="flex flex-row mx-4">
        <p class="basis-full text-xs text-gray-500/50 mb-2">
          Notenrechner auf
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
