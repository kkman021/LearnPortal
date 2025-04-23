---
title: 'Device Information'
sidebar_label: 'Device Information'
description: 'Query device and firmware details'
sidebar_position: 4.4
hide_title: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Use Cases

#### Factory Asset Audit
In a manufacturing plant’s control room, an automated nightly job gathers motherboard models, BIOS revisions, and firmware versions from all embedded controllers. This centralized reporting streamlines maintenance planning and hardware lifecycle management.

#### Firmware Rollout Assurance
Ahead of a large-scale firmware update on remote industrial gateways, the system programmatically retrieves current BIOS and driver metadata. Any mismatch halts the rollout, safeguarding devices from incompatible updates and reducing risk of field failures.

#### Unique Device Tracking
Each IoT gateway pushes its system UUID to a central asset management platform, linking hardware identities to service records. This ensures precise traceability for troubleshooting and audit compliance across distributed industrial networks.

<Tabs>
<TabItem value="python" label="Python" default>

```python
from edgesync_sdk import Device

# Initialize device
device = Device()

# Access device information
info = device.platform_information
print(f"Motherboard: {info.motherboard_name}")
print(f"Manufacturer: {info.manufacturer}")
print(f"BIOS Revision: {info.bios_revision}")
if info.dmi_info:
    print(f"System UUID: {info.dmi_info.sys_uuid}")
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
