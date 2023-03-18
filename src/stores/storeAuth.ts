import { defineStore } from "pinia"
// @ts-ignore
import { auth } from '@/firebase/config.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

interface IUser {
  email: string | null
  password: string | null
  id: string
}

export const useStoreAuth = defineStore("storeAuth", {
  state: () => {
   return {
    user: {} as IUser
   }
  },
  actions: {
    init() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
        this.user.id = user.uid
        this.user.email = user.email
        console.log(this.user)
        } else {
          this.user = {} as IUser
        }
      })
    },
   registerUser(credentials: any) {
    createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
    .then((userCredential) => {
    const user = userCredential.user
    // ...
  })
  .catch((error) => {
    console.log(error.message)
    // ..
  })
},
loginUser(credentials: any) {
  signInWithEmailAndPassword(auth, credentials.email, credentials.password)
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
