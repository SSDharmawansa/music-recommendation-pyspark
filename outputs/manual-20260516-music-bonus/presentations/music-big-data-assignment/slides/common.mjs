export const C = {
  bg: "#FFFFFF",
  ink: "#111827",
  muted: "#4B5563",
  rule: "#E5E7EB",
  blue: "#2563EB",
  teal: "#0F766E",
  amber: "#D97706",
  rose: "#BE123C",
  violet: "#6D28D9",
  green: "#15803D",
  dark: "#162033",
  paleBlue: "#DBEAFE",
  paleTeal: "#CCFBF1",
  paleAmber: "#FEF3C7",
  white: "#FFFFFF",
};

export function bg(slide, ctx, dark = false) {
  ctx.addShape(slide, {
    x: 0,
    y: 0,
    w: ctx.W,
    h: ctx.H,
    fill: dark ? C.dark : C.bg,
    line: ctx.line("#00000000", 0),
  });
}

export function footer(slide, ctx, n, dark = false) {
  ctx.addText(slide, {
    text: "Big Data Analytics Mini Project | Last.fm 1K | PySpark",
    x: 64,
    y: 684,
    w: 760,
    h: 18,
    fontSize: 11,
    color: dark ? "#CBD5E1" : C.muted,
  });
  ctx.addText(slide, {
    text: String(n).padStart(2, "0"),
    x: 1172,
    y: 678,
    w: 44,
    h: 22,
    fontSize: 12,
    bold: true,
    color: dark ? "#CBD5E1" : C.muted,
    align: "right",
  });
}

export function kicker(slide, ctx, text, x = 64, y = 42, dark = false, color = C.blue) {
  ctx.addShape(slide, {
    name: `kicker-marker-${ctx.slideNumber}`,
    x,
    y: y + 3,
    w: 24,
    h: 4,
    fill: color,
    line: ctx.line("#00000000", 0),
  });
  ctx.addText(slide, {
    name: `kicker-label-${ctx.slideNumber}`,
    text: text.toUpperCase(),
    x: x + 34,
    y,
    w: 360,
    h: 18,
    fontSize: 11,
    bold: true,
    color: dark ? "#CBD5E1" : C.muted,
    valign: "middle",
  });
}

export function title(slide, ctx, claim, support, dark = false) {
  ctx.addText(slide, {
    text: claim,
    x: 64,
    y: 76,
    w: 760,
    h: 86,
    fontSize: 36,
    bold: true,
    color: dark ? C.white : C.ink,
    typeface: "Aptos Display",
  });
  if (support) {
    ctx.addText(slide, {
      text: support,
      x: 66,
      y: 174,
      w: 680,
      h: 42,
      fontSize: 15,
      color: dark ? "#CBD5E1" : C.muted,
    });
  }
}

export function metric(slide, ctx, label, value, x, y, w = 170, h = 92, color = C.blue, dark = false) {
  ctx.addShape(slide, {
    x,
    y,
    w,
    h,
    fill: dark ? "#243049" : C.white,
    line: ctx.line(dark ? "#334155" : C.rule, 1),
  });
  ctx.addText(slide, {
    text: value,
    x: x + 16,
    y: y + 16,
    w: w - 32,
    h: 32,
    fontSize: 27,
    bold: true,
    color,
  });
  ctx.addText(slide, {
    text: label,
    x: x + 16,
    y: y + 52,
    w: w - 32,
    h: 28,
    fontSize: 12,
    color: dark ? "#CBD5E1" : C.muted,
  });
}

export function hBar(slide, ctx, data, x, y, w, rowH, opts = {}) {
  const max = Math.max(...data.map((d) => d.value));
  data.forEach((d, i) => {
    const yy = y + i * rowH;
    const barW = Math.max(2, (d.value / max) * w);
    ctx.addText(slide, {
      text: d.label,
      x,
      y: yy + 2,
      w: opts.labelW ?? 178,
      h: 20,
      fontSize: opts.fontSize ?? 12,
      color: opts.dark ? "#E5E7EB" : C.ink,
    });
    ctx.addShape(slide, {
      x: x + (opts.labelW ?? 178),
      y: yy + 4,
      w: barW,
      h: 14,
      fill: d.color ?? opts.color ?? C.blue,
      line: ctx.line("#00000000", 0),
    });
    ctx.addText(slide, {
      text: d.valueLabel ?? d.value.toLocaleString(),
      x: x + (opts.labelW ?? 178) + barW + 10,
      y: yy + 1,
      w: 90,
      h: 20,
      fontSize: opts.fontSize ?? 12,
      color: opts.dark ? "#CBD5E1" : C.muted,
    });
  });
}

export function vBar(slide, ctx, data, x, y, w, h, opts = {}) {
  const max = Math.max(...data.map((d) => d.value));
  const gap = opts.gap ?? 12;
  const barW = (w - gap * (data.length - 1)) / data.length;
  data.forEach((d, i) => {
    const barH = Math.max(3, (d.value / max) * h);
    const xx = x + i * (barW + gap);
    ctx.addShape(slide, {
      x: xx,
      y: y + h - barH,
      w: barW,
      h: barH,
      fill: d.color ?? opts.color ?? C.teal,
      line: ctx.line("#00000000", 0),
    });
    ctx.addText(slide, {
      text: d.label,
      x: xx - 5,
      y: y + h + 10,
      w: barW + 10,
      h: 20,
      fontSize: opts.fontSize ?? 11,
      color: opts.dark ? "#CBD5E1" : C.muted,
      align: "center",
    });
  });
}

export function table(slide, ctx, rows, x, y, widths, rowH, opts = {}) {
  rows.forEach((row, r) => {
    let xx = x;
    const isHeader = r === 0;
    row.forEach((cell, c) => {
      const fill = isHeader ? (opts.headerFill ?? C.dark) : (r % 2 ? opts.altFill ?? "#FFFFFFCC" : opts.fill ?? "#FFFFFF80");
      ctx.addShape(slide, {
        x: xx,
        y: y + r * rowH,
        w: widths[c],
        h: rowH,
        fill,
        line: ctx.line(opts.line ?? C.rule, 1),
      });
      ctx.addText(slide, {
        text: String(cell),
        x: xx + 8,
        y: y + r * rowH + 6,
        w: widths[c] - 16,
        h: rowH - 10,
        fontSize: opts.fontSize ?? 11,
        bold: isHeader,
        color: isHeader ? C.white : (opts.textColor ?? C.ink),
        valign: "middle",
      });
      xx += widths[c];
    });
  });
}

export function note(slide, ctx, text, x, y, w, h, color = C.blue, dark = false) {
  ctx.addShape(slide, {
    x,
    y,
    w,
    h,
    fill: dark ? "#243049" : "#FFFFFFAA",
    line: ctx.line(color, 1.2),
  });
  ctx.addShape(slide, {
    x,
    y,
    w: 5,
    h,
    fill: color,
    line: ctx.line("#00000000", 0),
  });
  ctx.addText(slide, {
    text,
    x: x + 18,
    y: y + 14,
    w: w - 30,
    h: h - 26,
    fontSize: 14,
    color: dark ? "#E5E7EB" : C.ink,
  });
}
