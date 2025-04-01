import React from 'react';
import Comment from './Comment';

const comments = [
    {
        name: "아아",
        comment: "목 아프다",
    },
    {
        name: "으아아",
        comment: "집 가고싶다",
    },
    {
        name: "흐암",
        comment: "심심하다",
    },
];

function CommentList(props) {
    return (
      <div>
        {comments.map((comment) => {
            return (
                <Comment name={comment.name} comment={comment.comment}></Comment>
            );
        })}
      </div>
    );
}

export default CommentList;