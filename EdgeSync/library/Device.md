---
title: 'Device'
sidebar_label: 'Starting from Device'
description: 'Query device and firmware details'
sidebar_position: 4.3
hide_title: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Code Architecture

:::tip
Device Library is a cross-language component. Therefore, when describing architecture and class dependencies, Python conventions are used. For other languages, please refer to the sample code examples.
:::

The Device class is the core of the EdgeSync Device library, acting as the main entry point for accessing hardware components. When you create an instance of Device, e.g.:  

```python
from edgesync_sdk import Device

# Initialize device
device = Device()
```

It initializes and aggregates multiple subsystems:

- **memory**: Provides access to system memory information and operations, such as `memory_count`, `get_memory_type()`, and `get_memory_size_in_GB()`.  
- **disk**: Provides disk information, including `total_disk_space` and `free_disk_space`.  
- **motherboard**: Provides platform information, such as `board_manufacturer`, `bios_revision`, and hardware monitor data (voltage, temperature, fan speeds, etc.).  
- **gpio**: Provides General Purpose Input/Output control, allowing you to list pins, set directions, and control levels.  

Each subsystem is exposed as a property on the `Device` instance. This design centralizes hardware interactions within a single object, simplifying resource management and cleanup.

## Class Diagram

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#e6f2ff', 'secondaryColor': '#ffffff', 'tertiaryColor': '#f0f5ff', 'clusterBkg': '#ffffff', 'subGraphBkg': '#ffffff' }}}%%
classDiagram
    class Device {
        +memory: Memory
        +disk: Disk
        +motherboard: Motherboard
        +gpio: Gpio
        +__init__()
    }
    class Memory {
        +memory_count: int
        +get_memory_type(index): str
        +get_memory_size_in_GB(index): float
        +get_memory_speed(index): int
        +memory_list: list
    }
    class Disk {
        +total_disk_space: int
        +free_disk_space: int
    }
    class Motherboard {
        +board_manufacturer: str
        +name: str
        +bios_revision: str
        +library_version: str
        +voltage_sources: list
        +temperature_sources: list
        +fan_sources: list
    }
    class Gpio {
        +pins: list
        +get_gpio_direction(pin): GpioDirectionType
        +set_gpio_direction(pin, direction): void
        +get_gpio_level(pin): GpioLevelType
        +set_gpio_level(pin, level): void
    }

    Device --> Memory
    Device --> Disk
    Device --> Motherboard
    Device --> Gpio
```

## Sample Code
<Tabs>
<TabItem value="python" label="Python" default>

```python
from edgesync_sdk import Device

# Initialize device
device = Device()

```

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
using EdgeSync.SDK;

var device = new Device();
var info = device.PlatformInformation;
Console.WriteLine($"Motherboard: {info.MotherboardName}");
Console.WriteLine($"Manufacturer: {info.Manufacturer}");
Console.WriteLine($"BIOS Revision: {info.BiosRevision}");
if (info.DmiInfo != null)
    Console.WriteLine($"System UUID: {info.DmiInfo.SysUuid}");
```

</TabItem>
</Tabs>

