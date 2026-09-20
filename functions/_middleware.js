export async function onRequest(context) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title> Video </title>

  <meta name="description" content="Watch this video">

  <!-- Facebook / Open Graph -->
  <meta property="og:title" content="Video">
  <meta property="og:description" content="video">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://64.media.tumblr.com/27002dc1c1bdd9e64179c63ac4723462/54ab67c25d6d28b0-3d/s2048x3072/648c243d216ee38df6e18e28a16ef519f2edd54d.jpg/">
  <meta property="og:image" content="https://64.media.tumblr.com/27002dc1c1bdd9e64179c63ac4723462/54ab67c25d6d28b0-3d/s2048x3072/648c243d216ee38df6e18e28a16ef519f2edd54d.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
</head>

<body style="margin:0;background:#000;">

  <video
    controls
    playsinline
    style="width:100%;max-width:900px;display:block;margin:auto;"
  >
    <source
      src="https://www.youtube.com/watch?v=2Gku4u7X9SE"
      type="video/mp4"
    >
  </video>

</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      "content-type": "text/html; charset=UTF-8",
      "cache-control": "public, max-age=300"
    }
  });
}
