import React from "react";

const BackgroundVideo = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <video autoPlay muted loop className="object-cover w-full h-full">
        <source src="src/assets/img/pexels_videos_4703 (1080p).mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default BackgroundVideo