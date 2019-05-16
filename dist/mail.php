<?php
$to = "kontakt@eju-bud.pl";
$subject = "Pytanie wysłane za pomocą formularza kontaktowego na stronie eju-bud.com";

$message = $_POST['message'];
$name = $_POST['fname'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$messageHTML = "
<html>
<head>
<title>HTML email</title>
</head>
<body>
<p>".$message."
</p>
<table>
<tr>
<th>Imię</th>
<th>Email nadawcy</th>
<th>Nr telefonu</th>
</tr>
<tr>
<td>".$name."</td>
<td>".$email."</td>
<td>".$tel."</td>
</tr>
</table>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <'.$email.'>' . "\r\n";

mail($to,$subject,$messageHTML,$headers);

header('Location: index.html');  
?> 
