import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState, useEffect, useRef } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">ВЕТЕР</div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
            <a href="#capabilities" className="text-foreground hover:text-primary transition-colors">Возможности</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button asChild>
            <a href="#contact">Заказать</a>
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/f08a5d91-180c-4e61-bf81-b88fdc10a515/files/a08e8e50-92f8-4928-a939-a88147070a89.jpg" 
            alt="ВЕТЕР система управления"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Умное управление <span className="text-primary">микроклиматом</span>
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Автоматизированная система контроля окон на основе датчиков температуры, влажности и качества воздуха
              </p>
              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <a href="#contact">Получить консультацию</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#capabilities">Узнать больше</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-on-scroll">Преимущества системы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-on-scroll">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Icon name="Leaf" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Экономия энергии</h3>
                <p className="text-muted-foreground">
                  На 45% экономнее, чем аналоги
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-on-scroll">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Icon name="Heart" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Здоровый микроклимат</h3>
                <p className="text-muted-foreground">
                  Автоматический контроль влажности и температуры для комфортного самочувствия
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-on-scroll">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Автоматизация 24/7</h3>
                <p className="text-muted-foreground">
                  Система работает круглосуточно, не требуя вашего участия и контроля
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="capabilities" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-on-scroll">Возможности управления</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="flex gap-4 animate-on-scroll-left">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name="Smartphone" size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Мобильное приложение</h3>
                <p className="text-muted-foreground">
                  Управляйте окнами из любой точки мира через iOS и Android приложение
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-on-scroll-right">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name="Radio" size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Пульт управления</h3>
                <p className="text-muted-foreground">
                  Беспроводной пульт с радиусом действия до 50 метров для удобного управления
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-on-scroll-left">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name="Gauge" size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Датчики микроклимата</h3>
                <p className="text-muted-foreground">
                  Мониторинг температуры, контроль влажности и качества воздуха в реальном времени
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-on-scroll-right">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name="Settings" size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Гибкие сценарии</h3>
                <p className="text-muted-foreground">
                  Настройка автоматических режимов по расписанию или условиям окружающей среды
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-on-scroll-left">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Защита от погоды</h3>
                <p className="text-muted-foreground">
                  Датчик дождя автоматически закроет окна при начале осадков
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-on-scroll-right">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name="Zap" size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Энергоэффективность</h3>
                <p className="text-muted-foreground">
                  Работа от аккумулятора с солнечной панелью — никаких проводов
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-on-scroll">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg animate-on-scroll">
              <CardContent className="pt-8 space-y-4">
                <div className="flex gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Установили систему в офис. Теперь не нужно думать о проветривании — всё работает автоматически. Сотрудники отмечают улучшение самочувствия."
                </p>
                <div className="pt-4">
                  <div className="font-semibold">Алексей Петров</div>
                  <div className="text-sm text-muted-foreground">Директор IT-компании</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg animate-on-scroll">
              <CardContent className="pt-8 space-y-4">
                <div className="flex gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Очень удобно управлять через телефон. Уезжая в отпуск, могу быть спокойна — система сама закроет окна при дожде."
                </p>
                <div className="pt-4">
                  <div className="font-semibold">Мария Соколова</div>
                  <div className="text-sm text-muted-foreground">Владелица квартиры</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg animate-on-scroll">
              <CardContent className="pt-8 space-y-4">
                <div className="flex gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Счета за отопление снизились на треть! Система оптимально проветривает дом, не выхолаживая его."
                </p>
                <div className="pt-4">
                  <div className="font-semibold">Дмитрий Волков</div>
                  <div className="text-sm text-muted-foreground">Владелец загородного дома</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4 animate-on-scroll">Получить консультацию</h2>
          <p className="text-center text-muted-foreground mb-12 animate-on-scroll">
            Оставьте заявку и наш специалист свяжется с вами в течение 30 минут
          </p>
          <Card className="border-none shadow-lg animate-on-scroll">
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Телефон
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Комментарий
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о вашем объекте"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold text-primary">ВЕТЕР</div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 Ветер. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;