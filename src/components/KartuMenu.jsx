import LabelHarga from './LabelHarga'

export default function KartuMenu({kategori, harga, nama}) {
    kategori = kategori === undefined ? "Makanan" : kategori
    return <div className="panel">
        <h2>{nama} </h2>
        <p>{kategori}</p>
        <LabelHarga harga={harga.toLocaleString()}/>
    </div>
}