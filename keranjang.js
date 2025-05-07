let keranjang = [];

function tambahKeKeranjang() {
  const select = document.getElementById("itemSelect");
  const harga = parseInt(select.value);
  const nama = select.options[select.selectedIndex].text.split(" - ")[0];

  if (harga === 0) return;

  // Menambahkan input jumlah barang
  const jumlah = prompt("Masukkan jumlah barang yang ingin dibeli:", "1");

  if (jumlah && !isNaN(jumlah) && jumlah > 0) {
    const jumlahBarang = parseInt(jumlah);

    // Cek apakah produk sudah ada di keranjang
    const existing = keranjang.find(item => item.nama === nama);
    if (existing) {
      existing.jumlah += jumlahBarang;
    } else {
      keranjang.push({ nama, harga, jumlah: jumlahBarang });
    }

    renderKeranjang();
  }
}

function renderKeranjang() {
  const tbody = document.getElementById("keranjangBody");
  const totalSpan = document.getElementById("totalHarga");
  tbody.innerHTML = "";

  let total = 0;
  keranjang.forEach((item, index) => {
    const row = document.createElement("tr");

    const totalItem = item.harga * item.jumlah;
    total += totalItem;

    row.innerHTML = `
      <td>${item.nama}</td>
      <td>Rp ${item.harga.toLocaleString()}</td>
      <td>${item.jumlah}</td>
      <td>Rp ${totalItem.toLocaleString()}</td>
      <td><button onclick="hapusItem(${index})">Hapus</button></td>
    `;
    tbody.appendChild(row);
  });

  totalSpan.textContent = total.toLocaleString();
}

function hapusItem(index) {
  keranjang.splice(index, 1);
  renderKeranjang();
}
