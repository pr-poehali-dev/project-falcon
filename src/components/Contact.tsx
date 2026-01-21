import Icon from '@/components/ui/icon';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-card-foreground md:text-5xl">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-muted-foreground">
            Запишитесь на услугу или получите консультацию
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">Адрес</h3>
                <p className="text-muted-foreground">Москва, ул. Примерная, д. 1</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">Телефон</h3>
                <a href="tel:+79991234567" className="text-muted-foreground transition-colors hover:text-primary">
                  +7 (999) 123-45-67
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Icon name="Clock" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">Режим работы</h3>
                <p className="text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Icon name="Mail" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">Email</h3>
                <a href="mailto:info@autodetail.ru" className="text-muted-foreground transition-colors hover:text-primary">
                  info@autodetail.ru
                </a>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary/10 p-3 transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Telegram"
              >
                <Icon name="MessageCircle" size={24} />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary/10 p-3 transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="WhatsApp"
              >
                <Icon name="MessageSquare" size={24} />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary/10 p-3 transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Icon name="Instagram" size={24} />
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Иван Иванов"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-medium text-foreground">
                  Интересующая услуга
                </label>
                <select
                  id="service"
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option>Комплексная мойка</option>
                  <option>Детейлинг экстерьера</option>
                  <option>Химчистка салона</option>
                  <option>Керамическое покрытие</option>
                  <option>Полировка фар</option>
                  <option>Озонирование</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Комментарий
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Расскажите о вашем автомобиле и пожеланиях..."
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:bg-primary/90"
              >
                Отправить заявку
                <Icon name="Send" size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
