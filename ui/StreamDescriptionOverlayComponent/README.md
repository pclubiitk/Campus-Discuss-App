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
