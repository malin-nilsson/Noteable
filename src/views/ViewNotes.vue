<script setup lang="ts">
import { ref } from 'vue'
import Note from '@/components/Notes/Note.vue'
import { useStoreNotes } from '@/stores/storeNotes'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { useWatchCharacters } from '@/use/useWatchCharacters'

const storedNotes = useStoreNotes()
const newNote = ref('')
const addEditNoteRef = ref<any>()

const addNote = () => {
  storedNotes.addNote(newNote.value)
  newNote.value = ''
  addEditNoteRef.value?.focusTextArea()
}
useWatchCharacters(newNote, 250)
</script>

<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      ref="addEditNoteRef"
      placeholder="Add a new note..."
      label="Add note"
    >
      <template #buttons>
        <button
          @click="addNote"
          class="button is-link has-background-link-dark"
          :disabled="!newNote"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>
    <Note
      v-for="note in storedNotes.notes"
      :key="note.id"
      :note="note"
    />
  </div>
</template>
