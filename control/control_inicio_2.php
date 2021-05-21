<?php
  require_once '../app/conexion_2.php';
  $conexion = conexion();
  $nombre = $_POST['nombre'];
  $sql = "INSERT INTO nombres(nombre) VALUES(?)";
  $query = $conexion->prepare($sql);
  $query->bind_param('s', $nombre);
  $r = $query->execute();
  if($r){
    echo 1;
  }else{
    echo 0;
  }
  $conexion->close(); 
?>