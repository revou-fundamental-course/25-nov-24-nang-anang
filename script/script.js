const bmiText = document.getElementById('result');
const descStatus = document.getElementById('status');
const form = document.querySelector('form');

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e){
    e.preventDefault();

    const berat = parseFloat(form.berat.value);
    const tinggi = parseFloat(form.tinggi.value);
    const usia = parseInt(form.usia.value);

    if (isNaN(berat)|| isNaN(tinggi) ||isNaN(usia)|| berat <=0 || tinggi <=0 || usia <=0 ){
        alert ("Mohon masukkan data dengan benar!");
        return;
    }

    const tinggiDlmMeter = tinggi/100; /*konversi tinggi bada cm -> m*/
    const bmi = berat/ Math.pow(tinggiDlmMeter,2); /*rumus BMI*/
    const desc = kriteriaBMI (bmi);

    bmiText.textContent = bmi.toFixed(1);
    descStatus.innerHTML = desc;
}

// fungsi if untuk kriteria BMI
function kriteriaBMI(bmi){
    if(bmi < 18.5){
        return 'Kurang berat badan';
    }else if(bmi < 25){
        return 'Normal (Ideal)';
    }else if (bmi < 30){
        return 'Kelebihan berat badan';
    }else{
        return 'Obesitas';
    }
}

function reset(){
    document.getElementById('result').value.reset();
    document.getElementById('status').value.reset();
}