# Demo videos

Drop your demo clips here, e.g.:

```
chess.mp4
domino.mp4
pnp.mp4
ood.mp4
compositional.mp4
ablation.mp4
```

## Recommended encoding

For smooth in-browser playback at small size, encode with:

```bash
ffmpeg -i input.mov -vf "scale=960:-2" \
  -c:v libx264 -profile:v high -level 4.0 -pix_fmt yuv420p \
  -crf 23 -preset slow -an \
  output.mp4
```

`-an` drops audio (most robot demos don't need it).
Aim for clip length 5–15 seconds; the `<video>` tag in `index.html`
loops them on hover.

## How to swap a placeholder for a real clip

In `index.html`, find a tile like:

```html
<div class="video-card placeholder">
  <div class="video-thumb">
    <span class="badge">Chinese Chess</span>
    <div class="play"></div>
    <span class="coming">Coming soon</span>
  </div>
  ...
</div>
```

Replace the `.video-thumb` block with:

```html
<div class="video-thumb">
  <span class="badge">Chinese Chess</span>
  <video src="static/videos/chess.mp4"
         poster="static/videos/chess-poster.jpg"
         muted loop playsinline preload="metadata"
         onmouseover="this.play()"
         onmouseout="this.pause();this.currentTime=0;"></video>
</div>
```

And drop the `placeholder` class from the parent `.video-card`.

## Poster images (optional but nice)

Generate a static thumbnail for each clip:

```bash
ffmpeg -ss 00:00:02 -i chess.mp4 -frames:v 1 -q:v 2 chess-poster.jpg
```
