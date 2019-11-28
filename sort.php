<?php

if ($_POST) {

    $array = $_POST['numbers'];
    $oldarray = $array;

    for ($k = 0; $k < count($array) - 1; $k++) {
        for ($i = 0; $i < count($array) - $k - 1; $i++) {
            if ($array[$i] > $array[$i + 1]) {
                $tmp = $array[$i + 1];
                $array[$i + 1] = $array[$i];
                $array[$i] = $tmp;
            }
        }
    }

} else {
    $oldarray = array(10,99,52,15,40,3,9,11,80,73);
}
?>


<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <title>Sort</title>
</head>
<body>

<form action="sort.php" method="post">
    <?php
        foreach ($oldarray as $number){
            echo '<input type="number" required value="'.$number.'" name="numbers[]" style="width: 30px">';
        }
    ?>

    <button type="submit">Отсортировать</button>
</form>


<?php
if ($array){
    echo 'Отсортированный массив: '.implode(",", $array);
}
?>

</body>
</html>

