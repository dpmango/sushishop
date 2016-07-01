<?

$method = trim($_GET['method']);
$path = "./data/{$method}.php";

if (file_exists($path)) {
	$content = require_once($path);
} else {
	$content = [];
}

header('Content-Type: application/json');
echo json_encode($content);

?>