"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { sendLeadEmail } from "@/app/actions";
import { Loader2 } from "lucide-react";

export function LeadForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setMessage(null);

        const formData = new FormData(event.currentTarget);

        try {
            const result = await sendLeadEmail(formData);
            setMessage(result.message);
            if (result.success) {
                (event.target as HTMLFormElement).reset();
            }
        } catch (error) {
            setMessage("Виникла помилка. Спробуйте ще раз.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="lead-form" className="container relative py-20 sm:py-32">
            <div className="mx-auto max-w-lg">
                <Card className="glass-card border-white/10 bg-black/40 backdrop-blur-xl">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-bold text-white sm:text-3xl">Цікавить інвестиція?</CardTitle>
                        <CardDescription className="text-slate-300">
                            Залиште контакти, і ми надішлемо вам детальну презентацію та розрахунок окупності.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-slate-200">Ім'я</Label>
                                <Input name="name" id="name" placeholder="Ваше ім'я" required className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-gold-500/50" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-slate-200">Телефон</Label>
                                <Input name="phone" id="phone" type="tel" placeholder="+380..." required className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-gold-500/50" />
                            </div>
                            <Button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-gold-500 to-amber-600 font-bold text-white hover:from-gold-600 hover:to-amber-700 h-12 text-lg">
                                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                                {isLoading ? "Відправка..." : "Отримати презентацію"}
                            </Button>
                            {message && (
                                <p className={`text-center text-sm mt-2 ${message.includes("успішно") ? "text-green-400" : "text-red-400"}`}>
                                    {message}
                                </p>
                            )}
                            <p className="text-xs text-center text-slate-500 mt-4">
                                Натискаючи кнопку, ви погоджуєтесь на обробку персональних даних.
                            </p>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
