#!/usr/bin/env bash

./node_modules/mountebank/bin/mb start --configfile mb-session.json &
./node_modules/ionic/bin/ionic serve
