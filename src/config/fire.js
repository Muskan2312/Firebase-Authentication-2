
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyD3JhdveLtyuz8qdhwwfFbqY_YXpQ5Ckp4",
  authDomain: "webauth-e26cd.firebaseapp.com",
  projectId: "webauth-e26cd",
  storageBucket: "webauth-e26cd.appspot.com",
  messagingSenderId: "261931984673",
  appId: "1:261931984673:web:a465decda6e2193d124060"
};


initializeApp(firebaseConfig);
export const auth = getAuth()
export const google = new GoogleAuthProvider()
export const facebook = new FacebookAuthProvider()
export const twitter = new TwitterAuthProvider()
export const github = new GithubAuthProvider()