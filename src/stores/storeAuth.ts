import { defineStore } from "pinia"
// @ts-ignore
import { auth } from '@/firebase/config.js'
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

export const useStoreAuth = defineStore("storeAuth", {
  state: () => {
   return {

   }
  },
  actions: {
   registerUser(credentials: any) {
    createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
    .then((userCredential) => {
    console.log("signed in")
    const user = userCredential.user
    // ...
  })
  .catch((error) => {
    console.log(error.message)
    // ..
  })
},
  logoutUser() {
    signOut(auth).then(() => {
    console.log("user signed out")
    }).catch((error) => {
      console.log(error.message)
    });
   }
  },
  getters: {

  },
})
