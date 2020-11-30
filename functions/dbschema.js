let db = {
  users: [
    {
      userId: "jafoaefos11934qnf",
      email: "user@email.com",
      handle: "user",
      createdAt: "2019-03-15T10:59:52.7982",
      imageUrl: "image/sfalsfhashfafahsfdjahskf",
      bio: "Hello, my name is user, nice to meet you",
      website: "https://user.com",
      location: "London, UK"
    }
  ],
  screams: [
    {
      userHandle: "user",
      body: "this is the scream body",
      createdAt: "2019-09-13T14:20:42.422Z",
      likeCount: 5,
      commnetCount: 2
    }
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "kdsjflaeksfaekfdskfj",
      body: "nice one mate",
      createdAt: "2019-03-15T10:59:52.798Z"
    }
  ],
  notifications: [
    {
      recipient: "user",
      sender: "join",
      read: "true | false",
      screamId: "kdsjflaeksfaekfdskfj",
      type: "like | comment",
      createdAt: "2019-03-15T10:59:52.798Z"
    }
  ]
};
