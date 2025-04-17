
import { Button } from "@/components/ui/button";
import { Shield, BadgeCheck, Timer } from "lucide-react";

export function RoiGuarantee() {
  return (
    <section className="py-20 bg-am-bg-dark">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-am-bg-light to-am-bg-dark rounded-3xl p-8 md:p-12 border border-am-accent/20 relative overflow-hidden fade-in">
          {/* Background design elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-am-accent/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-am-primary/5 rounded-full translate-y-1/2 -translate-x-1/3 blur-xl"></div>
          
          {/* Content */}
          <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
            {/* Left col - Shield/Guarantee icon */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-56 h-56 rounded-full bg-gradient-to-br from-am-accent/20 to-am-primary/20 flex items-center justify-center">
                  <Shield className="w-32 h-32 text-am-accent" />
                </div>
                <div className="absolute -top-4 -right-4 bg-am-accent text-am-bg-dark font-bold text-xl py-2 px-4 rounded-full rotate-12 shadow-lg">
                  GARANTIDO
                </div>
              </div>
            </div>
            
            {/* Right col - Content */}
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-semibold text-am-neutral-100 mb-6">
                Garantia incondicional de <span className="text-am-accent">35% de redução</span> em 90 dias
              </h2>
              
              <p className="text-am-neutral-100/90 text-xl mb-8">
                Se não entregarmos, <span className="underline decoration-am-accent decoration-2 underline-offset-4">devolvemos 100% do investimento</span>. 
                Zero risco, garantia contratual.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex gap-3 items-start">
                  <BadgeCheck className="text-am-primary flex-shrink-0 mt-1" size={20} />
                  <p className="text-am-neutral-300">
                    Compromisso de economia assinado em contrato com métricas claras
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <BadgeCheck className="text-am-primary flex-shrink-0 mt-1" size={20} />
                  <p className="text-am-neutral-300">
                    Dashboards em tempo real para acompanhar a economia
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <Timer className="text-am-primary flex-shrink-0 mt-1" size={20} />
                  <p className="text-am-neutral-300">
                    Resultados em semanas, não meses ou anos
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <BadgeCheck className="text-am-primary flex-shrink-0 mt-1" size={20} />
                  <p className="text-am-neutral-300">
                    Metodologia comprovada em +30 operações de mineração
                  </p>
                </div>
              </div>
              
              <Button className="bg-am-accent hover:bg-orange-600 text-am-bg-dark font-semibold py-3 px-6 rounded-full shadow-lg text-lg h-auto">
                Solicitar proposta com garantia de resultados
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
