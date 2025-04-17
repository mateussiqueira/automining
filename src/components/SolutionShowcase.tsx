
import { ArrowRight, TrendingUp, CheckCircle2, Clock, Award } from "lucide-react";

export function SolutionShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-am-bg-light to-am-bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-semibold text-am-neutral-100 mb-4">
            Como a <span className="text-am-primary">Automining NEXT</span> transforma sua operação
          </h2>
          <p className="text-am-neutral-100/80 text-xl max-w-3xl mx-auto">
            Nossa plataforma BPI (Business Process Intelligence) identifica, corrige e monitora gargalos em tempo real
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Column 1: Before */}
          <div className="bg-am-bg-light rounded-xl p-6 border border-am-neutral-300/10 fade-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-am-neutral-100 text-xl font-medium">Antes</h3>
              <span className="text-red-500 bg-red-500/10 py-1 px-3 rounded-full text-sm">Problemas</span>
            </div>
            
            <ul className="space-y-4">
              {[
                "Decisões baseadas em percepções, não dados",
                "Ineficiências ocultas drenam orçamento",
                "Relatórios manuais consomem tempo",
                "Desperdício de recursos e combustível",
                "Informações isoladas em silos"
              ].map((item, index) => (
                <li key={index} className="flex gap-3 text-am-neutral-300">
                  <span className="text-red-500 mt-1">✖</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 2: Process */}
          <div className="bg-am-bg-light rounded-xl p-6 border border-am-primary/30 fade-in delay-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-am-neutral-100 text-xl font-medium">Processo</h3>
              <span className="text-am-primary bg-am-primary/10 py-1 px-3 rounded-full text-sm">Transformação</span>
            </div>
            
            <ol className="space-y-6 relative">
              {[
                {
                  title: "Diagnóstico Avançado",
                  desc: "Análise completa das operações e identificação de gargalos",
                  icon: <TrendingUp className="text-am-primary" size={20} />
                },
                {
                  title: "Implementação Rápida",
                  desc: "30 dias para MVP funcional com resultados imediatos",
                  icon: <Clock className="text-am-primary" size={20} />
                },
                {
                  title: "Otimização Contínua",
                  desc: "Machine learning adapta-se às mudanças operacionais",
                  icon: <CheckCircle2 className="text-am-primary" size={20} />
                },
                {
                  title: "Garantia de Resultados",
                  desc: "Compromisso contratual com metas de economia",
                  icon: <Award className="text-am-primary" size={20} />
                }
              ].map((item, index) => (
                <li key={index} className="relative pl-8">
                  <div className="absolute left-0 top-0">{item.icon}</div>
                  <h4 className="text-am-neutral-100 font-medium">{item.title}</h4>
                  <p className="text-am-neutral-300 text-sm">{item.desc}</p>
                  
                  {index < 3 && (
                    <div className="absolute left-2.5 top-7 h-8 w-0.5 bg-am-primary/30"></div>
                  )}
                </li>
              ))}
            </ol>
          </div>
          
          {/* Column 3: After */}
          <div className="bg-am-bg-light rounded-xl p-6 border border-am-accent/30 fade-in delay-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-am-neutral-100 text-xl font-medium">Depois</h3>
              <span className="text-am-accent bg-am-accent/10 py-1 px-3 rounded-full text-sm">Resultados</span>
            </div>
            
            <ul className="space-y-4">
              {[
                "35% de redução de custos garantida",
                "Visibilidade total das operações em tempo real",
                "Tomada de decisão baseada em dados",
                "Relatórios automáticos e dashboards personalizados",
                "Integração completa entre sistemas e processos"
              ].map((item, index) => (
                <li key={index} className="flex gap-3 text-am-neutral-100">
                  <span className="text-am-accent mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 pt-4 border-t border-am-neutral-300/10">
              <div className="flex justify-between items-center">
                <span className="text-am-neutral-300">ROI Médio:</span>
                <span className="text-am-accent font-bold text-xl">568%</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-am-neutral-300">Payback:</span>
                <span className="text-green-500 font-bold text-xl">&lt; 3 meses</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center fade-in delay-300">
          <a href="/casos-de-sucesso" className="inline-flex items-center text-am-primary hover:text-am-primary/80 text-lg font-medium">
            Ver estudos de caso detalhados 
            <ArrowRight className="ml-2" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
