<?php
$mysqli = new mysqli("localhost", "root", "", "frng_site");
if($mysqli->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT userid, username
FROM users WHERE userid = ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($userid, $username);
$stmt->fetch();
$stmt->close();

echo "<table>";
echo "<tr>";
echo "<th>CustomerID</th>";
echo "<td>" . $userid . "</td>";
echo "<th>CompanyName</th>";
echo "<td>" . $username . "</td>";
echo "</tr>";
echo "</table>";
?>