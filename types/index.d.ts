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
  author: IUserData;
  stream: number;
}

declare interface IComment {
  pk: number;
  parent: number;
  post: number;
  content: string;
  created_at: string; // for ex: 2020-05-05T23:37:49.992636+05:30
  user: IUserData;
  replies: Array<IComment>;
}
