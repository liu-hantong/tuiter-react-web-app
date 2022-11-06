import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editProfile} from "../profile-component/profile-reducer";
import {Link} from "react-router-dom";

const EditProfile = () => {
    const profile = useSelector(state => state.profile);
    let [firstName, setFirstName] = useState(profile.firstName);
    let [lastName, setLastName] = useState(profile.lastName);
    let [bio, setBio] = useState(profile.bio);
    let [location, setLocation] = useState(profile.location);
    let [website, setWebsite] = useState(profile.website);
    let [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth);
    const dispatch = useDispatch();
    const saveClickHandler = () => {
        console.log('here');
        const newEdit = {
            firstName: firstName,
            lastName: lastName,
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: dateOfBirth
        }
        dispatch(editProfile(newEdit));
    }

    return (
        <div className="border border-secondary rounded-1">
            <div className="row mt-2 ms-1">
                <div className="col-1 mt-1">
                    <i className="fas fa-x fa-l"></i>
                </div>
                <div className="col-11 position-relative">
                    <h5 className="float-start fw-bold mt-1">Edit profile</h5>
                    <Link to="/tuiter/profile">
                        <button className="me-2 float-end btn btn-primary rounded-pill bg-black fw-bold border-white"
                                onClick={saveClickHandler}>Save
                        </button>
                    </Link>
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
            <br/><br/><br/>
            <div className="border border-secondary ms-2 me-2">
                <div className="ms-1">Name (first and last name seperated by space)</div>
                <textarea title="dsds" style={{
                    borderStyle: "none",
                    outline: "none",
                    overflow: "auto",
                    backgroundColor: "black",
                    width: "500px"
                }}
                          className="ms-1"
                          onChange={(event) => {
                              setFirstName(event.target.value.split(' ')[0]);
                              setLastName(event.target.value.split(' ')[1]);
                          }}
                >{`${profile.firstName} ${profile.lastName}`}</textarea>
            </div>
            <br/>
            <div className="border border-secondary ms-2 me-2">
                <div className="ms-1">Bio</div>
                <textarea title="dsds" style={{
                    borderStyle: "none",
                    outline: "none",
                    overflow: "auto",
                    backgroundColor: "black",
                    width: "500px"
                }}
                          className="ms-1"
                          onChange={(event) => setBio(event.target.value)}
                >{profile.bio}</textarea>
            </div>
            <br/>
            <div className="border border-secondary ms-2 me-2">
                <div className="ms-1">Location</div>
                <textarea title="dsds" style={{
                    borderStyle: "none",
                    outline: "none",
                    overflow: "auto",
                    backgroundColor: "black",
                    width: "500px"
                }}
                          className="ms-1"
                          onChange={(event) => setLocation(event.target.value)}
                >{profile.location}</textarea>
            </div>
            <br/>
            <div className="border border-secondary ms-2 me-2">
                <div className="ms-1">Website</div>
                <textarea title="dsds" style={{
                    borderStyle: "none",
                    outline: "none",
                    overflow: "auto",
                    backgroundColor: "black",
                    width: "500px"
                }}
                          className="ms-1"
                          onChange={(event) => setWebsite(event.target.value)}
                >{profile.website}</textarea>
            </div>
            <br/>
            <div className="border border-secondary ms-2 me-2">
                <div className="ms-1">Birth Date</div>
                <textarea title="dsds" style={{
                    borderStyle: "none",
                    outline: "none",
                    overflow: "auto",
                    backgroundColor: "black",
                    width: "500px"
                }}
                          className="ms-1"
                          onChange={(event) => setDateOfBirth(event.target.value)}
                >{profile.dateOfBirth}</textarea>
            </div>
            <br/>
        </div>
    );
};
export default EditProfile;