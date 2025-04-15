---
sidebar_label: 'Qualcomm'
pagination_label: 'Qualcomm Introduction'
title: Qualcomm Introduction
sidebar_position: 3.1
tags:
  - Qualcomm
  - QNN SDK
---

# Introduction

Qualcomm's advanced AI solutions provide powerful edge computing capabilities for industrial applications, leveraging the Qualcomm Neural Processing SDK and Qualcomm Neural Network (QNN). This guide outlines the essential environment verification for AI development on Qualcomm platforms.

Advantech primarily adopts the Tensorflow framework for AI development on Qualcomm platforms. All Advantech devices come with pre-installed necessary components to streamline your development process.

## Environment Verification

This guide will help you verify your environment in the correct sequence, ensuring all dependencies are properly configured.

### Verify QNN SDK Environment

The QNN SDK is the foundation for AI development on Qualcomm platforms, so we'll verify this first:

1. Check that `QNN_SDK_ROOT` is set correctly by running:
   ```bash
   echo $QNN_SDK_ROOT
   ```
   - You should see the path to the folder name inside `qairt` (Ex. `.../qairt/2.22.6.240515`)
   
   - **If QNN_SDK_ROOT is not set:**
     1. Navigate to `qairt/<QNN_SDK_VERSION>/bin` folder
     2. Run `source ./envsetup.sh` to set the environment variable
     3. Make this persistent by adding it to your `.bashrc`:
        ```bash
        echo 'export QNN_SDK_ROOT="${QNN_SDK_ROOT}"' >> ~/.bashrc
        source ~/.bashrc
        ```

2. Verify your QNN SDK installation by running:
   ```bash
   ${QNN_SDK_ROOT}/bin/envcheck -c
   ```
   - This will confirm that the required toolchain is properly installed

### Verify Python Environment

After verifying the QNN SDK, we can check the Python environment:

1. Check your Python version by running:
   ```bash
   python3 --version
   ```
   - Ensure you have Python 3.10 installed (QNN SDK is verified with Python 3.10.4)
   
   - **If Python 3.10 is not installed:**
     ```bash
     # For Ubuntu/Debian-based systems
     sudo apt-get update
     sudo apt-get install python3.10 python3-distutils libpython3.10
     
     # Verify installation
     python3.10 --version
     ```
     
     ```bash
     # For systems where python3 doesn't point to 3.10
     sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.10 1
     ```
     
2. Install Python development packages required for TensorFlow:
   ```bash
   sudo apt-get install python3.10-dev python3.10-venv python3-pip
   ```

3. Create and activate a Python virtual environment:
   ```bash
   # Create virtual environment without pip
   python3 -m venv myenv --without-pip
   source myenv/bin/activate
   
   # Install pip in the virtual environment
   python3 -m ensurepip --upgrade
   
   # Verify pip is installed in the virtual environment
   which pip3
   # This should show a path inside your virtual environment folder
   ```

4. Now that QNN_SDK_ROOT is set and Python is configured, check Python dependencies:
   ```bash
   pip3 install --upgrade pip setuptools wheel
   python "${QNN_SDK_ROOT}/bin/check-python-dependency"
   ```

### Verify TFLite Installation

Once QNN SDK and Python are verified, check TensorFlow Lite:

1. Verify that TFLite is installed:
   ```bash
   python3 -c "import tensorflow as tf; print('TFLite can be use' if hasattr(tf, 'lite') else 'TFLite Not install')"
   ```

2. If not installed the TFLite:
   ```bash
   python3 -m pip install tensorflow tflite-runtime
   ```
3. For TFLite interpreter functionality, verify with:
   ```bash
   python3 -c "import tflite_runtime.interpreter as tflite; print('TFLite runtime available')"
   ```
   - This should confirm the TFLite runtime is working properly

## Convert AI Model 

When deploying AI models on Qualcomm devices, conversion is necessary to optimize performance and ensure compatibility with Qualcomm's Neural Processing Units (NPUs). This section explains why conversion is needed and provides step-by-step guidance for different conversion paths.

### PyTorch => ONNX => Quantized TFLite Model
Below is an Example, that can run on Qualcomm device with NPUs.

The Qualcomm AI Hub library for optimization, profiling, and validation can be installed via PyPI. We recommend using Miniconda to manage your python versions and environments. To install, run the following command in your terminal. We recommend a Python version `>=` 3.8 and `<=` 3.10.

```bash
pip3 install qai-hub
```

Sign in to [Qualcomm AI Hub](https://app.aihub.qualcomm.com/) with your Qualcomm® ID. After signing in, navigate to [[your Qualcomm ID] → Settings → API Token](https://app.aihub.qualcomm.com/account). This should provide an API token that you can use to configure your client.

```bash
qai-hub configure --api_token API_TOKEN
```

Before running the example, install the required packages:
```bash
pip3 install torch torchvision onnx qai-hub
```

The sample using PyTorch [trochvision Vit_B_16 model](https://pytorch.org/vision/main/models/generated/torchvision.models.vit_b_16.html)
```python
import qai_hub as hub
import torch 
from torchvision.models import vit_b_16, ViT_B_16_Weights

weights = ViT_B_16_Weights.IMAGENET1K_V1
model = vit_b_16(weights=weights)

torch_model = model
torch_model.eval()  # Set model to evaluation mode (disables dropout and other training features)

# Set the input tensor shape (batch_size, channels, height, width)
input_shape = (1, 3, 224, 224)  # 1 image, 3 RGB channels, 224x224 pixels
example_input = torch.rand(input_shape)  # Create a random input tensor as an example

# Export the PyTorch model to ONNX format
torch.onnx.export(
    model,                  # The model to be exported
    example_input,          # Example model input
    "ViT_B_16.onnx",        # Output ONNX file name
    export_params=True,     # Store trained parameter weights
    opset_version=14,       # ONNX operation set version
    do_constant_folding=True,  # Perform constant folding optimization
    input_names=["input"],  # Model input names
    output_names=["output"], # Model output names
)

import qai_hub as hub  # Import Qualcomm AI Hub library again

# Convert ONNX model to TensorFlow Lite format
model_name="ViT_B_16.onnx"

# Submit compilation job to Qualcomm AI Hub
compile_job = hub.submit_compile_job(
    model=model_name,       
    device=hub.Device("RB3 Gen 2 (Proxy)"),  # Target device (Qualcomm RB3 Gen 2)
    options="--quantize_full_type int8 --quantize_io --quantize_io_type uint8"  # Quantize model to int8 with uint8 inputs/outputs
)
assert isinstance(compile_job, hub.CompileJob)  # Ensure the return is a compilation job object

# Get and download the compiled model
target_model = compile_job.get_target_model()
target_model.download(f"{model_name.replace('.onnx','')}.tflite")
```

## Additional Resources

If you encounter any issues with environment verification or configuration, please refer to the [Qualcomm official documentation](https://docs.qualcomm.com/bundle/publicresource/topics/80-63442-50/setup.html) for comprehensive setup instructions and troubleshooting guidance.
