// stores/counter.js
import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
        },
        {
          id: "id2",
          content: "This is a short note - woho",
        },
      ],
    };
  },
  actions: {
    addNote(note: string) {
      let currentDate = new Date().getTime();
      let id = currentDate.toString();

      let newNote = {
        id,
        content: note,
      };

      this.notes.unshift(newNote);
    },
    deleteNote(id: string) {
      this.notes = this.notes.filter((note) => {
        return note.id !== id;
      });
    },
  },
});