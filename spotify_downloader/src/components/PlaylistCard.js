import React from "react";

const PlaylistCard = ({ playlist }) => {
    return (
        <div className="playlist-card">
            <img src={playlist.images[0]?.url} alt="Playlist Cover" />
            <h3>{playlist.name}</h3>
            <p>{playlist.tracks.total} Tracks</p>
            <a href={playlist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                Open in Spotify
            </a>
        </div>
    );
};

export default PlaylistCard;
