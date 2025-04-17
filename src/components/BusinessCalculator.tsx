import { CalculatorDisplay } from "@/components/calculator/CalculatorDisplay";
import { CalculatorKeypad } from "@/components/calculator/CalculatorKeypad";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { useState } from "react";

interface BusinessCalculatorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BusinessCalculator({ open, onOpenChange }: BusinessCalculatorProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [resetOnNextDigit, setResetOnNextDigit] = useState(true);

  // Função que multiplica o resultado por um fator para indicar economia potencial
  const calculateSavings = (value: number): number => {
    // Este é um fator de exemplo - pode ser ajustado conforme necessário
    const savingsFactor = 0.35; // 35% de economia
    return value * savingsFactor;
  };

  const handleDigit = (digit: string) => {
    if (resetOnNextDigit) {
      setDisplayValue(digit);
      setResetOnNextDigit(false);
    } else {
      setDisplayValue(displayValue === "0" ? digit : displayValue + digit);
    }
  };

  const handleOperation = (op: string) => {
    setPreviousValue(displayValue);
    setOperation(op);
    setResetOnNextDigit(true);
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
      default:
        return;
    }

    // Calcular economia potencial
    const savings = calculateSavings(result);
    
    // Exibir resultado e economia
    setDisplayValue(result.toString());
    setTimeout(() => {
      alert(`Economia potencial estimada: R$ ${savings.toLocaleString('pt-BR')}`);
    }, 500);
    
    setPreviousValue(null);
    setOperation(null);
    setResetOnNextDigit(true);
  };

  const handleClear = () => {
    setDisplayValue("0");
    setPreviousValue(null);
    setOperation(null);
    setResetOnNextDigit(true);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-am-bg-dark border-am-neutral-300/20 text-am-neutral-100 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-am-neutral-100">
            Calculadora de Economia
          </DialogTitle>
          <DialogDescription className="text-am-neutral-300">
            Insira seus custos operacionais mensais para estimar sua economia potencial.
          </DialogDescription>
        </DialogHeader>

        <div className="p-4">
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
          
          <p className="mt-4 text-sm text-am-neutral-300 text-center">
            * Esta calculadora estima uma economia média de 35% sobre seus custos atuais.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}