#!/usr/bin/env node
import 'source-map-support/register';
import * as dotenv from 'dotenv';
dotenv.config({ path: './.env' });

import * as cdk from 'aws-cdk-lib';
import { LCSStack } from '../lib/iac-stack';

const app = new cdk.App();

const { AWS_ALB_LISTENER_ARN, AWS_CLUSTER_ARN, AWS_DEFAULT_SG, AWS_VPC_ID } =
  process.env;

if (!AWS_ALB_LISTENER_ARN) {
  throw new Error('AWS_ALB_LISTENER_ARN env is undefined!');
}

if (!AWS_CLUSTER_ARN) {
  throw new Error('AWS_CLUSTER_ARN env is undefined');
}

if (!AWS_DEFAULT_SG) {
  throw new Error('AWS_DEFAULT_SG env is undefined!');
}

if (!AWS_VPC_ID) {
  throw new Error('AWS_VPC_ID env is undefined!');
}
new LCSStack(app, 'LcsApp', {
  aws_env: {
    AWS_ALB_LISTENER_ARN,
    AWS_CLUSTER_ARN,
    AWS_DEFAULT_SG,
    AWS_VPC_ID,
  },

  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
