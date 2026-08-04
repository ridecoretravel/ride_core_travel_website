export const AIRPORTS = [
  'Leeds Bradford Airport (LBA)',
  'Manchester Airport',
  'Liverpool Airport',
  'London Heathrow',
  'London Gatwick',
  'Birmingham Airport',
  'Edinburgh Airport',
  'Bristol Airport',
  'Other destination',
]

export const inputClass =
  'w-full bg-graphite border border-white/10 text-cream text-sm px-4 py-3.5 rounded-sm placeholder:text-grey/50 focus:outline-none focus:border-gold/50 focus:bg-white/3 transition-all [color-scheme:dark]'

export const selectClass =
  'w-full appearance-none bg-graphite border border-white/10 text-cream text-sm px-4 py-3.5 rounded-sm focus:outline-none focus:border-gold/50 focus:bg-white/3 transition-all pr-9 [&>option]:bg-charcoal'

export function FieldLabel({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <label className="flex items-center gap-2 text-grey text-[10px] font-semibold tracking-widest uppercase">
      <span className="text-gold">{icon}</span>
      {children}
    </label>
  )
}

export function PremiumInput({
  label, icon, name, type, placeholder, value, onChange, required, min,
}: {
  label: string; icon: React.ReactNode; name: string; type: string;
  placeholder?: string; value: string; onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean; min?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <FieldLabel icon={icon}>{label}</FieldLabel>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        min={min}
        className={inputClass}
      />
    </div>
  )
}

export function PremiumSelect({
  label, icon, name, value, onChange, required, placeholder, options,
}: {
  label: string; icon: React.ReactNode; name: string; value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>; required?: boolean;
  placeholder: string; options: string[];
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <FieldLabel icon={icon}>{label}</FieldLabel>
      <div className="relative">
        <select name={name} value={value} onChange={onChange} required={required} className={selectClass}>
          <option value="">{placeholder}</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <DropdownArrow />
      </div>
    </div>
  )
}

export function PassengersField({ value, onChange }: { value: string; onChange: (n: string) => void }) {
  return (
    <div className="flex flex-col gap-1.5 sm:col-span-2">
      <FieldLabel icon={<UserIcon />}>Passengers</FieldLabel>
      <div className="flex gap-1.5">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(String(n))}
            className={`flex-1 py-3 text-sm font-semibold rounded-sm border transition-all ${
              value === String(n)
                ? 'bg-gold text-charcoal border-gold'
                : 'bg-graphite border-white/10 text-grey hover:border-gold/30 hover:text-cream'
            }`}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  )
}

export function ReturnJourneyToggle({ checked, onToggle }: { checked: boolean; onToggle: () => void }) {
  return (
    <div className="sm:col-span-2">
      <label className="flex items-center gap-3 cursor-pointer select-none group">
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          onClick={onToggle}
          className={`relative w-10 h-5 rounded-full border transition-all duration-200 flex-shrink-0 ${
            checked ? 'bg-gold border-gold' : 'bg-white/8 border-white/15'
          }`}
        >
          <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${checked ? 'translate-x-5' : ''}`} />
        </button>
        <span className="text-cream/80 text-sm font-medium">Add return journey</span>
        {checked && (
          <span className="text-gold text-xs font-semibold tracking-wide ml-auto">Return details below ↓</span>
        )}
      </label>
    </div>
  )
}

export function DropdownArrow() {
  return (
    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-grey">
      <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </span>
  )
}

export function CheckIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}
export function SpinnerIcon() {
  return (
    <svg className="animate-spin" width="16" height="16" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
  )
}
export function LocIcon() { return <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg> }
export function LuggageIcon() { return <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" /></svg> }
export function StopsIcon() { return <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-6m0 0V3m0 12H6m6 0h6" /></svg> }
export function PlaneIcon() { return <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15L12 12m0 0l9.75-3M12 12V2.25M12 12l-3 8.25 3-1.5 3 1.5L12 12z" /></svg> }
export function DestIcon() { return <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg> }
export function CalIcon() { return <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg> }
export function TimeIcon() { return <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> }
export function UserIcon() { return <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" /></svg> }
export function MailIcon() { return <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg> }
export function PhoneIcon() { return <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg> }
export function WAIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg> }
