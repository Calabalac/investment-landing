import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, ShieldCheck, MapPin, Wallet } from "lucide-react";

const features = [
    {
        icon: TrendingUp,
        title: "Висока дохідність",
        description: "Прогнозована річна дохідність від 10% до 14% у валюті при стабільному заповненні.",
    },
    {
        icon: ShieldCheck,
        title: "Безпечна інвестиція",
        description: "Нерухомість оформлюється у вашу повну власність. Усі документи перевірені юристами.",
    },
    {
        icon: MapPin,
        title: "Топова локація",
        description: "Розташування в туристичному центрі забезпечує постійний потік гостей цілий рік.",
    },
    {
        icon: Wallet,
        title: "Пасивний дохід",
        description: "Керуюча компанія бере на себе всі турботи: від пошуку гостей до прибирання.",
    },
];

export function WhyInvest() {
    return (
        <section className="container relative py-20 sm:py-32">
            <div className="mb-16 text-center">
                <h2 className="font-heading mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                    Чому варто інвестувати?
                </h2>
                <p className="mx-auto max-w-2xl text-slate-400">
                    Ми пропонуємо не просто квадратні метри, а готовий бізнес-інструмент, що працює на вас.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                    <Card key={index} className="glass-card border-white/5 bg-white/5 transition-all hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl hover:shadow-primary/5">
                        <CardHeader>
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-500 to-amber-600 text-white shadow-lg shadow-amber-500/20">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-slate-400">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
