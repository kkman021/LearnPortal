---
hide_title: true
sidebar_label: 'Watchdog'
sidebar_position: 4.32
pagination_label: Access Watchdog
---

## Watchdog Timer

This section explains how to control the hardware watchdog timer using the EdgeSync SDK. 

### Monitoring & Diagnostics

The hardware watchdog runs autonomously once started. If you fail to "feed" (trigger) it before `event_timeout`, a hardware signal is raised; if `reset_timeout` elapses, the device performs a reset. The SDK does not provide managed callbacks for these events—you can observe them by:

- **Hardware Documentation:** Consult your board or SoC datasheet for watchdog interrupt and reset behavior.
- **Linux Logs:** Use `dmesg | grep -i watchdog`, check `/sys/class/watchdog/watchdog*/status`, or `journalctl -k` for kernel watchdog messages.
- **Windows Event Viewer:** Filter System logs for “Watchdog” or WHEA‑Logger events to find watchdog timeouts.
- **Reset Cause Registers:** Some firmware/BIOS store the last reset reason in CMOS/NVRAM; read via vendor tools or an API if available.

### Use Cases

#### 1. Interactive Kiosk Recovery
**Scenario:** A self-service kiosk in a large retail center experiences unpredictable software freezes during peak hours.  
**Challenge:** Manual reboots cause long wait times and lost transactions.  
**Solution:** The watchdog timer detects the hang and auto-reboots the kiosk within seconds, restoring service without staff intervention.

#### 2. Remote Logger Reliability
**Scenario:** A weather station logs environmental data in a remote mountain location.  
**Challenge:** If the data-collection application hangs overnight, critical records are lost until manual reboot.  
**Solution:** On hang detection, the watchdog resets the device, ensuring uninterrupted data capture by morning.

#### 3. Unmanned Controller Continuity
**Scenario:** Industrial controllers manage process lines in an unmanned factory facility.  
**Challenge:** An unexpected control-loop freeze can halt production, leading to costly downtime.  
**Solution:** The watchdog automatically reboots the controller on unresponsiveness, keeping the line running smoothly.

### Advanced Usage: Multiple Watchdog Handles

Most embedded platforms expose a single hardware watchdog timer per device, and the SDK provides one `device.watchdog` instance. If your application needs to track multiple subsystems with different timeout requirements, consider:

- **Software Multiplexing:** Create separate software timers for each subsystem (e.g., thread or async tasks) that feed the same hardware watchdog at the earliest timeout among them.
- **Custom Logic:** On each software timer expiry, decide whether to call `wd.trigger_timer()` or log an error, based on which subsystem missed its deadline.

If your hardware supports multiple watchdog channels (rare), refer to the board vendor’s datasheet and driver APIs for additional instances.



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
