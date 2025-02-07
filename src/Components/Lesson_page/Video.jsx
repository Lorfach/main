import { memo, useCallback, useState } from "react";

export const Video = memo(({ YT_url, RU_url }) => {
  const [video, setVideo] = useState(YT_url ? 0 : 1);

  const handleSetVideo = useCallback((e) => {
    setVideo(e);
  }, []);

  const buttonStyles = (isActive) =>
    `cursor-pointer select-none py-3 px-6 border border-[#63697a] text-white rounded-xl ${
      isActive ? "bg-[#c5c5c5] text-[#1e1e1f]" : ""
    }`;

  const extractYouTubeId = (url) => {
    const match = url?.match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|live\/|v\/|u\/\w\/))([a-zA-Z0-9_-]{11})/
    );
    return match?.[1] || "";
  };

  const extractRuTubeId = (url) => {
    const match = url?.match(/(?:private\/)?([a-f0-9]{32})(\/?.*)/);
    return match ? `${match[1]}${match[2]}` : "";
  };

  const videoId = extractYouTubeId(YT_url);
  const RUId = extractRuTubeId(RU_url);

  return (
    <>
      <div className="ml-4 md:mx-auto md:w-9/12 flex gap-4 font-[GolosText-Regular]">
        {YT_url && (
          <div onClick={() => handleSetVideo(0)} className={buttonStyles(!video)}>
            YouTube
          </div>
        )}
        {RU_url && (
          <div onClick={() => handleSetVideo(1)} className={buttonStyles(video)}>
            RUTUBE
          </div>
        )}
      </div>

      <div className="w-11/12 h-[450px] md:w-8/12 lg:w-8/12 mx-auto mt-8 flex items-center justify-center">
        {video ? (
          RUId ? (
            <iframe
              className="w-full h-full"
              src={`https://rutube.ru/play/embed/${RUId}`}
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            />
          ) : (
            <div>Ошибка загрузки RUTUBE видео.</div>
          )
        ) : videoId ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen; web-share"
            allowFullScreen
            frameBorder="0"
            title="YouTube video player"
          />
        ) : (
          <div>Ошибка загрузки YouTube видео.</div>
        )}
      </div>
    </>
  );
});
