# Webtask SMS Encrypted

Sample project to use webtask with sms and ceasar cipher.

## Description

This project is where I implemented in webtask a express app  where I can encrypt and decrypt messages using caesar cipher and twilio to send an encrypted SMS to any number.

## Getting Started

### Dependencies

* Node
* Npm
* Webtask CLI
* Configured Twilio account

### Installing

Clone the project

```
$ git clone https://github.com/KeoniMuller/webtask-sms-encrypt.git
````

Install webtask cli
```
$ npm i -g wt-cli
$ wt init
```

Create an env file that has this variables

* SHIFT_AMOUNT=int number shift amount to encrypt
* TWILIO_ACCOUNT_SID=twilio account SID
* TWILIO_AUTH_TOKEN=twilio auth token
* TWILIO_MY_NUMBER=twilio phone number

### Executing program locally

From the console just execute this command:
```
wt serve index.js --secrets-file .env
```

### Deployment

From the console just execute this command:
```
wt create index.js --secrets-file .env -w -b
```

## Authors

Keoni Delgado Muller
