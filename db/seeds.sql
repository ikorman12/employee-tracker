USE employees_db;

INSERT INTO department (name)
VALUES ('Tech'),('Marketing'),('HR'),('PR'), ('Management');

INSERT INTO roles (title, salary, department_id);

VALUES
('Full-Stack Developer',200000, 1),
('Intern',60000, 1),
('Front-end Dev',100000, 1),
('Back-end Dev',100000, 1),
('HR', 80000, 3),
('Team leader', 50000, 5),
('Project manager', 300000, 5),
('PR officer',80000, 4),
('Marketing specialist', 120000, 2);

INSERT into employees (first_name, last_name, role_id, manager_id)

VALUES
("Igor", "Korman", 1, NULL),
("Sam", "Iam", 5, 1),
("Tyler", "Tattled", 2, NULL),
("Nick", "Rogan", 2, NULL),
("Alex", "Kitkat", 3, NULL),
("Wilson", "Basketball", 5, 2),
("Ben", "Max", 4, NULL),