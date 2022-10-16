const NavigationSidebar = (activeTab) => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/"><i class="fab fa-twitter"></i></a>
            <a href="../Home/index.html" class="list-group-item list-group-item-action ${activeTab === 'Home' ? "active" : ""}">
                <div class="float-start"><i class="fas fa-home"></i></div>
                <div class="d-none float-start d-xl-block">&nbspHome</i></div>
            </a>
            <a href="../Explore/index.html" class="list-group-item list-group-item-action ${activeTab === 'Explore' ? "active" : ""}">
                <div class="float-start"><i class="fas fa-hashtag"></i></div>
                <div class="d-none float-start d-xl-block">&nbspExplore</i></div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <div class="float-start"><i class="fas fa-bell"></i></div>
                <div class="d-none float-start d-xl-block">&nbspNotifications</i></div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <div class="float-start"><i class="fas fa-envelope"></i></div>
                <div class="d-none float-start d-xl-block">&nbspMessages</i></div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <div class="float-start"><i class="fas fa-bookmark"></i></div>
                <div class="d-none float-start d-xl-block">&nbspBookmarks</i></div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <div class="float-start"><i class="fas fa-list"></i></div>
                <div class="d-none float-start d-xl-block">&nbspLists</i></div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <div class="float-start"><i class="fas fa-user"></i></div>
                <div class="d-none float-start d-xl-block">&nbspProfile</i></div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <div class="float-start"><i class="fas fa-comment-dots"></i></div>
                <div class="d-none float-start d-xl-block">&nbspMore</i></div>
            </a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
};
// $('#wd-explore').append(NavigationSidebar());

export default NavigationSidebar;