<?php
$name = $_POST['user-name'];
$tel = $_POST['user-phone'];
$text = $_POST['user-comment'];

// $to = "clothing-alterations.com@ukr.net";
$to = "olegt333@gmail.com";
$date = date("d.m.Y");
$time = date("h:i");
$subject = "Заявка з сайту clothing-alterations.com";


$msg = "
    Ім'я: $name 
    Телефон: $tel 
    Текст: $text";
mail($to, $subject, $msg, "From: $to ");

?>


<script>
    // Редірект через 10 секунд
    setTimeout(function () {
        window.location.href = "https://clothing-alterations.com/thank-you.html";
    }, 100);
</script>