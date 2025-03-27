<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

/* require 'src/php/PHPMailer-master/src/Exception.php';
require 'src/php/PHPMailer-master/src/PHPMailer.php';
require 'src/php/PHPMailer-master/src/SMTP.php'; */

require 'vendor/autoload.php'

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Gegevens ophalen en valideren
    $voornaam = htmlspecialchars($_POST['voornaam']);
    $naam = htmlspecialchars($_POST['naam']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $telefoonnummer = htmlspecialchars($_POST['telefoonnummer']);
    $plaats = htmlspecialchars($_POST['plaats']);
    $straat = htmlspecialchars($_POST['straat']);
    $huisnr = htmlspecialchars($_POST['huisnr']);
    $school = htmlspecialchars($_POST['school']);
    $richting = htmlspecialchars($_POST['richting']);
    $reden = htmlspecialchars($_POST['reden']);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Ongeldig e-mailadres!");
    }

    // PHPMailer-instellingen
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'clevercauteren@gmail.com';  // Vervang met je Gmail-adres
        $mail->Password = 'ovskdejgaqgzgxzw';   // Gebruik een App-wachtwoord van Google
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // E-mailinstellingen
        $mail->setFrom($email, "$voornaam $naam");
        $mail->addAddress('clevercauteren@gmail.com', 'Formulier');

        $mail->Subject = 'Nieuw inschrijvingsformulier ontvangen';
        $mail->isHTML(true);
        $mail->Body = "
            <h2>Inschrijving details</h2>
            <p><strong>Naam:</strong> $voornaam $naam</p>
            <p><strong>E-mail:</strong> $email</p>
            <p><strong>Telefoonnummer:</strong> $telefoonnummer</p>
            <p><strong>Plaats:</strong> $plaats</p>
            <p><strong>Straat:</strong> $straat</p>
            <p><strong>Huisnummer:</strong> $huisnr</p>
            <p><strong>Vorige school:</strong> $school</p>
            <p><strong>Richting:</strong> $richting</p>
            <p><strong>Reden voor interesse:</strong> $reden</p>
        ";

        // E-mail verzenden
        $mail->send();
        echo 'E-mail verzonden!';
    } catch (Exception $e) {
        echo "Fout bij verzenden: {$mail->ErrorInfo}";
    }
} else {
    echo "Ongeldige aanvraag!";
}
?>