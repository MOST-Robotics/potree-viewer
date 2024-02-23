<?php

    if (isset($_POST['image']) && isset($_POST['code'])) {
        $image = $_POST['image'];
        $code = $_POST['code'];
        $image = str_replace('data:image/jpeg;base64,', '', $image);
        $image = str_replace(' ', '+', $image);
        $data = base64_decode($image);

        $filename = $code . '.jpg';
        $path = '../../share/' . $filename;

        // Versuch, das Bild zu speichern
        if (file_put_contents($path, $data)) {
            echo "Image saved successfully in: " . $path;
        } else {
            error_log("Error saving image in: " . $path);
            echo "Error saving image";
        }
    } else {
        echo "No image ID";
    }

?>

