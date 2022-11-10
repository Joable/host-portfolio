import firebase from '../Config/firebase'

export function getData(document){
    return firebase.db.doc(`profile-data/${document}`).get();
}