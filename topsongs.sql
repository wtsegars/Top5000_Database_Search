DROP DATABASE IF EXISTS top_songsDB;

CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE top5000(
	position INT NOT NULL,
    artist VARCHAR(30) NOT NULL,
    song VARCHAR(40) NOT NULL,
    year_released INTEGER NULL,
    total_score DECIMAL(3, 3) NULL,
    usa_score DECIMAL(3, 3) NULL,
    uk_score DECIMAL(3, 3) NULL,
    eu_score DECIMAL(3, 3) NULL,
    rest_score DECIMAL(3, 3) NULL,
    PRIMARY KEY (position)
);

SELECT * FROM top5000;

ALTER TABLE top5000

MODIFY COLUMN total_score DECIMAL(10, 4) Null;

ALTER TABLE top5000

MODIFY COLUMN usa_score DECIMAL(10, 4) Null;

ALTER TABLE top5000

MODIFY COLUMN uk_score DECIMAL(10, 4) Null;

ALTER TABLE top5000

MODIFY COLUMN eu_score DECIMAL(10, 4) Null;

ALTER TABLE top5000

MODIFY COLUMN rest_score DECIMAL(10, 4) Null;