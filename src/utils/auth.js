import firebase from "firebase";

export function onAuthStateChanged() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          resolve(user);
        } else {
          reject(new Error('Error when getting the current user'));
        }
      });
    });
  }