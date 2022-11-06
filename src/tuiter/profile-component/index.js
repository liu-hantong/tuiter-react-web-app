import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Profile = () => {
    const profile = useSelector(state => state.profile);
    return (
        <div className="border border-secondary rounded-1">
            <div className="row mt-2 ms-1">
                <div className="col-1 mt-2">
                    <i className="fas fa-arrow-alt-left fa-xl"></i>
                </div>
                <div className="col-10 position-relative">
                    <h5 className="fw-bold">{`${profile.firstName}   ${profile.lastName}`}</h5>
                    <div className="text-dark position-absolute" style={{top: "25px"}}>6,114 Tweets</div>
                </div>
            </div>
            <img alt="" width="100%" height="200px" src={`/images/${profile.bannerPicture}`}/>
            <div className="float-left" style={{position: "relative"}}><img alt="" className="rounded-circle"
                                                                            width="120px"
                                                                            src={`/images/${profile.profilePicture}`}
                                                                            style={{
                                                                                position: "absolute",
                                                                                bottom: "-60px",
                                                                                left: "30px"
                                                                            }}/>
            </div>
            <div className="float-end mt-3 me-2">
                <Link to="/tuiter/edit-profile">
                    <button className="rounded-pill bg-black border-white border">Edit
                        profile
                    </button>
                </Link>
            </div>
            <br/><br/><br/>
            <div className="ms-3 position-relative me-2">
                <h5 className="fw-bold">{`${profile.firstName}   ${profile.lastName}`}</h5>
                <div className="text-dark position-absolute" style={{top: "25px"}}>{profile.handle}</div>
                <br/>
                <div className="text-white">{profile.bio}</div>
                <div>
                    <i className="fal fa-location-dot"></i>&nbsp;{profile.location} &nbsp;&nbsp;
                    <i className="fal fa-balloon"></i>&nbsp;Born on {profile.dateOfBirth} &nbsp;&nbsp;
                    <i className="fal fa-calendar-alt"></i>&nbsp;Joined {profile.dateJoined}
                </div>
                <div>
                    <div className="float-start text-white">{profile.followingCount}</div>
                    <div className="float-start">&nbsp;Following</div>
                    <div className="float-start text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{profile.followersCount}</div>
                    <div className="float-start">&nbsp;Followers</div>
                    <br/><br/>
                </div>
            </div>
        </div>
    );
};
export default Profile;