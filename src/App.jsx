import './App.css'
import KartuMenu from './components/KartuMenu';
import Panel from './components/Panel';

function App() {
  const namaPanggilan = "Bayu";
  const N = 85;
  const jam = 9;
  let menu = [
    {
      id: 1,
      harga: 10000 + (N * 100),
      nama: "Nasi Ayam Geprek"
    },
    {
      id: 2,
      nama:"Katsu",
      harga: 15000 + (N * 100)
    },
    {
      id: 3,
      nama:"Es Teh",
      harga: 5000 + (N * 100),
      kategori: "Minuman"
    }
  ]

  function hapus(id) {
    menu = menu.filter((data) => data.id !== id)
  }

  return (
    <>
      <h1 className='judul' style={{ color: 'blue' }}>Kantin {namaPanggilan}</h1>

      <p>Selamat {jam < 12 ? "pagi" : "siang"}</p>

      <p>Saldo awal kartu kantin: Rp {N * 1000}</p>
      <button disabled>Bayar</button>

      <Panel>
        <h1 className="judul">Menu Hari Ini</h1>

        {
          menu.map((data) => <KartuMenu hapus={hapus} key={data.id} id={data.id} harga={data.harga} nama={data.nama} kategori={data.kategori} />)
        }
      </Panel>
    </>
  )
}

export default App
