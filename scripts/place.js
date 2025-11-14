const temperature = 10; // °C
const windSpeed = 5; // km/h

function calculateWindChill(t, w) {

    return 13.12 + 0.6215*t - 11.37*Math.pow(w, 0.16) + 0.3965*t*Math.pow(w, 0.16);

}

const windChillSpan = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {

    const wc = calculateWindChill(temperature, windSpeed);
    windChillSpan.textContent = wc.toFixed(1) + " °C";

} 
else {

    windChillSpan.textContent = "N/A";
    
}