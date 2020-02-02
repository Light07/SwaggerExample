DROP DATABASE IF EXISTS users;
CREATE DATABASE users;

\c users;

CREATE TABLE users (
  ID INTEGER PRIMARY KEY,
  name VARCHAR
);

INSERT INTO users (ID, name)
  VALUES ('1', 'iTesting');