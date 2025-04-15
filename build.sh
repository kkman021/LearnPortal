#!/bin/bash

build_version=$(date +%Y-%m-%d-%H-%M-%S)

docker build -t learn-site:latest -t learn-site:v0.0.1.$build_version .
