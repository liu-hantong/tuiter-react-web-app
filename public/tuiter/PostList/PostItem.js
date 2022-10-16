const PostItem = (post) => {
    return(`
        <li class="list-group-item border-secondary">
            <div class="row">
                <div class="col-1">
                    <img class="float-start rounded-circle" src=${post.profile} width="40px" height="40px">
                </div>
                <div class="col-11">
                   <div class="float-start fw-bold"> ${post.topic} &nbsp </div>
                   <div class="float-start"> <i class="fa fa-circle fa-sm"></i> &nbsp </div>
                   <div class="float-start text-white-50"> @${post.userName} • ${post.time} </div>
                   <div class="float-end text-white-50"> ... </div>
                   <br><div class="mb-2" style="font-size: 15">${post.content}</div>
                   <div class="row">
                        <div class="col">
                            <img src=${post.image} width="100%" height="100%" class="border border-secondary ${post.title ? 'rounded-top' : 'rounded'}">
                        </div>
                        ${post.title ? `
                        <div class="col-12">
                            <div class="border border-secondary rounded-bottom">
                                <div class="mt-2 ms-2">
                                    ${post.title}
                                </div>
                                <div class="text-white-50 ms-2" style="font-size: 15px">
                                    ${post.brief}    
                                </div>
                                <div>
                                    <i class="fa fa-link text-white-50 fa-sm ms-2 mb-4">&nbsp${post.source}</i>    
                                </div>
                            </div>
                        </div>
                        ` : ''}
                   </div>
                   <div class="col-12 mt-2">
                        <div class="row text-white-50">
                            <div class="col-3">
                                <i class="fa-light fa-comment"></i>  
                                ${post.comment}   
                            </div>
                            <div class="col-3">
                                <i class="fa-light fa-recycle"></i>  
                                ${post.retweet}   
                            </div>
                            <div class="col-3">
                                <i class="fa-light fa-heart"></i>  
                                ${post.like}   
                            </div>
                            <div class="col-3">
                                <i class="fa-light fa-upload"></i>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    `);
}

// <div class="text-muted">${post.topic}</div>
// <div class="text-white fw-bold float-lg-start">${post.userName}&nbsp</div>
// <div class="float-lg-start"><i class="fa fa-circle fa-sm"></i></div>
// <div class="float-lg-start text-muted">&nbsp-&nbsp${post.time}</div><br>
// <div class="fw-bold">${post.title}</div>
// ${post.tweets ? `<div class="text-muted"> ${post.tweets} Tweets </div>` : ''}


export default PostItem;