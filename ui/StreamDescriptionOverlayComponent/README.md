# StreamDescriptionOverlayComponent
 This component takes the following as `props` :
    
- `open : boolean` : It decides if the overlay is open or not.
- `stream : IStream` : It is the stream whose details are to be shown.
- `isFollowed : boolean` : It specifies if the stream is followed by the user or not. It's value is `true` if it is being followed and `false` otherwise.
-  `onButtonPress : () => void` : This specifies the function which is to be invoked when the user taps on the Subscribe (or Unsubscribe) button.

---
The following snippet shows how to use it in your code:
```
<StreamDescriptionOverlay stream={mystream} open={true} isFollowed={true} onButtonPress={myfunc}/>        
```
---
Here is a bit more detailed code for `App.tsx` which uses `StreamDescriptionOverlay` component:
```
import {
    View
  } from "react-native";
  import React from 'react';
  import StreamDescriptionOverlay from './ui/StreamDescriptionOverlayComponent/StreamDescriptionOverlay-Component';  
  
const mystream: IStream = {
      pk: 101,
      title: "CRYPTICS",
      description: "This stream is all about cryptography.",
      followed_by: 1001,
  }
function myfunc(){
    return;
};  
  
export default myApp = () => {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <StreamDescriptionOverlay stream={mystream} open={true} isFollowed={true} onButtonPress={myfunc}/>        
      </View>
    );
};
```
