<?php

$eposta = "b211210065@sakarya.edu.tr";
$sifre = "b211210065";


if(($_POST['e-posta']==$eposta) && ($_POST['sifre']==$sifre) )
{

    echo" <h1> HOŞGELDİN,</h1>";
    echo" <h1><i> b211210065</i>";
    echo"<h2><a  href ='index.html'>Ana Sayfa</a></h2>";

    
}
else{
    

    echo"<h1> HATALI GİRİŞ</h1>";
    echo"<h2><a href ='login.html'>Geri Dön</a></h2>";
   

}



?>
