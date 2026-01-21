import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Droplets',
    title: 'Комплексная мойка',
    description: 'Тщательная мойка кузова, дисков и стёкол с использованием профессиональной химии',
    price: 'от 1500 ₽',
  },
  {
    icon: 'Sparkles',
    title: 'Детейлинг экстерьера',
    description: 'Полировка кузова, восстановление блеска ЛКП, защитные покрытия',
    price: 'от 8000 ₽',
  },
  {
    icon: 'Wind',
    title: 'Химчистка салона',
    description: 'Глубокая очистка сидений, потолка, ковриков и пластиковых элементов',
    price: 'от 3500 ₽',
  },
  {
    icon: 'Shield',
    title: 'Керамическое покрытие',
    description: 'Нанесение защитного керамического состава на срок до 3 лет',
    price: 'от 15000 ₽',
  },
  {
    icon: 'Car',
    title: 'Полировка фар',
    description: 'Восстановление прозрачности и защита оптики автомобиля',
    price: 'от 2000 ₽',
  },
  {
    icon: 'Snowflake',
    title: 'Озонирование',
    description: 'Устранение неприятных запахов и антибактериальная обработка салона',
    price: 'от 1000 ₽',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground">
            Полный спектр услуг по уходу за вашим автомобилем
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="mb-6 inline-flex rounded-full bg-primary/10 p-4">
                <Icon name={service.icon} size={32} className="text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="mb-4 text-muted-foreground">
                {service.description}
              </p>
              <p className="text-xl font-bold text-primary">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
