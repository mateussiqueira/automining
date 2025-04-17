
export function Footer() {
  return (
    <footer className="bg-am-bg-dark py-12 border-t border-am-neutral-300/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and info */}
          <div className="mb-8 md:mb-0">
            <div className="text-am-primary font-semibold text-2xl mb-3">Automining NEXT</div>
            <p className="text-am-neutral-300 max-w-md">
              Business Process Intelligence exclusivo para mineração. 
              Transformando dados operacionais em economia real.
            </p>
          </div>
          
          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-am-neutral-100 font-medium mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="/sobre" className="text-am-neutral-300 hover:text-am-primary">Sobre nós</a></li>
                <li><a href="/cases" className="text-am-neutral-300 hover:text-am-primary">Casos de Sucesso</a></li>
                <li><a href="/blog" className="text-am-neutral-300 hover:text-am-primary">Blog</a></li>
                <li><a href="/carreiras" className="text-am-neutral-300 hover:text-am-primary">Carreiras</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-am-neutral-100 font-medium mb-4">Soluções</h4>
              <ul className="space-y-2">
                <li><a href="/solucoes/bpi" className="text-am-neutral-300 hover:text-am-primary">BPI Platform</a></li>
                <li><a href="/solucoes/custom-apps" className="text-am-neutral-300 hover:text-am-primary">Custom Apps</a></li>
                <li><a href="/solucoes/esg" className="text-am-neutral-300 hover:text-am-primary">ESG & Compliance</a></li>
                <li><a href="/solucoes/consultoria" className="text-am-neutral-300 hover:text-am-primary">Consultoria</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-am-neutral-100 font-medium mb-4">Contato</h4>
              <ul className="space-y-2">
                <li><a href="tel:+553132673456" className="text-am-neutral-300 hover:text-am-primary">+55 (31) 3267-3456</a></li>
                <li><a href="mailto:contato@automining.com.br" className="text-am-neutral-300 hover:text-am-primary">contato@automining.com.br</a></li>
                <li><span className="text-am-neutral-300">Belo Horizonte, MG</span></li>
              </ul>
              
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-am-neutral-300 hover:text-am-primary">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-am-neutral-300 hover:text-am-primary">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186c-.276-1.039-1.089-1.858-2.122-2.136-1.869-.516-9.376-.516-9.376-.516s-7.507 0-9.376.516c-1.033.278-1.846 1.097-2.122 2.136-.513 1.879-.513 5.814-.513 5.814s0 3.935.513 5.814c.276 1.039 1.089 1.858 2.122 2.136 1.869.516 9.376.516 9.376.516s7.507 0 9.376-.516c1.033-.278 1.846-1.097 2.122-2.136.513-1.879.513-5.814.513-5.814s0-3.935-.513-5.814zm-13.923 9.399v-7.17l6.266 3.585-6.266 3.585z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-am-neutral-300/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-am-neutral-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Automining NEXT. Todos os direitos reservados.
          </div>
          <div className="flex space-x-6">
            <a href="/privacidade" className="text-am-neutral-300 hover:text-am-primary text-sm">Política de Privacidade</a>
            <a href="/termos" className="text-am-neutral-300 hover:text-am-primary text-sm">Termos de Uso</a>
            <a href="/lgpd" className="text-am-neutral-300 hover:text-am-primary text-sm">LGPD</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
