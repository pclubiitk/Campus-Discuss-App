const user_def = {
  pk: 0,
  name: "",
  roll: 0,
  username: "",
  email: "",
  fblink: "",
  following: 0,
};

const comment = (
  name: string,
  pk: number,
  content: string,
  parent: number,
  replies: Array<IComment>
): IComment => {
  return {
    pk: pk,
    parent: parent,
    post: 0,
    content: content,
    created_at: "2020-05-05T23:37:49.992636+05:30",
    user: { ...user_def, name: name },
    replies: replies,
  };
};

const comments: Array<IComment> = [
  comment("dosa", 1, "next sem to be online", 0, [
    comment("a y19", 2, ";-( mujhe wapas jana hai", 1, [
      comment("iitk", 3, "Want to buy BournVita?", 2, []),
    ]),
  ]),
  comment("oli", 4, "Ayodhya is in Nepal", 0, [
    comment("Umar Akmal", 5, "Nepal is Ayodhya.", 4, []),
    comment(
      "Anonymous",
      6,
      "Go Brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr.",
      4,
      []
    ),
    comment("Bhau", 7, "Pehli fursat me nikal", 4, [
      comment(
        "Oli",
        9,
        "Mai aaya hi kab jo nikal jayun. Tu hi mere desh me hai.",
        7,
        []
      ),
    ]),
    comment(
      "Gandhi",
      8,
      "Ye kya chal rha hai padosi desh me. Kya isi din ke liye azad karaya tha",
      4,
      []
    ),
  ]),
];

export default comments;
