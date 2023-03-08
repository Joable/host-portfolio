import firebase from "../Config/firebase"

export function getProfileData(url){
    return firebase.db.collection(`profile-data/${url}`).get();
} 

export function getCollection(url){
    return firebase.db.collection(`${url}`).get();
}
