---
sidebar_label: '7300A1AIM35UIV30021'
hide_title: true
title: EPC-R7300 BSP Image 7300A1AIM35UIV30021 (Ubuntu 20.04)
tags: 
   - EPC-R7300 
   - NVIDIA Orin
   - BSP Image
---

:::tip [Download The BSP Image Here](https://www.dropbox.com/scl/fo/fu6ird75kxv8ybqpzj53q/h/7300A1AIM35UIV30021_2024-01-23.tgz?rlkey=2z9t1lioijzqhqihmwfkw66nx&dl=0)
MD5： `40a931da749b77e13674b8d12fc765a6`
<br/>Version： Beta
<br/>Test Report：[Link](https://ess-wiki.advantech.com.tw/wiki/images/8/81/EPCR7300.pdf)
:::

## Overview
- Release Date: 2024/01/23
- Support Product: EPC-R7300

## Comment

### Features

| Component       | Version                |
|-----------------|------------------------|
| SOM             | ORIN NX 8G/16G and ORIN Nano 4G/8G |
| Jetpack version | 5.1.2                 |
| L4T version     | 35.4.1                 |

## Flash Step
### Device Connection

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

### Entering Recovery Mode

The device supports two methods to enter recovery mode:

#### Command Trigger Mode
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

#### Device Trigger Mode
1. Open the back cover
2. Connect the Micro USB cable to the Host PC
3. Press the SW1 button and power on
   ![SW1 Button](../../assets/Recovert_Button.png)   
4. Verify recovery mode by checking if **NVIDIA Corp** is detected:
   ```bash
   lsusb | grep "NVIDIA Corp"
   ```
   Expected output: `XXXX:XXXX NVIDIA Corp`

### Start flash BSP
#### Run Command on Host PC
- Extracted BSP image file
``` bash
$  sudo tar -zxvf 7300A1AIM35UIV30021_2024-01-23.tgz
```
- Switch Directory
``` bash
$  cd Linux_for_Tegra
```
- To flash QSPI + NVME SSD:
``` bash
$ sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-epcr7300-a1 internal
```
