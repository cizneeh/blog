// layout.tsxの中で、pageが勝手にSuspenseでネストされ、このLoadingがfallbackになる
export default function Loadiing() {
  return <p>Loading...</p>
}
