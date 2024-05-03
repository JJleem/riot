import axios from "axios";
import { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);
const RiotAPI = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://api.sportmonks.com/v3/football/livescores/inplay?api_token=${API_KEY}&include=`,

          {
            headers: {
          
            },
          
          }
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Data</h2>
      <p>Puuid: {userData.puuid}</p>
      <p>Gamename: {userData.gameName}</p>
      <p>Tagline: {userData.tagLine}</p>
    </div>
  );
};

export default RiotAPI;
