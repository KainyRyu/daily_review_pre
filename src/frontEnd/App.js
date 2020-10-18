import React, {useState, useEffect, useCallback } from 'react';
import firebase from 'firebase/app';
import firebaseInitializing from './shared/utils/firebase'
import Landing from './shared/components/Landing/Landing';
import Login from './shared/components/Login';
import { AuthContext } from './shared/context/auth-context'
// import {MyContext} from "./shared/context/timeSlotsContext";
import './App.css';
import { useHttpClient } from './shared/hooks/http-hook';

// const initialState = {timeslots: [
//   {time: '00', title: '', review: '' },
//   {time: '01', title: '', review: '' },
//   {time: '02', title: '', review: 'Sleep' },
//   {time: '03', title: '', review: 'Sleep' },
//   {time: '04', title: '', review: 'Sleep' },
//   {time: '05', title: '', review: '' },
//   {time: '06', title: '', review: '' },
//   {time: '07', title: '', review: '' },
//   {time: '08', title: '', review: 'Yoga' },
//   {time: '09', title: '', review: '' },
//   {time: '10', title: '', review: '' },
//   {time: '11', title: '', review: '' },
//   {time: '12', title: '', review: 'Reading' },
//   {time: '13', title: '', review: '' },
//   {time: '14', title: '', review: '' },
//   {time: '15', title: '', review: '' },
//   {time: '16', title: '', review: '' },
//   {time: '17', title: '', review: '' },
//   {time: '18', title: '', review: '' },
//   {time: '19', title: '', review: '' },
//   {time: '20', title: '', review: '' },
//   {time: '21', title: '', review: '' },
//   {time: '22', title: '', review: '' },
//   {time: '23', title: '', review: '' },
// ]}

// function reducer(state, action) {
//   switch (action.type) {
//     case "CHANGE_TIMESLOT":
//       return {
//         ...state,
//         ["timeslots"]: state.timeslots.map((timeslot) =>
//           (timeslot.time >= action.newTimeSlot.starts && timeslot.time <= action.newTimeSlot.ends) ? {
//             ...timeslot,
//             "title": action.newTimeSlot.title
//           } : timeslot
//         )
//       };
//     default:
//       return state;
//   }
// }

function App(props) {	
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const signIn = useCallback(() => {
    setIsSignedIn(true);
  },[])

  const signOut = useCallback(() => {
    setIsSignedIn(false);
    firebase.auth().signOut();
  })
  // const [state, dispatch] = useReducer(reducer, initialState);	 



  useEffect(() => {	 
    async function result () {
      await firebaseInitializing.isInitialized().then(value => {	    
        setCurrentUser(value);
      });

      try {
        await sendRequest(
          'http://localhost:5000/api/users/signup', 
          'POST', 
          JSON.stringify({
            name: isSignedIn.displayName,
            email: isSignedIn.email,
            fuid: isSignedIn.uid
          }),
          {
            'Content-Type': 'application/json'
          }
        );
      } catch (err) {}
    } 
    result();
  }, []);

  useEffect(() => {
    async function result() {
      if (currentUser) {
        try{
          await sendRequest(
            'http://localhost:5000/api/users/signup', 
            'POST', 
            JSON.stringify({
              name: isSignedIn.displayName,
              email: isSignedIn.email,
              fuid: isSignedIn.uid
            }),
            {
              'Content-Type': 'application/json'
            }
          );
          signIn();
          console.log(currentUser);
        } catch (err) {
        }
      }
    }
    result();
  }, [currentUser]);

  useEffect(() => {
    async function result() {
      if (isSignedIn) {
        try {
          await sendRequest('http://localhost:5000/api/users');
        } catch (err) {}
      }
    }
    result();
  }, [isSignedIn])


  return !!currentUser ? (
    <AuthContext.Provider value={{ isSignedIn: isSignedIn, signIn: signIn, signOut: signOut }}>
      {/* //everytime context render it will rerender */}
      <Landing currentUser={currentUser}/>
      <button onClick={signOut}>SignOut</button>
    </AuthContext.Provider>
    // <MyContext.Provider value={{state, dispatch}}>
    // {/* </MyContext.Provider> */}
  ) : <Login />
}

export default App;

