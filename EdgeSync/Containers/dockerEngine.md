---
sidebar_label: 'Docker Engine'
title: 'Docker Engine'
description: 'Learn about Docker Engine'
sidebar_position: 5.2
hide_title: true
---

## Checking Docker Engine Status

To verify if Docker Engine is installed and running correctly on your system, you can use several commands:

### Check Docker Version
```bash
docker --version

# Expected output:
# Docker version 24.0.6, build ed223bc
```

### Verify Docker is Running
```bash
docker ps

# Expected output (when no containers are running):
# CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```

### Test Docker with Hello-World
```bash
docker run hello-world

# Expected output:
# Hello from Docker!.....
```

## Installing Docker Engine on Linux

To install Docker Engine on a Linux system, follow these steps:

:::tip
If you are using a non-Linux system, please refer to the [Docker documentation](https://docs.docker.com/engine/) for installation instructions.
:::

### Set up Docker's apt repository
```bash
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

### Install the Docker packages
```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```
