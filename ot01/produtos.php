<?php
// Exercício prático 8: API básica em PHP para listar produtos (tabela "produtos" no MySQL)
// Endpoint: GET /produtos.php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // permite o Vue consumir essa API

$host = 'localhost';
$db   = 'meu_banco';
$user = 'root';
$pass = '';

try {
    $conexao = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $conexao->query('SELECT id, nome, preco FROM produtos');
    $produtos = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($produtos);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['erro' => 'Não foi possível conectar ao banco: ' . $e->getMessage()]);
}
