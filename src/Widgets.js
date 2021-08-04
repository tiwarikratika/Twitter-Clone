import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search'
import {TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed} from "react-twitter-embed"

function Widgets() {
    return (
        <div className = "widgets">
            <div className="widgets-input">
                <SearchIcon className="widgets-searchIcon"/>
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widget-widgetcontainer">
                <h2>What's happening?</h2>
                <TwitterTweetEmbed tweetId={"1312499402850746368"} />
                <TwitterTimelineEmbed sourceType="profile"
                screenName="tiwarikratika08" options={{height:400}} />

                <TwitterShareButton url ={"https://twitter.com/tiwarikratika08"} options={{text:"react js is aweome", via:"tiwarikratika08"}}/>
            </div>
           
        </div>
    )
}

export default Widgets
