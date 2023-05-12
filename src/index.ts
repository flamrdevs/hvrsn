const R = 6371;
const sqr = (v: number) => v * v;
const c = (a: number) => 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

const hvrsn = (radlat1: number, radlng1: number, radlat2: number, radlng2: number, r: number = R) =>
  r * c(sqr(Math.sin((radlat2 - radlat1) / 2)) + Math.cos(radlat1) * Math.cos(radlat2) * sqr(Math.sin((radlng2 - radlng1) / 2)));

export { R };
export default hvrsn;
