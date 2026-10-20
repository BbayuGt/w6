import './App.css'
import KartuMenu from './components/KartuMenu';
import Panel from './components/Panel';

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

      <Panel>
        <h1 className="judul">Menu Hari Ini</h1>

        <KartuMenu nama="Nasi Ayam Geprek" harga={10000 + (N * 100)}></KartuMenu>
        <KartuMenu nama="Katsu" harga={15000 + (N * 100)}></KartuMenu>
        <KartuMenu nama="Es Teh" harga={5000 + (N * 100)} kategori={"Minuman"}></KartuMenu>
      </Panel>
    </>
  )
}

export default App
