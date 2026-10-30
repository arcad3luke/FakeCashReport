/**
 * Custom VM Bytecode Disassembler
 * Parses raw Int32Array bytecode streams and maps them against extracted string tables.
 */
(function() {
    window.disassembleVM = function(bytecodeArray, stringTable) {
        console.group("[*] Disassembling VM Bytecode Stream");
        let pc = 0;
        while (pc < bytecodeArray.length) {
            let op = bytecodeArray[pc];
            let arg1 = bytecodeArray[pc + 1];
            let arg2 = bytecodeArray[pc + 2];
            
            let resolvedStr = (stringTable && typeof stringTable[arg1] !== 'undefined') ? ` ; "${stringTable[arg1]}"` : "";
            console.log(`[0x${pc.toString(16).padStart(4, '0')}] OP: ${op}, Arg1: ${arg1}${resolvedStr}, Arg2: ${arg2}`);
            
            pc += 3; 
        }
        console.groupEnd();
    };
    console.log("[*] disassembleVM is ready. Usage: disassembleVM(byteArray, stringTableArray)");
})();
