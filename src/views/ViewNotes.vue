<script setup lang="ts">
import { ref } from 'vue';
import Note from '@/components/Notes/Note.vue'

/* 
notes
*/

const newNote = ref('')
const notes = ref([
  {
    id: 'id1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.'
  },
  {
    id: 'id2',
    content: 'This is a short note - woho'
  },
])
const newNoteRef = ref<HTMLTextAreaElement>()

const addNote = () => {
  let currentDate = new Date().getTime()
  let id = currentDate.toString()

  let note = {
    id: id,
    content: newNote.value
  }

  notes.value.unshift(note)

  newNote.value = ''

if (newNoteRef.value) newNoteRef.value.focus()
}


</script>

<template>

 
<div class="notes">
  <div class="card has-background-link-light p-4 mb-5"> 
    <div class="field">
  <div class="control">
    <textarea 
    v-model="newNote"
    class="textarea" 
    placeholder="Add a new note"
    ref="newNoteRef"></textarea>
  </div>
</div>

<div class="field is-grouped is-grouped-right">
  <div class="control">
    <button 
    @click="addNote"
    :disabled="!newNote"
    class="button is-link has-background-link-dark">
      Add New Note
    </button>
  </div>
</div>
</div>
<Note 
v-for="note in notes"
:key="note.id"
:note="note"/>
</div>
</template>