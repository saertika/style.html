let keranjang = [];

function tambahKeKeranjang() {
  const select = document.getElementById("itemSelect");
  const harga = parseInt(select.value);
  const nama = select.options[select.selectedIndex].text.split(" - ")[0];

  if (harga === 0) return;

  // Cek apakah produk sudah ada
  const existing = keranjang.find(item => item.nama === nama);
  if (existing) {
    existing.jumlah +=1;
  } else {
    keranjang.push({ nama, harga, jumlah: 1 });
  }

  renderKeranjang();
}

function ubahJumlah(index, delta) {
  keranjang[index].jumlah += delta;
  if (keranjang[index].jumlah < 1) keranjang[index].jumlah = 1;
  renderKeranjang();
}

function hapusItem(index) {
  keranjang.splice(index, 1);
  renderKeranjang();
}

function renderKeranjang() {
  const tbody = document.getElementById("keranjangBody");
  const totalSpan = document.getElementById("totalHarga");
  tbody.innerHTML = "";

  let total = 0;
  keranjang.forEach((item, index) => {
    const totalItem = item.harga * item.jumlah;
    total += totalItem;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.nama}</td>
      <td>Rp ${item.harga.toLocaleString()}</td>
      <td>
        <button onclick="ubahJumlah(${index}, -1)">-</button>
        ${item.jumlah}
        <button onclick="ubahJumlah(${index}, 1)">+</button>
      </td>
      <td>Rp ${totalItem.toLocaleString()}</td>
      <td><button onclick="hapusItem(${index})">Hapus</button></td>
    `;
    tbody.appendChild(row);
  });

  totalSpan.textContent = total.toLocaleString();
}
