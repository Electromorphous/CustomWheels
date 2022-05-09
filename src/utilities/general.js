export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export async function glow(part) {
  for (let i = 0; i < 255; i += 17) {
    await sleep(0);
    part.current.material.emissive = {
      r: i / 500,
      g: i / 500,
      b: i / 500,
    };
  }
  for (let i = 255; i >= 0; i -= 17) {
    await sleep(0);
    part.current.material.emissive = {
      r: i / 500,
      g: i / 500,
      b: i / 500,
    };
  }
}
