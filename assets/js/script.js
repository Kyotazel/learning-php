$("#kirim").on("click", function() {
    nama = $("#nama").val();
    email = $("#email").val();
    telp = $("#telp").val();
    pesan = $("#pesan").val();

    if (nama === "") {
        $("#nama").addClass("is-invalid");
    } else {
        $("#nama").removeClass("is-invalid");
    }

    if (email === "") {
        $("#email").addClass("is-invalid");
    } else {
        $("#email").removeClass("is-invalid");
    }

    if (telp === "") {
        $("#telp").addClass("is-invalid");
    } else {
        $("#telp").removeClass("is-invalid");
    }

    if (pesan === "") {
        $("#pesan").addClass("is-invalid");
    } else {
        $("#pesan").removeClass("is-invalid");
    }

    if (nama !== "" && email !== "" && telp !== "" && pesan !== "") {
        $.ajax({
            url: "tambah.php",
            method: "POST",
            data: {nama: nama, email: email, telp: telp, pesan: pesan},
            async: true,
            success: function(data) {
                alert('pesan berhasil disampaikan');
            }
        })
    }
    else {
        alert('pesan gagal disampaikan');
    }
})