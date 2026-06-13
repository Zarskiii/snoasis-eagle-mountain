import { Badge } from "@/components/ui/badge";
import { addOns, flavors } from "@/lib/business";
import { IceCreamBowl, Snowflake } from "lucide-react";

const flavorStyles: Record<string, { backgroundColor: string; borderColor: string; color: string }> = {
  "Bahama Mama": { backgroundColor: "#fff0d9", borderColor: "#f59e0b", color: "#9a3412" },
  "Black Cherry": { backgroundColor: "#ffe3ef", borderColor: "#be123c", color: "#831843" },
  "Black Raspberry": { backgroundColor: "#ece7ff", borderColor: "#4c1d95", color: "#2e1065" },
  "Blue Hawaii": { backgroundColor: "#dff7ff", borderColor: "#0284c7", color: "#075985" },
  "Blue Raspberry": { backgroundColor: "#d9f2ff", borderColor: "#0ea5e9", color: "#075985" },
  Bubblegum: { backgroundColor: "#ffe4f3", borderColor: "#ec4899", color: "#9d174d" },
  Butterscotch: { backgroundColor: "#fff1c2", borderColor: "#d97706", color: "#7c2d12" },
  Caramel: { backgroundColor: "#f6dfbd", borderColor: "#b45309", color: "#78350f" },
  Cheesecake: { backgroundColor: "#fff7d6", borderColor: "#eab308", color: "#713f12" },
  Cherry: { backgroundColor: "#ffe1e7", borderColor: "#dc2626", color: "#991b1b" },
  Coconut: { backgroundColor: "#f8fafc", borderColor: "#cbd5e1", color: "#334155" },
  "Cotton Candy": { backgroundColor: "#e0fbff", borderColor: "#06b6d4", color: "#0e7490" },
  Grape: { backgroundColor: "#f0e7ff", borderColor: "#7c3aed", color: "#4c1d95" },
  "Green Apple": { backgroundColor: "#e8ffd8", borderColor: "#65a30d", color: "#365314" },
  "Hawaiian Punch": { backgroundColor: "#ffe4d6", borderColor: "#ef4444", color: "#991b1b" },
  Horchata: { backgroundColor: "#fff4df", borderColor: "#c08457", color: "#6f3f1d" },
  Kiwi: { backgroundColor: "#e6ffd9", borderColor: "#22c55e", color: "#14532d" },
  Lemon: { backgroundColor: "#fff9b8", borderColor: "#eab308", color: "#713f12" },
  Lime: { backgroundColor: "#dcffd8", borderColor: "#16a34a", color: "#14532d" },
  Mango: { backgroundColor: "#fff0c2", borderColor: "#f97316", color: "#9a3412" },
  "Maui Wowie": { backgroundColor: "#ffe4f1", borderColor: "#db2777", color: "#831843" },
  Orange: { backgroundColor: "#ffe7ca", borderColor: "#f97316", color: "#9a3412" },
  Peach: { backgroundColor: "#ffe4d6", borderColor: "#fb7185", color: "#9f1239" },
  "Pina Colada": { backgroundColor: "#fff8c7", borderColor: "#eab308", color: "#713f12" },
  Pineapple: { backgroundColor: "#fff7b8", borderColor: "#ca8a04", color: "#713f12" },
  "Pink Lemon Sour": { backgroundColor: "#ffe0ec", borderColor: "#f43f5e", color: "#9f1239" },
  Pomegranate: { backgroundColor: "#ffe0ec", borderColor: "#be123c", color: "#881337" },
  "Red Raspberry": { backgroundColor: "#ffe1e8", borderColor: "#e11d48", color: "#9f1239" },
  "Root Beer": { backgroundColor: "#ead7bf", borderColor: "#713f12", color: "#431407" },
  "Sour Cherry": { backgroundColor: "#ffdfe5", borderColor: "#dc2626", color: "#991b1b" },
  "Sour Grape": { backgroundColor: "#eee5ff", borderColor: "#6d28d9", color: "#4c1d95" },
  "Sour Green Apple": { backgroundColor: "#dfffce", borderColor: "#16a34a", color: "#14532d" },
  Strawberry: { backgroundColor: "#ffe3eb", borderColor: "#ef4444", color: "#991b1b" },
  "Tiger's Blood": { backgroundColor: "#ffe2df", borderColor: "#dc2626", color: "#7f1d1d" },
  Watermelon: { backgroundColor: "#e7ffd9", borderColor: "#ef4444", color: "#14532d" },
  "Wedding Cake": { backgroundColor: "#fff7dc", borderColor: "#d6a73d", color: "#713f12" },
};

const defaultFlavorStyle = { backgroundColor: "#eefaff", borderColor: "#38b9d1", color: "#073b4c" };

const addOnEffects: Record<string, { card: string; glow: string; accent: string }> = {
  Glacier: {
    card: "border-sky-200/40 bg-gradient-to-br from-sky-300/30 via-white/15 to-cyan-200/20",
    glow: "bg-sky-200/60",
    accent: "bg-sky-200",
  },
  "Sweet Milk": {
    card: "border-amber-100/50 bg-gradient-to-br from-amber-100/30 via-white/20 to-yellow-200/20",
    glow: "bg-yellow-100/70",
    accent: "bg-yellow-100",
  },
  Cream: {
    card: "border-stone-100/50 bg-gradient-to-br from-white/35 via-stone-100/20 to-slate-100/15",
    glow: "bg-white/80",
    accent: "bg-white",
  },
  "Ice Cream": {
    card: "border-pink-100/50 bg-gradient-to-br from-pink-100/30 via-white/20 to-sky-100/20",
    glow: "bg-pink-100/70",
    accent: "bg-pink-100",
  },
  "Puppy Cup": {
    card: "border-orange-100/50 bg-gradient-to-br from-orange-100/30 via-white/15 to-amber-200/20",
    glow: "bg-orange-100/70",
    accent: "bg-orange-100",
  },
  Water: {
    card: "border-blue-100/50 bg-gradient-to-br from-blue-100/35 via-cyan-100/20 to-white/10",
    glow: "bg-blue-100/70",
    accent: "bg-blue-100",
  },
  "Ice Cup": {
    card: "border-cyan-100/50 bg-gradient-to-br from-cyan-100/35 via-white/20 to-slate-100/15",
    glow: "bg-cyan-100/70",
    accent: "bg-cyan-100",
  },
};

const Menu = () => {
  return (
    <section id="menu" className="bg-gradient-to-b from-tiki-light to-white py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="mb-7 text-center">
          <h1 className="mb-3 text-3xl font-black text-tiki-dark md:text-5xl">
            Snoasis <span className="text-tiki-blue">Menu</span>
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-6 text-gray-700 md:text-base">
            Mix up to 3 flavors. Make it a Glacier with ice cream at the bottom plus sweet milk and/or heavy cream on top.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 bg-tiki-blue"></div>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 lg:grid-cols-[1.45fr_0.55fr]">
          <div className="rounded-lg bg-white p-4 shadow-lg md:p-5">
            <div className="mb-4 flex items-center gap-3">
              <Snowflake className="h-5 w-5 text-tiki-blue" />
              <h2 className="text-xl font-bold text-tiki-dark">Flavors</h2>
            </div>
            <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
              {flavors.map((flavor) => {
                const style = flavorStyles[flavor] ?? defaultFlavorStyle;

                return (
                  <Badge
                    key={flavor}
                    variant="outline"
                    style={style}
                    className="justify-center rounded-md px-2 py-1.5 text-center text-xs font-semibold shadow-sm transition-transform hover:-translate-y-0.5"
                  >
                    {flavor}
                  </Badge>
                );
              })}
            </div>
          </div>

          <div className="rounded-lg bg-tiki-dark p-4 text-white shadow-lg md:p-5">
            <div className="mb-4 flex items-center gap-3">
              <IceCreamBowl className="h-5 w-5 text-tiki-yellow" />
              <h2 className="text-xl font-bold">Add-ons</h2>
            </div>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
              {addOns.map((addOn) => {
                const effect = addOnEffects[addOn.name] ?? addOnEffects.Cream;
                const isGlacier = addOn.name === "Glacier";

                return (
                  <div
                    key={addOn.name}
                    className={`relative overflow-hidden rounded-lg border ${isGlacier ? "col-span-2 min-h-28 p-4 pr-32 sm:min-h-24 sm:pr-40 lg:col-span-1" : "p-2.5"} ${effect.card}`}
                  >
                    <div className={`absolute -right-8 -top-10 h-16 w-16 rounded-full blur-2xl ${effect.glow}`} />
                    {isGlacier && (
                      <div className="pointer-events-none absolute -right-3 top-4 rotate-3 rounded-md border border-white/80 bg-white/95 px-4 py-2 text-tiki-dark shadow-xl ring-1 ring-sky-100/80 sm:-right-2 sm:px-5">
                        <span className="block text-[0.55rem] font-black uppercase leading-none tracking-[0.14em] text-tiki-blue">
                          Make it a
                        </span>
                        <span className="mt-1 block text-sm font-black leading-none tracking-[0.08em] sm:text-base">
                          GLACIER!
                        </span>
                      </div>
                    )}
                    <div className="relative">
                      <div className={`mb-2 h-1 w-12 rounded-full ${effect.accent}`} />
                      <p className={`${isGlacier ? "text-base" : "text-sm"} font-bold`}>{addOn.name}</p>
                      <p className={`${isGlacier ? "max-w-2xl text-xs leading-5" : "text-[0.7rem] leading-4"} mt-1 text-white/80`}>
                        {addOn.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
