import { C, bg, footer, kicker, title, metric } from "./common.mjs";

function block(slide, ctx, label, sub, x, y, w, color) {
  ctx.addShape(slide, { x, y, w, h: 96, fill: C.white, line: ctx.line(color, 1.4) });
  ctx.addText(slide, { text: label, x: x + 18, y: y + 18, w: w - 36, h: 24, fontSize: 17, bold: true, color });
  ctx.addText(slide, { text: sub, x: x + 18, y: y + 50, w: w - 36, h: 34, fontSize: 12, color: C.muted });
}

export async function slide08(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, "Part B model", 64, 42, false, C.rose);
  title(slide, ctx, "ALS turns listening counts into ranked song recommendations.", "Play count is treated as implicit preference, then Spark MLlib ALS learns user and track factors.");

  block(slide, ctx, "Listening events", "Raw user, artist, track, timestamp rows.", 82, 270, 220, C.blue);
  block(slide, ctx, "Play counts", "Group by user and track, then log-scale preference.", 352, 270, 240, C.teal);
  block(slide, ctx, "ALS model", "Spark MLlib collaborative filtering with implicitPrefs=True.", 642, 270, 230, C.rose);
  block(slide, ctx, "Top-10 output", "Exclude known songs and rank unseen candidates.", 922, 270, 230, C.amber);
  [312, 602, 882].forEach((x) => ctx.addShape(slide, { x, y: 316, w: 30, h: 4, fill: C.rule, line: ctx.line("#00000000", 0) }));

  metric(slide, ctx, "model interactions", "84,633", 210, 464, 180, 92, C.blue);
  metric(slide, ctx, "RMSE diagnostic", "1.3045", 426, 464, 180, 92, C.rose);
  metric(slide, ctx, "Precision@10", "0.0244", 642, 464, 180, 92, C.teal);
  metric(slide, ctx, "Hit Rate@10", "0.1220", 858, 464, 180, 92, C.amber);
  footer(slide, ctx, 8);
  return slide;
}
