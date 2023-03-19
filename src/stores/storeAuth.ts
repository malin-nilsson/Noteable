import { defineStore } from "pinia"
// @ts-ignore
import { auth } from '@/firebase/config.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import router from "@/router";
import { useStoreNotes } from "./storeNotes";

interface IUser {
  email: string | null
  password: string
  id?: string
}


export const useStoreAuth = defineStore("storeAuth", {
  state: () => {
   return {
    user: {} as IUser
   }
  },
  actions: {
    init() {
      const storeNotes = useStoreNotes()

      onAuthStateChanged(auth, (user) => {
        if (user) {
        this.user.id = user.uid
        this.user.email = user.email
        router.push("/")
        storeNotes.init()

        } else {
          this.user = {} as IUser
          router.replace("/auth")
          storeNotes.clearNotes()
        }
      })
    },
   registerUser(credentials: IUser) {
    createUserWithEmailAndPassword(auth, credentials.email as string, credentials.password as string)
    .then((userCredential) => {

  })
  .catch((error) => {
    console.log(error.message)

  })
},
loginUser(credentials: IUser) {
  signInWithEmailAndPassword(auth, credentials.email as string, credentials.password as string)
  .then((userCredential) => {
    const user = userCredential.user
    // ...
  })
  .catch((error) => {
    console.log(error.message)
  });
},
  logoutUser() {
    signOut(auth).then(() => {

    }).catch((error) => {
      console.log(error.message)
    });
   }
  },
  getters: {

  },
})
