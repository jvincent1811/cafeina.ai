import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

/* ===== ICONS ===== */
function MenuIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
}
function XIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
}
function ArrowRightIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
}
function CheckIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
}
function ZapIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
}
function GlobeIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
}
function UsersIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
}
function CodeIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
}
function SmartphoneIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-6 18.75h12" /></svg>
}
function ShieldCheckIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
}
function MessageSquareIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
}
function SparklesIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" /></svg>
}
function StoreIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.617A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0v6.365" /></svg>
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) { el.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false) }
  }

  return (
    <div className="min-h-screen bg-[#0A1628] text-white font-sans">

      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center">
              <img src="/logo-navbar.png" alt="cafeina.ai" className="h-11 w-auto" />
            </a>
            <div className="hidden md:flex items-center gap-8">
              {['Plataforma', 'Distribuidores', 'Latinoamerica', 'Contacto'].map((item) => (
                <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-sm text-slate-400 hover:text-[#00D4FF] transition-colors font-medium">{item}</button>
              ))}
            </div>
            <div className="hidden md:block">
              <Button onClick={() => setDialogOpen(true)} className="bg-[#00D4FF] hover:bg-[#00B8E0] text-[#0A1628] rounded-full px-6 font-bold text-sm">Ser distribuidor <ArrowRightIcon className="w-4 h-4 ml-1" /></Button>
            </div>
            <button className="md:hidden p-2 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}</button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0A1628] border-b border-white/10 px-4 py-4 space-y-3">
            {['Plataforma', 'Distribuidores', 'Latinoamerica', 'Contacto'].map((item) => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="block w-full text-left py-2 text-slate-300 font-medium">{item}</button>
            ))}
            <Button onClick={() => setDialogOpen(true)} className="w-full bg-[#00D4FF] text-[#0A1628] rounded-full mt-2 font-bold">Ser distribuidor</Button>
          </div>
        )}
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src="/hero-vibe.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-full px-4 py-2 text-sm text-[#00D4FF] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
              Crea apps sin saber programar
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              La plataforma de apps con IA para{" "}
              <span className="text-[#00D4FF]">Latinoamerica</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed">
              <strong className="text-white">Cafeina.ai</strong> es la plataforma que permite a agencias y emprendedores crear apps funcionales para cualquier negocio, en espanol, con precios locales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => setDialogOpen(true)} className="bg-[#00D4FF] hover:bg-[#00B8E0] text-[#0A1628] rounded-full px-8 text-lg h-14 font-bold shadow-lg shadow-[#00D4FF]/20">Ser distribuidor <ArrowRightIcon className="w-5 h-5 ml-2" /></Button>
              <button onClick={() => scrollTo('plataforma')} className="rounded-full px-8 text-lg h-14 font-semibold bg-white/5 border-2 border-white/20 text-white hover:bg-white/10 transition-all">Conocer la plataforma</button>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-[#00D4FF]" /><span>Apps nativas iOS + Android</span></div>
              <div className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-[#00D4FF]" /><span>Soporte en espanol</span></div>
              <div className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-[#00D4FF]" /><span>Precios en pesos mexicanos</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONOCE A NITA ===== */}
      <section className="py-24 bg-[#0F1D32] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img src="/nita-cafe.png" alt="Nita tomando cafe, relajada y contenta" className="w-full" />
            </div>
            <div className="space-y-6">
              <Badge className="bg-[#F5A623]/10 text-[#F5A623] border-[#F5A623]/30 mb-2">Conoce a Nita</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">De repartir pasteles a crear apps para toda su comunidad</h2>
              <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                <p>Nita era pastelera. Conocia a cada cliente de su barrio porque les llevaba pasteles a sus negocios: la taqueria, la peluqueria, la tiendita de la esquina.</p>
                <p>Un dia se dio cuenta de que todos esos negocios necesitaban una app, pero no podian pagar $50,000 pesos ni esperar meses.</p>
                <p>Con <strong className="text-white">cafeina.ai</strong>, Nita descubrio que podia crear apps sin saber programar. Solo describe lo que necesita cada cliente y la plataforma lo convierte en una app real.</p>
                <p>Hoy, ademas de pasteles, ofrece apps a cada negocio que visita. Es la creadora digital de su comunidad.</p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-[#00D4FF]/10 rounded-xl px-5 py-3 border border-[#00D4FF]/20 text-center">
                  <span className="text-[#00D4FF] font-black text-2xl block">0</span>
                  <span className="text-slate-400 text-xs">lineas de codigo</span>
                </div>
                <div className="bg-[#F5A623]/10 rounded-xl px-5 py-3 border border-[#F5A623]/20 text-center">
                  <span className="text-[#F5A623] font-black text-2xl block">30</span>
                  <span className="text-slate-400 text-xs">apps creadas</span>
                </div>
                <div className="bg-white/5 rounded-xl px-5 py-3 border border-white/10 text-center">
                  <span className="text-white font-black text-2xl block">$499</span>
                  <span className="text-slate-400 text-xs">pesos al mes</span>
                </div>
                <div className="bg-[#00D4FF]/10 rounded-xl px-5 py-3 border border-[#00D4FF]/20 text-center">
                  <span className="text-[#00D4FF] font-black text-2xl block">$14,970</span>
                  <span className="text-slate-400 text-xs">ingresos al mes</span>
                </div>
                <div className="bg-[#F5A623]/10 rounded-xl px-5 py-3 border border-[#F5A623]/20 text-center">
                  <span className="text-[#F5A623] font-black text-2xl block">$179,640</span>
                  <span className="text-slate-400 text-xs">ingresos al ano</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUE ES CAFEINA.AI ===== */}
      <section id="plataforma" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-[#00D4FF]/10 text-[#00D4FF] border-[#00D4FF]/30 mb-4">Nuestra tecnologia</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">La plataforma lider para crear apps</h2>
            <p className="text-slate-400 text-lg">Cafeina.ai es la plataforma de inteligencia artificial para la creacion de apps. El soporte es local, y los precios estan pensados para Latinoamerica.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#00D4FF]/5">
              <img src="/platform-vibe.jpg" alt="Plataforma cafeina.ai" className="w-full" />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Describe tu idea. La IA la crea.</h3>
              <p className="text-slate-400 leading-relaxed">Nuestra plataforma esta disenada para que cualquier persona pueda crear apps sin saber programar. Solo describes la app que necesitas, la IA la crea en minutos, y obtienes una app funcional lista para usar.</p>
              <div className="space-y-4">
                {[
                  { icon: SparklesIcon, text: 'Crea apps con solo describirlas en espanol' },
                  { icon: CodeIcon, text: 'Codigo React Native real, exportable y sin lock-in' },
                  { icon: SmartphoneIcon, text: 'Preview en simulador iOS directo en el navegador' },
                  { icon: ZapIcon, text: 'Publicacion en App Store y Google Play' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center shrink-0"><item.icon className="w-5 h-5 text-[#00D4FF]" /></div>
                    <span className="text-slate-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMO FUNCIONA ===== */}
      <section className="py-24 bg-[#0F1D32] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-[#00D4FF]/10 text-[#00D4FF] border-[#00D4FF]/30 mb-4">Tres pasos</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">De la idea a la app en minutos</h2>
            <p className="text-slate-400 text-lg">Nuestra inteligencia artificial elimina la complejidad. Tu describes, la plataforma crea.</p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-16 max-w-5xl mx-auto">
            <img src="/proceso-vibe.jpg" alt="Proceso de creacion de apps con IA" className="w-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Describe tu app', desc: 'Explicale a nuestra IA que tipo de app necesitas. Restaurant, tienda, gimnasio, servicios... Lo que sea. En espanol, como si le hablaras a una persona.', color: 'bg-[#00D4FF] text-[#0A1628]' },
              { step: '2', title: 'La IA la crea', desc: 'Nuestra plataforma genera el codigo, el diseno, las funciones y el backend. En minutos tienes una app funcional. Ajusta con mas instrucciones hasta que quede perfecta.', color: 'bg-[#F5A623] text-[#0A1628]' },
              { step: '3', title: 'Entrega a tu cliente', desc: 'Recibes un link para compartir la app. Tu cliente la abre en su navegador, la agrega a su pantalla de inicio y funciona como cualquier app. Sin tiendas, sin esperas.', color: 'bg-[#00D4FF] text-[#0A1628]' },
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <div className={`w-16 h-16 mx-auto rounded-2xl ${item.color} flex items-center justify-center shadow-lg shadow-[#00D4FF]/10`}><span className="text-2xl font-extrabold">{item.step}</span></div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARA QUIEN ES ===== */}
      <section id="distribuidores" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-[#F5A623]/10 text-[#F5A623] border-[#F5A623]/30 mb-4">Oportunidad de negocio</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Un negocio que puedes empezar hoy</h2>
            <p className="text-slate-400 text-lg">Cafeina.ai esta disenada para que cualquier persona o empresa pueda ofrecer apps a sus clientes, sin saber programar.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: '/moni-agencias.jpg', title: 'Agencias digitales', desc: 'Anade la creacion de apps a tus servicios actuales. Diseno web, marketing, redes sociales... ahora tambien apps.' },
              { img: '/moni-emprendedores.jpg', title: 'Emprendedores', desc: 'Monta tu propia agencia de apps desde cero. Trabaja desde casa, atiende clientes de cualquier industria, crece a tu ritmo.' },
              { img: '/moni-consultores.jpg', title: 'Consultores y coaches', desc: 'Ofrece apps como parte de tu consultoria. Ayuda a negocios a digitalizarse con una solucion concreta y rapida.' },
            ].map((item, i) => (
              <Card key={i} className="bg-[#0F1D32] border-white/10 hover:border-[#00D4FF]/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LATINOAMERICA ===== */}
      <section id="latinoamerica" className="py-24 bg-[#0F1D32] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-[#00D4FF]/10 text-[#00D4FF] border-[#00D4FF]/30 mb-4">Latinoamerica</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Una red de creadores de apps en toda la region</h2>
            <p className="text-slate-400 text-lg">Mexico, Colombia, Argentina, Chile, Peru... Cafeina.ai busca distribuidores en cada pais de Latinoamerica. Cada distribuidor opera con su propia marca, sus propios clientes y su propio crecimiento.</p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl max-w-5xl mx-auto mb-16">
            <img src="/latam-vibe.jpg" alt="Mapa de Latinoamerica con conexiones" className="w-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            {[
              { number: '500M+', label: 'Celulares en LATAM' },
              { number: '20+', label: 'Paises' },
              { number: '$499', label: 'Pesos/mes por app' },
              { number: '0', label: 'Costo de instalacion' },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-3xl md:text-4xl font-extrabold text-[#00D4FF]">{stat.number}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CARACTERISTICAS ===== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-[#F5A623]/10 text-[#F5A623] border-[#F5A623]/30 mb-4">Todo incluido</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Todo lo que tu cliente recibe</h2>
            <p className="text-slate-400 text-lg">Cada app construida con Cafeina.ai incluye estas caracteristicas profesionales.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: SparklesIcon, title: 'IA Conversacional', desc: 'Describe la app en espanol y la IA la crea' },
              { icon: CodeIcon, title: 'React Native Real', desc: 'Codigo nativo exportable, sin lock-in' },
              { icon: SmartphoneIcon, title: 'Preview en Vivo', desc: 'Simulador iOS en el navegador, sin Mac' },
              { icon: ZapIcon, title: 'Publicacion en Tiendas', desc: 'App Store y Google Play' },
              { icon: ShieldCheckIcon, title: 'Backend + Auth', desc: 'Base de datos, login, almacenamiento' },
              { icon: StoreIcon, title: 'Pagos Integrados', desc: 'Stripe y otros gateways de pago' },
              { icon: GlobeIcon, title: 'QR para Probar', desc: 'Escanea y prueba la app en tu celular' },
              { icon: UsersIcon, title: 'Soporte Local', desc: 'Atencion en espanol, horario Latinoamerica' },
            ].map((item, i) => (
              <div key={i} className="bg-[#0F1D32] rounded-xl p-5 border border-white/10 hover:border-[#00D4FF]/30 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center mb-3 group-hover:bg-[#00D4FF]/20 transition-colors">
                  <item.icon className="w-5 h-5 text-[#00D4FF]" />
                </div>
                <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                <p className="text-slate-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MODELO DE NEGOCIO ===== */}
      <section className="py-24 bg-[#0F1D32] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-[#00D4FF]/10 text-[#00D4FF] border-[#00D4FF]/30 mb-4">Modelo de negocio</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Gana creando apps para otros</h2>
            <p className="text-slate-400 text-lg">Tu decides cuanto cobrar. Te damos la plataforma, tu decides tu margen.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-[#0A1628] border-[#00D4FF]/30">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center"><StoreIcon className="w-6 h-6 text-[#00D4FF]" /></div>
                  <div><h3 className="text-xl font-bold">Tu inversion</h3><p className="text-slate-500 text-sm">Acceso a nuestra plataforma</p></div>
                </div>
                <div className="space-y-3">
                  {['Acceso a la plataforma Cafeina.ai', 'Soporte tecnico en espanol', 'Materiales de venta y capacitacion', 'Panel de administracion de clientes', 'Actualizaciones y mejoras continuas'].map((f, j) => (
                    <div key={j} className="flex items-start gap-3 text-slate-300"><CheckIcon className="w-4 h-4 text-[#00D4FF] shrink-0 mt-1" /><span className="text-sm">{f}</span></div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#0A1628] border-[#F5A623]/30">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#F5A623]/10 flex items-center justify-center"><UsersIcon className="w-6 h-6 text-[#F5A623]" /></div>
                  <div><h3 className="text-xl font-bold">Tu ganancia</h3><p className="text-slate-500 text-sm">Lo que cobras a tus clientes</p></div>
                </div>
                <div className="space-y-3">
                  {['Tu decides tus precios (ej: $499-$999/mes)', 'Cobras directamente a tus clientes', 'Margen de 50-80% por cada app', 'Ingresos recurrentes mensuales', 'Escalable: mas clientes = mas ingresos'].map((f, j) => (
                    <div key={j} className="flex items-start gap-3 text-slate-300"><CheckIcon className="w-4 h-4 text-[#F5A623] shrink-0 mt-1" /><span className="text-sm">{f}</span></div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#00D4FF]/10 text-[#00D4FF] border-[#00D4FF]/30 mb-4">Preguntas frecuentes</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Todo lo que necesitas saber</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: '¿Necesito saber programar para ser distribuidor?', a: 'No. Nuestra plataforma esta disenada para que cualquier persona pueda crear apps sin escribir codigo. Tu describes la app en espanol y la IA la crea. Te capacitamos en el proceso.' },
              { q: '¿Cuanto cuesta ser distribuidor de Cafeina.ai?', a: 'Tenemos planes accesibles para emprendedores y profesionales para agencias. Contactanos por WhatsApp y te damos todos los detalles de precios y margenes.' },
              { q: '¿Puedo usar mi propia marca?', a: 'Si. Puedes vender bajo tu propia marca, con tus precios y tu relacion directa con el cliente. Nosotros somos tu proveedor de tecnologia.' },
              { q: '¿En que paises puedo operar?', a: 'Puedes operar desde cualquier pais de Latinoamerica. Nuestra plataforma funciona en todo el mundo. Buscamos distribuidores en Mexico, Colombia, Argentina, Chile, Peru, Ecuador, Guatemala, Costa Rica y mas.' },
              { q: '¿Como cobro a mis clientes?', a: 'Tu cobras directamente a tus clientes. Tu decides tus precios, tus metodos de pago y tus politicas. Cafeina.ai te factura a ti, tu facturas a tus clientes.' },
              { q: '¿Que soporte recibo como distribuidor?', a: 'Recibes capacitacion completa sobre la plataforma, materiales de venta, soporte tecnico en espanol y acceso a un canal privado de distribuidores. No estas solo.' },
              { q: '¿Las apps funcionan en iOS y Android?', a: 'Si. Nuestra plataforma genera apps nativas para ambos sistemas. Tambien puedes ofrecer la version PWA (Progressive Web App) que funciona directo en el navegador sin necesidad de tiendas de apps.' },
              { q: '¿Como empiezo?', a: 'Envianos un mensaje por WhatsApp al +52 331 698 4571 o escribenos a hola@cafeina.ai. Te agendamos una llamada de 15 minutos para explicarte todo y resolver tus dudas.' },
            ].map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-[#0F1D32] rounded-xl border border-white/10 px-5 data-[state=open]:border-[#00D4FF]/30 transition-colors">
                <AccordionTrigger className="text-left text-white font-semibold text-sm hover:no-underline py-4">{item.q}</AccordionTrigger>
                <AccordionContent className="text-slate-400 text-sm leading-relaxed pb-4">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero-vibe.jpg" alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/90 to-[#0A1628]/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-full px-5 py-2 text-sm text-[#00D4FF] font-medium">
            <SparklesIcon className="w-4 h-4" />
            Oportunidad limitada — Primeros distribuidores
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Conviertete en el creador de apps de tu ciudad
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Latinoamerica tiene millones de negocios que necesitan una app. <strong className="text-white">Cafeina.ai</strong> te da la plataforma. Tu traes los clientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" onClick={() => setDialogOpen(true)} className="bg-[#00D4FF] hover:bg-[#00B8E0] text-[#0A1628] rounded-full px-10 text-lg h-14 font-bold shadow-xl shadow-[#00D4FF]/20">Aplicar como distribuidor <ArrowRightIcon className="w-5 h-5 ml-2" /></Button>
            <a href="https://wa.me/523316984571" target="_blank" rel="noopener noreferrer" className="rounded-full px-10 text-lg h-14 font-semibold bg-white/5 border-2 border-white/20 text-white hover:bg-white/10 transition-all inline-flex items-center justify-center">WhatsApp</a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#0A1628] border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div className="space-y-4 md:col-span-2">
              <img src="/logo-navbar.png" alt="cafeina.ai" className="h-11 w-auto" />
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm">La plataforma de apps con IA para Latinoamerica. Soporte local, precios adaptados al mercado.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Enlaces</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                {['Plataforma', 'Distribuidores', 'Latinoamerica', 'Contacto'].map((item) => (
                  <li key={item}><button onClick={() => scrollTo(item.toLowerCase())} className="hover:text-[#00D4FF] transition-colors">{item}</button></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>Guadalajara, Jalisco, Mexico</li>
                <li><a href="https://wa.me/523316984571" target="_blank" rel="noopener noreferrer" className="hover:text-[#00D4FF] transition-colors">WhatsApp: +52 331 698 4571</a></li>
                <li><a href="mailto:hola@cafeina.ai" className="hover:text-[#00D4FF] transition-colors">hola@cafeina.ai</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
            <p>© 2025 Cafeina.ai — Todos los derechos reservados.</p>
            <p>Cafeina.ai</p>
          </div>
        </div>
      </footer>

      {/* ===== CONTACT DIALOG ===== */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md bg-[#0F1D32] border-white/10 text-white">
          <DialogHeader>
            <DialogTitle className="text-white text-xl">Aplicar como distribuidor</DialogTitle>
            <DialogDescription className="text-slate-400">Escribenos y te contactamos para una llamada de 15 minutos.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-2">
            <div className="bg-[#0A1628] rounded-xl p-4 border border-white/10 text-center space-y-2">
              <p className="text-sm text-slate-400">La forma mas rapida:</p>
              <a href="https://wa.me/523316984571" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full px-6 py-3 font-semibold transition-colors">
                <MessageSquareIcon className="w-5 h-5" /> WhatsApp
              </a>
            </div>
            <div className="bg-[#0A1628] rounded-xl p-4 border border-white/10 text-center space-y-2">
              <p className="text-sm text-slate-400">O envianos un correo:</p>
              <a href="mailto:hola@cafeina.ai" className="text-[#00D4FF] font-semibold hover:underline">hola@cafeina.ai</a>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* ===== MONITA SUPPORT FLOAT ===== */}
      <button
        onClick={() => setDialogOpen(true)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Soporte cafeina"
      >
        <div className="w-16 h-16 rounded-full shadow-2xl overflow-hidden border-2 border-[#00D4FF] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]">
          <img src="/moni-avatar.png" alt="Soporte cafeina" className="w-full h-full object-cover" />
        </div>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#0F1D32] text-white text-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg border border-white/10">
          Soy Nita, te ayudo a crear tu app
        </span>
      </button>

    </div>
  )
}
