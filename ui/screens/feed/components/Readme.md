## Details about how components are linked and their main purpose 

1. `NewPostButton` - This folder contains code for creating a floating button on homescreen.  

2. `ProfilePicture` - This folder contains code for displaying user pfp of a specific post.    

3. `Post` - This folder contains code for creating a single user post using info from `Post.ts` file present inside *Data* folder.

            This part is further divided into 3 parts :
            
            a. LeftContainer - as a container/manipulator of left side of a post i.e. user pfp.
            
            b. MainContainer - as a container/manipulator for main content of post which is again divided into two parts 
            
                             i. Footer - contains code for adding like and comment part of a post
                              
                             ii. index.ts - contains code for integrating footer with main content of a post i.e username, 
                                              time of post, captions, images etc.   
            
            c. index.ts - This file contains code to import both these a and b container to create a single user post

4. `Feed` - This folder contains code to fetch all these above mentioned components at one place and display it at homescreen of app.  

----

>### Difference between Feed and Post
>The basic difference between both of them is that `Feed` contains several number of posts from different users and other components like *NewPostButton* while `Post` contains only one single post of a specific user. 
