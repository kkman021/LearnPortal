---
sidebar_label: 'NVIDIA'
pagination_label: 'NVIDIA Introduction'
title: NVIDIA Introduction
sidebar_position: 4
pagination_prev: null
tags:
  - NVIDIA
---

# Introduction

NVIDIA's industrial edge computing solutions deliver powerful AI inference capabilities, optimized for demanding industrial automation and real-time analytics applications. This guide outlines essential implementation steps for containerized applications using Docker on NVIDIA-powered edge computing platforms.

This documentation covers:

- Setting up development environments with JetPack SDK and BSP configurations
- Configuring Docker for GPU acceleration and display access
- Deploying optimized containers for production use cases
- Implementing security best practices and scalable architectures

Whether you're new to NVIDIA's ecosystem or an experienced developer, you'll find detailed instructions for maximizing GPU-accelerated computing in industrial deployments.

## Product model and Installation Requirements

Different NVIDIA product models require specific setup procedures and configurations. Select your hardware model from the following sections to access detailed environment setup instructions:

Choose the appropriate hardware model section in the BSP chapters for specific installation and configuration guidelines.
 
## Minimum Requirements
The following components must be installed on your device to run AI applications. Please verify the versions match or exceed these requirements:

| Component | Details |
|-----------|---------|
| JetPack Version | 5.1.2 |
| CUDA Version | 11.4.315 |
| cuDNN Version | 8.6.0.166 |
| TensorRT Version | 8.5.2.2 |
| VPI Version | 2.4.8 |
| OpenCV Version | 4.7.0 with CUDA: YES (and Above) |

### BSP Image
Advantech's NVIDIA-related products come with a specific version of JetPack pre-installed. If the version does not meet your requirements, you can find the updated BSP (Board Support Package) for the corresponding hardware in the **[BSP Image section](/BSP/Overview)**. Follow the tutorial to complete the BSP version flash process.

### How to check your information
Jtop is a system monitoring tool designed specifically for the NVIDIA Jetson platform, similar to the top command in Linux systems, but providing more detailed hardware and system information for Jetson devices. 

#### Features
This tool displays detailed information about Jetson devices, including:

- Platform information: Processor architecture, operating system, release version, etc.
- Hardware information: Model, serial number, module type, etc.
- Library versions: CUDA, cuDNN, TensorRT, etc.
- Network interfaces: Network connection information

#### Installation and Usage
To install and use jtop, you can typically install it via pip:

```bash
pip install -U jetson-stats
```

Then simply enter the jtop command in the terminal to launch this monitoring tool:

```bash
jtop
```

## Jetson Software Package Installation
The NVIDIA Software Development Kit (SDK) Manager is an all-in-one tool that bundles developer software and provides an end-to-end development environment setup solution for NVIDIA SDKs.

Advantech will only build in Jetpack components on the device. If you need to install other components, please follow the document: **[Download and Run SDK Manager](https://docs.nvidia.com/sdk-manager/download-run-sdkm/index.html)**

:::caution Notice on OS Installation
Please note that installing the Jetson OS directly on the device may cause driver abnormalities. If you encounter any OS-related issues, please refer to the BSP (Board Support Package) section for adjustments and proper configuration.

![do not check Jetson OS](assets/JetsonSoft.png)
:::