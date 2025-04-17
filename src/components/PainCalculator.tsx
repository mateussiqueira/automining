import { BusinessCalculator } from "@/components/BusinessCalculator";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

export function PainCalculator() {
  const [count, setCount] = useState(0);
  const targetRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  
  // Simulate counter animation when section is visible
  useEffect(() => {
    if (!isVisible || !targetRef.current) return;
    
    const targetAmount = 4850000; // R$ 4.85 Million
    const duration = 2000; // 2 seconds
    const steps = 50;
    const increment = targetAmount / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetAmount) {
        current = targetAmount;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [isVisible]);
  
  // Check if section is visible in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);
  
  return (
    <section ref={targetRef} className="bg-am-bg-dark py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left column - Heatmap visualization */}
          <div className="w-full lg:w-1/2 fade-in">
            <div className="bg-am-bg-light rounded-xl p-6 border border-am-neutral-300/20">
              <h3 className="text-am-neutral-100 text-xl font-medium mb-4">Mapa de Calor: Desperdício em Minas</h3>
              <div className="grid grid-cols-5 grid-rows-5 gap-2 h-64">
                {Array.from({ length: 25 }).map((_, i) => {
                  // Generate different heat levels for the visualization
                  const heat = Math.floor(Math.random() * 100);
                  let bgClass = "bg-green-800/20";
                  
                  if (heat > 85) bgClass = "bg-red-500";
                  else if (heat > 70) bgClass = "bg-red-400/90";
                  else if (heat > 55) bgClass = "bg-orange-500/80";
                  else if (heat > 40) bgClass = "bg-yellow-500/70";
                  else if (heat > 25) bgClass = "bg-green-500/60";
                  
                  return (
                    <div 
                      key={i} 
                      className={`${bgClass} rounded flex items-center justify-center transition-all hover:scale-105`} 
                      title={`Área de desperdício: ${heat}%`}
                    />
                  );
                })}
              </div>
              <div className="flex justify-between mt-4 text-xs text-am-neutral-300">
                <span>0% Desperdício</span>
                <span>Desperdício Crítico</span>
              </div>
            </div>
          </div>
          
          {/* Right column - Cost of inaction calculator */}
          <div className="w-full lg:w-1/2 fade-in delay-200">
            <h2 className="text-3xl lg:text-4xl font-semibold text-am-neutral-100 mb-6">
              Quanto está <span className="text-am-accent">perdendo</span> agora?
            </h2>
            
            <p className="text-am-neutral-100/90 text-lg mb-8">
              A cada dia sem otimização, sua operação joga dinheiro fora. 
              Ineficiências operacionais custam em média 35% do orçamento anual.
            </p>
            
            <div className="bg-am-bg-light/50 rounded-lg p-6 mb-6 border border-am-neutral-300/10">
              <div className="flex justify-between items-center">
                <span className="text-am-neutral-100">Custo mensal de ineficiência:</span>
                <span className="text-am-accent text-2xl font-bold">
                  R$ {count.toLocaleString('pt-BR')}
                </span>
              </div>
              <div className="h-2 w-full bg-am-bg-dark mt-2 rounded">
                <div className="h-full bg-am-accent rounded" style={{ width: isVisible ? '85%' : '0%', transition: 'width 2s ease-in-out' }}></div>
              </div>
              <p className="text-am-neutral-300 mt-2 text-sm">
                * Baseado em análise de empresas de mineração similares
              </p>
            </div>
            
            <Button 
              className="bg-am-accent hover:bg-orange-600 text-am-bg-dark font-semibold py-3 px-6 rounded-full shadow-lg text-lg h-auto w-full"
              onClick={() => setCalculatorOpen(true)}
            >
              Calcule exatamente quanto pode economizar
            </Button>
          </div>
        </div>
      </div>
      
      {/* Calculadora pop-up */}
      <BusinessCalculator 
        open={calculatorOpen} 
        onOpenChange={setCalculatorOpen} 
      />
    </section>
  );
}
