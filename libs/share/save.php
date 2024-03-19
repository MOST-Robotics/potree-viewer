<?php

    /* if (isset($_POST['image']) && isset($_POST['code'])) {

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
    } */

    /* if (isset($_POST['image']) && isset($_POST['code'])) {

        $image = $_POST['image'];
        $code = $_POST['code'];
        $image = str_replace('data:image/jpeg;base64,', '', $image);
        $image = str_replace(' ', '+', $image);
        $data = base64_decode($image);

        // Erzeuge ein neues Bild aus der Base64-kodierten Daten
        $source_img = imagecreatefromstring($data);

        // Pfade für das Wasserzeichen und das zu speichernde Bild
        $watermark_path = '../../resources/watermark.png'; // Pfad zum Wasserzeichen-PNG
        $filename = $code . '.jpg'; // Dateiname für das gespeicherte Bild
        $path = '../../share/' . $filename; // Pfad zum Speichern des Bildes

        // Lade das Wasserzeichen
        $watermark = imagecreatefrompng($watermark_path);

        // Ermittle die Dimensionen des Wasserzeichens
        $watermark_width = imagesx($watermark);
        $watermark_height = imagesy($watermark);
        $new_watermark_width = $watermark_width / 2; // Neue Breite (z. B. halbe Größe)
        $new_watermark_height = $watermark_height / 2; // Neue Höhe (z. B. halbe Größe)
        $scaled_watermark = imagescale($watermark, $new_watermark_width, $new_watermark_height);

        // Ermittle die Position, um das Wasserzeichen auf dem Bild zu platzieren (hier: unten rechts)
        $dest_x = imagesx($source_img) - $watermark_width - 10; // 10 Pixel vom rechten Rand
        $dest_y = imagesy($source_img) - $watermark_height - 10; // 10 Pixel vom unteren Rand

        // Füge das Wasserzeichen zum Bild hinzu
        imagecopy($source_img, $scaled_watermark, $dest_x, $dest_y, 0, 0, $watermark_width, $watermark_height);

        // Speichere das Bild mit Wasserzeichen
        imagejpeg($source_img, $path);

        // Gib eine Erfolgsmeldung aus
        echo "Image saved successfully in: " . $path;

        // Gib Speicher frei
        imagedestroy($source_img);
        imagedestroy($watermark);

    } else {
        echo "No image ID";
    } */

    if (isset($_POST['image']) && isset($_POST['code'])) {

        $image = $_POST['image'];
        $code = $_POST['code'];
        $image = str_replace('data:image/jpeg;base64,', '', $image);
        $image = str_replace(' ', '+', $image);
        $data = base64_decode($image);

        // Generate image from base64
        $source_img = imagecreatefromstring($data);

        // Saving path
        //$host = gethostname();
        $watermark_path = '../../resources/watermark.png'; // Pfad zum Wasserzeichen-PNG
        $filename = $code . '.jpg'; // Dateiname für das gespeicherte Bild
        $path = '../../share/' . $filename; // Pfad zum Speichern des Bildes

        // Load watermark
        $watermark = imagecreatefrompng($watermark_path);

        /* // Scale
        $new_watermark_width = 240; // Beispiel: 200 Pixel Breite
        $watermark_aspect_ratio = imagesx($watermark) / imagesy($watermark);
        $new_watermark_height = $new_watermark_width / $watermark_aspect_ratio;
        $scaled_watermark = imagescale($watermark, $new_watermark_width, $new_watermark_height);

        // Align and margin
        $alignment = 'bottom';
        $margin = 24;
        switch ($alignment) {
            case 'top':
                $dest_x = (imagesx($source_img) - imagesx($scaled_watermark)) / 2;
                $dest_y = $margin;
                break;
            case 'middle':
                $dest_x = (imagesx($source_img) - imagesx($scaled_watermark)) / 2;
                $dest_y = (imagesy($source_img) - imagesy($scaled_watermark)) / 2;
                break;
            case 'bottom':
                $dest_x = (imagesx($source_img) - imagesx($scaled_watermark)) / 2;
                $dest_y = imagesy($source_img) - imagesy($scaled_watermark) - $margin;
                break;
            case 'left':
                $dest_x = $margin;
                $dest_y = (imagesy($source_img) - imagesy($scaled_watermark)) / 2;
                break;
            case 'center':
                $dest_x = (imagesx($source_img) - imagesx($scaled_watermark)) / 2;
                $dest_y = (imagesy($source_img) - imagesy($scaled_watermark)) / 2;
                break;
            case 'right':
                $dest_x = imagesx($source_img) - imagesx($scaled_watermark) - $margin;
                $dest_y = (imagesy($source_img) - imagesy($scaled_watermark)) / 2;
                break;
            default:
                // Standard: Zentriert
                $dest_x = (imagesx($source_img) - imagesx($scaled_watermark)) / 2;
                $dest_y = (imagesy($source_img) - imagesy($scaled_watermark)) / 2;
                break;
        } */

        // Zielbild-Breite und -Höhe
        $source_img_width = imagesx($source_img);
        $source_img_height = imagesy($source_img);
        $watermark_aspect_ratio = imagesx($watermark) / imagesy($watermark);

        // Breite und Margin des Wasserzeichens in Prozent
        $watermark_width_percent = 25; // z.B. 20%
        $margin_percent = 2; // z.B. 5%

        // Umrechnung der Prozentwerte in Pixel
        $watermark_width = ($source_img_width * $watermark_width_percent) / 100;
        $margin = ($source_img_width * $margin_percent) / 100;

        // Skalierung des Wasserzeichens auf die berechnete Breite
        $new_watermark_height = $watermark_width / $watermark_aspect_ratio;
        $scaled_watermark = imagescale($watermark, $watermark_width, $new_watermark_height);

        // Ausrichtung des Wasserzeichens basierend auf dem gewählten Alignment
        $alignment = 'bottom-right'; // oder wähle 'top', 'middle', 'left', 'center', 'right'
        switch ($alignment) {
            case 'top':
                $dest_x = ($source_img_width - imagesx($scaled_watermark)) / 2;
                $dest_y = $margin;
                break;
            case 'middle':
                $dest_x = ($source_img_width - imagesx($scaled_watermark)) / 2;
                $dest_y = ($source_img_height - imagesy($scaled_watermark)) / 2;
                break;
            case 'bottom':
                $dest_x = ($source_img_width - imagesx($scaled_watermark)) / 2;
                $dest_y = $source_img_height - imagesy($scaled_watermark) - $margin;
                break;
            case 'left':
                $dest_x = $margin;
                $dest_y = ($source_img_height - imagesy($scaled_watermark)) / 2;
                break;
            case 'center':
                $dest_x = ($source_img_width - imagesx($scaled_watermark)) / 2;
                $dest_y = ($source_img_height - imagesy($scaled_watermark)) / 2;
                break;
            case 'right':
                $dest_x = $source_img_width - imagesx($scaled_watermark) - $margin;
                $dest_y = ($source_img_height - imagesy($scaled_watermark)) / 2;
                break;
            case 'top-left':
                $dest_x = $margin;
                $dest_y = $margin;
                break;
            case 'top-right':
                $dest_x = $source_img_width - imagesx($scaled_watermark) - $margin;
                $dest_y = $margin;
                break;
            case 'bottom-left':
                $dest_x = $margin;
                $dest_y = $source_img_height - imagesy($scaled_watermark) - $margin;
                break;
            case 'bottom-right':
                $dest_x = $source_img_width - imagesx($scaled_watermark) - $margin;
                $dest_y = $source_img_height - imagesy($scaled_watermark) - $margin;
                break;
            default:
                // Standard: Zentriert
                $dest_x = ($source_img_width - imagesx($scaled_watermark)) / 2;
                $dest_y = ($source_img_height - imagesy($scaled_watermark)) / 2;
                break;
        }

        // Füge das skalierte Wasserzeichen zum Bild hinzu
        imagecopy($source_img, $scaled_watermark, $dest_x, $dest_y, 0, 0, imagesx($scaled_watermark), imagesy($scaled_watermark));

        // Speichere das Bild mit Wasserzeichen
        imagejpeg($source_img, $path);

        // Gib eine Erfolgsmeldung aus
        echo "Image saved successfully in: " . $path;

        // Gib Speicher frei
        imagedestroy($source_img);
        imagedestroy($scaled_watermark);

    } else {
        echo "No image ID";
    }

?>

