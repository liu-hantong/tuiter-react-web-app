const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item">
        <div class="row">
            <div class="col-2">
                <img class="rounded-circle" src=${who.avatarIcon} width="45px">
            </div>
            <div class="col-6">
                <div class="float-start fw-bold">
                    ${who.userName}&nbsp
                </div>
                <i class="fa fa-circle"></i>
                <div>
                    @${who.handle}
                </div>
            </div>
            <div class="col-1">
                <button type="submit" class="btn btn-primary rounded-pill mt-1 me-0">Follow</button>
            </div>
        </div>
    </li>
    `);
}

export default WhoToFollowListItem;