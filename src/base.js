import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: `${process.env.apiKey}`,
  authDomain: "catch-of-the-day-chris-w.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-chris-w.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp };

export default base;