const express = require("express");

const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const authorizeRole =
require("../middleware/roleMiddleware");

const {
    createPrescriptionController,
    doctorPrescriptionsController,
    patientPrescriptionsController,
    updatePrescriptionController
} = require(
    "../controllers/prescriptionController"
);

router.post(
    "/",
    authMiddleware,
    authorizeRole("doctor"),
    createPrescriptionController
);

router.get(
    "/doctor",
    authMiddleware,
    authorizeRole("doctor"),
    doctorPrescriptionsController
);

router.get(
    "/patient",
    authMiddleware,
    authorizeRole("patient"),
    patientPrescriptionsController
);

router.put(
    "/:id",
    authMiddleware,
    authorizeRole("doctor"),
    updatePrescriptionController
);

module.exports = router;