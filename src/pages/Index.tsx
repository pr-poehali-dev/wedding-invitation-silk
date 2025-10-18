import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [attending, setAttending] = useState<string>("");
  const [guestName, setGuestName] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо!",
      description: "Мы получили ваш ответ. До встречи на празднике!",
    });
    setAttending("");
    setGuestName("");
    setGuestCount("");
    setMessage("");
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center gap-6 text-sm">
            <button onClick={() => scrollToSection("hero")} className="hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection("story")} className="hover:text-primary transition-colors">
              История
            </button>
            <button onClick={() => scrollToSection("program")} className="hover:text-primary transition-colors">
              Программа
            </button>
            <button onClick={() => scrollToSection("dresscode")} className="hover:text-primary transition-colors">
              Дресс-код
            </button>
            <button onClick={() => scrollToSection("rsvp")} className="hover:text-primary transition-colors">
              Подтверждение
            </button>
            <button onClick={() => scrollToSection("contacts")} className="hover:text-primary transition-colors">
              Контакты
            </button>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/0cbbae36-78c0-4cbf-b159-f53fa2b69c73/files/34dd35da-a1b8-4928-ad3b-a348e3032329.jpg"
            alt="Wedding background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <div className="mb-8">
            <Icon name="Heart" size={48} className="mx-auto text-primary mb-6" />
          </div>
          <h1 className="text-7xl md:text-8xl font-light mb-6 tracking-wide">
            Никита <span className="text-primary">&</span> Александра
          </h1>
          <div className="w-32 h-px bg-primary mx-auto mb-6"></div>
          <p className="text-2xl md:text-3xl font-light mb-8 text-muted-foreground">
            Приглашают вас разделить радость
          </p>
          <p className="text-xl md:text-2xl mb-12">
            15 августа 2025
          </p>
          <Button
            onClick={() => scrollToSection("rsvp")}
            size="lg"
            className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform"
          >
            Подтвердить присутствие
          </Button>
        </div>
      </section>

      <section id="story" className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl text-center mb-16 font-light">Наша история</h2>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="flex gap-8 items-center animate-fade-in">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name="Sparkles" size={32} className="text-primary" />
              </div>
              <Card className="flex-1 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-2xl mb-2 font-semibold">Первая встреча</h3>
                  <p className="text-muted-foreground mb-2">Весна 2018</p>
                  <p>Судьба свела нас в уютной кофейне. Один взгляд — и мы поняли, что это начало чего-то особенного.</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-8 items-center animate-fade-in flex-row-reverse">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name="Coffee" size={32} className="text-primary" />
              </div>
              <Card className="flex-1 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-2xl mb-2 font-semibold">Первое свидание</h3>
                  <p className="text-muted-foreground mb-2">Апрель 2018</p>
                  <p>Прогулка по парку затянулась до рассвета. Мы говорили обо всём на свете, как будто знали друг друга всю жизнь.</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-8 items-center animate-fade-in">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name="Plane" size={32} className="text-primary" />
              </div>
              <Card className="flex-1 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-2xl mb-2 font-semibold">Первое путешествие</h3>
                  <p className="text-muted-foreground mb-2">Лето 2019</p>
                  <p>Италия встретила нас теплом и романтикой. Именно там мы поняли, что хотим проводить вместе всю жизнь.</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-8 items-center animate-fade-in flex-row-reverse">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name="Ring" size={32} className="text-primary" />
              </div>
              <Card className="flex-1 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-2xl mb-2 font-semibold">Предложение</h3>
                  <p className="text-muted-foreground mb-2">Зима 2024</p>
                  <p>Под снегопадом в любимом парке Никита встал на одно колено. Слова "Да!" прозвучали прежде, чем он успел договорить.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/0cbbae36-78c0-4cbf-b159-f53fa2b69c73/files/2330aec7-f97d-4321-a41b-1e504f75ffab.jpg"
            alt="Venue"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-6xl text-center mb-16 font-light">Программа мероприятия</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <Card className="hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="text-3xl font-light text-primary">15:00</div>
                  </div>
                  <div>
                    <h3 className="text-2xl mb-2 font-semibold flex items-center gap-2">
                      <Icon name="Church" size={24} className="text-primary" />
                      Церемония
                    </h3>
                    <p className="text-muted-foreground">Торжественная регистрация брака. Просим приходить заранее.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="text-3xl font-light text-primary">16:30</div>
                  </div>
                  <div>
                    <h3 className="text-2xl mb-2 font-semibold flex items-center gap-2">
                      <Icon name="Camera" size={24} className="text-primary" />
                      Фотосессия
                    </h3>
                    <p className="text-muted-foreground">Совместная фотосессия в парке. Запечатлеем счастливые моменты!</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="text-3xl font-light text-primary">18:00</div>
                  </div>
                  <div>
                    <h3 className="text-2xl mb-2 font-semibold flex items-center gap-2">
                      <Icon name="Wine" size={24} className="text-primary" />
                      Банкет
                    </h3>
                    <p className="text-muted-foreground">Праздничный ужин, тосты, конкурсы и танцы до утра!</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="text-3xl font-light text-primary">23:00</div>
                  </div>
                  <div>
                    <h3 className="text-2xl mb-2 font-semibold flex items-center gap-2">
                      <Icon name="Cake" size={24} className="text-primary" />
                      Торт
                    </h3>
                    <p className="text-muted-foreground">Разрезание свадебного торта и продолжение веселья.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="dresscode" className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl text-center mb-16 font-light">Дресс-код</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden animate-scale-in">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-12 bg-gradient-to-br from-background to-card flex flex-col justify-center">
                    <Icon name="Sparkles" size={48} className="text-primary mb-6" />
                    <h3 className="text-3xl mb-4 font-semibold">Элегантный наряд</h3>
                    <p className="text-lg mb-6 text-muted-foreground">
                      Мы будем рады видеть вас в вечерних нарядах. Цветовая гамма — шёлковые оттенки бежевого, айвори и тауп.
                    </p>
                    <div className="flex gap-3 mb-6">
                      <div className="w-16 h-16 rounded-full bg-[#F5E6D3] border-2 border-primary/20"></div>
                      <div className="w-16 h-16 rounded-full bg-[#E8D5C4] border-2 border-primary/20"></div>
                      <div className="w-16 h-16 rounded-full bg-[#C9A690] border-2 border-primary/20"></div>
                      <div className="w-16 h-16 rounded-full bg-[#8B7355] border-2 border-primary/20"></div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Пожалуйста, избегайте белых и чёрных нарядов.
                    </p>
                  </div>
                  <div className="relative min-h-[400px]">
                    <img
                      src="https://cdn.poehali.dev/projects/0cbbae36-78c0-4cbf-b159-f53fa2b69c73/files/f904c89f-f5c6-411f-a5eb-04c3657d1e30.jpg"
                      alt="Dress code"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="rsvp" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl text-center mb-16 font-light">Подтверждение присутствия</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="animate-scale-in">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-lg mb-2 block">
                      Ваше имя
                    </Label>
                    <Input
                      id="name"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="Иван Иванов"
                      className="text-lg h-12"
                      required
                    />
                  </div>

                  <div>
                    <Label className="text-lg mb-4 block">Вы придёте?</Label>
                    <RadioGroup value={attending} onValueChange={setAttending} required>
                      <div className="flex items-center space-x-3 p-4 rounded-lg hover:bg-accent/50 transition-colors">
                        <RadioGroupItem value="yes" id="yes" />
                        <Label htmlFor="yes" className="cursor-pointer text-lg flex-1">
                          Да, с удовольствием!
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 rounded-lg hover:bg-accent/50 transition-colors">
                        <RadioGroupItem value="no" id="no" />
                        <Label htmlFor="no" className="cursor-pointer text-lg flex-1">
                          К сожалению, не смогу
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {attending === "yes" && (
                    <div className="animate-fade-in">
                      <Label htmlFor="count" className="text-lg mb-2 block">
                        Количество гостей
                      </Label>
                      <Input
                        id="count"
                        type="number"
                        min="1"
                        max="5"
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        placeholder="1"
                        className="text-lg h-12"
                        required
                      />
                    </div>
                  )}

                  <div>
                    <Label htmlFor="message" className="text-lg mb-2 block">
                      Пожелания (необязательно)
                    </Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Особые пожелания, пищевые ограничения..."
                      className="text-lg min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg py-6 rounded-full hover:scale-105 transition-transform">
                    Отправить ответ
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl text-center mb-16 font-light">Контакты</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow animate-scale-in">
              <CardContent className="p-8 text-center">
                <Icon name="MapPin" size={48} className="mx-auto text-primary mb-4" />
                <h3 className="text-2xl mb-4 font-semibold">Место проведения</h3>
                <p className="text-lg mb-2">Ресторан "Шёлковый путь"</p>
                <p className="text-muted-foreground mb-4">ул. Садовая, 15</p>
                <Button variant="outline" className="rounded-full">
                  Открыть на карте
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-scale-in">
              <CardContent className="p-8 text-center">
                <Icon name="Phone" size={48} className="mx-auto text-primary mb-4" />
                <h3 className="text-2xl mb-4 font-semibold">По всем вопросам</h3>
                <p className="text-lg mb-2">Никита: +7 (999) 123-45-67</p>
                <p className="text-lg mb-4">Александра: +7 (999) 765-43-21</p>
                <Button variant="outline" className="rounded-full">
                  Написать в WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-border">
        <div className="container mx-auto px-4">
          <Icon name="Heart" size={32} className="mx-auto text-primary mb-4" />
          <p className="text-lg text-muted-foreground mb-2">С любовью,</p>
          <p className="text-2xl font-light">Никита & Александра</p>
          <p className="text-sm text-muted-foreground mt-4">15 августа 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
