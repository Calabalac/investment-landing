"use client";

import { Container } from "@/components/ui/container";
import { ShieldCheck, History, FileText } from "lucide-react";

export function DeveloperTrustSection() {
    return (
        <section className="py-24 bg-slate-50">
            <Container>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-12">
                        Застройщик
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-4 text-slate-700">
                                <FileText className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Официальные договоры</h3>
                            <p className="text-slate-600 text-sm">Полная юридическая прозрачность сделки</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-4 text-slate-700">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Реальные выплаты</h3>
                            <p className="text-slate-600 text-sm">Стабильные выплаты инвесторам согласно графику</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-4 text-slate-700">
                                <History className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Многолетний опыт</h3>
                            <p className="text-slate-600 text-sm">Успешная реализация проектов на рынке недвижимости</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 inline-block">
                        <p className="text-lg font-medium text-slate-800">
                            "Вы инвестируете не в обещания, а в уже работающую модель"
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
