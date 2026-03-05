const fondos = [
  "assets/fondos/septima1.jpg",
  "assets/fondos/septima2.jpg",
  "assets/fondos/septima3.jpg",
  "assets/fondos/septima4.jpg",
  "assets/fondos/septima5.jpg",
  "assets/fondos/septima6.jpg",
  "assets/fondos/plaza1.jpg",
  "assets/fondos/plaza2.jpg",
  "assets/fondos/carro1.jpg",
  "assets/fondos/carro2.jpg",
  "assets/fondos/virrey1.jpg",
  "assets/fondos/virrey2.jpg",
  "assets/fondos/virrey3.jpg",
  "assets/fondos/virrey4.jpg",
];


let indice = 0;

const enlace = document.createElement('a');
enlace.target = '_blank';
enlace.classList = 'enlace';

document.addEventListener("click", function() {
  indice++;
  
  if (indice >= fondos.length) {
    indice = 0;
  }

  document.body.style.backgroundImage = `url(${fondos[indice]})`;

  if (indice === 5) {
    enlace.href = 'https://www.google.com/maps/place/Los+Tronquitos/@4.6099852,-74.0701113,3a,75y,340.28h,101.4t/data=!3m7!1e1!3m5!1sMAo_e3FJzmb3ISIjraSZTQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-11.401001343541765%26panoid%3DMAo_e3FJzmb3ISIjraSZTQ%26yaw%3D340.2765049384506!7i16384!8i8192!4m6!3m5!1s0x8e3f99a1f7bd8aaf:0x2564da4824fcdbe7!8m2!3d4.6060276!4d-74.0712!16s%2Fg%2F1ptz3sd3m?entry=tts&g_ep=EgoyMDI2MDIyNS4wIPu8ASoASAFQAw%3D%3D&skid=8fedb4bd-dfa0-4fdf-ab98-f99f86948384';
    enlace.innerText = '¿dónde queda?';
    this.body.appendChild(enlace);
  } else if (indice === 6) {
    this.body.removeChild(enlace);

  } else if (indice === 7) {
    enlace.href = 'https://www.google.com/maps/place/Plaza+de+Bol%C3%ADvar/@4.5982087,-74.0755214,3a,75y,25.4h,90.2t/data=!3m7!1e1!3m5!1sJCFghCkyZE3RAd57IvXGmQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-0.20404858448732455%26panoid%3DJCFghCkyZE3RAd57IvXGmQ%26yaw%3D25.39528633957977!7i13312!8i6656!4m8!3m7!1s0x8e3f99a7eccfe58f:0x99cb72b35351476!8m2!3d4.5981898!4d-74.076053!10e5!15sChBwbGF6YSBkZSBib2xpdmFyWhIiEHBsYXphIGRlIGJvbGl2YXKSARNoaXN0b3JpY2FsX2xhbmRtYXJrmgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDIxb2FscFVSa1JWUkd4cFZqSkdORTVVVmxOYVJGbDNVMWQzTWxKWFl4QULgAQD6AQUI_QQQSQ!16zL20vMGMzcGt2?entry=tts&g_ep=EgoyMDI2MDIyNS4wIPu8ASoASAFQAw%3D%3D&skid=467004ff-b395-434e-b866-4ba5a7c44c5d';
    enlace.innerText = '¿dónde queda?';
     this.body.appendChild(enlace); 
  } 
  else if (indice === 8) {
    this.body.removeChild(enlace);
  }
    else if (indice === 9) {
       enlace.href ='https://www.google.com/maps/place/Represa+del+Sisga/@5.0951456,-73.7057542,3a,75y,87.28h,93.86t/data=!3m10!1e1!3m8!1sXwY44WNXUp6Lh7cUteU8bw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.859964763151609%26panoid%3DXwY44WNXUp6Lh7cUteU8bw%26yaw%3D87.28249926482707!7i16384!8i8192!9m2!1b1!2i46!4m6!3m5!1s0x8e40111109c6244d:0xe4af9fe97a517dce!8m2!3d5.0708333!4d-73.7163889!16s%2Fg%2F11_pks147?entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D'
       enlace.innerText = '¿roadtrip?';
        this.body.appendChild(enlace); 
  } 
  else if (indice === 10) {
    this.body.removeChild(enlace);
  }
     else if (indice === 11) {
       enlace.href ='https://www.instagram.com/fotosyya_/?hl=en'
       enlace.innerText = 'sígueme.';
        this.body.appendChild(enlace); 
  } 
  else if (indice === 14) {
    this.body.removeChild(enlace);
  }
});