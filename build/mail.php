<?php
$name = $_POST['name'];
$mailFrom = $_POST['email'];
$message = $_POST['message'];

$mailTo = "kontakt@pawelturkot.pl";

$subject = "Wiadomość ze strony pawelturkot.pl";
$mailheader = "From: $mailFrom \r\n";
$formcontent=" Wiadomość od: $name ($mailFrom) \n Treść: $message";

mail($mailTo, $subject, $formcontent, $mailheader) or die("Error!");

header("Location: success.html");
?>
