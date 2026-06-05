const parseNumber = (value) => {
  if (!value) return 0;
  return parseFloat(value.replace(/[^0-9.]/g, "")) || 0;
};

// Extract weight from any text like:
// (total .66ct.) OR total 0.66ct OR 0.66ct
const extractWeight = (text) => {
  if (!text) return 0;

  const match = text.match(/([\d.]+)\s*ct/i);
  return match ? parseFloat(match[1]) : 0;
};

// Detect numeric columns automatically
const safeSplit = (line) => {
  return line
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
};

// MAIN UNIVERSAL PARSER
const parseTXT = (fileContent) => {
  const lines = fileContent
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  let parsedRows = [];
  let totalGems = 0;
  let totalWeight = 0;

  lines.forEach((line) => {
    const lower = line.toLowerCase();

    // skip summary lines
    if (lower.includes("total") && !lower.includes("ct")) return;

    const parts = safeSplit(line);

    // must have minimum structure
    if (parts.length < 3) return;

    const qty = parseInt(parts[0]) || 0;
    const stone = parts[1] || "Unknown";
    const shape = parts[2] || "Unknown";

    // flexible coordinate extraction
    const x = parseNumber(parts.find((p) => p.includes("X="))?.split("=")[1]);
    const y = parseNumber(parts.find((p) => p.includes("Y="))?.split("=")[1]);
    const z = parseNumber(parts.find((p) => p.includes("Z="))?.split("=")[1]);

    const weight = extractWeight(line);

    totalGems += qty;
    totalWeight += weight;

    parsedRows.push({
      qty,
      stone,
      shape,
      x,
      y,
      z,
      weight,
    });
  });

  return {
    rows: parsedRows,
    summary: {
      totalGems,
      totalWeight: Number(totalWeight.toFixed(2)),
      shapes: [...new Set(parsedRows.map((r) => r.shape))],
    },
  };
};

module.exports = { parseTXT };