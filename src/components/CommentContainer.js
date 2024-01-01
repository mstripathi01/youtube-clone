import React from "react";

const commentdata = [
  {
    name: "Mayank Tripathi",
    text: "Lorem ipsum dolor sit amet, consectrur adip",
    replies: [],
  },
  {
    name: "Mayank Tripathi",
    text: "Lorem ipsum dolor sit amet, consectrur adip",
    replies: [
      {
        name: "Mayank Tripathi",
        text: "Lorem ipsum dolor sit amet, consectrur adip",
        replies: [],
      },
      {
        name: "Mayank Tripathi",
        text: "Lorem ipsum dolor sit amet, consectrur adip",
        replies: [],
      },
      {
        name: "Mayank Tripathi",
        text: "Lorem ipsum dolor sit amet, consectrur adip",
        replies: [
          {
            name: "Mayank Tripathi",
            text: "Lorem ipsum dolor sit amet, consectrur adip",
            replies: [
              {
                name: "Mayank Tripathi",
                text: "Lorem ipsum dolor sit amet, consectrur adip",
                replies: [
                  {
                    name: "Mayank Tripathi",
                    text: "Lorem ipsum dolor sit amet, consectrur adip",
                    replies: [],
                  },
                  {
                    name: "Mayank Tripathi",
                    text: "Lorem ipsum dolor sit amet, consectrur adip",
                    replies: [
                      {
                        name: "Mayank Tripathi",
                        text: "Lorem ipsum dolor sit amet, consectrur adip",
                        replies: [
                          {
                            name: "Mayank Tripathi",
                            text: "Lorem ipsum dolor sit amet, consectrur adip",
                            replies: [
                              {
                                name: "Mayank Tripathi",
                                text: "Lorem ipsum dolor sit amet, consectrur adip",
                                replies: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Mayank Tripathi",
    text: "Lorem ipsum dolor sit amet, consectrur adip",
    replies: [],
  },
  {
    name: "Mayank Tripathi",
    text: "Lorem ipsum dolor sit amet, consectrur adip",
    replies: [],
  },
  {
    name: "Mayank Tripathi",
    text: "Lorem ipsum dolor sit amet, consectrur adip",
    replies: [],
  },
  {
    name: "Mayank Tripathi",
    text: "Lorem ipsum dolor sit amet, consectrur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, reply } = data;
  return (
    <div className=" flex p-3 rounded-sm  my-2 shadow-sm">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://freesvg.org/img/abstract-user-flat-4.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="border border-l-black ml-7 pl-5 ">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className=" ml-5 w-[1200px]">
      <h1 className="text-2xl font-bold py-5">Comments</h1>
      <CommentList comments={commentdata} />
    </div>
  );
};

export default CommentContainer;
