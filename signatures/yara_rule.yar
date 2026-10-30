rule Phishing_JS_Custom_VM_Deserializer {
    meta:
        description = "Detects custom binary/Base64 bytecode deserializer VM used in credential harvesting campaigns"
        author = "Security Analyst"
        reference = "Internal Campaign Analysis"
        date = "2026-10-30"
        campaign = "Multi-domain Phishing & VM Obfuscation"
    strings:
        $d9_func = "function d9(" ascii
        $bytecode_array_marker = "Int32Array" ascii
        $telemetry_path = "/m2/log?std=" ascii
        $messenger_scheme = "fb-messenger://share" ascii
    condition:
        filesize < 5MB and all of them
}
