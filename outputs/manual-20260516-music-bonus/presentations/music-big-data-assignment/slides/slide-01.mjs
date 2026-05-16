import { fileURLToPath } from "node:url";
import { C, footer } from "./common.mjs";

export async function slide01(presentation, ctx) {
  const slide = presentation.slides.add();
  const heroImage = fileURLToPath(new URL("../assets/front-page-music-data.png", import.meta.url));

  ctx.addShape(slide, {
    x: 0,
    y: 0,
    w: ctx.W,
    h: ctx.H,
    fill: C.white,
    line: ctx.line("#00000000", 0),
  });
  ctx.addText(slide, {
    text: "Big Data Analytics Mini Project",
    x: 84,
    y: 72,
    w: 440,
    h: 24,
    fontSize: 14,
    bold: true,
    color: C.blue,
  });
  ctx.addText(slide, {
    text: "Music Recommendation System",
    x: 84,
    y: 150,
    w: 560,
    h: 108,
    fontSize: 44,
    bold: true,
    color: C.ink,
    typeface: "Aptos Display",
  });
  ctx.addText(slide, {
    text: "Using PySpark and the Last.fm 1K listening dataset",
    x: 88,
    y: 286,
    w: 540,
    h: 34,
    fontSize: 18,
    color: C.muted,
  });
  ctx.addText(slide, {
    text: "Part A: Listening analytics and user segmentation\nPart B: ALS collaborative filtering recommendations",
    x: 88,
    y: 384,
    w: 560,
    h: 64,
    fontSize: 16,
    color: C.ink,
  });
  ctx.addImage(slide, {
    path: heroImage,
    x: 720,
    y: 130,
    w: 410,
    h: 330,
    fit: "contain",
    alt: "Music recommendation and data analytics illustration",
  });
  ctx.addShape(slide, { x: 84, y: 520, w: 180, h: 3, fill: C.blue, line: ctx.line("#00000000", 0) });
  ctx.addText(slide, {
    text: "Dataset: Last.fm Dataset - 1K users",
    x: 88,
    y: 548,
    w: 420,
    h: 24,
    fontSize: 13,
    color: C.muted,
  });
  footer(slide, ctx, 1);
  return slide;
}
