---
sidebar_label: 'Overview'
pagination_label: 'Overview'
title: Overview
description: Overview about Advantech BSP Images
sidebar_position: 0
hide_title: true
---
## BSP Files for Advantech Hardware Products

This guide will help you understand and locate the appropriate Board Support Package (BSP) files for Advantech hardware products. BSPs contain essential drivers, utilities, and software components needed for operating systems to work properly with Advantech hardware.

## Folder Structure

The BSP files are organized in a hierarchical structure as follows:

```
website
├── BSP/
│   ├── [Product Model]/                    # Hardware product model (e.g., EPC-R7300)
│   │   ├── Overview.md                     # Detailed information about the device
│   │   ├── [Operating System]/             # OS name and version (e.g., Ubuntu 20.04)
│   │   │   ├── [Version Number]/           # BSP version (e.g., V1.0.1)
│   │   │   │   └── ReadMe.md               # Documentation for this specific version
│   │   │   └── [Version Number]/           # Previous BSP version (e.g., V1.0.0)
│   │   │   │   └── ...
│   │   └── [Operating System]/             # Another supported OS (e.g., Ubuntu 22.04)
│   │       └── ...
│   └── [Product Model]/                    # Another hardware product (e.g., MIC-730AI)
│       └── ...
```

### Understanding the Structure:

- **Product Model**: Indicates the specific Advantech hardware device
- **Overview**: Detailed information about the device, including features, ports, and other specifications
- **Operating System**: Shows which OS and version the BSP supports
- **Version Number**: BSP release version, with higher numbers being more recent
- **ReadMe.md**: Contains all necessary documentation for implementation

## ReadMe Content

Each ReadMe.md file provides comprehensive information about the specific BSP version, including:

- **Download Location**: Where to obtain the BSP files
- **MD5 Checksum**: For verifying file integrity after download
- **Version Information**: Current version number and release date
- **BSP Features**: Hardware components and capabilities supported
- **Installation Guide**: Step-by-step instructions for implementation
- **Test Reports**: Compatibility and performance information

## Version Classification

BSP versions follow a standardized development cycle with these classifications:

| Classification | Description |
|---------------|-------------|
| **Alpha** | Initial development version with basic I/O functionality implemented by Research & Development team |
| **Beta** | Enhanced version with verified basic I/O functions, performance optimizations, and middleware integration by R&D team; includes peripheral device support |
| **GA** | Beta version that has passed Quality Engineering verification process |
| **RTM** | Final production version that has been verified by System Integration, Power Management, and Quality Engineering teams; pre-loaded on shipping devices |

To find the appropriate BSP for your Advantech device, navigate through the folder structure based on your hardware model and required operating system.