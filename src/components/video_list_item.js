import React from 'react';

const VideoListItem = ({video}) => {
    const imageURL = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;

    return (
        <li className="list-group-item">
            <div className="video-list media">

                <div className="media-left">
                    <img className="media-object" src={imageURL} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{title}</div>
                </div>

            </div>
        </li>
    );
};

export default VideoListItem;
