<?php

    if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest')
    {
        $to      = 'goran@devlabs.bg, superkalo@devlabs.bg';
        $subject = "Devlabs.bg contact form -> ".$_POST['subject'];
        $message = $_POST['msg'];

         $headers= "MIME-Version: 1.0\n" .
                    'From: '.$_POST['name'].'<'.$_POST['email'].'>' . "\r\n" .'Reply-To: '.$_POST['email']. "\r\n".'Content-Type: text/html; charset="UTF-8";';

        mail($to, $subject, $message, $headers);
    }
?>
