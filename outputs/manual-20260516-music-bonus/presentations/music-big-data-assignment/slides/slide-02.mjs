import { C, bg, footer, kicker, title, note } from "./common.mjs";

export async function slide02(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, "Assignment requirements", 64, 42, false, C.blue);
  title(slide, ctx, "Project Scope", "The submission covers the required music recommendation system and the extra analytics work for bonus marks.");

  ctx.addShape(slide, { x: 92, y: 245, w: 460, h: 230, fill: C.white, line: ctx.line(C.rule, 1) });
  ctx.addText(slide, { text: "Part A", x: 126, y: 274, w: 120, h: 26, fontSize: 16, bold: true, color: C.blue });
  ctx.addText(slide, { text: "Big Data Analytics", x: 126, y: 306, w: 300, h: 42, fontSize: 28, bold: true, color: C.ink });
  ctx.addText(slide, { text: "Spark aggregations, temporal patterns, country analysis, and KMeans listener segmentation.", x: 126, y: 376, w: 360, h: 54, fontSize: 15, color: C.muted });

  ctx.addShape(slide, { x: 728, y: 245, w: 460, h: 230, fill: C.white, line: ctx.line(C.rule, 1) });
  ctx.addText(slide, { text: "Part B", x: 762, y: 274, w: 120, h: 26, fontSize: 16, bold: true, color: C.rose });
  ctx.addText(slide, { text: "Recommendation System", x: 762, y: 306, w: 350, h: 42, fontSize: 28, bold: true, color: C.ink });
  ctx.addText(slide, { text: "Spark MLlib ALS on implicit feedback, model evaluation, and top-10 song recommendations.", x: 762, y: 376, w: 360, h: 54, fontSize: 15, color: C.muted });

  ctx.addShape(slide, { x: 596, y: 335, w: 88, h: 4, fill: C.amber, line: ctx.line("#00000000", 0) });
  ctx.addText(slide, { text: "BONUS", x: 582, y: 302, w: 116, h: 24, fontSize: 13, bold: true, color: C.amber, align: "center" });
  note(slide, ctx, "Submission files: two executed Jupyter notebooks, README, generated CSV outputs, and this presentation.", 226, 528, 828, 66, C.teal);
  footer(slide, ctx, 2);
  return slide;
}
