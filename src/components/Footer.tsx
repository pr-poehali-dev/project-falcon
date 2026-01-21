export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-muted-foreground">
            © 2024 Автомойка и детейлинг. Все права защищены.
          </p>
          <div className="flex gap-6 text-muted-foreground">
            <a href="#services" className="transition-colors hover:text-primary">
              Услуги
            </a>
            <a href="#contact" className="transition-colors hover:text-primary">
              Контакты
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
