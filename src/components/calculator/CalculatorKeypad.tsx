
import { Button } from "@/components/ui/button";

interface CalculatorKeypadProps {
  onDigit: (digit: string) => void;
  onOperation: (operation: string) => void;
  onEquals: () => void;
  onClear: () => void;
}

export function CalculatorKeypad({ onDigit, onOperation, onEquals, onClear }: CalculatorKeypadProps) {
  const buttons = [
    { label: "C", onClick: onClear, className: "bg-am-purple-300/20 hover:bg-am-purple-300/30" },
    { label: "±", onClick: () => {}, className: "bg-am-purple-300/20 hover:bg-am-purple-300/30" },
    { label: "%", onClick: () => {}, className: "bg-am-purple-300/20 hover:bg-am-purple-300/30" },
    { label: "÷", onClick: () => onOperation("÷"), className: "bg-am-mint-200 hover:bg-am-mint-300 text-am-bg-dark" },
    { label: "7", onClick: () => onDigit("7") },
    { label: "8", onClick: () => onDigit("8") },
    { label: "9", onClick: () => onDigit("9") },
    { label: "×", onClick: () => onOperation("×"), className: "bg-am-mint-200 hover:bg-am-mint-300 text-am-bg-dark" },
    { label: "4", onClick: () => onDigit("4") },
    { label: "5", onClick: () => onDigit("5") },
    { label: "6", onClick: () => onDigit("6") },
    { label: "-", onClick: () => onOperation("-"), className: "bg-am-mint-200 hover:bg-am-mint-300 text-am-bg-dark" },
    { label: "1", onClick: () => onDigit("1") },
    { label: "2", onClick: () => onDigit("2") },
    { label: "3", onClick: () => onDigit("3") },
    { label: "+", onClick: () => onOperation("+"), className: "bg-am-mint-200 hover:bg-am-mint-300 text-am-bg-dark" },
    { label: "0", onClick: () => onDigit("0"), className: "col-span-2" },
    { label: ".", onClick: () => onDigit(".") },
    { label: "=", onClick: onEquals, className: "bg-am-mint-200 hover:bg-am-mint-300 text-am-bg-dark" },
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {buttons.map((button, index) => (
        <Button
          key={index}
          onClick={button.onClick}
          className={`h-16 text-xl font-medium ${
            button.className || "bg-am-bg-dark/40 hover:bg-am-bg-dark/60"
          } ${button.label === "0" ? "col-span-2" : ""}`}
        >
          {button.label}
        </Button>
      ))}
    </div>
  );
}
