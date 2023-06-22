function reset() {
    var deskripsi = document.getElementById('deskripsirumus');
    var rumusdasar = document.getElementById('rumusdasar');
    document.getElementById("inputField").value = "";
    document.getElementById("outputField").value = "";
    document.getElementById("outputRumus").value = "";
    document.getElementById("selectInput").value = "";
    penjelasan.innerHTML = "";
    deskripsi.innerHTML = "";
    rumusdasar.innerHTML = "";
}
function convert(){
    var konversi = document.getElementById('selectInput').value;
    var input = document.getElementById('inputField').value;
    var hasil;
    var penjelasan = document.getElementById('penjelasan');
    var deskripsi = document.getElementById('deskripsirumus');
    var rumusdasar = document.getElementById('rumusdasar');

    if (konversi=="C") {
          hasil = ((9/5) * parseInt(input)) + 32 + "°F";
          let rumus = document.getElementById('outputRumus').value = "( " + parseInt(input) + "°C * (9/5)) + 32 = "+ hasil;
          penjelasan.innerHTML = "<h2>Cara Konversi Dari Celcius (°C) ke Fahrenheit (°F)<h2>";
          deskripsi.innerHTML = "<p>suhu <em>S</em> dalam derajat Fahrenheit (°F) sama dengan suhu <em>S</em> dalam derajat <br>Celcius (°C) kali (9/5) tambah 32.<p>";
          rumusdasar.innerHTML = "<p><em>S</em><sub>(°F)</sub> = ( <em>S</em><sub>(°C)</sub> x 9/5 ) + 32 <br> atau <br><em>S</em><sub>(°F)</sub> = ( <em>S</em><sub>(°C)</sub> x 1.8 ) + 32 <p>";
    }else {
          hasil = (parseInt(input) - 32 ) * 5/9 + "°C";
          let rumus = document.getElementById('outputRumus').value = "( " + parseInt(input) + "°F - 32) * (5/9) = "+ hasil;
          penjelasan.innerHTML = "<h2>Cara Konversi Dari Fahrenheit (°F) ke Celcius (°C)<h2>";
          deskripsi.innerHTML = "<p>suhu <em>S</em> dalam derajat Celcius (°C) sama dengan suhu <em>S</em> dalam derajat <br>Fahrenheit (°F) dikurang 32 dan dikali (5/9).<p>";
          rumusdasar.innerHTML = "<p><em>S</em><sub>(°C)</sub> = ( <em>S</em><sub>(°F)</sub> - 32 ) x (5/9) <br> atau <br><em>S</em><sub>(°C)</sub> = ( <em>S</em><sub>(°F)</sub> - 32 ) ÷ 1.8 <p>";
    }
    document.getElementById("outputField").value = hasil;
}
function reverse() {
    var select = document.getElementById('selectInput').value;
    var input = document.getElementById('inputField').value;
    var hasil = document.getElementById('outputField').value;
    var fahrenheit = document.getElementById('fahrenheit').value;
    var celcius = document.getElementById('celcius').value;
    var penjelasan = document.getElementById('penjelasan');
    var deskripsi = document.getElementById('deskripsirumus');
    var rumusdasar = document.getElementById('rumusdasar');
    if (select=="C") {
        document.getElementById('inputField').value = hasil;
        document.getElementById('outputField').value = input;
        document.getElementById('selectInput').value = fahrenheit;
        document.getElementById('outputRumus').value = "";
        penjelasan.innerHTML = "";
        deskripsi.innerHTML = "";
        rumusdasar.innerHTML = "";
    } else {
        document.getElementById('inputField').value = hasil;
        document.getElementById('outputField').value = input;
        document.getElementById('selectInput').value = celcius;
        document.getElementById('outputRumus').value = "";
        penjelasan.innerHTML = "";
        deskripsi.innerHTML = "";
        rumusdasar.innerHTML = "";
    }
}