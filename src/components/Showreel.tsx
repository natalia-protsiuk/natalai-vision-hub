const Showreel = () => {
  return (
    // <div className="aspect-video">
    //   <iframe
    //     src="https://player.vimeo.com/video/1083334995?h=0f5d743984&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    //     className="w-full h-full"
    //     allow="autoplay; fullscreen; picture-in-picture"
    //     allowFullScreen
    //     title="Showreel Video"
    //   ></iframe>
    // </div>
    <div className="aspect-video">
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe
          src="https://player.vimeo.com/video/1083334995?h=0f5d743984&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title="Your Business in Motion"
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
};

export default Showreel;
