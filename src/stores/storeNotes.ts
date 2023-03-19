import { defineStore } from "pinia"
// @ts-ignore
import { db } from "@/firebase/config.js"
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  type Unsubscribe,
} from "firebase/firestore"
import { useStoreAuth } from "./storeAuth"

interface INote {
  id: string
  content: string
  date: string
}

let notesCollectionRef: any
let notesCollectionQuery: any
let getNotesSnapshot: Unsubscribe

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [] as INote[],
      notesLoaded: false
    };
  },
  actions: {
    init() {
      const storeAuth = useStoreAuth()

      notesCollectionRef = collection(db, "users", storeAuth.user.id as string, "notes")
      notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"))
      
      this.getNotes()
    },
    async getNotes() {
      this.notesLoaded = false

      getNotesSnapshot = onSnapshot(notesCollectionQuery, (querySnapshot: any) => {
        let notes = [] as INote[]

        querySnapshot.forEach((doc: any) => {
          let note: INote = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date
          }
          notes.push(note)
        })
          this.notes = notes
          this.notesLoaded = true
      }, error => {
        console.log(error.message)
      })
    },
    clearNotes() {
      this.notes = []

      // unsubcribe from any active listener
      if (getNotesSnapshot) getNotesSnapshot()
    },
    async addNote(note: string) {
      let currentDate = new Date().getTime()
      let date = currentDate.toString()

      await addDoc(notesCollectionRef, {
        content: note,
        date,
      })
    },
    async deleteNote(id: string) {
      await deleteDoc(doc(notesCollectionRef, id))
    },
    async updateNote(id: string, content: string) {
      await updateDoc(doc(notesCollectionRef, id), {
        content,
      })
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id: string) => {
        return state.notes.filter((note) => {
          return note.id === id
        })[0].content
      }
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharacters: (state) => {
      let count = 0

      state.notes.forEach((note) => {
        count += note.content.length;
      });
      return count
    },
  },
})
