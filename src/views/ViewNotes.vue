<script setup lang="ts">
import { ref } from 'vue';
import Note from '@/components/Notes/Note.vue'
import { useStoreNotes } from '@/stores/storeNotes'

const storedNotes = useStoreNotes()
/* 
notes
*/

const newNote = ref('')

const newNoteRef = ref<HTMLTextAreaElement>()

const addNote = () => {
  storedNotes.addNote(newNote.value)

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
v-for="note in storedNotes.notes"
:key="note.id"
:note="note"/>
</div>
</template>