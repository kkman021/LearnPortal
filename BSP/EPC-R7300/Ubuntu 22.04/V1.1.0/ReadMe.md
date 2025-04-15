---
sidebar_label: 'V1.1.0'
hide_title: true
title: EPC-R7300 BSP Image V1.1.0 (Ubuntu 22.04)
tags: 
   - EPC-R7300 
   - NVIDIA Orin
   - BSP Image
---

:::tip [Download The BSP Image Here](https://www.dropbox.com/scl/fo/vcdzsh21u5khs974m8zg1/AJ2XXzlFSErfTH-f-d7igvM?rlkey=g8fyp3qymd13hl9dsuu663a6i&st=ceao6gyk&dl=0)
MD5： `3e12e92193e7f6ed0c03b34eaf8e402e`
<br/>Version： Alpha
:::

## Overview
- Release Date: 2025/02/14
- Support Product: EPC-R7300


## Comment
Function are testing

## Features

| SOM              | ORIN NX 8G/16G and ORIN Nano 4G/8G |
|------------------|------------------------------------|
| Jetpack version  | 6.2.1                              |
| L4T version      | 36.4.3                             |
| Kernel version   | 5.15.148                           |

## Flash Step
## Device Connection

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#e6f2ff', 'primaryBorderColor': '#e6f2ff', 'secondaryColor': '#e6f2ff'}}}%%
graph LR
  HostPC[Host PC <br/> linux base]
  EPCR7300[EPC-R7300 <br/> Serial device]
  Monitor[HDMI Monitor]
  Keyboard[USB Keyboard]

  HostPC <-->|Micro USB| EPCR7300
  EPCR7300 <-->|HDMI| Monitor
  EPCR7300 <-->|USB| Keyboard
```

## Entering Recovery Mode

The device supports two methods to enter recovery mode:

### Command Trigger Mode
1. Connect the Micro USB cable to the Host PC
2. Run command on Host PC:
   ```bash
   sudo reboot --force forced-recovery
   ```
3. Verify recovery mode by checking if **NVIDIA Corp** is detected:
   ```bash
   lsusb | grep "NVIDIA Corp"
   ```
   Expected output: `XXXX:XXXX NVIDIA Corp`

### Device Trigger Mode
1. Open the back cover
2. Connect the Micro USB cable to the Host PC
3. Press the SW1 button and power on
4. Verify recovery mode by checking if **NVIDIA Corp** is detected:
   ```bash
   lsusb | grep "NVIDIA Corp"
   ```
   Expected output: `XXXX:XXXX NVIDIA Corp`

## Start flash BSP
### Run Command on Host PC
- Extracted BSP image file
``` bash
$  sudo tar -zxvf 7300A1AIM35UIV20026_2023-07-03.tgz
```
- Switch Directory
``` bash
$  cd Linux_for_Tegra
```
- To flash QSPI + NVME SSD:
``` bash
$ sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit-super internal
```

## TestReport