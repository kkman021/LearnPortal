---
hide_title: true
sidebar_label: 'Onboard Sensors'
sidebar_position: 4.33
pagination_label: Access Onboard Sensors
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Onboard Sensors

Use the SDK to read onboard sensor data including temperature, voltage, and fan speed. Ensure your hardware supports these measurements.

### Use Cases

#### 1. Thermal Safeguard in Data Center
**Scenario:** In a server rack environment where CPU temperatures can spike under heavy load.  
**Challenge:** Sudden overheating can lead to throttling or shutdowns, affecting service availability.  
**Solution:** Use the SDK to poll temperature sensors; if readings exceed thresholds, automate fan speed increases or workload throttling to maintain safe operation.

#### 2. Power Stability in Remote Station
**Scenario:** A telecom hub installed in a remote area faces unpredictable power surges and drops.  
**Challenge:** Voltage fluctuations risk corrupting data and damaging sensitive components.  
**Solution:** Monitor 3.3V bus voltages via the SDK; on detecting unsafe levels, trigger safe shutdown scripts to protect hardware and preserve data integrity.

#### 3. Predictive Maintenance in Manufacturing
**Scenario:** Embedded PCs on a production line monitor machinery conditions.  
**Challenge:** Gradual degradation of fans or heat sinks can be hard to spot until failure occurs.  
**Solution:** Record periodic fan speed and temperature metrics; analyze trends to schedule maintenance before failures disrupt operations.

<Tabs>
  <TabItem value="python" label="Python" default>

```python
from edgesync_sdk import Device

device = Device()
sensors = device.onboard_sensors

if sensors.is_supported:
    # Single-point readings
temp = sensors.get_temperature('Cpu')
volt = sensors.get_voltage('Bus3P3V')
rpm = sensors.get_fan_speed('System')
print(f"CPU Temp: {temp} °C, 3.3V: {volt} V, Fan: {rpm} RPM")

    # Batch readings
for name, c, f in sensors.get_temperature_measure_points():
    print(f"{name}: {c} °C / {f} °F")
for name, v in sensors.get_voltage_measure_points():
    print(f"{name}: {v} V")
for name, r in sensors.get_fan_speed_measure_points():
    print(f"{name}: {r} RPM")
```
  </TabItem>
  <TabItem value="csharp" label="C#">

```csharp
using EdgeSync.SDK;

var device = new Device();
var sensors = device.OnboardSensors;
if (sensors.IsSupported)
{
    // Single-point readings
double cpuTemp = sensors.GetTemperature(TemperatureSources.Cpu);
double vcore = sensors.GetVoltage(VoltageSources.Bus3P3V);
double fanRpm = sensors.GetFanSpeed(FanSources.System);
Console.WriteLine($"CPU: {cpuTemp} °C, 3.3V: {vcore} V, Fan: {fanRpm} RPM");

    // Batch readings
foreach (var (name, c, f) in sensors.GetTemperatureMeasurePoints())
    Console.WriteLine($"{name}: {c} °C / {f} °F");
foreach (var (name, v) in sensors.GetVoltageMeasurePoints())
    Console.WriteLine($"{name}: {v} V");
foreach (var (name, r) in sensors.GetFanSpeedMeasurePoints())
    Console.WriteLine($"{name}: {r} RPM");
}
```  
  </TabItem>
</Tabs>
