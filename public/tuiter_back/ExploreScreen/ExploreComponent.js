import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-11">
                    <div class="input-group rounded-pill border border-secondary border-2 bg-white">
                        <span class="input-group-append">
                            <button style="pointer-events: none;" class="btn bg-white rounded-circle" type="button">
                                <i class="fa fa-search"></i>
                            </button>
                        </span>
                        <input class="form-control border-0 me-3" type="text" placeholder="Search">
                    </div>
                </div>
                <div class="col-1">
                    <div class="text-center">
                        <i class="fas fa-gear fa-2x" style="color: deepskyblue;"></i>
                    </div>
                </div>
           </div>
        <ul class="nav nav-tabs nav-fill">
            <li class="nav-item">
                <a class="nav-link active" href="#">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="d-none d-md-block nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="d-none d-xl-block nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="d-none d-xxl-block nav-item">
                <a class="nav-link" href="#">Entertainment</a>
            </li>
        </ul>
        <div class="mt-2">
            <img src="../../images/spaceship.webp" width="100%">
            <div class="inside">SpaceX's Spaceship</div>
        </div>

           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
