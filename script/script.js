function validateForm() {
    let inputBeratBadan = document.getElementById('berat').value;
    let inputUsia = document.getElementById('usia').value;
    let inputTinggiBadan = document.getElementById('tinggi').value;

    console.log('BB:' + inputBeratBadan);
    console.log('Usia:' + inputUsia);
    console.log('Tinggi:' + inputTinggiBadan);

    if (inputBeratBadan != '' && inputTinggiBadan != '' && inputUsia != ''){
        let calculate = parseInt (inputBeratBadan) + parseInt (inputTinggiBadan);
        updateResult(calculate);
    }else{
        alert("Iputan kosong!!");
    }

}

function updateResult (value) {
    document.getElementById('result').innerHTML = value;
}
