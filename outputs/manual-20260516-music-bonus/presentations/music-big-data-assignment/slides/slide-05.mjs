import { C, bg, footer, kicker, title, hBar, table, note } from "./common.mjs";

export async function slide05(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, "Part A evidence", 64, 42, false, C.amber);
  title(slide, ctx, "Listening activity is highly concentrated around a few artists.", "Top artist and track counts reveal strong popularity concentration in the sampled listening events.");

  hBar(slide, ctx, [
    { label: "Kanye West", value: 27267, color: C.blue },
    { label: "Dir En Grey", value: 12006, color: C.teal },
    { label: "Radiohead", value: 7157, color: C.amber },
    { label: "Nine Inch Nails", value: 6711, color: C.rose },
    { label: "Muse", value: 6052, color: C.violet },
    { label: "T.I.", value: 5394, color: C.green },
  ], 84, 260, 390, 42, { labelW: 150 });

  table(slide, ctx, [
    ["Top track", "Artist", "Events"],
    ["See You In My Nightmares", "Kanye West", "2,069"],
    ["Say You Will", "Kanye West", "2,065"],
    ["Heartless", "Kanye West", "2,063"],
    ["Love Lockdown", "Kanye West", "2,062"],
  ], 750, 260, [240, 150, 90], 42, { fontSize: 11.5 });

  note(slide, ctx, "Interpretation: repeated listens to a compact set of popular tracks helps justify using implicit feedback for the recommender in Part B.", 180, 552, 900, 70, C.amber);
  footer(slide, ctx, 5);
  return slide;
}
