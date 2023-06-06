const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// ------------------
//      DATABASE
// ------------------

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "items",
});

// ------------------
//     PREVENCAO
// ------------------

db.query(
    "CREATE TABLE IF NOT EXISTS treinos (calorias INT DEFAULT 0, time INT DEFAULT 0);",
    (err) => {
        if (err) {
            console.log("Erro ao criar a tabela:", err);
        } else {
            console.log("Tabela criada ou já existente.");
        }
    }
);

// ------------------
//  INSERE OS ITENS
// ------------------

app.post("/items", (req, res) => {
    const item = req.body;
    let SQL = "INSERT INTO treinos (calorias, time) VALUES (?, ?);";

    db.query("SELECT 1 FROM treinos LIMIT 1;", (err, result) => {
        if (err) {
            console.log("Erro ao verificar a tabela:", err);
            res.status(500).json({
                error: "Ocorreu um erro ao inserir o registro.",
            });
        } else {
            if (result.length === 0) {
                db.query(
                    "CREATE TABLE treinos (calorias INT DEFAULT 0, time INT DEFAULT 0);",
                    (err) => {
                        if (err) {
                            console.log("Erro ao criar a tabela:", err);
                            res.status(500).json({
                                error: "Ocorreu um erro ao inserir o registro.",
                            });
                        } else {
                            console.log("Tabela criada com sucesso!");

                            db.query(SQL, [item.calories, item.time], (err) => {
                                if (err) {
                                    console.log(err);
                                    res.status(500).json({
                                        error: "Ocorreu um erro ao inserir o registro.",
                                    });
                                } else {
                                    console.log("Registro inserido com sucesso!");
                                    res.status(200).json({
                                        message: "Registro inserido com sucesso!",
                                    });
                                }
                            });
                        }
                    }
                );
            } else {
                db.query(SQL, [item.calories, item.time], (err) => {
                    if (err) {
                        console.log(err);
                        res.status(500).json({
                            error: "Ocorreu um erro ao inserir o registro.",
                        });
                    } else {
                        console.log("Registro inserido com sucesso!");
                        res.status(200).json({
                            message: "Registro inserido com sucesso!",
                        });
                    }
                });
            }
        }
    });
});

// ------------------
//  CONSULTA TABELA
// ------------------

app.get("/items", (req, res) => {
    const SQL =
        "SELECT SUM(calorias) AS totalCalories, SUM(time) AS totalTime FROM treinos;";

    db.query(SQL, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Erro ao obter os dados do banco de dados.");
        } else {
            const {
                totalCalories,
                totalTime
            } = result[0];
            res.json({
                totalCalories,
                totalTime,
            });
        }
    });
});

// ------------------
//   EXCLUI TABELA
// ------------------

app.delete("/items", (req, res) => {
    const SQL = "DELETE FROM treinos;";

    db.query(SQL, (err) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                error: "Ocorreu um erro ao excluir os registros.",
            });
        } else {
            console.log("Registros excluídos com sucesso!");
            res.status(200).json({
                message: "Registros excluídos com sucesso!",
            });
        }
    });
});

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
});