<script setup lang="ts">
import { useStoreNotes } from '@/stores/storeNotes'
import { useWatchCharacters } from '@/use/useWatchCharacters'
import { ref } from 'vue'

const storeNotes = useStoreNotes()
const loveNoteable = ref('')
useWatchCharacters(loveNoteable, 50)
</script>

<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Characters (of all notes)</td>
          <td>{{ storeNotes.totalCharacters }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
