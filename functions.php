<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "my_pages";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

var_dump($conn);

function tambah($data) {
    global $conn;
    $nama = htmlspecialchars($data["nama"]);
    $email = htmlspecialchars($data["email"]);
    $telp = htmlspecialchars($data["telp"]);
    $pesan = htmlspecialchars($data["pesan"]);

    echo $nama;

    $sql = "INSERT INTO tb_pesan VALUES('','$nama','$email','$telp','$pesan','')";
    mysqli_query($conn, $sql);

    return mysqli_affected_rows($conn);
}