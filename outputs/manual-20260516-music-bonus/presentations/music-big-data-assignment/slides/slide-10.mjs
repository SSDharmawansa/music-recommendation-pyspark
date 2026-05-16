import { C, bg, footer, kicker, title, table, note } from "./common.mjs";

export async function slide10(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, "Submission", 64, 42, false, C.amber);
  title(slide, ctx, "Files Prepared for Submission", "The project demonstrates big data analytics and a recommendation system using PySpark.");

  table(slide, ctx, [
    ["Item", "File / evidence"],
    ["Part A notebook", "Music_Listening_Analytics_Bonus_PartA_PySpark.ipynb"],
    ["Part B notebook", "Music_Recommendation_PySpark.ipynb"],
    ["Dataset link", "Last.fm Dataset - 1K users"],
    ["Outputs", "CSV summaries, segments, metrics, and recommendations"],
    ["Guide", "README.md and BONUS_SUBMISSION_GUIDE.md"],
  ], 88, 250, [230, 720], 48, { fontSize: 12 });

  note(slide, ctx, "Demo flow: open Jupyter, run Part A analytics and clustering cells, then run Part B ALS training and recommendation output cells.", 214, 564, 852, 68, C.amber);
  footer(slide, ctx, 10);
  return slide;
}
