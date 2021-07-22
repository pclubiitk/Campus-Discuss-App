import React from "react"

const commentData = {
  title: "Fake article title.",
  author: "grzm",
  comments: [
    {
      id: 1,
      text: "Example comment here.",
      author: "user2",
      children: [
        {
          id: 2,
          text: "Another example comment text.",
          author: "user3",
          children: [
            {
              id: 3,
              text: "Another example comment text.",
              author: "user4",
              children: []
            }
          ]
        }
      ]
    },
    {
      id: 4,
      text: "Example comment here 2.",
      author: "user5",
      children: []
    }
  ]
}


export default commentData;