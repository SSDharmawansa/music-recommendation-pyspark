import { C, bg, footer, kicker, metric } from "./common.mjs";

export async function slide01(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx, true);
  kicker(slide, ctx, "Mini project", 64, 44, true, C.amber);
  ctx.addText(slide, {
    text: "Music Listening Analytics and Recommendation System",
    x: 64,
    y: 110,
    w: 690,
    h: 120,
    fontSize: 42,
    bold: true,
    color: C.white,
    typeface: "Aptos Display",
  });
  ctx.addText(slide, {
    text: "Bonus-ready PySpark project using the Last.fm 1K listening-history dataset.",
    x: 68,
    y: 246,
    w: 620,
    h: 42,
    fontSize: 18,
    color: "#CBD5E1",
  });
  ctx.addShape(slide, { x: 64, y: 330, w: 700, h: 1.5, fill: "#64748B", line: ctx.line("#00000000", 0) });
  ctx.addText(slide, {
    text: "Part A: Spark analytics and listener segmentation\nPart B: ALS collaborative filtering music recommendations",
    x: 68,
    y: 360,
    w: 640,
    h: 72,
    fontSize: 18,
    color: "#E5E7EB",
  });
  metric(slide, ctx, "listening events used", "1.0M", 840, 124, 180, 96, C.amber, true);
  metric(slide, ctx, "unique artists", "23,007", 1040, 124, 180, 96, C.teal, true);
  metric(slide, ctx, "unique tracks", "159,093", 840, 242, 180, 96, C.blue, true);
  metric(slide, ctx, "Spark ML models", "2", 1040, 242, 180, 96, C.rose, true);
  ctx.addText(slide, {
    text: "Dataset source: Last.fm Dataset - 1K users",
    x: 842,
    y: 382,
    w: 360,
    h: 24,
    fontSize: 13,
    color: "#CBD5E1",
  });
  footer(slide, ctx, 1, true);
  return slide;
}
