import { C, bg, footer, kicker, title, metric, hBar } from "./common.mjs";

export async function slide04(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, "Dataset", 64, 42, false, C.blue);
  title(slide, ctx, "Dataset Summary", "The notebook uses a laptop-safe sample of 1,000,000 listening events from the Last.fm 1K dataset.");

  metric(slide, ctx, "events processed", "1,000,000", 76, 246, 210, 98, C.blue);
  metric(slide, ctx, "active users in sample", "41", 314, 246, 190, 98, C.teal);
  metric(slide, ctx, "unique artists", "23,007", 532, 246, 190, 98, C.amber);
  metric(slide, ctx, "unique tracks", "159,093", 750, 246, 205, 98, C.rose);
  metric(slide, ctx, "profile countries", "66", 984, 246, 180, 98, C.violet);

  ctx.addText(slide, { text: "Top profile countries", x: 88, y: 410, w: 280, h: 24, fontSize: 18, bold: true, color: C.ink });
  hBar(slide, ctx, [
    { label: "United States", value: 228, color: C.blue },
    { label: "United Kingdom", value: 126, color: C.teal },
    { label: "Poland", value: 50, color: C.amber },
    { label: "Germany", value: 36, color: C.rose },
    { label: "Norway", value: 35, color: C.violet },
    { label: "Canada", value: 32, color: C.green },
  ], 88, 454, 390, 30, { labelW: 150 });

  ctx.addText(slide, {
    text: "This sample is large enough to show Spark loading, cleaning, joins, aggregations, feature preparation, and model training.",
    x: 770,
    y: 438,
    w: 330,
    h: 98,
    fontSize: 18,
    color: C.ink,
  });
  ctx.addShape(slide, { x: 748, y: 426, w: 5, h: 124, fill: C.blue, line: ctx.line("#00000000", 0) });
  footer(slide, ctx, 4);
  return slide;
}
