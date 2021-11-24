import {useState, useEffect, createContext, useContext} from 'react';
import firebase from 'lib/firebase/client';

export const UserContext = createContext();

export default function UserContextComp({children}) {
  const [user, setUser] = useState(undefined);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const unsubscriber = firebase.auth().onAuthStateChanged(async (user) => {
      try {
        if (user) {
          const {uid} = user;
          setUser({uid});
        } else setUser(null);
      } catch (error) {
      } finally {
        setLoadingUser(false);
      }
    });

    return () => unsubscriber();
  }, []);

  return (
    <UserContext.Provider value={{user, setUser, loadingUser}}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);