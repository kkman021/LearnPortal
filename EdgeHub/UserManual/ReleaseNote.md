---
sidebar_position: 2
sidebar_label: 'Release Notes'
hide_title: true
pagination_label: Release Notes
title: 'EdgeHub Release Notes'
description: ''
---
**Release Date:** May 19, 2025  
**Version:** 2.4.0

## Device Management

### New Features

- **Fetch EdgeLink Runtime Project**
  - Users can request EdgeLink devices to upload their runtime EdgeLink project files via the web page.
  - Each device has a maximum number of project files allowed. The oldest file will be replaced if the limit is reached.
  - Requires EdgeLink firmware version 2.4.4.2 or above.
  - Users can share (copy) device project files (type-dedicated) to File Management for all devices in the tenant (type-shared).

- **Device Auto Provisioning**
  - Devices automatically connect to the IoT platform (EdgeHub) upon power-on via the auto provision service.
  - Only supported for EdgeLink models with specific SN.

- **Move Device to Another Tenant**
  - In "My Device" page, users can move a device (or a parent device with its child devices) to another tenant.
  - If the device name already exists in the target tenant, the new device name will be displayed on the web page.

### Updates

- **LoRaMAN Worker**
  - Improved reconnection with the RabbitMQ server.

- **DeviceConfig**
  - Upgraded JDK version.
  - Improved chilibase reconnection mechanism.

- **Center API**
  - Modified method for obtaining RabbitMQ external host name at BJ site.
  - Added user's role in the login API.
  - When logging in, returns all tenants of the user even without Device Management permission.

- **Web Page**
  - Device "Tag" tab now auto-refreshes tag values.

- **Cert Revoke**
  - Cert revoke button is disabled after clicking to prevent multiple submissions.

---

## Data Management

### New Features

- **Evaluator**
  - Refactored codebase in Golang.
  - Supports multiple instances.
  - Supports topological sorting of calculation parameters to ensure correct calculation sequence.
    - **Example:**  
      Parameters: A, B, C  
      Formulas:  
        - A = md(100)  
        - B = A + 2  
        - C = B % 3  
      Sequence: A → B → C
    - Supports detection and prevention of loop references:
      - Example:  
        - A = B + 1  
        - B = C + 1  
        - C = A + 1  
      All involved parameters will be discarded if a loop is detected.

### Updates

- **Core**
  - Notification API supports Line Official Account.
  - Portal SILA update for master site & BJ site.

- **UI Enhancements**
  - Support opening a new window for:
    - Open EdgeHub
    - Open Device Management
    - Create Account
  - Bundle installer now supports selecting install location.
  - Tray menu: support opening new window for Sign in and Register EpnClient.

---

## Command Center

### Updates

- **Datasource**
  - Removed SysOperationLog, SystemLog, and DeviceLog from datasource FunctionType.

### Fixes

- **Switch Panel**
  - Hide columns automatically added after upgrading.
  - Hide datasource dropdown for old version switch panel.

- **Menu**
  - Menu names only support dash (`-`) and underscore (`_`).

---

## User Management

### Updates

- **Role**
  - Added "Common function" category and moved "Alarm and event" under it.

---
