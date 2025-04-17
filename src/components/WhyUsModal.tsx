
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

export function WhyUsModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button 
        onClick={() => setOpen(true)} 
        className="fixed right-8 bottom-8 z-50 gradient-btn"
        data-te-target="cta-why"
      >
        Por que nos contratar? 💡
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-am-bg-dark text-am-neutral-100 p-0 rounded-3xl max-w-2xl w-[90%] border-none">
          <article className="p-10 space-y-6">
            <DialogHeader>
              <DialogTitle className="text-3xl font-semibold text-am-neutral-100">
                6 motivos para escolher a Automining NEXT
              </DialogTitle>
            </DialogHeader>
            <ol className="list-decimal list-inside space-y-3 text-lg leading-7">
              <li><b>ROI garantido:</b> economize até <u>35% em 90 dias</u> ou devolvemos 100%.</li>
              <li><b>Metodologia BPI + GPP:</b> identifica, corrige e monitora gargalos em tempo real.</li>
              <li><b>Especialistas de mina:</b> ex-gerentes, geólogos e data-scientists.</li>
              <li><b>Custom Apps Rapid Build™:</b> MVP em 30 dias, sem vendor lock-in.</li>
              <li><b>Compliance & ESG:</b> ANM, ISO 14001, relatórios GRI automáticos.</li>
              <li><b>Suporte 24 × 7:</b> SLA crítico &lt; 30 min com engenheiro dedicado.</li>
            </ol>
            <a 
              href="/diagnostico" 
              className="block w-full text-center bg-am-accent hover:bg-orange-500 font-bold py-4 rounded-full text-am-bg-dark"
            >
              Quero meu diagnóstico gratuito 🚀
            </a>
          </article>
        </DialogContent>
      </Dialog>
    </>
  );
}
