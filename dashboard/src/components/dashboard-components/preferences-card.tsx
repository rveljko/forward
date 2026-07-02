type PreferencesCardProps = {
  name: string
  imageUrl: string
  isActive: boolean
}

export default function PreferencesCard({
  name,
  imageUrl,
  isActive,
}: PreferencesCardProps) {
  return (
    <article className="w-full max-w-max">
      <div
        className={`relative mb-1 size-full max-h-27 max-w-40 overflow-hidden rounded-md bg-neutral-100 after:pointer-events-none after:absolute after:inset-0 after:rounded-md after:inset-ring-2 ${isActive ? 'after:inset-ring-brand-500' : 'after:inset-ring-neutral-200'}`}
      >
        <img src={imageUrl} alt="" className="mt-2 ml-2 rounded-xs" />
      </div>
      <h3 className="text-left font-medium">{name}</h3>
    </article>
  )
}
