declare interface IUserData {
  pk: number;
  name: string;
  roll: number;
  username: string;
  email: string;
  fblink: string;
  following: number;
}

declare interface IStream {
  pk: number;
  title: string;
  description: string;
  followed_by: number;
}

declare interface IPost {
  pk: number;
  post_text: string;
  post_title: string;
  pub_date: string;
  last_modified: string;
  author: UserData;
  stream: number;
}

declare interface IComment {
  pk: number;
  post: any;
  content: string;
  created_at: string;
  user: UserData;
  replies: Array<Comment>;
}
