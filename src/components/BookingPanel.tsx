import { useState, type FormEvent } from "react";

const BOOKING_URL = "https://hbook.hsystem.com.br/Booking?companyId=625b48acbf08c43c9390205e";

export function BookingPanel() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const url = new URL(BOOKING_URL);
    if (checkIn) url.searchParams.set("checkin", checkIn);
    if (checkOut) url.searchParams.set("checkout", checkOut);
    url.searchParams.set("adults", adults);
    url.searchParams.set("children", children);
    window.open(url.toString(), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="booking-panel">
      <div className="mb-5 flex items-center justify-between border-b border-fog/15 pb-3">
        <span className="font-serif text-[15px] italic">Disponibilidade</span>
        <span className="eyebrow text-sand">Motor oficial</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <label className="booking-field">
          <span>Entrada</span>
          <input aria-label="Data de entrada" type="date" value={checkIn} onChange={(event) => setCheckIn(event.target.value)} />
        </label>
        <label className="booking-field">
          <span>Saída</span>
          <input aria-label="Data de saída" type="date" min={checkIn} value={checkOut} onChange={(event) => setCheckOut(event.target.value)} />
        </label>
        <label className="booking-field">
          <span>Adultos</span>
          <select aria-label="Quantidade de adultos" value={adults} onChange={(event) => setAdults(event.target.value)}>
            {[1, 2, 3, 4, 5].map((value) => <option key={value} value={value}>{value}</option>)}
          </select>
        </label>
        <label className="booking-field">
          <span>Crianças</span>
          <select aria-label="Quantidade de crianças" value={children} onChange={(event) => setChildren(event.target.value)}>
            {[0, 1, 2, 3].map((value) => <option key={value} value={value}>{value}</option>)}
          </select>
        </label>
      </div>
      <button type="submit" className="button-primary mt-4 w-full">Consultar disponibilidade</button>
      <p className="mt-3 text-center text-[10px] uppercase tracking-[0.15em] text-paper/50">Você continuará no ambiente oficial de reservas</p>
    </form>
  );
}