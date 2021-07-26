# Navigation

To establish navigation between components using Stack Navigator(BottomTab).

### How to use it in your code: 

Just add following 2 lines in your code 
1. `import Navigation from './navigation';` 
2. ` <Navigation />`

---
### Here is a bit more detailed code for `App.tsx` which establishes `Navigation` between different tabs:
``` 
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
```
