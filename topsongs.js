const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: "8889",
    user: "root",
    password: "root",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
    database: "top_songsDB"
});

connection.connect(function(err) {
    if (err) throw err;
    startQuery();
});

function startQuery() {
    inquirer.prompt(
        {
            name: "startQuery",
            type: "list",
            message: "What would you like to do?",
            choices: ["List of songs done by a specific artist", "List of artists who appear more than once in this list", "Search for a specific song", "Search for data within a specific range"]
        }
    ).then(function(answer) {
        if(answer.startQuery === "List of songs done by a specific artist") {
            inquirer.prompt(
                {
                    name: "artistSongs",
                    type: "input",
                    message: "What artist would you like to look up?"
                }
            ).then(function(result) {
                connection.query("SELECT * FROM top5000 WHERE artist = ?", [result.artistSongs], function(err, res) {
                    if(err) throw err;
                    console.table(res);
                    connection.end();
                    startQuery();
                })
            })
        }
        else if(answer.startQuery === "List of artists who appear more than once in this list") {
            connection.query("SELECT artist,COUNT(artist) FROM top5000 GROUP BY artist HAVING COUNT(*) > 1", function(err, res) {
                if(err) throw err;
                console.table(res);
                connection.end();
                startQuery();
            })
        }
        else if(answer.startQuery === "Search for a specific song") {
            inquirer.prompt(
                {
                    type: "input",
                    name: "song",
                    message: "What song would you like to look up?"
                }
            ).then(function(result) {
                connection.query("SELECT * FROM top5000 WHERE song = ?", [result.song], function(err, res) {
                    if(err) throw err;
                    console.table(res);
                    connection.end();
                    startQuery();
                })
            })
        }
        else if(answer.startQuery === "Search for data within a specific range") {
            inquirer.prompt(
                {
                    type: "list",
                    name: "searchVariables",
                    message: "What search parameters would you like to use?",
                    choices: ["Position", "Year Released", "Total Score", "USA Score", "UK Score", "EU Score", "Rest of the World Score"]
                }
            ).then(function(answer) {
                if (answer.searchVariables === "Position") {
                    inquirer.prompt([
                        {
                            type: "input",
                            name: "startValue",
                            message: "What is the starting parameter?"
                        },
                        {
                            type: "input",
                            name: "endValue",
                            message: "What is the ending parameter?"
                        }
                    ]).then(function(result) {
                        connection.query("SELECT * FROM top5000 WHERE position BETWEEN ? AND ?", [result.startValue, result.endValue], function(err, res) {
                            if(err) throw err;
                            console.table(res);
                            connection.end();
                            startQuery();
                        })
                    })
                }
                else if(answer.searchVariables === "Year Released") {
                    inquirer.prompt([
                        {
                            type: "input",
                            name: "startValue",
                            message: "What is the starting parameter?"
                        },
                        {
                            type: "input",
                            name: "endValue",
                            message: "What is the ending parameter?"
                        }
                    ]).then(function(result) {
                        connection.query("SELECT * FROM top5000 WHERE year_released BETWEEN ? AND ?", [result.startValue, result.endValue], function(err, res) {
                            if(err) throw err;
                            console.table(res);
                            connection.end();
                            startQuery();
                        })
                    })
                }
                else if(answer.searchVariables === "Total Score") {
                    inquirer.prompt([
                        {
                            type: "input",
                            name: "startValue",
                            message: "What is the starting parameter?"
                        },
                        {
                            type: "input",
                            name: "endValue",
                            message: "What is the ending parameter?"
                        }
                    ]).then(function(result) {
                        connection.query("SELECT * FROM top5000 WHERE total_score BETWEEN ? AND ?", [result.startValue, result.endValue], function(err, res) {
                            if(err) throw err;
                            console.table(res);
                            connection.end();
                            startQuery();
                        })
                    })
                }
                else if(answer.searchVariables === "USA Score") {
                    inquirer.prompt([
                        {
                            type: "input",
                            name: "startValue",
                            message: "What is the starting parameter?"
                        },
                        {
                            type: "input",
                            name: "endValue",
                            message: "What is the ending parameter?"
                        }
                    ]).then(function(result) {
                        connection.query("SELECT * FROM top5000 WHERE usa_score BETWEEN ? AND ?", [result.startValue, result.endValue], function(err, res) {
                            if(err) throw err;
                            console.table(res);
                            connection.end();
                            startQuery();
                        })
                    })
                }
                else if(answer.searchVariables === "UK Score") {
                    inquirer.prompt([
                        {
                            type: "input",
                            name: "startValue",
                            message: "What is the starting parameter?"
                        },
                        {
                            type: "input",
                            name: "endValue",
                            message: "What is the ending parameter?"
                        }
                    ]).then(function(result) {
                        connection.query("SELECT * FROM top5000 WHERE uk_score BETWEEN ? AND ?", [result.startValue, result.endValue], function(err, res) {
                            if(err) throw err;
                            console.table(res);
                            connection.end();
                            startQuery();
                        })
                    })
                }
                else if(answer.searchVariables === "EU Score") {
                    inquirer.prompt([
                        {
                            type: "input",
                            name: "startValue",
                            message: "What is the starting parameter?"
                        },
                        {
                            type: "input",
                            name: "endValue",
                            message: "What is the ending parameter?"
                        }
                    ]).then(function(result) {
                        connection.query("SELECT * FROM top5000 WHERE eu_score BETWEEN ? AND ?", [result.startValue, result.endValue], function(err, res) {
                            if(err) throw err;
                            console.table(res);
                            connection.end();
                            startQuery();
                        })
                    })
                }
                else if(answer.searchVariables === "Rest of the World Score") {
                    inquirer.prompt([
                        {
                            type: "input",
                            name: "startValue",
                            message: "What is the starting parameter?"
                        },
                        {
                            type: "input",
                            name: "endValue",
                            message: "What is the ending parameter?"
                        }
                    ]).then(function(result) {
                        connection.query("SELECT * FROM top5000 WHERE rest_score BETWEEN ? AND ?", [result.startValue, result.endValue], function(err, res) {
                            if(err) throw err;
                            console.table(res);
                            connection.end();
                            startQuery();
                        })
                    })
                }
            });
        }
    });
};