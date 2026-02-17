import Footer from '@/components/footer'

type LayoutPatternProps = React.ComponentPropsWithoutRef<'div'> & {
  children: React.ReactNode
}

export default function LayoutPattern({
  children,
  className,
  ...props
}: LayoutPatternProps) {
  return (
    <div className="mx-auto flex w-[calc(100%-(--spacing(8)))] max-w-335.5 grow pt-(--header-height)">
      <div className="min-w-25 border-l border-l-neutral-200 bg-[repeating-linear-gradient(-45deg,var(--color-neutral-200)_0,var(--color-neutral-200)_1px,transparent_0,transparent_50%)] bg-size-[--spacing(2.5)_--spacing(2.5)] bg-fixed max-md:hidden"></div>
      <div className="@container flex min-h-full w-full flex-col border-x border-x-neutral-200">
        <main className="divide-y divide-neutral-200 *:last:mb-6 *:last:border-b *:last:border-b-neutral-200 md:*:last:mb-8">
          {children}
        </main>
        <Footer />
      </div>
      <div className="min-w-25 border-r border-r-neutral-200 bg-[repeating-linear-gradient(45deg,var(--color-neutral-200)_0,var(--color-neutral-200)_1px,transparent_0,transparent_50%)] bg-size-[--spacing(2.5)_--spacing(2.5)] bg-fixed max-md:hidden"></div>
    </div>
  )
}
