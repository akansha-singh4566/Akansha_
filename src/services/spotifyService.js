import axios from "axios";

export const getUserPlaylists = async (token) => {
    const response = await axios.get("https://api.spotify.com/v1/me/playlists", {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.items;
};
