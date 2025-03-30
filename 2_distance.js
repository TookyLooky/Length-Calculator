function lat1() {
    return parseFloat(document.getElementById("userInput1").value);
}
function lon1() {
    return parseFloat(document.getElementById("userInput2").value);
}
function lat2() {
    return parseFloat(document.getElementById("userInput3").value);
}
function lon2() {
    return parseFloat(document.getElementById("userInput4").value);
}

function deg2rad(deg) {
  return deg * (Math.PI / 180)
}


document.getElementById('calculate').addEventListener('click', function() {
    const R = 6371;
    const lat11 = lat1();
    const lon11 = lon1();
    const lat22 = lat2();
    const lon22 = lon2();
    let dLat = deg2rad(lat22 - lat11);
    let dLon = deg2rad(lon22 - lon11);
    let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos( deg2rad(lat11) ) * Math.cos( deg2rad(lat22) ) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c;
    document.getElementById('result').textContent = `Distance: ${d.toFixed(2)} km`;
});
