import React from "react";

const TuitStats = ({tuit}) => {
    const liked = tuit.liked;
    return (
        <>
            <div className="row text-white-50">
                <div className="col-3">
                    <i className="fa-light fa-comment"></i>
                    &nbsp;{tuit.replies}
                </div>
                <div className="col-3">
                    <i className="fa-light fa-recycle"></i>
                    &nbsp;{tuit.retuits}
                </div>
                <div className="col-3">
                    {
                        liked && <i className="fa-solid fa-heart" style={{color: "red"}}></i>
                    }
                    {
                        !liked && <i className="fa-light fa-heart"></i>
                    }
                    &nbsp;{tuit.likes}
                </div>
                <div className="col-3">
                    <i className="fa-light fa-upload"></i>
                </div>
            </div>
        </>
    )
};

export default TuitStats;