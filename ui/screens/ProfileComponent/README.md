# PostListRow Component

This component displays the profile of a user.
It takes the following as `props`:
- `profile : IUserData ` : An object which contains user data.
- `onLogout : ()=>void ` : Function to be called when the user will press the logout button on the top-right.
- `handlefblink : any ` : Function to be called when the user changes his/her fb-link
- `handleBackpress : any ` : Function to be called when the user will press the back button on top-left.

### How to use it in your code: 

Just add following 2 lines in your code 
1. `import ProfileScreen from './ui/screens/ProfileComponent/Profile';` 
2. `  <ProfileScreen 
      profile={<user>} 
      handlefblink={<handlefblink>} 
      onLogout={<handleLogOut>} 
      handleBackpress={<handleBackpress>}/>`

---
### Here is a bit more detailed code for `App.tsx` which uses `Profile` component:
``` 
import React from "react";
import ProfileScreen from ".ui/screens/ProfileComponent/Profile";

const App=()=>{
    const user:IUserData ={
        pk:1,
        name: "Bipplav Tiwari",
        username: "bipplavkt20",
        email: "bipplav@iitk.ac.in",
        fblink: "",
        following:420,
        roll: 200282,
    };
    const handleLogOut =()=>{
        return;

    };
    const handlefblink =()=>{
        return;
    };
    const handleBackpress =()=>{
        return;
    }
    return (
        
            <ProfileScreen 
            profile={user} 
            handlefblink={handlefblink} 
            onLogout={handleLogOut} 
            handleBackpress={handleBackpress}/>
        
    );
}
export default App;
```
Here is the picture of the screen:

---

<a href="url"><img src="https://user-images.githubusercontent.com/84016130/126867843-fa157263-70d7-4cb4-ae6e-46281c359b36.jpg" height="900" width="450" >
</a>
