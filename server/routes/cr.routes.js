import express from 'express';
import CrController from '../controllers/cr.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/users - Get list of users */
  .get(CrController.test);
