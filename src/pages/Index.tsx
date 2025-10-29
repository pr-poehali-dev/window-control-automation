import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

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

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
        <nav className="container mx-auto px-6 py-5 flex justify-between items-center max-w-7xl">
          <div className="text-xl font-semibold tracking-tight">SmartWindow</div>
          <div className="hidden md:flex gap-10 text-sm">
            <a href="#how" className="hover:text-primary transition-colors">Как работает</a>
            <a href="#features" className="hover:text-primary transition-colors">Преимущества</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button size="sm" asChild>
            <a href="#contact">Оставить заявку</a>
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight">
              Умные окна для<br />
              <span className="text-primary font-normal">вашего комфорта</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Автоматическое управление открытием и закрытием окон на основе микроклимата. 
              Контролируйте через приложение или пульт.
            </p>
            <div className="pt-4">
              <Button size="lg" className="text-base px-8" asChild>
                <a href="#contact">Узнать стоимость</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-3">
              <div className="text-5xl font-light text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Автоматическая работа без вашего участия</div>
            </div>
            <div className="space-y-3">
              <div className="text-5xl font-light text-primary">40%</div>
              <div className="text-sm text-muted-foreground">Экономия на отоплении и кондиционировании</div>
            </div>
            <div className="space-y-3">
              <div className="text-5xl font-light text-primary">∞</div>
              <div className="text-sm text-muted-foreground">Бесконечная настройка сценариев</div>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-light text-center mb-20">Как это работает</h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                1
              </div>
              <h3 className="text-xl font-medium">Датчики анализируют</h3>
              <p className="text-muted-foreground leading-relaxed">
                Система постоянно отслеживает температуру, влажность и качество воздуха в помещении
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                2
              </div>
              <h3 className="text-xl font-medium">Система принимает решение</h3>
              <p className="text-muted-foreground leading-relaxed">
                На основе данных автоматически определяется необходимость открытия или закрытия окон
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                3
              </div>
              <h3 className="text-xl font-medium">Окна управляются</h3>
              <p className="text-muted-foreground leading-relaxed">
                Моторизованные приводы плавно открывают или закрывают окна для оптимального микроклимата
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-light text-center mb-20">Преимущества</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-8 space-y-4">
                <Icon name="Smartphone" size={32} className="text-primary" />
                <h3 className="text-2xl font-medium">Управление из приложения</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Полный контроль с вашего телефона: открывайте, закрывайте окна, настраивайте режимы и следите за микроклиматом из любой точки мира
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8 space-y-4">
                <Icon name="Radio" size={32} className="text-primary" />
                <h3 className="text-2xl font-medium">Беспроводной пульт</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Удобный пульт дистанционного управления с радиусом действия до 50 метров — управляйте окнами не вставая с дивана
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8 space-y-4">
                <Icon name="Gauge" size={32} className="text-primary" />
                <h3 className="text-2xl font-medium">Интеллектуальные датчики</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Высокоточные датчики мониторят температуру, влажность и качество воздуха в режиме реального времени
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8 space-y-4">
                <Icon name="Zap" size={32} className="text-primary" />
                <h3 className="text-2xl font-medium">Экономия энергии</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Оптимальная вентиляция сокращает расходы на отопление и кондиционирование до 40% в год
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8 space-y-4">
                <Icon name="Settings" size={32} className="text-primary" />
                <h3 className="text-2xl font-medium">Гибкие сценарии</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Создавайте автоматические режимы: утреннее проветривание, ночной режим, режим отсутствия и многое другое
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8 space-y-4">
                <Icon name="Shield" size={32} className="text-primary" />
                <h3 className="text-2xl font-medium">Защита от дождя</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Датчик дождя автоматически закроет окна при первых каплях — ваша мебель всегда в безопасности
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-light">Оставьте заявку</h2>
            <p className="text-muted-foreground">
              Получите бесплатную консультацию и расчет стоимости для вашего объекта
            </p>
          </div>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ваше имя</label>
                  <Input
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон</label>
                  <Input
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите о вашем объекте: количество окон, тип помещения"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xl font-semibold tracking-tight">SmartWindow</div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 SmartWindow. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
