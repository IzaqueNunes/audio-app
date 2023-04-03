export function formatTime(millis: number): string {
  const min = Math.floor(millis / 60000);
  const sec = ((millis % 60000) / 1000).toFixed(0);

  const time = `${min}:${Number(sec)}`;

  return time;
}
