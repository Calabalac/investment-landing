"use client";

import { Container } from "@/components/ui/container";
import { CheckCircle2 } from "lucide-react";

export function DirectPurchaseSection() {
    return (
        <section className="py-24 bg-slate-900 text-white">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
                            Покупка напрямую от застройщика — ваше преимущество
                        </h2>
                        <p className="text-xl text-slate-400 mb-8 border-l-4 border-amber-500 pl-4">
                            Вы не переплачиваете и получаете первичную цену
                        </p>
                    </div>

                    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                        <ul className="space-y-4">
                            {[
                                "Без посредников",
                                "Без комиссии",
                                "Конфиденциально",
                                "Прямой контакт с застройщиком",
                                "Возможна рассрочка без удорожания",
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-4 text-lg">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
}
