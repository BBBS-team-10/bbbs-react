import React from 'react';

function BlockFacebook() {
  return (
    <div className="card card_color_blue card_content_media">
      <iframe
        title="facebook-frame"
        className="card__iframe"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=630&height=630&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        scrolling="no"
        allowFullScreen="true"
        allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </div>
  );
}

export default BlockFacebook;
