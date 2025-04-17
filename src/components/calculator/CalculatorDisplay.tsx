
interface CalculatorDisplayProps {
  value: string;
  previousValue: string | null;
  operation: string | null;
}

export function CalculatorDisplay({ value, previousValue, operation }: CalculatorDisplayProps) {
  return (
    <div className="bg-am-bg-dark/40 rounded-2xl p-6 mb-4">
      {previousValue && (
        <div className="text-am-neutral-300 text-right text-sm mb-1">
          {previousValue} {operation}
        </div>
      )}
      <div className="text-4xl font-medium text-right text-am-neutral-100 font-mono">
        {value}
      </div>
    </div>
  );
}
