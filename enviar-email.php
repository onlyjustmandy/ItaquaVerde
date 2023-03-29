<?php
$destinatario = "amanda_ferreira89@hotmail.com";
$assunto = "Nova denúncia";
$mensagem = $_POST["mensagem"];
$remetente = $_POST["email"];

$headers = "From: $remetente\r\n";
$headers .= "Reply-To: $remetente\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

mail($destinatario, $assunto, $mensagem, $headers);

echo "Email enviado com sucesso!";
?>