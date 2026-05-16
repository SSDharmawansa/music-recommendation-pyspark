import { C, bg, footer, kicker, title, vBar, note } from "./common.mjs";

export async function slide06(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, "Part A", 64, 42, false, C.teal);
  title(slide, ctx, "Listening Time Analysis", "Timestamp features are used to compare listening activity by day and hour.");

  ctx.addText(slide, { text: "Listening events by day", x: 88, y: 236, w: 300, h: 24, fontSize: 18, bold: true, color: C.ink });
  vBar(slide, ctx, [
    { label: "Mon", value: 141259, color: C.blue },
    { label: "Tue", value: 142735, color: C.blue },
    { label: "Wed", value: 137821, color: C.blue },
    { label: "Thu", value: 138531, color: C.blue },
    { label: "Fri", value: 140578, color: C.blue },
    { label: "Sat", value: 149135, color: C.amber },
    { label: "Sun", value: 149941, color: C.amber },
  ], 94, 300, 460, 190, { gap: 16 });

  ctx.addText(slide, { text: "Evening activity by hour", x: 690, y: 236, w: 320, h: 24, fontSize: 18, bold: true, color: C.ink });
  vBar(slide, ctx, [
    { label: "15", value: 52743, color: C.teal },
    { label: "16", value: 53024, color: C.teal },
    { label: "17", value: 57733, color: C.teal },
    { label: "18", value: 61737, color: C.teal },
    { label: "19", value: 59236, color: C.teal },
    { label: "20", value: 56823, color: C.teal },
    { label: "21", value: 54675, color: C.teal },
  ], 696, 300, 410, 190, { gap: 14 });

  note(slide, ctx, "Result: Sunday has the highest listening volume, and 18:00 is the most active hour in the sample.", 260, 548, 760, 70, C.teal);
  footer(slide, ctx, 6);
  return slide;
}
