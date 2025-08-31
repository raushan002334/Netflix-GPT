const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video bg-gradient-to-r from-black to-transparent pt-36 px-12 text-white ">
    <h1 className="text-6xl font-bold">{title}</h1>
    <p className="py-6 text-medium w-2/4">{overview}</p>
    <div>
      <button className="bg-white text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-70 ">
        <img src="https://img.icons8.com/?size=100&id=EhGBqlGKPOmj&format=png&color=000000" alt="Play Icon" className="inline-block mr-2 size-5 " />
         Play</button>
      <button className="mx-4 bg-gray-800 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-100">More Info</button>
    </div>
    </div>
  );
};

export default VideoTitle;
