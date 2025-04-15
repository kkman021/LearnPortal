---
sidebar_label: 'Installation'
description: 'Install and Configure the EdgeSync SDK'
sidebar_position: 4.2
hide_title: true
---

## Overview

 * This section will cover how to install the EdgeSync SDK for different programming languages.
 * It will also explain the system information that can be controlled and retrieved using the EdgeSync SDK.
 * Detailed usage will be explained in the following sections.

## Installation and Verification

:::info Software dependencies
EdgeSync SDK requires the following two software dependencies. Please verify with your sales representative if your hardware supports them. In principle, they should be pre-installed on your system. If you need to reinstall them, please visit these platforms:

- [SUSI](https://github.com/ADVANTECH-Corp/SUSI/)
- [PlatformSDK(EAPI)](https://www.advantech.com/en/support/details/software-api?id=1-1W0B5BW)
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="python" label="Python" default>

### Installation
Requires Python 3.7 or newer:
```bash
pip install edgesync-sdk
# For specific version
pip install edgesync-sdk==1.2.0
```

### Verify Installation
```python
import edgesync
print(edgesync.__version__)
```
</TabItem>
<TabItem value="csharp" label="C#">

### Installation
Requires .NET 6.0 or newer:
```bash
dotnet add package EdgeSync.SDK
# For specific version
dotnet add package EdgeSync.SDK --version 1.2.0
```

### Verify Installation
```csharp
using EdgeSync.SDK;
var version = EdgeSyncSDK.Version;
Console.WriteLine(version);
```
</TabItem>
</Tabs>

## System Information Reference

After installation, you can use the SDK to query the following system information:

### Platform Information
- Boot Count
- Operating Hours
- Motherboard Name
- Firmware Name
- Firmware Version
- BIOS Version
- Driver Version
- Library Version

### Hardware Monitoring Information
#### Voltage Monitoring
- Vcore
- 5V Standby Voltage
- CMOS Battery
- DC Voltage

#### Temperature Monitoring
- CPU Temperature
- System Temperature

#### GPIO Status
Provides configuration status for GPIO00 to GPIO07:
- Direction (Dir): Input (0) / Output (1)
- Level: Low (0) / High (1)

### Memory Information
- Type
- Capacity
- Speed
- Voltage
- Temperature
- Part Number

### Storage Information
- Main Disk: Total and Available Space
- Recovery Disk: Total and Available Space
- Home Directory: Total and Available Space

## Frequently Asked Questions

### Q: What should I do if I encounter errors during installation?
A: Please ensure your system meets the minimum requirements and check your network connection. If the problem persists, refer to the error logs or contact technical support.

### Q: How do I update the SDK version?
A: Use the same installation commands with update parameters:
- Python
`pip install --upgrade edgesync-sdk`
- C#
`dotnet add package EdgeSync.SDK --version <latest_version>`