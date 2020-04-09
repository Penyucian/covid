const sURL = 'http://5e805eab0eb3ec0016e910ad.mockapi.io/Provinsi/1';
var odp = document.getElementById("odpP");
var pdp = document.getElementById("pdpP");
var positif = document.getElementById("positifP");

/* load */

document.getElementById("l").onload = function () { l() }

/* ~ */

function l(d, e) {
  setInterval(() => {
    dataAwal(d, e)
  }, 2000);
}
function dataAwal() {
  try {
    fetch(sURL).then(
      response => {
        return response.json();
      }).then(d => {
        odp.innerHTML = d.ODP;
        pdp.innerHTML = d.PDP;
        positif.innerHTML = d.Positif;
      })
  } catch (e) {
    console.log(e)
  };
}

function updateD() {

  let iOdp = document.getElementById("i-odp");
  let iPdp = document.getElementById("i-pdp");
  let iPositif = document.getElementById("i-positif");

  function post(obj) {
    fetch(sURL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then((x) => x.json())
      .then((obj) => {
        console.log('Success:', obj);
        iOdp.value = ""
        iPdp.value = ""
        iPositif.value = ""
      })
      .catch((e) => {
        console.error('Error:', e);
      });
  }

  try {
    fetch(sURL).then(
      response => {
        return response.json();
      }).then(d => {
        if (iOdp && iPdp && iPositif >= "0") {
          let iOT = Number(iOdp.value) + Number(d.ODP);
          let iPT = Number(iPdp.value) + Number(d.PDP);
          let iPoT = Number(iPositif.value) + Number(d.Positif);
          let obj = { "id": "1", "Provinsi": "Provinsi 1", "ODP": Number(iOT), "PDP": Number(iPT), "Positif": Number(iPoT) };
          post(obj);
          dataAwal();
        }
      })
  } catch (e) {
    console.log(e)
  };
}

function bAside() {
  var a = document.getElementById("bAside");
  let b = document.getElementById("tFab");
  a.style.right = "0px";
  b.style.right = "-1rem";
}

function tAside() {
  var a = document.getElementById("bAside");
  let b = document.getElementById("tFab");
  a.style.right = "-360px";
  b.style.right = "1rem";
}

function boModal1(){
  let a = document.getElementById("bModal1");
  let b = document.getElementsByTagName("BODY");
  a.style.display = "block";
  a.style.top = "0vh"
  b[0].style.overflowY = "hidden"
}
function clModal1(){
  let a = document.getElementById("bModal1");
  let b = document.getElementsByTagName("BODY");
  a.style.display = "none";
  a.style.top = "120vh"
  b[0].style.overflowY = "scroll"
}
function boModal2(){
  let a = document.getElementById("bModal2");
  let b = document.getElementsByTagName("BODY");
  a.style.display = "block";
  a.style.top = "0vh"
  b[0].style.overflowY = "hidden"
}
function clModal2(){
  let a = document.getElementById("bModal2");
  let b = document.getElementsByTagName("BODY");
  a.style.display = "none";
  a.style.top = "120vh"
  b[0].style.overflowY = "scroll"
}

function boModal3(){
  let a = document.getElementById("bModal3");
  let b = document.getElementsByTagName("BODY");
  a.style.display = "block";
  a.style.top = "0vh"
  b[0].style.overflowY = "hidden"
}
function clModal3(){
  let a = document.getElementById("bModal3");
  let b = document.getElementsByTagName("BODY");
  a.style.display = "none";
  a.style.top = "120vh"
  b[0].style.overflowY = "scroll"
}