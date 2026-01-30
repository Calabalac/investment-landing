"use client";

import { Container } from "@/components/ui/container";
import { TrendingUp, Building2, Lock, Globe, Briefcase } from "lucide-react";

const features = [
    {
        title: "Доходность 10–14% годовых",
        description: "Выше, чем у квартир и классической аренды, благодаря эффективной бизнес-модели.",
        icon: TrendingUp,
    },
    {
        title: "Профессиональное управление",
        description: "Вы не занимаетесь поиском жильцов и ремонтом — всё делает управляющая компания.",
        icon: Building2,
    },
    {
        title: "Гарантированные выплаты",
        description: "Условия и сроки выплат четко прописаны в официальном договоре.",
        icon: Lock,
    },
    {
        title: "Высокий туристический спрос",
        description: "Локация обеспечивает постоянный поток гостей круглый год.",
        icon: Globe,
    },
    {
        title: "Готовый бизнес",
        description: "Вы покупаете не просто квадратные метры, а работающий актив под ключ.",
        icon: Briefcase,
    },
];

export function WhyInvestSection() {
    return (
        <section className="py-24 bg-slate-50">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
                        Почему апарт-отель выгоднее квартиры и коммерции
                    </h2>
                    <p className="text-xl text-slate-600 font-medium">
                        Сегодня самая доходная и стабильная недвижимость — это апарт-отели
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                        >
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                                <feature.icon className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
