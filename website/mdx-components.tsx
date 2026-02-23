import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
  h1: (props: React.ComponentPropsWithoutRef<'h1'>) => (
    <h1 className="text-xl font-medium text-neutral-900" {...props} />
  ),
  h2: (props: React.ComponentPropsWithoutRef<'h2'>) => (
    <h2 className="text-xl font-medium text-neutral-900" {...props} />
  ),
  p: (props: React.ComponentPropsWithoutRef<'p'>) => (
    <p className="text-sm text-pretty text-neutral-600" {...props} />
  ),
}

export function useMDXComponents(): MDXComponents {
  return components
}
