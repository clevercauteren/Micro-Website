<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// PHPMailer handmatig includen (let op de juiste padnaam)
require';
require 'phpmailer-master/src/PHPMailer.php';
require 'phpmailer-master/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    // SMTP-instellingen
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'clevercauteren@gmail.com'; // Jouw Gmail-adres
    $mail->Password = 'ovskdejgaqgzgxzw'; // App-specifiek wachtwoord
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // E-mailinstellingen
    $mail->setFrom('clevercauteren@gmail.com', 'Microsite');
    $mail->addAddress('ontvanger@example.com', 'Ontvanger Naam'); // Vervang met echte e-mail
    $mail->Subject = 'Test e-mail via Gmail SMTP';
    $mail->Body    = 'Hallo, dit is een testbericht verzonden via Gmail SMTP met PHPMailer.';
    $mail->isHTML(true);

    // Verzenden
    $mail->send();
    echo 'E-mail verzonden!';
} catch (Exception $e) {
    echo "Fout bij verzenden: {$mail->ErrorInfo}";
}
?>
