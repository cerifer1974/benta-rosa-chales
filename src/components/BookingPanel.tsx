import { useState, type FormEvent } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import type { DateRange } from "react-day-picker";
import { CalendarDays } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { BOOKING_URL } from "@/lib/site";

export function BookingPanel() {
  const [range, setRange] = useState<DateRange | undefined>();
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const url = new URL(BOOKING_URL);
    if (range?.from) url.searchParams.set("checkin", format(range.from, "yyyy-MM-dd"));
    if (range?.to) url.searchParams.set("checkout", format(range.to, "yyyy-MM-dd"));
    url.searchParams.set("adults", adults);
    url.searchParams.set("children", children);
    window.open(url.toString(), "_blank", "noopener,noreferrer");
  }

  const fmt = (d?: Date) => (d ? format(d, "dd MMM", { locale: ptBR }) : "Selecionar");

  return (
    <form onSubmit={handleSubmit} className="booking-panel" aria-label="Consultar disponibilidade">
      <p className="mb-4 font-serif text-lg">Consulte datas disponíveis</p>
      <Popover>
        <PopoverTrigger asChild>
          <button type="button" className="booking-field flex w-full items-center justify-between text-left">
            <span className="grid grid-cols-2 gap-6">
              <span><span className="booking-label">Entrada</span><span className="booking-value">{fmt(range?.from)}</span></span>
              <span><span className="booking-label">Saída</span><span className="booking-value">{fmt(range?.to)}</span></span>
            </span>
            <CalendarDays size={18} className="shrink-0 text-sand" aria-hidden />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto border-0 bg-paper p-0 text-araucaria" align="start">
          <Calendar
            mode="range"
            locale={ptBR}
            selected={range}
            onSelect={setRange}
            numberOfMonths={1}
            disabled={{ before: new Date() }}
            className="pointer-events-auto p-3"
          />
        </PopoverContent>
      </Popover>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <label className="booking-field">
          <span className="booking-label">Adultos</span>
          <select value={adults} onChange={(e) => setAdults(e.target.value)}>
            {[1, 2, 3, 4, 5, 6].map((v) => <option key={v} value={v}>{v}</option>)}
          </select>
        </label>
        <label className="booking-field">
          <span className="booking-label">Crianças</span>
          <select value={children} onChange={(e) => setChildren(e.target.value)}>
            {[0, 1, 2, 3, 4].map((v) => <option key={v} value={v}>{v}</option>)}
          </select>
        </label>
      </div>
      <button type="submit" className="button-primary mt-4 w-full">Consultar disponibilidade</button>
      <p className="mt-3 text-center text-[13px] leading-5 text-paper/85">Reserva direta no sistema oficial, em nova aba.</p>
    </form>
  );
}
