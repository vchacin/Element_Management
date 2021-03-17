<?php
$mail->ClearAllRecipients( );

$mail->AddAddress("arq.vchacin@gmail.com");

$mail->IsHTML(true);  //podemos activar o desactivar HTML en mensaje
$mail->Subject = 'asunto del mensaje';

$msg = "<h2>Contenido mensaje HTML:</h2>
<p>Contenido</p>
<p>Más Contenido...</p>
";

$mail->Body    = $msg;
$mail->Send();
?>