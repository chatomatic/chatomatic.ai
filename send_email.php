<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $company = $_POST['company'];
    $message = $_POST['message'];

    // Email recipient (your email address)
    $to = "chatomatic@yahoo.cm";

    // Email subject
    $subject = "New Contact Form Submission from $name";

    // Email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Company: $company\n\n";
    $email_content .= "Message:\n$message\n";

    // Email headers
    $headers = "From: $name <$email>";

    // Send email
    if(mail($to, $subject, $email_content, $headers)) {
        // Redirect back to the contact page with success message
        header("Location: index.html#contact?status=success");
    } else {
        // Redirect back to the contact page with error message
        header("Location: index.html#contact?status=error");
    }
} else {
    // If someone tries to access this file directly
    header("Location: index.html");
}
?> 