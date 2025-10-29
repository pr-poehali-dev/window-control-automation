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
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">SmartWindow</div>
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

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Умное управление<br />
                <span className="text-primary">микроклиматом</span>
              </h1>
              <p className="text-xl text-muted-foreground">
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
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/f08a5d91-180c-4e61-bf81-b88fdc10a515/files/a08e8e50-92f8-4928-a939-a88147070a89.jpg" 
                alt="SmartWindow система управления"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Преимущества системы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Icon name="Leaf" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Экономия энергии</h3>
                <p className="text-muted-foreground">
                  До 40% экономии на отоплении и кондиционировании благодаря оптимальной вентиляции
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Icon name="Heart" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Здоровый микроклимат</h3>
                <p className="text-muted-foreground">
                  Автоматический контроль CO₂, влажности и температуры для комфортного самочувствия
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
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
          <h2 className="text-4xl font-bold text-center mb-16">Возможности управления</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="flex gap-4 animate-fade-in">
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

            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
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

            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name="Gauge" size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Датчики микроклимата</h3>
                <p className="text-muted-foreground">
                  Мониторинг температуры, влажности, CO₂ и качества воздуха в реальном времени
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
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

            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
                <p className="text-muted-foreground">
                  Защита от взлома, датчики дождя и ветра, аварийное закрытие при непогоде
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name="Zap" size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Быстрая установка</h3>
                <p className="text-muted-foreground">
                  Монтаж системы занимает 1-2 дня без повреждения оконных конструкций
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg animate-fade-in">
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Установили систему в загородном доме. Теперь не беспокоюсь о проветривании - всё работает автоматически. Экономия на отоплении заметна уже первый месяц!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Александр М.</p>
                    <p className="text-sm text-muted-foreground">Московская область</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "У нас офис на солнечной стороне, летом было невыносимо жарко. SmartWindow решил проблему - окна открываются когда нужно, энергия на кондиционер сократилась вдвое."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Елена К.</p>
                    <p className="text-sm text-muted-foreground">Санкт-Петербург</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Отличное решение для квартиры! Управляю через приложение, даже когда на работе. Датчик дождя закрывает окна автоматически - больше не переживаю за мебель."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Дмитрий П.</p>
                    <p className="text-sm text-muted-foreground">Казань</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Получить консультацию</h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку и наш специалист свяжется с вами в течение 30 минут
            </p>
          </div>
          <Card className="border-none shadow-xl animate-scale-in">
            <CardContent className="pt-6">
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
                    Комментарий (необязательно)
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о вашем объекте и задачах..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary/30 py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-primary mb-4">SmartWindow</div>
              <p className="text-muted-foreground">
                Автоматизированные системы управления микроклиматом для вашего комфорта
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>+7 (495) 123-45-67</p>
                <p>info@smartwindow.ru</p>
                <p>Москва, ул. Примерная, 1</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб-Вс: 10:00 - 16:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>© 2024 SmartWindow. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
