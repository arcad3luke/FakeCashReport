# FakeCashReport
Complete Analysis of a multi-domain Cash App phishing scam.

# Analysis: Custom JavaScript VM-Obfuscated Phishing Campaign

This repository contains technical research, indicators of compromise (IoCs), detection rules, and analysis scripts for a sophisticated phishing campaign utilizing a custom JavaScript virtual machine (VM) obfuscator, multi-domain infrastructure rotation, and automated social engineering propagation.

## Campaign Architecture

### 1. Obfuscation & Execution Engine
- **Custom Binary Deserializer (`d9`):** The core script processes serialized Base64/binary payloads (the `K` array) into structured configuration objects (`dD`), constant pools (`dI`), and bytecode instructions (`df`) dynamically executed inside localized `eval` scopes.
- **State Machine & UI Logic:** Intercepted bytecode and string tables revealed state handlers managing fake loading animations (`requestAnimationFrame`, percentage counters) and phone number verification routines (`goEnterNumber`, `continueAfterPhoneVerify`).

### 2. Infrastructure & Telemetry
- **Domain Rotation Network:** The campaign utilizes dynamic infrastructure rotation across multiple domains (`cashappgiveback.com`, `mkvry.com`, `yihur.com`) fronted by Cloudflare to bypass reputation filters and URL blocklists.
- **Telemetry Loop (`/m2/log`):** High-frequency polling requests (`/m2/log?std=...`) transmit session telemetry and heartbeat signals back to the threat actors.

### 3. Viral Propagation Vector
- **Mobile Deep-Linking:** Post-verification, the VM attempts to force victim-led distribution by triggering native application URI schemes (`fb-messenger://share`) pointing to dynamically generated referral links on the rotation domains.

### 4. Initial Delivery Wrapper
- **Cloudflare-Fronted Bootstrap:** The landing page delivers an initial payload containing heavily obfuscated JavaScript blocks and serialized byte arrays.

---

## Repository Structure

```text
├── README.md
├── iocs/
│   ├── domains.txt
│   └── endpoints.txt
├── signatures/
│   ├── yara_rule.yar
│   └── sigma_rule.yml
├── scripts/
│   └── disassembler.js
└── samples/
    ├── app.js
    └── payload_snippet.raw
