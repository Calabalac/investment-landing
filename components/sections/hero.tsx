import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Send } from "lucide-react";

export function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 sm:pt-0">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-20 h-full w-full">
                <img
                    src="/img/1-.jpg"
                    alt="SADOA Apartments"
                    className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/60" />
            </div>

            {/* Content */}
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-card mx-auto max-w-4xl rounded-3xl border-white/10 bg-black/30 p-8 shadow-2xl backdrop-blur-md sm:p-12 text-center">
                    <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md">
                        <span className="mr-2 flex h-2 w-2 rounded-full bg-green-500"></span>
                        Старт продажу!
                    </div>

                    <h1 className="font-heading mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                        Інвестуйте в <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-amber-600">
                            SADOA
                        </span>
                    </h1>

                    <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200 sm:text-xl">
                        Апарт-готель з гарантованою прибутковістю <span className="font-bold text-white">10–14% річних</span>.
                        Ваша пасивна інвестиція в нерухомість.
                    </p>

                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="h-14 w-full rounded-2xl bg-gradient-to-r from-gold-500 to-amber-600 px-8 text-lg font-bold text-white shadow-lg shadow-amber-500/25 transition-all hover:scale-105 hover:from-gold-600 hover:to-amber-700 sm:w-auto"
                        >
                            <Link href="#lead-form">
                                Отримати розрахунок
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="glass-button h-14 w-full rounded-2xl border-white/20 px-8 text-lg font-medium text-white hover:bg-white/20 sm:w-auto"
                        >
                            <Link href="https://t.me/Andrei_21777" target="_blank">
                                <Send className="mr-2 h-5 w-5" />
                                Telegram
                            </Link>
                        </Button>
                    </div>

                    {/* Quick Stats */}
                    <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                        <div>
                            <div className="text-2xl font-bold text-white sm:text-3xl">12%</div>
                            <div className="text-xs text-slate-400 sm:text-sm">ROI</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white sm:text-3xl">$45k</div>
                            <div className="text-xs text-slate-400 sm:text-sm">Вхід від</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white sm:text-3xl">TOP</div>
                            <div className="text-xs text-slate-400 sm:text-sm">Локація</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
