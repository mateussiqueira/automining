
import { CalculatorDisplay } from "@/components/calculator/CalculatorDisplay";
import { CalculatorKeypad } from "@/components/calculator/CalculatorKeypad";
import { useState } from "react";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

  const handleDigit = (digit: string) => {
    if (shouldResetDisplay) {
      setDisplayValue(digit);
      setShouldResetDisplay(false);
    } else {
      setDisplayValue(displayValue === "0" ? digit : displayValue + digit);
    }
  };

  const handleOperation = (op: string) => {
    setPreviousValue(displayValue);
    setOperation(op);
    setShouldResetDisplay(true);
  };

  const handleEquals = () => {
    if (!previousValue || !operation) return;

    const prev = parseFloat(previousValue);
    const current = parseFloat(displayValue);
    let result = 0;

    switch (operation) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "×":
        result = prev * current;
        break;
      case "÷":
        result = prev / current;
        break;
    }

    setDisplayValue(result.toString());
    setPreviousValue(null);
    setOperation(null);
    setShouldResetDisplay(true);
  };

  const handleClear = () => {
    setDisplayValue("0");
    setPreviousValue(null);
    setOperation(null);
    setShouldResetDisplay(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-am-bg-dark to-am-bg-light flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-am-bg-light/50 backdrop-blur-xl rounded-3xl border border-white/10 p-6 shadow-2xl">
          <CalculatorDisplay 
            value={displayValue}
            previousValue={previousValue}
            operation={operation}
          />
          <CalculatorKeypad 
            onDigit={handleDigit}
            onOperation={handleOperation}
            onEquals={handleEquals}
            onClear={handleClear}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
