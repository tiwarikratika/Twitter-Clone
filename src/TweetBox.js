import React, {useState, useEffect} from 'react';
import './TweetBox.css';
import {Avatar, Button} from "@material-ui/core";
import db from './firebase';
function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e =>{
        e.preventDefault();
        db.collection('posts').add({
            displayName : 'Kratika Tiwari',
            username : 'tiwarikratika08',
            verified : false,
            text: tweetMessage,
            avatar : "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            image : tweetImage

        });
        setTweetMessage("");
        setTweetImage("");

    }
    return (
        <div className = "tweetbox">
            <form>
                <div className = "tweetbox-input">
                    <Avatar src = "https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png"/>
                    <input onChange={(e)=>setTweetMessage(e.target.value)} value={tweetMessage}  type = "textbox" placeholder = "What's happening"/>
                   
                </div>
                
                 <input value={tweetImage} onChange={e=>setTweetImage(e.target.value)} type = "text" placeholder = "Optional :enter image URL" className="tweetbox-imginput"/>

                <Button onClick= {sendTweet} type="submit" className='tweetbox-tweetbtn'>Tweet</Button>
                    

                
            </form>
        </div>
    )
}

export default TweetBox;
