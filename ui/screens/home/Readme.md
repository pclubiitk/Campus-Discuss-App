# PostListRow Component

 This component is divided into further two components i.e. `Leftcontainer` and `MainContainer`.
 
 `Leftcontainer` is used to present profile picture of author/user.
 
 `MainContainer` contains all other contents of a post (name, username, caption, date).


### How to use it in your code: 

Just add following 2 lines in your code 
1. `import Feed from './ui/screens/home/feed';` 
2. `<Feed />`

---
### Here is a bit more detailed code for `App.tsx` which uses `PostListRow` component:
``` 
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Feed from './ui/screens/home/feed'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Feed />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});  
```
Here is the picture of the screen:

---

<a href="url"><img src="" align="left" height="900" width="450" >
</a>
