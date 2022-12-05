import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuitThunk} from "../../services/tuits-thunks";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening,
            liked: false,
            disliked: false,
            likes: 0,
            dislikes: 0,
            replies: 0,
            retuits: 0,
            handle: "@me",
            tweets: "0k",
            image: "nodejs.png",
            time: "now",
            userName: "me",
            topic: "This Is Me"
        }
        dispatch(createTuitThunk(newTuit));
    }
    return (
        <div className="row">
            <div className="col-auto">
                <img alt="" className="rounded-circle" src="/images/nasa.webp" width={60}/>
            </div>
            <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
                 className="form-control border-0"
                 onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold btn-lg"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <i className="fal fa-image"></i>&nbsp;&nbsp;
                        <i className="fal fa-file"></i>&nbsp;&nbsp;
                        <i className="fal fa-bar-chart"></i>&nbsp;&nbsp;
                        <i className="fal fa-smile"></i>&nbsp;&nbsp;
                        <i className="fal fa-location"></i>&nbsp;&nbsp;
                    </div>
                </div>
            </div>
            <div className="col-12">
                <hr/>
            </div>
        </div>
    );
}
export default WhatsHappening;