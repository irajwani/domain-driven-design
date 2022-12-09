## Description

Template repository: Domain Driven Design, CQRS, Event Sourcing, Mongo, more to come

## Installation

```bash
$ git clone <this-repo>
$ npm install
```

## Running the app

```bash
$ docker build -t template-service .
$ docker-compose up
```

Or 

```bash
$ docker pull irajwani/template-service
```

Or

```bash
$ npm run dev
$ npm run test
```

and run a mongo container within docker on port 27017

## Usage

Simply visit the [swagger documentation](http://localhost:3000/documentation) to see all available endpoints and their required parameters

You can connect to the mongodb instance within a GUI for mongo with connection string 'mongodb://localhost:27017'

## Standard User Story:
