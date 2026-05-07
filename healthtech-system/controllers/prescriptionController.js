const {
    createPrescription,
    getDoctorPrescriptions,
    getPatientPrescriptions,
    updatePrescription
} = require("../models/prescriptionModel");

const createPrescriptionController = (
    req,
    res
) => {

    const doctor_id = req.user.id;

    const {
        patient_id,
        medicine,
        dosage,
        notes
    } = req.body;

    if (
        !patient_id ||
        !medicine ||
        !dosage
    ) {
        return res.status(400).json({
            message: "Required fields missing"
        });
    }

    createPrescription(
        doctor_id,
        patient_id,
        medicine,
        dosage,
        notes,
        function (err) {

            if (err) {
                return res.status(500).json({
                    message: "Prescription creation failed"
                });
            }

            res.status(201).json({
                message: "Prescription created successfully"
            });
        }
    );
};

const doctorPrescriptionsController = (
    req,
    res
) => {

    const doctor_id = req.user.id;

    getDoctorPrescriptions(
        doctor_id,
        (err, prescriptions) => {

            if (err) {
                return res.status(500).json({
                    message: "Database error"
                });
            }

            res.status(200).json(
                prescriptions
            );
        }
    );
};

const patientPrescriptionsController = (
    req,
    res
) => {

    const patient_id = req.user.id;

    getPatientPrescriptions(
        patient_id,
        (err, prescriptions) => {

            if (err) {
                return res.status(500).json({
                    message: "Database error"
                });
            }

            res.status(200).json(
                prescriptions
            );
        }
    );
};

const updatePrescriptionController = (
    req,
    res
) => {

    const { id } = req.params;

    const {
        medicine,
        dosage,
        notes
    } = req.body;

    updatePrescription(
        id,
        medicine,
        dosage,
        notes,
        function (err) {

            if (err) {
                return res.status(500).json({
                    message: "Update failed"
                });
            }

            res.status(200).json({
                message: "Prescription updated successfully"
            });
        }
    );
};

module.exports = {
    createPrescriptionController,
    doctorPrescriptionsController,
    patientPrescriptionsController,
    updatePrescriptionController
};