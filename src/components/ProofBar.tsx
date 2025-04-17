
export function ProofBar() {
  const clients = [
    "Vale", "AngloGold Ashanti", "CSN Mineração", "Samarco", 
    "Kinross", "CBMM", "Yamana Gold"
  ];
  
  return (
    <section className="bg-gradient-to-b from-am-bg-dark to-am-bg-light py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-am-neutral-300 text-sm uppercase tracking-wider fade-in">
            Confiado por Líderes do Setor
          </p>
        </div>
        
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-12 lg:gap-16 overflow-x-auto py-4 fade-in delay-100">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="text-am-neutral-100 font-medium text-xl opacity-60 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hover:text-am-purple-300"
            >
              {client}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 fade-in delay-200">
          <p className="text-am-neutral-100/80 text-lg">
            <span className="text-am-mint-200 font-semibold">+30 operações de mineração</span>
            <br />já economizam com Automining NEXT
          </p>
        </div>
      </div>
    </section>
  );
}
