"use client";

import { Container } from "@/components/ui/container";
import { Users, Hammer, Briefcase, PiggyBank } from "lucide-react";

const audiences = [
    {
        title: "Инвесторам",
        description: "Которые хотят пассивный доход без лишних забот и участия в операционных процессах.",
        icon: Users,
    },
    {
        title: "Уставшим от аренды",
        description: "Тем, кто устал от поиска арендаторов, ремонтов и бытовых проблем.",
        icon: Hammer,
    },
    {
        title: "Предпринимателям",
        description: "Ищущим стабильность и диверсификацию своего капитала в твердую валюту.",
        icon: Briefcase,
    },
    {
        title: "Сохранить капитал",
        description: "Тем, кто хочет сохранить и приумножить средства на долгий срок.",
        icon: PiggyBank,
    },
];

export function TargetAudienceSection() {
    return (
        <section className="py-24 bg-slate-50">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
                        Кому подойдёт апарт-отель
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {audiences.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 block h-full border border-slate-100"
                        >
                            <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                                <item.icon className="w-7 h-7 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 block">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed block">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
