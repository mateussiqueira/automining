
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-am-bg-dark to-am-bg-light overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-am-purple-500/20 to-am-mint-200/10 opacity-30" />
        <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-am-purple-300/10 blur-[120px] rounded-full" />
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-am-mint-200/10 blur-[120px] rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left column - text */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h1 className="text-4xl lg:text-6xl font-semibold text-white leading-tight">
              Reduza <span className="text-am-purple-300">35% dos custos</span> da sua mina em <span className="text-am-mint-200">90 dias</span>
            </h1>
            
            <p className="text-am-neutral-100/90 text-lg lg:text-xl font-light leading-relaxed">
              Business Process Intelligence que garante ROI na mineração.
              <span className="block mt-2 text-am-mint-200 font-medium">
                Ou seu dinheiro de volta.
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="bg-am-purple-300 hover:bg-am-purple-400 text-white font-medium py-6 px-8 rounded-xl text-lg h-auto transition-all duration-300 shadow-lg shadow-am-purple-300/20 hover:shadow-am-purple-300/40"
              >
                Começar agora
              </Button>
              <Button 
                variant="outline"
                className="border-am-mint-200 text-am-mint-200 hover:bg-am-mint-200/10 font-medium py-6 px-8 rounded-xl text-lg h-auto transition-all duration-300"
              >
                Ver demo
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-8">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-am-bg-dark bg-gradient-to-br from-am-purple-100 to-am-purple-300" />
                ))}
              </div>
              <p className="text-am-neutral-100/80">
                <span className="text-am-mint-200 font-semibold">+30 mineradoras</span>
                <br />já economizam conosco
              </p>
            </div>
          </div>
          
          {/* Right column - Dashboard Preview */}
          <div className="w-full lg:w-1/2">
            <div className="relative animate-float">
              <div className="bg-am-bg-light/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-am-mint-200 animate-pulse-subtle" />
                    <span className="text-am-neutral-100 font-medium">Dashboard em Tempo Real</span>
                  </div>
                  <span className="text-am-purple-300 font-semibold">Economia: R$ 2.4M</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: "Eficiência", value: "+42%", color: "text-am-mint-200" },
                    { label: "Redução", value: "35.8%", color: "text-am-purple-300" },
                    { label: "Uptime", value: "+62%", color: "text-am-mint-200" },
                    { label: "ROI", value: "568%", color: "text-am-purple-300" },
                  ].map((metric, i) => (
                    <div key={i} className="bg-am-bg-dark/40 rounded-xl p-4">
                      <p className="text-am-neutral-300 text-sm mb-1">{metric.label}</p>
                      <p className={`${metric.color} text-2xl font-bold`}>{metric.value}</p>
                    </div>
                  ))}
                </div>
                
                <div className="h-32 bg-gradient-to-r from-am-purple-300/20 to-am-mint-200/20 rounded-xl flex items-center justify-center">
                  <p className="text-am-neutral-100/60 text-sm">Gráfico de Projeção (90 dias)</p>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-am-mint-200 to-am-purple-300 text-white p-4 rounded-xl rotate-12 shadow-lg">
                <p className="text-sm font-bold">GARANTIA</p>
                <p className="text-xl font-bold">90 DIAS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
