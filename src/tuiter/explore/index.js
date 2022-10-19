import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";

const ExploreComponent = () => {
    return (
        <>
            <div className="row">
                <div className="col-11">
                    <div className="input-group rounded-pill border border-secondary border-2 bg-white">
                        <span className="input-group-append">
                            <button style={{pointerEvents: "none"}} className="btn bg-white rounded-circle"
                                    type="button">
                                <i className="fa fa-search"></i>
                            </button>
                        </span>
                        <input className="form-control border-0 me-3" type="text" placeholder="Search"/>
                    </div>
                </div>
                <div className="col-1">
                    <div className="text-center">
                        <i className="fas fa-gear fa-2x" style={{color: "deepskyblue"}}></i>
                    </div>
                </div>
            </div>
            <ul className="nav nav-tabs nav-fill">
                <li className="nav-item">
                    <a className="nav-link active" href="/">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Trending</a>
                </li>
                <li className="d-none d-md-block nav-item">
                    <a className="nav-link" href="/">News</a>
                </li>
                <li className="d-none d-xl-block nav-item">
                    <a className="nav-link" href="/">Sports</a>
                </li>
                <li className="d-none d-xxl-block nav-item">
                    <a className="nav-link" href="/">Entertainment</a>
                </li>
            </ul>
            <div className="position-relative mt-2">
                <img alt="hello" src="../../../images/spaceship.webp" width="100%"/>
                <div className="inside">SpaceX's Spaceship</div>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;