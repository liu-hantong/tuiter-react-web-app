import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    let active = 'home';
    if (paths.length === 3) {
        active = paths[2];
        if (active === 'edit-profile') {
            active = "profile";
        }
    }
    return (
        <div className="list-group">
            <a className="list-group-item" href="/"><i className="fab fa-twitter"></i></a>
            <Link to="/tuiter/home"
                  className={`list-group-item list-group-item-action ${active === 'home' ? "active" : ""}`}>
                <div className="float-start"><i className="fas fa-home"></i></div>
                <div className="d-none float-start d-xl-block">&nbsp;Home</div>
            </Link>
            <Link to="/tuiter/explore"
                  className={`list-group-item list-group-item-action ${active === 'explore' ? "active" : ""}`}>
                <div className="float-start"><i className="fas fa-hashtag"></i></div>
                <div className="d-none float-start d-xl-block">&nbsp;Explore</div>
            </Link>
            <Link to="/"
                  className={`list-group-item list-group-item-action ${active === 'lab' ? "active" : ""}`}>
                <div className="float-start"><i className="fas fa-running"></i></div>
                <div className="d-none float-start d-xl-block">&nbsp;Labs</div>
            </Link>
            <a href="/"
               className={`list-group-item list-group-item-action ${active === 'notifications' ? "active" : ""}`}>
                <div className="float-start"><i className="fas fa-bell"></i></div>
                <div className="d-none float-start d-xl-block">&nbsp;Notifications</div>
            </a>
            <a href="/"
               className={`list-group-item list-group-item-action ${active === 'messages' ? "active" : ""}`}>
                <div className="float-start"><i className="fas fa-envelope"></i></div>
                <div className="d-none float-start d-xl-block">&nbsp;Messages</div>
            </a>
            <a href="/"
               className={`list-group-item list-group-item-action ${active === 'bookmarks' ? "active" : ""}`}>
                <div className="float-start"><i className="fas fa-bookmark"></i></div>
                <div className="d-none float-start d-xl-block">&nbsp;Bookmarks</div>
            </a>
            <a href="/" className={`list-group-item list-group-item-action ${active === 'lists' ? "active" : ""}`}>
                <div className="float-start"><i className="fas fa-list"></i></div>
                <div className="d-none float-start d-xl-block">&nbsp;Lists</div>
            </a>
            <a href="/tuiter/profile"
               className={`list-group-item list-group-item-action ${active === 'profile' ? "active" : ""}`}>
                <div className="float-start"><i className="fas fa-user"></i></div>
                <div className="d-none float-start d-xl-block">&nbsp;Profile</div>
            </a>
            <a href="/" className={`list-group-item list-group-item-action ${active === 'more' ? "active" : ""}`}>
                <div className="float-start"><i className="fas fa-comment-dots"></i></div>
                <div className="d-none float-start d-xl-block">&nbsp;More</div>
            </a>
            <div className="d-grid mt-2">
                <a href="/" className="btn btn-primary btn-block rounded-pill">Tweet</a>
            </div>
        </div>
    )
};
export default NavigationSidebar;