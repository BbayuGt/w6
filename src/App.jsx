import './App.css'

function App() {
  const namaPanggilan = "Bayu";
  const N = 85;
  const jam = 9;
  return (
    <>
      <h1 className='judul' style={{ color: 'blue' }}>Kantin {namaPanggilan}</h1>

      <p>Selamat {jam < 12 ? "pagi" : "siang"}</p>

      <p>Saldo awal kartu kantin: Rp {N * 1000}</p>
      <button disabled>Bayar</button>
    </>
  )
}

export default App
