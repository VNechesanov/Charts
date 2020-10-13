const REM_RATIO: number = 0.0625;

export const px = (pixels: number) => `${pixels * REM_RATIO}rem`;
