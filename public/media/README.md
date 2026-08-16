# Drop your media here

Put files you download on your laptop into these folders, then list them in `src/content/media.ts`.

## Folders

- `photos/` — Spidey / suit / city photos (`.jpg` `.png` `.webp`)
- `comics/` — comic covers / panels you own copies of
- `clips/` — short `.mp4` clips

## Example in media.ts

```ts
comics: [
  { src: "/media/comics/issue-01.jpg", alt: "Comic cover", caption: "Issue 01" },
],
clips: [
  { src: "/media/clips/swing.mp4", title: "Swing clip" },
],
```

Hero video/photo can also be switched to local files:

```ts
heroPhoto: "/media/photos/hero.jpg",
heroVideo: "/media/clips/hero-loop.mp4",
```
