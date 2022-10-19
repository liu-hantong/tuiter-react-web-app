const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col">
                    <div class="text-muted">${post.topic}</div>
                    <div class="text-white fw-bold float-lg-start">${post.userName}&nbsp</div>
                    <div class="float-lg-start"><i class="fa fa-circle fa-sm"></i></div>
                    <div class="float-lg-start text-muted">&nbsp-&nbsp${post.time}</div><br>
                    <div class="fw-bold">${post.title}</div>
                    ${post.tweets ? `<div class="text-muted"> ${post.tweets} Tweets </div>` : ''}
                </div>
                <div class="col">
                    <img class="float-end" src=${post.image} width="130" height="120">
                </div>
            </div>
        </li>
    `);
}

export default PostSummaryItem;