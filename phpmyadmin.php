<?php

$conn = mysqli_connect("localhost", "root", "", "Rhyme_DB");

if ($conn ->connect_errno) {
    printf("Connect failed: %s\n", $conn->connect_error);
    exit();
}

?>