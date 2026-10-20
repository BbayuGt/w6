import { useState } from 'react';
import LabelHarga from './LabelHarga'

export default function KartuMenu({hapus, id, kategori, harga, nama}) {
    const [jumlah, setJumlah] = useState(0);
    const [note, setNote] = useState("")
    kategori = kategori === undefined ? "Makanan" : kategori
    return <div className="panel">
        <h2>{nama} </h2>
        <p>{kategori}</p>
        <div className='kontrol'>
            <button onClick={() => setJumlah(jumlah -1)} disabled={jumlah <=0}>-</button>
            <p>{jumlah}</p>
            <button onClick={() => setJumlah(jumlah +1)}>+</button>
        </div>

        <p>{jumlah === 0 ? "Belum dipsean" : `Subtotal: Rp ${harga * jumlah}`}</p>
        <div className='kontrol'>
            {jumlah >= 5 ? <p className='badge'>Pesanan Banyak</p> : ""}
            <p >Catatan Pesanan</p>
            <input type="text" onChange={(e)=>setNote(e.currentTarget.value)} />
        </div>
        <p>Catatan: {note}</p>

        <LabelHarga harga={harga.toLocaleString()}/>

        <button onClick={hapus(id)}>Hapus</button>
    </div>
}