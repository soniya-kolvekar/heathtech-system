INSERT INTO users
(name, email, password, role)
VALUES
('Dr John', 'doctor@gmail.com', 'hashed_password', 'doctor');

INSERT INTO users
(name, email, password, role)
VALUES
('Soniya', 'soniya@gmail.com', 'hashed_password', 'patient');


SELECT * FROM users;

SELECT *
FROM users
WHERE role = 'doctor';

SELECT *
FROM users
WHERE role = 'patient';

INSERT INTO prescriptions
(
    doctor_id,
    patient_id,
    medicine,
    dosage,
    notes
)
VALUES
(
    1,
    2,
    'Paracetamol',
    'Twice daily',
    'Take after food'
);

SELECT * FROM prescriptions;

SELECT *
FROM prescriptions
WHERE doctor_id = 1;

SELECT *
FROM prescriptions
WHERE patient_id = 2;

UPDATE prescriptions
SET
    medicine = 'Ibuprofen',
    dosage = 'Once daily',
    notes = 'After dinner'
WHERE id = 1;

DELETE FROM prescriptions
WHERE id = 1;

SELECT
    p.id,
    d.name AS doctor_name,
    u.name AS patient_name,
    p.medicine,
    p.dosage,
    p.notes,
    p.created_at
FROM prescriptions p
JOIN users d
ON p.doctor_id = d.id
JOIN users u
ON p.patient_id = u.id;