import { C, bg, footer, kicker, title, table, note } from "./common.mjs";

export async function slide10(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx, true);
  kicker(slide, ctx, "Submission package", 64, 42, true, C.amber);
  title(slide, ctx, "The final package is ready for submission and viva demonstration.", "The project demonstrates both analytics and recommendation techniques using PySpark on a real music dataset.", true);

  table(slide, ctx, [
    ["Item", "File / evidence"],
    ["Part A notebook", "Music_Listening_Analytics_Bonus_PartA_PySpark.ipynb"],
    ["Part B notebook", "Music_Recommendation_PySpark.ipynb"],
    ["Dataset link", "Last.fm Dataset - 1K users"],
    ["Outputs", "CSV summaries, segments, metrics, and recommendations"],
    ["Guide", "README.md and BONUS_SUBMISSION_GUIDE.md"],
  ], 88, 250, [230, 720], 48, { headerFill: "#243049", fill: "#FFFFFF12", altFill: "#FFFFFF1A", line: "#475569", fontSize: 12, textColor: "#E5E7EB" });

  note(slide, ctx, "Demo flow: open Jupyter, run Part A summary and clustering cells, then run Part B ALS training and recommendation output cells.", 214, 564, 852, 68, C.amber, true);
  footer(slide, ctx, 10, true);
  return slide;
}
