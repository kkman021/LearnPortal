---
title: 'Installation'
sidebar_label: 'Installation'
description: 'Install and Configure the EdgeSync Device Library'
sidebar_position: 4.2
hide_title: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

 * This section will cover how to install the EdgeSync Device Library for different programming languages.
 * It will also explain the system information that can be controlled and retrieved using the EdgeSync Device Library.
 * Detailed usage will be explained in the following sections.

## Dependencies
EdgeSync Device Library requires the following two software dependencies. Please verify with your sales representative if your hardware supports them. In principle, they should be pre-installed on your system. If you need to reinstall them, please visit these platforms:

:::info Software dependencies
- [SUSI](https://github.com/ADVANTECH-Corp/SUSI/)
- [PlatformSDK(EAPI)](https://www.advantech.com/en/support/details/software-api?id=1-1W0B5BW)
:::

Additionally, depending on your development language, ensure that the appropriate runtime is installed on your system or inside a container. Use the following tabs to check and install the runtime on Linux:

<Tabs>
    <TabItem value="python-runtime" label="Python Runtime" default>

        #### Check Python Runtime
        ```bash
        python3 --version
        ```
        #### Install Python Runtime (if missing)
        ```bash
        sudo apt update
        sudo apt install -y python3 python3-pip
        ```

        #### Install depencies
        ```bash
        sudo apt install -y libjansson4 pciutils
        ```

    </TabItem>

    <TabItem value="dotnet-runtime" label=".NET Runtime">

        #### Check .NET Runtime
        ```bash
        dotnet --info
        ```
        #### Install .NET Runtime (if missing)
        ```bash
        wget https://packages.microsoft.com/config/ubuntu/$(lsb_release -rs)/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
        sudo dpkg -i packages-microsoft-prod.deb
        sudo apt update
        sudo apt install -y dotnet-runtime-6.0
        ```

    </TabItem>
</Tabs>

## Installation Device Library

The Device Library supports the following execution environments; installation instructions are provided for each scenario:

### On Linux OS Host 
<Tabs>
    <TabItem value="Python" label="Python" default>
        - Check you have install software dependencies, referenece [Dependencies](#dependencies)
        - Install Device Libary
        ```bash
        pip install git+https://github.com/EdgeSync-Adv/advantechiot.git
        ```
    </TabItem>
    <TabItem value=".Net C#" label=".Net C#" default>
        - Check you have install software dependencies, referenece [Dependencies](#dependencies)
        - Install Device Libary
        ```bash
        dotnet add package EdgeSync.SDK
        ```
    </TabItem>
</Tabs>

### Inside Container
<Tabs>    
    <TabItem value="Python" label="Python">
        - Create a dockerfile
        ```dockerfile
        FROM ubuntu:20.04

        ENV DEBIAN_FRONTEND=noninteractive

        RUN apt-get update && \
            apt-get install -y git python3 python3-pip libjansson4 pciutils&& \
            rm -rf /var/lib/apt/lists/*
        ```
        - Build Docker Image
        ```bash
        docker build -t deviceDemo:1.0.0 .
        ```

        - Run the Docker Image( if host is Linux base)
        ```bash
        sudo docker run \
            -it \
            --name deviceDemo \
            --privileged \
            -v /sys/firmware/efi/efivars/:/sys/firmware/efi/efivars/ \
            -v /etc/board/:/etc/board/ \
            -v /home/:/volume \
            deviceDemo:1.0.0 \
            /bin/bash
        ```

        - Run the Docker Image( if host is Yocoto base)
        ```bash
        sudo docker run \
            -it \
            --name deviceDemo \
            --privileged \
            -v /etc/board/:/etc/board/ \
            -v /home/:/volume \
            deviceDemo:1.0.0 \
            /bin/bash
        ```

    </TabItem>    
</Tabs>