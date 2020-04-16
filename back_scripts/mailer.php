<?php
function mail_to() {
    $to      = 'maxim.sncn@icloud.com';
    $subject = 'Подтвеврждение E-mail';
    $message = '
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=\"utf-8\"">
<title>mail</title>
</head>
<body>
<table border="0" cellpadding="0" cellspacing="0" style="margin:0; padding:0" bgcolor="#f0f0f0">
<tr>
<td width="50px"></td>
<td style="margin: 0; padding-top: 30px; padding-bottom: 30px;"></td>
<td width="50px"></td>
</tr>
<tr>
<td width="50px"></td>
<td bgcolor="#222222" style="margin: 0; padding-top: 20px; padding-bottom: 20px;"></td>
<td width="50px"></td>
</tr>
<tr>
<td width="50px"></td>
<td bgcolor="#ffffff" align="center" style="margin: 0; padding-top: 30px; padding-bottom: 0px; padding-left: 20px; font-size: 24px; line-height: 24px; color: #000000; font-family: Verdana, Geneva, sans-serif;">LOCKAIR.RU</td>
<td width="50px"></td>
</tr>
<tr>
<td width="50px"></td>
<td bgcolor="#ffffff" align="left" style="margin: 0; padding: 20px; font-size: 14px; line-height: 20px; color: #444444; font-family: Arial, Helvetica, sans-serif;">
Сервису LOCKAIR.RU необходимо удостовериться, <br>что данный адрес электронной почты действительно пренадлежит Вам. <br>Для этого необходимо пройти процедуру подтверждения. 
</td>
<td width="50px"></td>
</tr>
<tr>
<td width="50px"></td>
<td bgcolor="#ffffff"><img width="600px" src="https://lockair.ru/mail/mail_1.jpg"/></td>
<td width="50px"></td>
</tr>
<tr>
<td width="50px"></td>
<td align="left" bgcolor="#ffffff" style="margin: 0; padding: 20px; font-size: 14px; line-height: 20px; color: #444444; font-family: Arial, Helvetica, sans-serif;">
Для подтверждения данного адреса электронной почты нажмите на кнопку<br> 
<b>"Подтвердить"</b>, расположенную ниже, в данном письме. <br> 
Нажимая на данную кнопку, Вы подтверждаете, что данный e-mail принадлежит<br> 
Вам, также соглашаетесь на внесение данного e-mail в качестве основного<br> 
адреса электронной почты в параметры Вашего аккаунта сервиса LOCKAIR.RU 
</td>
<td width="50px"></td>
</tr>
<tr>
<td width="50px"></td>
<td bgcolor="#ffffff" align="center" style="padding-bottom: 50px; padding-top: 20px;">
<span style="background-color: #000000; padding: 10px 15px ;"><a href="#" style="color: #ffffff; text-decoration: none; cursor: pointer; font-size: 12px; font-family: Arial, Helvetica, sans-serif;"><b>Подтвердить</b></a></span>
</td>
<td width="50px"></td>
</tr>
<tr>
<td width="50px"></td>
<td bgcolor="#ffffff"><img width="600px" src="https://lockair.ru/mail/mail_2.jpg"/></td>
<td width="50px"></td>
</tr>
<tr>
<td width="50px"></td>
<td bgcolor="#ffffff" align="left" style="margin: 0; padding: 20px; font-size: 14px; line-height: 20px; color: #444444; font-family: Arial, Helvetica, sans-serif;">
В целях улучшения качества сервиса LOCKAIR.RU компания ООО "ГК ЛокЭйр Инд"<br> 
строго придерживается регламенту проверки данных пользователей как <br> 
при регистрации, так и в ходе использования ими сервисов данной компании. <br>
ООО "ГК ЛокЭйр Инд" оставляет за собой право отказать в регистрации нового<br>
аккаунта физического и/или юридического лица без объяснения причин.
</td>
<td width="50px"></td>
</tr>
<tr>
<td width="50px"></td>
<td bgcolor="#222222" style="margin: 0; padding-top: 20px; padding-bottom: 20px;"></td>
<td width="50px"></td>
</tr>
<tr>
<td width="50px"></td>
<td align="center" bgcolor="#222222" style="color: #ffffff; margin: 0; padding-top: 20px; padding-bottom: 20px; font-size: 10px; font-family: Arial, Helvetica, sans-serif;">Copyright © 2015 - 2019 lockair | internet technologies. All rights reserved.</td>
<td width="50px"></td>
</tr>
<tr>
<td width="50px"></td>
<td style="margin: 0; padding-top: 30px; padding-bottom: 30px;"></td>
<td width="50px"></td>
</tr>
</table>
</body>
</html>';

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
// Additional headers
$headers .= 'From: info@lockair.ru' . "\r\n";
$headers .= 'Cc: info@lockair.ru' . "\r\n";
$headers .= 'Bcc: info@lockair.ru' . "\r\n";

    /*$headers = array(
        'From' => 'info@lockair.ru',
        'Reply-To' => 'webmaster@example.com',
        'Content-type' => 'text/html;charset=UTF-8\"\r\n'
    );*/
    if(mail($to, $subject, $message, $headers)){
        echo "yes";
    }else{
        echo "no";
    };
}
mail_to();
?>