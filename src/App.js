import React, { useEffect, useState } from "react";
import { getSpotifyAuthUrl } from "./services/spotifyAuth";
import { getUserPlaylists } from "./services/spotifyService";
import PlaylistCard from "./components/PlaylistCard";

function App() {
    const [token, setToken] = useState("");
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const hash = window.location.hash;
        let storedToken = window.localStorage.getItem("token");

        if (!storedToken && hash) {
            storedToken = new URLSearchParams(hash.substring(1)).get("access_token");
            window.localStorage.setItem("token", storedToken);
            window.location.hash = "";
        }
        setToken(storedToken);
    }, []);

    const handleLogin = () => {
        window.location.href = getSpotifyAuthUrl();
    };

    const handleLogout = () => {
        setToken("");
        setPlaylists([]);
        window.localStorage.removeItem("token");
    };

    const fetchPlaylists = async () => {
        if (token) {
            const userPlaylists = await getUserPlaylists(token);
            setPlaylists(userPlaylists);
        }
    };

    const exportToCSV = () => {
        let csvContent = "data:text/csv;charset=utf-8,";
        playlists.forEach((playlist) => {
            csvContent += `${playlist.name},${playlist.tracks.total},${playlist.external_urls.spotify}\n`;
        });
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "spotify_playlists.csv");
        document.body.appendChild(link);
        link.click();
    };

    return (
        <div className="container">
            <h1>Spotify Playlist Exporter</h1>
            {!token ? (
                <button onClick={handleLogin}>Login to Spotify</button>
            ) : (
                <>
                    <button onClick={handleLogout}>Logout</button>
                    <button onClick={fetchPlaylists}>Fetch Playlists</button>
                    {playlists.length > 0 && <button onClick={exportToCSV}>Export as CSV</button>}
                </>
            )}

            <div className="playlist">
                {playlists.map((playlist) => (
                    <PlaylistCard key={playlist.id} playlist={playlist} />
                ))}
            </div>
        </div>
    );
}

export default App;

