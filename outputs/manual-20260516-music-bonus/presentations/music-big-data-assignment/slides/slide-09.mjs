import { C, bg, footer, kicker, title, table, note } from "./common.mjs";

export async function slide09(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, "Part B", 64, 42, false, C.rose);
  title(slide, ctx, "Recommendation Output", "The model scores candidate tracks and removes songs already listened to by the selected user.");

  table(slide, ctx, [
    ["Rank", "Recommended track", "Artist", "Score"],
    ["1", "Stand Up Guy", "T.I.", "1.6746"],
    ["2", "Cream", "Prince", "1.4785"],
    ["3", "Me And Those Dreamin' Eyes Of Mine", "D'Angelo", "1.4744"],
    ["4", "Rain On Me", "Ashanti", "1.4671"],
    ["5", "Kingdom Of Doom", "The Good, The Bad & The Queen", "1.4627"],
    ["6", "Sweet Sweet", "The Smashing Pumpkins", "1.4592"],
  ], 82, 248, [70, 340, 330, 100], 44, { fontSize: 11.5 });

  note(slide, ctx, "Selected user: user_000031. The notebook generates top recommendations that can be shown during the demo.", 174, 576, 920, 66, C.rose);
  footer(slide, ctx, 9);
  return slide;
}
