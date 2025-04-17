
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const faqs = [
    {
      question: "Como vocês garantem 35% de redução de custos em apenas 90 dias?",
      answer: "Nossa metodologia BPI (Business Process Intelligence) identifica rapidamente os maiores gargalos e ineficiências operacionais. Usando IA e machine learning, apontamos exatamente onde estão os maiores desperdícios. Temos um histórico comprovado de resultados, com reduções de custo entre 28% e 47% em todas as operações onde implementamos nossa solução. O contrato inclui garantia de devolução caso não atinjamos o mínimo de 35%."
    },
    {
      question: "Precisamos parar a operação para implementar o sistema?",
      answer: "Absolutamente não. Nossa metodologia é não-intrusiva e implementada em paralelo com suas operações existentes. A coleta de dados é feita sem interrupções, e o sistema é gradualmente integrado aos seus processos atuais. Você continuará operando normalmente, enquanto começará a ver melhorias incrementais já nas primeiras semanas."
    },
    {
      question: "Quanto tempo leva para implementar a solução completa?",
      answer: "O MVP (Produto Mínimo Viável) é implementado em 30 dias, com os primeiros insights e otimizações disponíveis entre 2-3 semanas. A implementação completa com todas as integrações leva tipicamente de 60 a 90 dias, dependendo da complexidade da operação. O importante é que você já começa a obter economia desde as primeiras semanas."
    },
    {
      question: "É necessário comprar novos equipamentos ou sensores?",
      answer: "Normalmente não. Nossa plataforma integra-se aos sistemas e sensores existentes em sua operação. Utilizamos os dados já disponíveis de forma mais inteligente. Em alguns casos específicos, podemos recomendar sensores adicionais para áreas críticas, mas isso é opcional e ocorre somente quando o ROI for excepcionalmente alto."
    },
    {
      question: "A solução funciona para qualquer tipo de mineração?",
      answer: "Sim. Já implementamos em operações de minério de ferro, ouro, bauxita, fosfato, níquel e outras. Nossa metodologia é adaptável aos processos específicos de cada tipo de mineração, e nosso time inclui especialistas com experiência em diversos tipos de operação."
    },
    {
      question: "O que acontece após os 90 dias da garantia?",
      answer: "Após o período de garantia, você continua com todas as otimizações e economias implementadas. Oferecemos planos de suporte contínuo que incluem monitoramento, atualizações e melhorias contínuas com base em novas análises de dados. A maioria dos clientes opta por manter o relacionamento para alcançar otimizações ainda maiores ao longo do tempo."
    },
  ];
  
  return (
    <section className="py-20 bg-am-bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-semibold text-am-neutral-100 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-am-neutral-100/80 text-xl max-w-3xl mx-auto">
            Tudo o que você precisa saber antes de transformar sua operação
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto fade-in delay-100">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-am-neutral-300/20">
                <AccordionTrigger className="text-am-neutral-100 hover:text-am-primary text-left text-lg py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-am-neutral-300 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12 fade-in delay-200">
          <p className="text-am-neutral-100/80 mb-4">
            Ainda tem dúvidas? Entre em contato com nossa equipe
          </p>
          <a 
            href="mailto:contato@automining.com.br" 
            className="text-am-primary hover:text-am-primary/80 font-medium"
          >
            contato@automining.com.br
          </a>
        </div>
      </div>
    </section>
  );
}
