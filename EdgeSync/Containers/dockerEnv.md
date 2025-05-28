---
sidebar_label: 'Docker Environment'
title: 'Docker Environment'
description: 'Learn about Docker Environment'
sidebar_position: 3
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

## Installing Docker Compose

Docker Compose V2 is now included as a plugin in most modern Docker installations. If you installed Docker using the steps above, you should already have the `docker compose` command available:

```bash
docker compose version
# Expected output:
# Docker Compose version v2.x.x
```

If you need to install Docker Compose manually (for example, on older systems or on distributions like Yocto OS), you can download the official binary and place it in your PATH:

```bash
mkdir -p ~/.docker/cli-plugins/
curl -SL "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o ~/.docker/cli-plugins/docker-compose
chmod +x ~/.docker/cli-plugins/docker-compose
```
> Note: You may need to adjust the binary path or permissions depending on your environment. Make sure the `~/.docker/cli-plugins/` directory is in your user's PATH or move the binary to a suitable location.

Verify installation
```bash
docker compose version
# Expected output:
# Docker Compose version v2.x.x
```

### About `uname` Command

The `uname` command is used to print system information, such as the operating system and hardware architecture. In the Docker Compose installation instructions above, `uname -s` returns the operating system name (e.g., `Linux`), and `uname -m` returns the machine hardware name (e.g., `x86_64`, `aarch64`).

**Common usage and examples:**

```bash
uname -s   # Print the operating system name
uname -m   # Print the hardware architecture
```

**Example outputs:**

```bash
$ uname -s
Linux

$ uname -m
x86_64
```

These values are used to download the correct binary for your platform. For example, on an ARM 64-bit system, `uname -m` would return `aarch64`, so the downloaded file would be `docker-compose-linux-aarch64`.

## Basic commands

### Docker Commands

| Command | Description |
|---------|-------------|
| `docker images` | List all Docker images |
| `docker ps` | List all running containers |
| `docker ps -a` | List all containers (including stopped) |
| `docker start <container_name_or_id>` | Start a container |
| `docker stop <container_name_or_id>` | Stop a container |
| `docker rm <container_name_or_id>` | Remove a container |
| `docker rmi <image_name_or_id>` | Remove an image |
| `docker build -t <image_name>:<tag> .` | Build an image from a Dockerfile |
| `docker run -d --name <container_name> <image_name>:<tag>` | Run a container from an image |
| `docker logs <container_name_or_id>` | View logs of a container |

### Docker Compose basic Commands

| Command | Description |
|---------|-------------|
| `docker compose up` | Start services defined in docker-compose.yml |
| `docker compose up -d` | Start services in detached mode |
| `docker compose down` | Stop services |
| `docker compose ps` | View running services |
| `docker compose build` | Build or rebuild services |
| `docker compose logs` | View logs for all services |

> Replace placeholders (e.g., `<container_name_or_id>`, `<image_name>`, `<tag>`) with your actual values.
