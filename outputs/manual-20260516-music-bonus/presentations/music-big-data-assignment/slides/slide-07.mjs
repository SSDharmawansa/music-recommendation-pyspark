import { C, bg, footer, kicker, title, table, note } from "./common.mjs";

export async function slide07(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, "Part A", 64, 42, false, C.violet);
  title(slide, ctx, "User Segmentation With KMeans", "Spark ML groups listeners using volume, diversity, repeat behavior, and time-based features.");

  table(slide, ctx, [
    ["Segment", "Users", "Avg listens", "Repeat rate", "Label"],
    ["0", "9", "56,323", "0.8273", "Heavy listeners"],
    ["1", "28", "13,596", "0.6861", "Balanced listeners"],
    ["2", "4", "28,098", "0.5590", "Music explorers"],
  ], 84, 260, [100, 90, 150, 150, 240], 54, { fontSize: 13 });

  ctx.addText(slide, { text: "Feature set", x: 846, y: 252, w: 180, h: 28, fontSize: 18, bold: true, color: C.ink });
  const features = ["total listens", "unique artists", "unique tracks", "active days", "avg listens / day", "artist diversity", "repeat rate", "night share", "weekend share"];
  features.forEach((f, i) => {
    const y = 296 + i * 28;
    ctx.addShape(slide, { x: 850, y: y + 6, w: 10, h: 10, fill: [C.blue, C.teal, C.amber, C.rose, C.violet][i % 5], line: ctx.line("#00000000", 0) });
    ctx.addText(slide, { text: f, x: 872, y, w: 250, h: 20, fontSize: 13, color: C.muted });
  });

  note(slide, ctx, "Output: the users are grouped into heavy listeners, balanced listeners, and music explorers.", 162, 562, 930, 62, C.violet);
  footer(slide, ctx, 7);
  return slide;
}
