console.log('script.js loaded');

document.addEventListener('DOMContentLoaded', () => {
  const upload = document.getElementById('uploadFoto');
  const preview = document.getElementById('previewFoto');
  const form = document.getElementById('messageForm');

  if (upload) {
    upload.addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        preview.innerHTML = '';
        const img = document.createElement('img');
        img.src = ev.target.result;
        img.style.maxWidth = '300px';
        preview.appendChild(img);
      };
      reader.readAsDataURL(file);
    });
  }

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      document.getElementById('outputNama').textContent = 'Nama: ' + (document.getElementById('nama').value || '');
      document.getElementById('outputTanggal').textContent = 'Tanggal Lahir: ' + (document.getElementById('tanggal').value || '');
      const gender = document.querySelector('input[name="gender"]:checked');
      document.getElementById('outputGender').textContent = 'Jenis Kelamin: ' + (gender ? gender.value : '');
      document.getElementById('outputPesan').textContent = 'Pesan: ' + (document.getElementById('pesan').value || '');
    });
  }
});