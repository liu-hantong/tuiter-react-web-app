import React from "react";

const PostSummaryItem = ({post}) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col">
                    <div className="text-muted">{post.topic}</div>
                    <div className="text-white fw-bold float-lg-start">{post.userName}&nbsp;</div>
                    <div className="float-lg-start"><i className="fa fa-circle fa-sm"></i></div>
                    <div className="float-lg-start text-muted">&nbsp;-&nbsp;{post.time}</div>
                    <br/>
                    <div className="fw-bold">{post.title}</div>
                    {post.tweets ? <div className="text-muted"> {post.tweets} Tweets </div> : ''}
                </div>
                <div className="col">
                    <img className="float-end" src={`../../../images/${post.image}`} width="130" height="120"/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;