import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      setLoading(true); // Set loading to true initially

      // Simulate loading delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideos(json.items);
      setLoading(false); // Set loading to false after fetching videos
    } catch (error) {
      setLoading(false); // Ensure loading is set to false even in case of an error
    }
  };

  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos?.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          {loading ? (
            <Skeleton height={300} width={300} />
          ) : (
            <VideoCard info={video} />
          )}
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
