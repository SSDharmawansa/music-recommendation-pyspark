import { C, bg, footer, kicker, title } from "./common.mjs";

function node(slide, ctx, label, sub, x, y, w, color) {
  ctx.addShape(slide, { x, y, w, h: 112, fill: C.white, line: ctx.line(color, 1.5) });
  ctx.addShape(slide, { x, y, w: 8, h: 112, fill: color, line: ctx.line("#00000000", 0) });
  ctx.addText(slide, { text: label, x: x + 22, y: y + 20, w: w - 36, h: 28, fontSize: 18, bold: true, color: C.ink });
  ctx.addText(slide, { text: sub, x: x + 22, y: y + 56, w: w - 38, h: 42, fontSize: 12.5, color: C.muted });
}

function arrow(slide, ctx, x, y, w, color) {
  ctx.addShape(slide, { x, y, w, h: 4, fill: color, line: ctx.line("#00000000", 0) });
  ctx.addShape(slide, { x: x + w - 2, y: y - 6, w: 14, h: 16, fill: color, line: ctx.line("#00000000", 0) });
}

export async function slide03(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, "Method", 64, 42, false, C.teal);
  title(slide, ctx, "Data Processing Workflow", "The same cleaned Last.fm data is used for analytics, clustering, and music recommendation.");

  node(slide, ctx, "Raw Last.fm files", "Listening history TSV plus user profile TSV from the downloaded dataset folder.", 70, 260, 235, C.blue);
  arrow(slide, ctx, 326, 313, 95, C.rule);
  node(slide, ctx, "PySpark cleaning", "Schema, timestamp parsing, track key fallback, profile join, and de-duplication.", 440, 260, 260, C.teal);
  arrow(slide, ctx, 722, 313, 90, C.rule);
  node(slide, ctx, "Feature engineering", "Play counts, listening hour, day, diversity, repeat rate, and ALS indexes.", 832, 260, 280, C.amber);

  ctx.addShape(slide, { x: 572, y: 402, w: 4, h: 80, fill: C.rule, line: ctx.line("#00000000", 0) });
  ctx.addShape(slide, { x: 370, y: 482, w: 408, h: 4, fill: C.rule, line: ctx.line("#00000000", 0) });
  ctx.addShape(slide, { x: 370, y: 482, w: 4, h: 46, fill: C.rule, line: ctx.line("#00000000", 0) });
  ctx.addShape(slide, { x: 774, y: 482, w: 4, h: 46, fill: C.rule, line: ctx.line("#00000000", 0) });

  node(slide, ctx, "Part A analytics", "EDA, temporal trends, country analysis, and KMeans user segments.", 210, 528, 320, C.violet);
  node(slide, ctx, "Part B recommender", "ALS collaborative filtering and top-10 music recommendations.", 650, 528, 320, C.rose);
  footer(slide, ctx, 3);
  return slide;
}
