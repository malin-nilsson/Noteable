<script lang="ts" setup>
import { ref } from 'vue'
import { vFocus } from '@/directives/vFocus'

/*
props
*/
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
  },
  placeholder: {
    type: String,
    default: 'Type something...',
  },
  label: {
    type: String,
  },
})

/*
emits
*/
const emit = defineEmits(['update:modelValue'])

/*
focus textarea
*/
const textareaRef = ref<HTMLTextAreaElement>()
const focusTextArea = () => {
  textareaRef.value?.focus()
}

defineExpose({
  focusTextArea,
})
</script>

<template>
  <div
    :class="`has-background-${props.bgColor}`"
    class="card has-background-link-light p-4 mb-5"
  >
    <label
      v-if="props.label"
      class="has-text-black"
      >{{ props.label }}</label
    >
    <div class="field">
      <div class="control">
        <textarea
          :value="modelValue"
          @input="
            emit(
              'update:modelValue',
              ($event.target as HTMLTextAreaElement).value
            )
          "
          class="textarea"
          ref="textareaRef"
          :placeholder="props.placeholder"
          maxlength="100"
          v-focus
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>
