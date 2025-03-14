document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Verzamelen van formuliergegevens
    const formData = {
        voornaam: document.getElementById('voornaam').value,
        naam: document.getElementById('naam').value,
        email: document.getElementById('email').value,
        telefoonnummer: document.getElementById('telefoonnummer').value,
        plaats: document.getElementById('plaats').value,
        straat: document.getElementById('straat').value,
        huisnr: document.getElementById('huisnummer').value,
        school: document.getElementById('school').value,
        richting: document.getElementById('richting').value,
        reden: document.getElementById('reden').value
    };

    // JSON bestand genereren
    const jsonData = JSON.stringify(formData, null, 2);

    // Blob maken en downloaden via een link
    const blob = new Blob([jsonData], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'formData.json';
    link.click();
});