import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase.config";
import useAxiosOpen from "../hooks/useAxiosOpen";




export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const googleProvider=new GoogleAuthProvider()
    const [loading,setLoading]=useState(true)
    const[user,setUser]=useState(null)

const openAxios=useAxiosOpen()



    const createUser=(email,Password)=>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth,email,Password)
  
    };
    
    const userSingIn=(email,password)=>{
      setLoading(true)
      return  signInWithEmailAndPassword(auth,email,password)
    };

    const googleLogIn=()=>{
      setLoading(true)
      return signInWithPopup(auth,googleProvider)
    }
    
    const updateUserProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
          displayName: name, photoURL: photo
      });
    }

 const userLogOut=()=>{
  setLoading(true)
    return signOut(auth)
 }










    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
       
          setUser(currentUser)
          const userInfo={email:currentUser.email}
         
          if(currentUser){
            openAxios.post('/jwt',userInfo)
            .then(res=>{
            console.log(res.data)
             if(res.data.token){
              localStorage.setItem('access_token',res.data.token)
              setLoading(false)
             } 


            })
          }else{

            localStorage.removeItem('access_token')
            setLoading(false)
  
            }
  
         






           })
     
          return ()=>{
             unSubscribe()
          }
     
     },[]);







const authValues={user,createUser,userSingIn,googleLogIn,userLogOut,loading,updateUserProfile}





    return (
    <AuthContext.Provider value={authValues}>
            {children}
    </AuthContext.Provider>
    );
};





export default AuthProvider;