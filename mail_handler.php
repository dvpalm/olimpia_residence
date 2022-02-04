<?php
	if(isset($_POST['submit'])){
		$nome=$_POST['nome'];
		$cognome=$_POST['cognome'];
		$email=$_POST['email'];
		$oggetto=$_POST['oggetto'];
		$msg=$_POST['message'];

		$to='info@residenceolimpiacaserta.it';
		$subject='Form Submission';
		$message="email :".$email."\n"."Nome :".$nome."\n"."Cognome :".$cognome."\n"."oggetto :".$oggetto."\n"."Ha scritto :"."\n\n".$msg;
		$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){
			header("Location: contact.html?EmailInviata");
		}
		else{
			echo "Qualcosa è andato storto!";
		}
	}
?>