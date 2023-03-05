import { defineStore } from "pinia";
// @ts-ignore
import { db } from "@/firebase/config.js";
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
} from "firebase/firestore";

interface INote {
  id: string;
  content: string;
}

const notesCollectionRef = collection(db, "notes");

const notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"));

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [] as INote[],
    };
  },
  actions: {
    async getNotes() {
      onSnapshot(notesCollectionQuery, (querySnapshot) => {
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
    async addNote(note: string) {
      let currentDate = new Date().getTime();
      let date = currentDate.toString();

      await addDoc(notesCollectionRef, {
        content: note,
        date,
      });
    },
    async deleteNote(id: string) {
      await deleteDoc(doc(notesCollectionRef, id));
    },
    async updateNote(id: string, content: string) {
      await updateDoc(doc(notesCollectionRef, id), {
        content,
      });
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
