import React from "react";

const VideoCard = ({ info }) => {
  if (!info) {
    return <div>Error: No information available</div>;
  }

  // Check if snippet and statistics properties exist in info
  if (!info.snippet || !info.statistics) {
    return <div>Error: Invalid information format</div>;
  }
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-5 w-80 shadow">
      <img
        className="rounded-lg"
        src={thumbnails.medium.url}
        alt="thumbnails"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

// High Order Component
export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <VideoCard info={info} />
    </div>
  );
};
export default VideoCard;
