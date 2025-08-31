import { useSelector } from 'react-redux';
import UseGetMoviesVideo from '../hooks/useGetMoviesVideos';

const VideoBackground = ({ movieId }) => {

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  //fetch trailer video and dispatch it to the store
  UseGetMoviesVideo(movieId);
  

  return (
    <div>
      <iframe className="w-screen h-screen absolute top-0 left-0 -z-10"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=" + trailerVideo?.key}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
      </iframe>
    </div>
  );
};

export default VideoBackground;
