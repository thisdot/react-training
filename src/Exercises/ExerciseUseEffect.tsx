/*
- Build a component that has a select box with 5 users. 
- When a user is selected, it should fire a state update that runs an effect which saves that user to sessionStorage. 
- Add another effect that runs when the component loads in order to check if there is a saved user in sessionStorage 
- If there is, set that user as the selected one in the select box.
*/

import { useState, useEffect } from "react";
  
export default function ExerciseUseEffect() {
  const [ user, setUser ] = useState("");
  
  useEffect(() => {
    const storedUser = window.sessionStorage.getItem("user");            
  
    if (storedUser) {
      console.log(`Found user in local storage: ${storedUser}`);
      setUser(storedUser);
    }
  }, []);                                                              
  
  useEffect(() => {   
    if (user.length) {
      window.sessionStorage.setItem("user", user);   
      console.log(`Setting user to local storage: ${user}`);
    }
  }, [user]);

  return (
    <select value={user} onChange={(e) => setUser(e.target.value)}>
      <option>Luigi</option>
      <option>Mario</option>
      <option>Toad</option>
      <option>Peach</option>
      <option>Wario</option>
    </select>
  );
};