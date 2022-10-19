import React from "react";

const PostItem = ({post}) => {
    return (
        <li className="list-group-item border-secondary">
            <div className="row">
                <div className="col-1">
                    <img className="float-start rounded-circle" src={`../../../images/${post.image}`}
                         width="40px"
                         height="40px"/>
                </div>
                <div className="col-11">
                    <div className="float-start fw-bold"> {post.topic} &nbsp;</div>
                    <div className="float-start"><i className="fa fa-circle fa-sm"></i> &nbsp;</div>
                    <div className="float-start text-white-50"> @{post.userName} • {post.time} </div>
                    <div className="float-end text-white-50"> ...</div>
                    <br/>
                    <div className="mb-2" style={{fontSize: "15px"}}>{post.content}</div>
                    <div className="row">
                        <div className="col">
                            <img src={`../../../images/${post.image}`} width="100%" height="100%"
                                 className={`border border-secondary ${post.title ? 'rounded-top' : 'rounded'}`}/>
                        </div>
                        {post.title &&
                            <div class="col-12">
                                <div class="border border-secondary rounded-bottom">
                                    <div class="mt-2 ms-2">
                                        {post.title}
                                    </div>
                                    <div class="text-white-50 ms-2" style={{fontSize: "15px"}}>
                                        {post.brief}
                                    </div>
                                    <div>
                                        <i class="fa fa-link text-white-50 fa-sm ms-2 mb-4">&nbsp;{post.source}</i>
                                    </div>
                                </div>
                            </div>}
                    </div>
                    <div className="col-12 mt-2">
                        <div className="row text-white-50">
                            <div className="col-3">
                                <i className="fa-light fa-comment"></i>
                                &nbsp;{post.comment}
                            </div>
                            <div className="col-3">
                                <i className="fa-light fa-recycle"></i>
                                &nbsp;{post.retweet}
                            </div>
                            <div className="col-3">
                                <i className="fa-light fa-heart"></i>
                                &nbsp;{post.like}
                            </div>
                            <div className="col-3">
                                <i className="fa-light fa-upload"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
};

export default PostItem;