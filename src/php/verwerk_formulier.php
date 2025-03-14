<?php
// Database configuratie
$servername = "127.0.0.1";  // of "127.0.0.1"
$username = "root";         // standaard MySQL gebruikersnaam
$password = "";             // standaard MySQL wachtwoord (leeg als je het niet hebt ingesteld)
$dbname = ""; // Je database naam

// Maak verbinding met de database
$conn = new mysqli($servername, $username, $password, $dbname);

// Controleer de verbinding
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Haal de formuliergegevens op
$voornaam = $_POST['voornaam'];
$naam = $_POST['naam'];
$email = $_POST['email'];
$telefoonnummer = $_POST['telefoonnummer'];
$plaats = $_POST['plaats'];
$straat = $_POST['straat'];
$huisnr = $_POST['huisnr'];
$school = $_POST['school'];
$richting = $_POST['richting'];
$reden = $_POST['reden'];

// SQL-query om de gegevens in de database in te voegen
$sql = "INSERT INTO formulier_data (voornaam, naam, email, telefoonnummer, plaats, straat, huisnr, school, richting, reden)
VALUES ('$voornaam', '$naam', '$email', '$telefoonnummer', '$plaats', '$straat', $huisnr, '$school', '$richting', '$reden')";

// Voer de query uit en controleer of het succesvol was
if ($conn->query($sql) === TRUE) {
    echo "Gegevens succesvol opgeslagen!";
} else {
    echo "Fout bij het opslaan van gegevens: " . $conn->error;
}

// Sluit de verbinding
$conn->close();
?>
