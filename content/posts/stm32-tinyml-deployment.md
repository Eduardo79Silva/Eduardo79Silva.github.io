---
title: "Deploying a Neural Network on STM32 with No OS"
description: "How I quantized a TensorFlow model and ran inference on an ARM Cortex-M4 with TFLite for Microcontrollers."
date: 2026-06-01
tags: [Embedded, TinyML, STM32, C++, TensorFlow Lite]
author: Eduardo Silva
---

This is an example post. Replace with your actual content.

## The Goal

Run a trained neural network on an STM32 Nucleo-L476RG with no operating system, no heap allocator, and no external dependencies beyond TFLM.

## Quantization

Post-training quantization converts float32 weights to int8, cutting model size by ~4x and making it feasible to fit in 128KB flash.

```python
converter = tf.lite.TFLiteConverter.from_keras_model(model)
converter.optimizations = [tf.lite.Optimize.DEFAULT]
tflite_model = converter.convert()
```

## Deploying to Flash

The quantized model is embedded as a C byte array and linked directly into flash memory — no filesystem needed.
