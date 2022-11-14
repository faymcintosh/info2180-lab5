<?php

$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';



$conn = new PDO("mysql:host=$host; dbname=$dbname; charset=utf8mb4;", $username, $password);
$stmt = $conn->query("SELECT * FROM countries");
$op=2;


if (isset($_GET['country'])){
  $country=$_GET['country'];

  if ($_GET['context']=="cities")
  {
    $sql_cities = "SELECT cities.name,cities.population,cities.district
     from cities join countries on cities.country_code=countries.code
     WHERE countries.name LIKE '%$country%';";

    $stmt=$conn->query($sql_cities);
    $op=3;
  }
  

  
}
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
if ($op==2)
{
  $table="<table>
  <tr> 
  <th> Name </th> <th> Continent </th> <th> Independence </th> <th> Head of State </th>
  </tr>";
  foreach ($result as $row){
    $table.="<tr><td>".$row['name']."</td><td>".$row['continent']."</td><td>".$row['independence_year']."</td><td>".$row['head_of_state']."</td></tr>";
  }
  $table.="</table>";
  echo $table;
}else{
  $table="<table>
  <tr> 
  <th> Name </th> <th> District </th> <th> Population </th>
  </tr>";
  foreach ($result as $row){
    $table.="<tr><td>".$row['name']."</td><td>".$row['district']."</td><td>".$row['population']."</td></tr>";
  }
  $table.="</table>";
  echo $table;
}
?>

