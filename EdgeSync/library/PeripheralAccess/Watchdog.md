---
title: 'Watchdog'
description: 'Control the hardware watchdog timer using the EdgeSync Device Library, including monitoring events and handling reset behavior.'
sidebar_label: 'Watchdog'
sidebar_position: 4.32
pagination_label: Access Watchdog
---

## Watchdog Timer

This section explains how to control the hardware watchdog timer using the EdgeSync Device Library. 

### Monitoring & Diagnostics

The hardware watchdog runs autonomously once started. If you fail to "feed" (trigger) it before `event_timeout`, a hardware signal is raised; if `reset_timeout` elapses, the device performs a reset. The library does not provide managed callbacks for these events—you can observe them by:

- **Hardware Documentation:** Consult your board or SoC datasheet for watchdog interrupt and reset behavior.
- **Linux Logs:** Use `dmesg | grep -i watchdog`, check `/sys/class/watchdog/watchdog*/status`, or `journalctl -k` for kernel watchdog messages.
- **Windows Event Viewer:** Filter System logs for “Watchdog” or WHEA‑Logger events to find watchdog timeouts.
- **Reset Cause Registers:** Some firmware/BIOS store the last reset reason in CMOS/NVRAM; read via vendor tools or an API if available.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="python" label="Python">
```python
from edgesync_sdk import Device

device = Device()
wd = device.watchdog

if wd.is_supported:
    # Start the watchdog (delay, event timeout, reset timeout in ms)
    wd.start_timer(delay=1000, event_timeout=500, reset_timeout=2000)
    # Periodically trigger to prevent reset
    wd.trigger_timer()
    # Stop the watchdog when no longer needed
    wd.stop_timer()
else:
    print("Watchdog not supported on this platform")
```
</TabItem>
<TabItem value="csharp" label="C#">
```csharp
using EdgeSync.SDK;

var device = new Device();
var wd = device.Watchdog;

if (wd.IsSupported)
{
    // Start the watchdog with (delay, eventTimeout, resetTimeout)
    wd.StartTimer(1000, 500, 2000);
    // Trigger periodically to keep it alive
    wd.TriggerTimer();
    // Stop when done
    wd.StopTimer();
}
else
{
    Console.WriteLine("Watchdog not supported on this device");
}
```
</TabItem>
</Tabs>
