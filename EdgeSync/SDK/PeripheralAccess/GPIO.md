---
hide_title: true
sidebar_label: 'GPIO'
sidebar_position: 4.31
pagination_label: Access GPIO

---

## What is GPIO

GPIO (General Purpose Input/Output) is a programmable digital signal pin that can be used as either an input or output. These pins provide a simple way to interface with various electronic components and devices.

As an input, GPIO pins can read digital signals (high/low states) from sensors, buttons, or other devices. As an output, they can control LEDs, relays, motors, or other electronic components by sending digital signals.

Key features of GPIO:
- Configurable as input or output
- Digital signal handling (0V for low, 3.3V/5V for high)
- Pull-up/pull-down resistor support
- Interrupt capability
- Simple programming interface

## GPIO Pin Control
The GPIO pins are identified by specific IDs. Common operations include:
- Reading pin state
- Setting pin state (HIGH/LOW)
- Checking pin availability

## Python
### EdgeSync GPIO Usage Example

```python
from susiiot import SusiIot

def gpio_control_example():
    # Initialize SUSI IoT handler
    handler = SusiIot()
    
    # GPIO pin configuration
    gpio_pin = 17039873  # Using GPIO 0
    
    try:
        # Check if GPIO pin is available
        if gpio_pin in handler.id_list:
            # Read initial state
            initial_state = handler.get_data_by_id(gpio_pin)
            print(f"Initial GPIO state: {initial_state}")
            
            # Set GPIO to LOW (0)
            handler.set_value(gpio_pin, 0)
            low_state = handler.get_data_by_id(gpio_pin)
            print(f"GPIO set to LOW: {low_state}")
            
            # Set GPIO to HIGH (1)
            handler.set_value(gpio_pin, 1)
            high_state = handler.get_data_by_id(gpio_pin)
            print(f"GPIO set to HIGH: {high_state}")
            
            # Restore initial state
            handler.set_value(gpio_pin, initial_state)
        else:
            print(f"GPIO {gpio_pin} is not available")
            
    except Exception as e:
        print(f"GPIO operation failed: {e}")

if __name__ == "__main__":
    gpio_control_example()
```