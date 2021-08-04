import React from 'react'
import './Post.css'
import {Avatar} from '@material-ui/core';
import  VerifiedUserIcon  from '@material-ui/icons/VerifiedUser';
import  ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post( {
     displayName,
     username,
     verified,
     text,
     image,
     avatar
})
{

    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>{displayName} {" "}<span className="postheader-special">
                           
                            <VerifiedUserIcon className="post_badge">{username}</VerifiedUserIcon></span></h3>
                    </div>
                    <div className="post-headerdescription">
                        <p>{text}</p>
                    </div>

                </div>
                <img className = "post-image" src={image} alt=""/>

                <div className="post-footer
                ">
                  <ChatBubbleOutlineIcon fontSize="small"/>
                  <RepeatIcon fontSize="small"/>
                  <FavoriteBorderIcon fontSize="small"/>
                  <PublishIcon fontSize="small"/>
                </div>
            </div>
            
        </div>
    )
}

export default Post
