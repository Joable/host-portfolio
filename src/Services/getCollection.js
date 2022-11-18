import firebase from "../Config/firebase"

export function getCollection(url){
    return firebase.db.collection(`profile-data/${url}`).get();
} 