const parseNumber = (val) => {
  if (!val) return 0;
  return parseFloat(val.replace(/[^0-9.]/g, "")) || 0;
};

const detectShape = (line) => {
  const shapes = ["round", "baguette", "princess", "oval"];

  const found = shapes.find((shape) =>
    line.toLowerCase().includes(shape)
  );

  return found ? found.toUpperCase() : "UNKNOWN";
};

const getSizeBucket = (x) => {
  if (!x || isNaN(x)) return "UNKNOWN";

  if (x <= 0.8) return "0 - 0.8";
  if (x <= 1.1) return "0.8 - 1.1";
  if (x <= 1.2) return "1.1 - 1.2";

  return "Above 1.2";
};

const extractWeight = (line) => {
  const match = line.match(/\((?:total)?\s*([\d.]+)\s*ct\.\)/i);

  if (match) {
    return parseFloat(match[1]) || 0;
  }

  return 0;
};

const parseEngine = (fileContent) => {
  const lines = fileContent
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const rawRows = [];
  const grouped = {};

  let totalGems = 0;
  let totalWeight = 0;

  for (const line of lines) {
    const qtyMatch = line.match(/^\s*(\d+)/);
    const qty = qtyMatch ? parseInt(qtyMatch[1]) : 0;

    const shape = detectShape(line);

    const x = parseNumber(
      line.match(/X\s*=\s*([\d.]+)/i)?.[1]
    );

    const y = parseNumber(
      line.match(/Y\s*=\s*([\d.]+)/i)?.[1]
    );

    const z = parseNumber(
      line.match(/Z\s*=\s*([\d.]+)/i)?.[1]
    );

    const weight = extractWeight(line);

    const sizeBucket = getSizeBucket(x);

    const row = {
      qty,
      shape,
      x,
      y,
      z,
      weight,
      sizeBucket,
    };

    rawRows.push(row);

    totalGems += qty;
    totalWeight += weight;

    if (!grouped[shape]) {
      grouped[shape] = {};
    }

    if (!grouped[shape][sizeBucket]) {
      grouped[shape][sizeBucket] = {
        qty: 0,
        weight: 0,
        rows: [],
      };
    }

    grouped[shape][sizeBucket].qty += qty;
    grouped[shape][sizeBucket].weight += weight;
    grouped[shape][sizeBucket].rows.push(row);
  }

  return {
    summary: {
      totalGems,
      totalWeight: Number(totalWeight.toFixed(2)),
      shapes: Object.keys(grouped),
    },
    grouped,
    rawRows,
  };
};

module.exports = { parseEngine };