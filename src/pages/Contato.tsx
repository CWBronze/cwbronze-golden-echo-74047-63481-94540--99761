import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, User, Instagram, Facebook, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  subject: z.string().min(1, "Selecione um assunto"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

const Contato = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-bronze to-gold overflow-hidden mt-0 pt-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 text-center text-white space-y-4 px-6">
          <h1 className="font-script text-5xl md:text-6xl">Entre em Contato</h1>
          <p className="text-xl md:text-2xl">Estamos Prontos para Atender Você</p>
        </div>
      </section>

      <main className="flex-1 container mx-auto px-10 py-20">
        {/* Seção Principal - Layout 40/60 */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-20 items-start">
          {/* Formulário - 40% */}
          <Card className="lg:col-span-2 p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-gold mb-6">Envie sua Mensagem</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                          <Input placeholder="Nome completo" className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                          <Input type="email" placeholder="E-mail" className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                          <Input type="tel" placeholder="Telefone" className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o assunto" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="duvida">Dúvida</SelectItem>
                          <SelectItem value="agendamento">Agendamento</SelectItem>
                          <SelectItem value="orcamento">Orçamento</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea placeholder="Sua mensagem" rows={5} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" variant="cta" size="lg" className="w-full">
                  ENVIAR MENSAGEM
                </Button>
              </form>
            </Form>
          </Card>

          {/* Informações - 60% */}
          <Card className="lg:col-span-3 p-8 bg-accent space-y-6">
            <h2 className="text-2xl font-semibold text-gold mb-6">Informações</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-accent-foreground">Endereço</h3>
                  <p className="text-accent-foreground/80">
                    Rua Marechal Deodoro 276 - loja 10<br />
                    Centro - Curitiba/PR
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-accent-foreground">Telefone</h3>
                  <p className="text-accent-foreground/80">(41) 99866-1792</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-accent-foreground">E-mail</h3>
                  <p className="text-accent-foreground/80">cwbronzeamentoartificial@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-accent-foreground">Horário de Atendimento</h3>
                  <p className="text-accent-foreground/80">
                    Segunda a Sexta: 9h às 20h<br />
                    Sábado: 9h às 16h
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Seção Mapa */}
        <section className="mb-20 px-0">
          <h2 className="text-3xl font-semibold text-gold text-center mb-8">Nossa Localização</h2>
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.2432765600865!2d-49.27548140321047!3d-25.430128999999983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce46c99d85b55%3A0x309ac78da4a8d5ee!2sGALERIA%20SUISSA!5e0!3m2!1spt-BR!2sbr!4v1761606488760!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        {/* Seção Redes Sociais */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold text-gold mb-8">Siga-nos</h2>
          <div className="flex justify-center gap-8">
            <a 
              href="https://www.instagram.com/cwbronze?igsh=Zzl0M3hzNWFidm1r" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-accent rounded-full transition-all duration-300 hover:scale-110 hover:bg-gold/20 group"
            >
              <Instagram className="w-10 h-10 text-foreground group-hover:text-gold transition-colors" />
            </a>
            <a 
              href="https://www.facebook.com/share/1DKQoeKX8G/?mibextid=wwXIfr" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-accent rounded-full transition-all duration-300 hover:scale-110 hover:bg-gold/20 group"
            >
              <Facebook className="w-10 h-10 text-foreground group-hover:text-gold transition-colors" />
            </a>
            <a 
              href="https://wa.me/5541998661792" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-accent rounded-full transition-all duration-300 hover:scale-110 hover:bg-gold/20 group"
            >
              <MessageCircle className="w-10 h-10 text-foreground group-hover:text-gold transition-colors" />
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contato;
