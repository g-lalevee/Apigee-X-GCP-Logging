
[![PyPI status](https://img.shields.io/pypi/status/ansicolortags.svg)](https://pypi.python.org/pypi/ansicolortags/) 

# Apigee X - Googlee Cloud Logging Shared Flow

**This is not an official Google product.**<BR>This implementation is not an official Google product, nor is it part of an official Google product. Support is available on a best-effort basis via GitHub.

***

## Intro

This repository contains a sharedflow for Apigee X to send proxy logs to Google Cloud Logging.<br>
It is based on [DinoChiesa / Apigee-GCP-Logging-Example](https://github.com/DinoChiesa/Apigee-GCP-Logging-Example), but updated to  be deployed on Apigeee X as a Sharedflow

## Requirement

## Installation

### Setting up GCP

To authorize Apigee X to send logs records to Google Cloud Lgging, you must first: 
- Create a service account in Google Cloud and assign it the necessary roles (at least, Logs Writer)
- Create and download a json key for the service account

To create it in your Apigee organization's GCP project, use following gcloud commands (or GCP Web UI):

```sh
SA_NAME=<your-new-service-account-name>

gcloud iam service-accounts create $SA_NAME --display-name="Apigee Logging"

PROJECT_ID=$(gcloud config get-value project)
APIGEE_LOGGING_SA=$SA_NAME@$PROJECT_ID.iam.gserviceaccount.com

gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:$APIGEE_LOGGING_SA" \
  --role="roles/logging.logWriter"

gcloud iam service-accounts keys create $SA_NAME-key.json --iam-account=$APIGEE_LOGGING_SA --key-file-type=json 

```

You will use valuees from json key file during Apigee X KVM configuration.

### Setting up the KVMs

The sharedflow uses 2 KVM to store parameters and credentials to access to GCP Logging service :
- GCP-Keys: 
    - key "gcplogging.privKeyPem": the PEM-encoded private key you got from GCP Service Account)
- GCP-Logging-settings 
    - key "gcplogging.jwt_issuer": client_email of GCP Servicee Account used to connect to Cloud Logging
    - key "gcplogging.logid": logname used to store Apigee log record in Cloud Logging
    - key "gcplogging.projectid": Google Cloud Logging Project Id 


The KVMs in Apigee X or hybrid still need to be created via the management API or the Apigee UI but their content can only be created, read or deleted from within the runtime from a KeyValueMapOperations policy.

### Installing Sharedflow

work in progress

### Using Sharedflow in your proxy

work in progress
