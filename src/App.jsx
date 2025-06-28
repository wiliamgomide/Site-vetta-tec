import React, { useState, useEffect } from 'react';
import { Cpu, Globe, Smartphone, BarChart3, Briefcase, ChevronDown, ChevronUp, Send, MessageSquare, Phone, Instagram, Linkedin, Facebook, Twitter, X } from 'lucide-react';

// STYLES - Adicionado diretamente para simplicidade, sem necessidade de CSS externo
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&display=swap');
    body {
      font-family: 'Montserrat', sans-serif;
      background-color: #0A192F;
      color: #E6F1FF;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .text-electric-green { color: #64FFDA; }
    .bg-electric-green { background-color: #64FFDA; }
    .border-electric-green { border-color: #64FFDA; }
    .ring-electric-green { --tw-ring-color: #64FFDA; }
    .bg-deep-blue { background-color: #0A192F; }
    .bg-light-blue { background-color: #112240; }
    .border-light-blue { border-color: #112240; }

    .nav-link {
      position: relative;
      transition: color 0.3s ease;
    }
    .nav-link:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #64FFDA;
      transition: width 0.3s ease;
    }
    .nav-link:hover:after, .nav-link.active:after {
      width: 100%;
    }
    .glassmorphism {
        background: rgba(17, 34, 64, 0.7);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    }
  `}</style>
);


// COMPONENT: Logo
const Logo = () => (
    <div className="flex items-center space-x-2">
        {/* Placeholder para o logo. O ideal é usar um SVG ou a imagem. */}
        <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center">
            <svg width="30" height="30" viewBox="0 0 128 128" className="text-electric-green">
              <path fill="currentColor" d="M89.38 103.95L64 78.58l-25.38 25.37l-6.1-6.1l25.37-25.38L32.5 47.07l6.1-6.1l25.38 25.38l25.38-25.38l6.1 6.1l-25.38 25.38l25.38 25.38z"/>
              <path fill="currentColor" d="M112.5 24.5v-11h-11v11h11zm-24.75 0v-11h-11v11h11zm-24.75 0v-11h-11v11h11zM38.25 24.5v-11h-11v11h11zm-24.75 0v-11h-11v11h11zm74.25 24.75v-11h-11v11h11zm0 24.75v-11h-11v11h11zm0 24.75v-11h-11v11h11zm0 24.75v-11h-11v11h11zm-24.75 0v-11h-11v11h11zm-24.75 0v-11h-11v11h11zM38.25 114v-11h-11v11h11zm-24.75 0v-11h-11v11h11zm0-24.75v-11h-11v11h11zm0-24.75v-11h-11v11h11zm0-24.75v-11h-11v11h11z"/>
            </svg>
        </div>
        <div>
            <h1 className="text-2xl font-bold text-white">Vetta<span className="text-electric-green">Tec</span></h1>
            <p className="text-xs text-gray-300 tracking-wider">No topo da inovação</p>
        </div>
    </div>
);

// COMPONENT: Navigation
const Navigation = ({ currentPage, setCurrentPage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = ["Início", "Sobre Nós", "Serviços", "Blog", "FAQ", "Contato"];

    const handleNavClick = (page) => {
        setCurrentPage(page);
        setIsOpen(false);
    };
    
    return (
        <header className="bg-deep-blue/80 backdrop-blur-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Logo />
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase().replace(' ', '-')}`}
                            onClick={() => handleNavClick(link)}
                            className={`nav-link font-semibold text-white hover:text-electric-green ${currentPage === link ? 'active text-electric-green' : ''}`}
                        >
                            {link}
                        </a>
                    ))}
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        {isOpen ? <X size={28} /> : <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>}
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="md:hidden bg-light-blue">
                    {navLinks.map(link => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase().replace(' ', '-')}`}
                            onClick={() => handleNavClick(link)}
                            className="block px-6 py-3 text-center font-semibold text-white hover:bg-deep-blue hover:text-electric-green"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

// COMPONENT: Hero Section
const HeroSection = ({setCurrentPage}) => (
    <section id="inicio" className="container mx-auto px-6 py-24 md:py-32 text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Elevando seu Negócio ao <span className="text-electric-green">Máximo Potencial</span> com Tecnologia de Ponta.
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl">
            Da Inteligência Artificial a Aplicativos Inovadores, a VettaTec é sua parceira estratégica para navegar no topo da inovação.
        </p>
        <button onClick={() => setCurrentPage('Serviços')} className="mt-10 px-8 py-4 bg-electric-green text-deep-blue font-bold rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105">
            Conheça Nossas Soluções
        </button>
    </section>
);

// COMPONENT: About Section
const AboutSection = () => (
    <section id="sobre-nos" className="container mx-auto px-6 py-20 bg-light-blue rounded-lg">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Sobre a <span className="text-electric-green">VettaTec</span></h2>
            <p className="text-electric-green mt-2 font-semibold">Vetta (Topo) + Tec (Tecnologia)</p>
        </div>
        <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-300 leading-relaxed">
                Nosso nome reflete nossa missão. "Vetta", do italiano, significa topo, o pico máximo. Combinado com "Tec", representa nosso compromisso em usar a tecnologia mais avançada para impulsionar negócios e pessoas. Nós não apenas criamos software; nós construímos pontes para que nossos clientes alcancem o cume do seu sucesso. Desenvolvemos soluções em inteligência artificial e tecnologia que elevam pessoas ao seu potencial máximo.
            </p>
        </div>
    </section>
);


// DATA: Services
const services = {
    'ia': {
        icon: Cpu,
        title: "Agentes de Inteligência Artificial",
        description: "Automatize tarefas, otimize processos e tome decisões mais inteligentes com nossos agentes de IA personalizados. Criamos soluções que aprendem e se adaptam às necessidades do seu negócio.",
        details: [
            "Chatbots inteligentes para atendimento ao cliente 24/7.",
            "Sistemas de recomendação para e-commerce.",
            "Análise preditiva para otimização de estoque e vendas.",
            "Automação de processos repetitivos (RPA com IA)."
        ]
    },
    'websites': {
        icon: Globe,
        title: "Websites e Landing Pages",
        description: "Criamos websites rápidos, seguros e com design responsivo que funcionam como uma poderosa ferramenta de marketing e vendas para sua empresa, com foco total na experiência do usuário (UX).",
        details: [
            "Design moderno, focado na conversão.",
            "Otimização para Mecanismos de Busca (SEO).",
            "Integração com CRMs e ferramentas de marketing.",
            "Plataformas de e-commerce robustas."
        ]
    },
    'apps': {
        icon: Smartphone,
        title: "Aplicativos Mobile",
        description: "Transforme sua ideia em um aplicativo intuitivo e funcional para iOS e Android. Do conceito ao lançamento, cuidamos de todo o ciclo de desenvolvimento para engajar seus clientes onde eles estiverem.",
        details: [
            "Desenvolvimento nativo e híbrido.",
            "Design de UI/UX centrado no usuário.",
            "Integração com APIs e serviços de terceiros.",
            "Manutenção e suporte contínuo."
        ]
    },
    'sales-funnel': {
        icon: BarChart3,
        title: "Funil de Vendas Automatizado",
        description: "Estruture uma jornada de cliente eficiente que captura, nutre e converte leads em clientes fiéis. Implementamos e otimizamos funis de vendas usando as melhores ferramentas de automação.",
        details: [
            "Mapeamento da jornada do cliente.",
            "Criação de landing pages e iscas digitais.",
            "Automação de e-mail marketing e nutrição de leads.",
            "Análise de métricas e otimização de conversão (CRO)."
        ]
    },
    'consulting': {
        icon: Briefcase,
        title: "Consultoria de TI Estratégica",
        description: "Nossa consultoria de TI alinha a tecnologia aos seus objetivos de negócio. Ajudamos você a escolher as ferramentas certas, otimizar sua infraestrutura e criar um roteiro tecnológico para o futuro.",
        details: [
            "Diagnóstico de infraestrutura e segurança.",
            "Planejamento estratégico de TI (Roadmap).",
            "Gestão de projetos de tecnologia.",
            "Consultoria em transformação digital."
        ]
    }
};

// COMPONENT: Service Detail Page
const ServiceDetailPage = ({ serviceKey, backToList }) => {
    const service = services[serviceKey];
    if (!service) return null;

    const Icon = service.icon;

    return (
        <div className="bg-light-blue p-8 rounded-lg animate-fade-in">
            <button onClick={backToList} className="mb-6 text-electric-green font-semibold hover:text-white transition-colors">
                &larr; Voltar para todos os serviços
            </button>
            <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="bg-deep-blue p-4 rounded-lg">
                    <Icon className="w-16 h-16 text-electric-green"/>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 text-lg mb-6">{service.description}</p>
                    <h4 className="text-xl font-semibold text-electric-green mb-4">Principais entregáveis:</h4>
                    <ul className="space-y-2 list-disc list-inside text-gray-300">
                        {service.details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};


// COMPONENT: Services Section
const ServicesSection = () => {
    const [selectedService, setSelectedService] = useState(null);

    const ServiceCard = ({ serviceKey }) => {
        const service = services[serviceKey];
        const Icon = service.icon;
        return (
            <div 
                onClick={() => setSelectedService(serviceKey)}
                className="bg-light-blue p-6 rounded-lg cursor-pointer transform hover:-translate-y-2 transition-transform duration-300 border-2 border-transparent hover:border-electric-green"
            >
                <Icon className="w-12 h-12 text-electric-green mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description.substring(0, 100)}...</p>
            </div>
        );
    };

    return (
        <section id="servicos" className="container mx-auto px-6 py-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Nossas <span className="text-electric-green">Soluções</span></h2>
                <p className="mt-4 text-lg text-gray-300">Tecnologia sob medida para cada desafio do seu negócio.</p>
            </div>
            
            {selectedService ? (
                <ServiceDetailPage serviceKey={selectedService} backToList={() => setSelectedService(null)} />
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.keys(services).map(key => <ServiceCard key={key} serviceKey={key} />)}
                </div>
            )}
        </section>
    );
};

// DATA: Blog Posts
const blogPosts = [
    { title: "O Futuro é Agora: Como a IA está Transformando Pequenas Empresas", excerpt: "Descubra como a inteligência artificial deixou de ser um conceito de ficção científica para se tornar uma ferramenta acessível e poderosa para otimizar operações, entender clientes e impulsionar o crescimento de PMEs." },
    { title: "5 Sinais de que sua Empresa Precisa de um Novo Website em 2025", excerpt: "Seu site é a vitrine digital do seu negócio. Se ele for lento, não funcionar bem em celulares ou tiver um design ultrapassado, você está perdendo clientes. Veja os sinais de alerta." },
    { title: "Aplicativo Próprio vs. Redes Sociais: Onde Investir seu Marketing?", excerpt: "As redes sociais são ótimas para alcance, mas um aplicativo próprio oferece um canal direto e personalizado com seus clientes mais fiéis. Analisamos os prós e contras de cada um." },
    { title: "O Funil de Vendas que Funciona: Automatize para Vender Mais", excerpt: "Entenda o passo a passo para construir uma máquina de vendas automática que atrai visitantes, transforma-os em leads e os nutre até a compra, liberando seu tempo para focar na estratégia." },
    { title: "Transformação Digital não é (só) sobre Tecnologia, é sobre Pessoas", excerpt: "Muitos projetos de TI falham por ignorar o fator humano. Nossa abordagem de consultoria foca em alinhar tecnologia, processos e cultura para garantir uma transformação digital de sucesso." }
];

// COMPONENT: Blog Section
const BlogSection = () => (
    <section id="blog" className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Nosso <span className="text-electric-green">Blog</span></h2>
            <p className="mt-4 text-lg text-gray-300">Insights e tendências sobre tecnologia e negócios.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, index) => (
                <div key={index} className="bg-light-blue p-6 rounded-lg flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-3 flex-grow">{post.title}</h3>
                    <p className="text-gray-400 mb-4">{post.excerpt}</p>
                    <a href="#" className="font-semibold text-electric-green hover:text-white mt-auto">Leia Mais &rarr;</a>
                </div>
            ))}
        </div>
    </section>
);

// COMPONENT: FAQ Item
const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-light-blue py-4">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left">
                <h3 className="text-lg font-semibold text-white">{question}</h3>
                {isOpen ? <ChevronUp className="text-electric-green" /> : <ChevronDown className="text-electric-green" />}
            </button>
            {isOpen && (
                <div className="mt-3 text-gray-300">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

// DATA & COMPONENT: FAQ Section
const faqData = [
    { q: "Como a Inteligência Artificial pode ajudar meu negócio?", a: "A IA pode automatizar tarefas repetitivas, analisar grandes volumes de dados para gerar insights, personalizar a experiência do cliente, otimizar a logística e muito mais. O primeiro passo é identificar os gargalos do seu processo atual, e nós podemos ajudar com isso em nossa consultoria." },
    { q: "Qual é o processo para desenvolver um aplicativo?", a: "Nosso processo é colaborativo e dividido em etapas: 1) Imersão e Estratégia, 2) Design de UI/UX e Prototipagem, 3) Desenvolvimento e Testes, 4) Lançamento nas lojas, e 5) Suporte e Evolução. Você participa de todas as fases para garantir que o resultado final atenda às suas expectativas." },
    { q: "Vocês oferecem suporte após a entrega do projeto?", a: "Sim! Acreditamos em parcerias de longo prazo. Oferecemos pacotes de manutenção e suporte contínuo para garantir que seu site ou aplicativo permaneça seguro, atualizado e funcionando perfeitamente. Também podemos trabalhar em novas funcionalidades conforme seu negócio cresce." },
    { q: "Meu negócio é pequeno. A VettaTec tem soluções para mim?", a: "Com certeza. Nossas soluções são escaláveis. Atendemos desde startups e pequenas empresas que precisam de um site profissional ou um funil de vendas, até empresas maiores que buscam soluções complexas de Inteligência Artificial. Nosso objetivo é encontrar a tecnologia certa para o seu momento e seu orçamento." }
];

const FaqSection = () => (
    <section id="faq" className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Perguntas <span className="text-electric-green">Frequentes</span></h2>
            <p className="mt-4 text-lg text-gray-300">Tirando suas dúvidas sobre como podemos ajudar.</p>
        </div>
        <div className="max-w-3xl mx-auto">
            {faqData.map((item, index) => <FaqItem key={index} question={item.q} answer={item.a} />)}
        </div>
    </section>
);


// COMPONENT: Contact Section
const ContactSection = () => {
    const [formStatus, setFormStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('Enviando...');
        
        // Simulação de envio
        setTimeout(() => {
            setFormStatus('Mensagem enviada com sucesso!');
            e.target.reset();
            setTimeout(() => setFormStatus(''), 3000);
        }, 1500);
    };

    return (
        <section id="contato" className="container mx-auto px-6 py-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Vamos <span className="text-electric-green">Conversar?</span></h2>
                <p className="mt-4 text-lg text-gray-300">Estamos prontos para transformar suas ideias em realidade.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="bg-light-blue p-8 rounded-lg">
                    <h3 className="text-2xl font-bold mb-6 text-white">Envie uma Mensagem</h3>
                    {/* Para integrar com Mailchimp, o action do form apontaria para a URL do seu Mailchimp */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="text" placeholder="Seu nome" required className="w-full p-3 bg-deep-blue rounded-md border border-gray-600 focus:outline-none focus:ring-2 ring-electric-green" />
                        <input type="email" placeholder="Seu melhor e-mail" required className="w-full p-3 bg-deep-blue rounded-md border border-gray-600 focus:outline-none focus:ring-2 ring-electric-green" />
                        <input type="text" placeholder="Assunto" required className="w-full p-3 bg-deep-blue rounded-md border border-gray-600 focus:outline-none focus:ring-2 ring-electric-green" />
                        <textarea placeholder="Sua mensagem" rows="5" required className="w-full p-3 bg-deep-blue rounded-md border border-gray-600 focus:outline-none focus:ring-2 ring-electric-green"></textarea>
                        
                        <div className="flex items-center space-x-2">
                           <input type="checkbox" id="newsletter" className="h-4 w-4 rounded border-gray-300 text-electric-green focus:ring-electric-green" />
                           <label htmlFor="newsletter" className="text-sm text-gray-400">Quero receber novidades e insights da VettaTec.</label>
                        </div>

                        <button type="submit" className="w-full px-6 py-3 bg-electric-green text-deep-blue font-bold rounded-lg hover:bg-white transition-all duration-300 flex items-center justify-center space-x-2">
                            <Send size={20} />
                            <span>Enviar Mensagem</span>
                        </button>
                        {formStatus && <p className="text-center mt-4 text-electric-green">{formStatus}</p>}
                    </form>
                </div>
                <div className="space-y-6">
                    <div className="bg-light-blue p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-white mb-4">Ou fale conosco diretamente:</h4>
                        <a href="https://wa.me/5554981650064" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 rounded-lg hover:bg-deep-blue transition-colors">
                            <Phone className="text-electric-green" size={24} />
                            <div>
                                <p className="font-semibold text-white">WhatsApp</p>
                                <p className="text-gray-300">+55 (54) 98165-0064</p>
                            </div>
                        </a>
                        <a href="https://instagram.com/vetta.tec" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center space-x-4 p-4 rounded-lg hover:bg-deep-blue transition-colors">
                            <Instagram className="text-electric-green" size={24} />
                            <div>
                                <p className="font-semibold text-white">Instagram</p>
                                <p className="text-gray-300">@vetta.tec</p>
                            </div>
                        </a>
                    </div>
                    <div className="bg-light-blue p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-white mb-4">Compartilhe:</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="p-3 bg-deep-blue rounded-full hover:bg-electric-green text-white hover:text-deep-blue transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="p-3 bg-deep-blue rounded-full hover:bg-electric-green text-white hover:text-deep-blue transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="p-3 bg-deep-blue rounded-full hover:bg-electric-green text-white hover:text-deep-blue transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// COMPONENT: Footer
const Footer = () => (
    <footer className="bg-light-blue border-t border-gray-700">
        <div className="container mx-auto px-6 py-8 text-center text-gray-400">
            <Logo />
            <p className="mt-4">&copy; {new Date().getFullYear()} VettaTec. Todos os direitos reservados.</p>
            <p className="text-sm mt-2">Construindo o futuro, hoje.</p>
        </div>
    </footer>
);


// MAIN APP COMPONENT
export default function App() {
    const [currentPage, setCurrentPage] = useState('Início');

    // Efeito para rolar suavemente para a seção quando a página muda
    useEffect(() => {
        if (currentPage) {
            const sectionId = currentPage.toLowerCase().replace(' ', '-');
            const sectionElement = document.getElementById(sectionId);
            if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [currentPage]);
    
    return (
        <>
            <GlobalStyles />
            {/* Google Analytics Integration:
              Cole seu snippet do Google Analytics aqui, antes da tag de fechamento </head>
              <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'GA_TRACKING_ID');
              </script>
            */}
            <div className="bg-deep-blue">
                <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
                <main>
                    <HeroSection setCurrentPage={setCurrentPage}/>
                    <div className="container mx-auto px-6 space-y-20">
                      <AboutSection />
                      <ServicesSection />
                      <BlogSection />
                      <FaqSection />
                      <ContactSection />
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
