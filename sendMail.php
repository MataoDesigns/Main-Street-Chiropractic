<?php
    if(isset($_POST['name'])) {
        //The message
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $phone = htmlspecialchars($_POST['phone']);
        $message = htmlspecialchars($_POST['message']);
        $messageToMail = "Message from the Main Street Chiropractic website.\r\n\r\nName: $name\r\nEmail: $email\r\nPhone: $phone\r\nMessage: $message\r\n\r\nPlease contact this person as soon as possible.";
        
        //Send the email
            $to = "mainstchiro2@gmail.com";
            $subject = "Message from Main Street Chiropractic Website";
            $txt = $messageToMail;
            $headers = "From: Main Street Chiropractic" . "\r\n" .
                "CC: ". "\r\n" .
            "BCC: matt@mataodesigns.com";
    
            if (!mail($to, $subject, $txt, $headers)) {
                echo "Message failed.";
            } else {
                echo "Message sent.";
            }
        }
    
    
?>