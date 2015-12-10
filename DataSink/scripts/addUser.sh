#!/bin/bash
curl -i -X POST -H "Content-Type: application/json" -d '{"username":"test","password":"123456"}' http://127.0.0.1:8082/api/v0.1/user
curl -i -X POST -H "Content-Type: application/json" -d '{"username":"testuser","password":"Hello"}' http://127.0.0.1:8082/api/v0.1/user