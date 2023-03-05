// stores/counter.js
import { defineStore } from "pinia";
// @ts-ignore
import { db } from "@/firebase/config.js";
import { collection, onSnapshot } from "firebase/firestore";

interface INote {
  id: string;
  content: string;
}

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [] as INote[],
    };
  },
  actions: {
    async getNotes() {
      onSnapshot(collection(db, "notes"), (querySnapshot) => {
        let notes = [] as INote[];
        querySnapshot.forEach((doc) => {
          let note: INote = {
            id: doc.id,
            content: doc.data().content,
          };
          notes.push(note);
        });
        this.notes = notes;
      });
    },
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
    updateNote(id: string, content: string) {
      let index = this.notes.findIndex((note) => {
        return note.id === id;
      });

      this.notes[index].content = content;
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id: string) => {
        return state.notes.filter((note) => {
          return note.id === id;
        })[0].content;
      };
    },
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    totalCharacters: (state) => {
      let count = 0;

      state.notes.forEach((note) => {
        count += note.content.length;
      });
      return count;
    },
  },
});
