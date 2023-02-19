<script lang="ts" setup>
import { ref } from 'vue';

/*
props 
*/
const props = defineProps({
    modelValue: {
        type: String,
        required: true
    }
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
    focusTextArea
})
</script>

<template>
      <div class="card has-background-link-light p-4 mb-5"> 
    <div class="field">
  <div class="control">
    <textarea 
    v-text="modelValue" 
    @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    class="textarea"
    placeholder="Add a new note"
    ref="textareaRef"
    maxlength="100"></textarea>
  </div>
</div>
 
<div class="field is-grouped is-grouped-right">
  <div class="control">
    <slot name="buttons" />
  </div>
</div>
</div>
</template>