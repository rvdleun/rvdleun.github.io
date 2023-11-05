const canvas = document.createElement("canvas");
const context = canvas.getContext("2d")!;

const lineWidth = 20;
const planeWidth = 640;

export const generateBackgroundPlane = (width: number, height: number) => {
  canvas.width = width + lineWidth;
  canvas.height = height + lineWidth;

  context.strokeStyle = "black";
  context.fillStyle = "green";
  context.lineWidth = lineWidth;

  context.beginPath();
  context.roundRect(lineWidth / 2, lineWidth / 2, width, height, 20);
  context.fill();
  context.stroke();

  return canvas.toDataURL();
};

const generateParagraph = (text: string, fontSize: number) => {
  const words = text.split(" ");
  const lines = [""];
  let line = "";

  context.font = `${fontSize}px Arial`;

  for (const word of words) {
    const testLine = line + word + " ";
    const metrics = context.measureText(testLine);
    const testWidth = metrics.width;

    if (testWidth > planeWidth && line !== "") {
      lines.push(line);
      line = word + " ";
    } else {
      line = testLine;
    }
  }

  lines.push(line);

  return {
    fontSize,
    lines,
  };
};

export interface TextPlaneSettings {
  fontSize: "medium" | "large";
  text: string;
}
export const generateTextPlane = (
  paragraphs: TextPlaneSettings[],
  color: string = "white",
) => {
  if (!context) return null;

  const data = paragraphs.map(({ fontSize, text }) =>
    generateParagraph(text, fontSize === "medium" ? 24 : 64),
  );

  const height = data.reduce((acc, { lines, fontSize }) => {
    return acc + lines.length * fontSize;
  }, 0);

  canvas.height = height;
  canvas.width = planeWidth;

  let y = 0;
  data.forEach(({ lines, fontSize }) => {
    lines.forEach((line, index) => {
      context.fillStyle = color;
      context.font = `${fontSize}px Arial`;
      context.fillText(line, 0, y + index * fontSize);
    });
    y += 10 + (lines.length - 1) * fontSize;
  });

  return {
    height,
    src: canvas.toDataURL(),
    width: planeWidth,
  };
};
