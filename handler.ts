'use strict';
import app from './src/app';
import serverless from 'serverless-http';
export const start = serverless(app);