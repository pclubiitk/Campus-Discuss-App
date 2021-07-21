# FullPostComponent

This component takes the following as `props` :
   
- `post : IPost` : It is the post whose full part is to be shown.
- `onOpenComments : () => void` : This specifies the function which is to be invoked when the user taps on the Comments button.
---

The following snippet shows how to use it in your code:
```
<FullPost post={samplepost} onOpenComments={samplefunction} />        
```
where 
```
const samplepost: IPost = {
  post_text: "Virtualization massively improves memory consumption and performance of large lists by maintaining a finite render window of active items and replacing all items outside of the render window with appropriately sized blank space. The window adapts to scrolling behavior, and items are rendered incrementally with low-pri after any running interactions if they are far from the visible area, or with hi otherwise to minimize the potential of seeing blank space.Base implementation for the more convenient FlatList and SectionList components, which are also better documented. In general, this should only really be used if you need more flexibility than FlatList provides.",
  pub_date: "27-06-2021T13:04:48",
  author: IUserData,
  }
```

Sample Image:

---
<a href="url">
<img src="">
</a>
