import Rebase from 're-base';
import * as firebase from 'firebase';

console.log(process.env.REACT_APP_apiKey)

const firebaseApp = firebase.initializeApp({
  apiKey: `${process.env.REACT_APP_apiKey}`,
  authDomain: "catch-of-the-day-chris-w.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-chris-w.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp };

export default base;