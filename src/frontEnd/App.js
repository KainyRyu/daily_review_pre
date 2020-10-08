import React, {useState, useEffect, useReducer} from 'react';
import firebase from 'firebase';
import firebaseInitializing from './utils/firebase'
import Loading from './Loading';
import Landing from './components/Landing/Landing';
import Login from './components/Login';
import {MyContext} from "./context/timeSlotsContext";
import './App.css';

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
  const [currentUser, setCurrentUser] = useState(false);
  // const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function result () {
      await firebaseInitializing.isInitialized().then(value => {
        setCurrentUser(value);
      });
      await console.log('user name: ' + currentUser.displayName);
    }
    result();
  }, [currentUser]);

  return currentUser !== false ? (
    // <MyContext.Provider value={{state, dispatch}}>
      <Login />
    // {/* </MyContext.Provider> */}
  ) : <Landing />
}

export default App;
