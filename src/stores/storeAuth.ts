import { defineStore } from "pinia"
// @ts-ignore
import { auth } from '@/firebase/config.js'
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useStoreAuth = defineStore("storeAuth", {
  state: () => {
   return {

   }
  },
  actions: {
   registerUser(credentials: any) {
    createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user
    // ...
  })
  .catch((error) => {
    console.log(error.message)
    // ..
  });
   }
  },
  getters: {

  },
})
