import Markdown from 'react-markdown'

type MarkdownContentLoaderProps = {
  content: string
}

export default function MarkdownContentLoader({
  content,
}: MarkdownContentLoaderProps) {
  return (
    <Markdown
      components={{
        h1: ({ node, ...props }) => (
          <h1 className="mb-2 text-2xl font-medium md:text-3xl" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="mb-2 text-xl font-medium md:text-2xl" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="mb-2 text-lg font-medium md:text-xl" {...props} />
        ),
        h4: ({ node, ...props }) => (
          <h4 className="mb-2 text-base font-medium md:text-lg" {...props} />
        ),
        p: ({ node, ...props }) => <p className="mb-2" {...props} />,
        ul: ({ node, ...props }) => (
          <ul className="mb-2 ml-6 list-disc space-y-1.5" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="mb-2 ml-6 list-decimal space-y-1.5" {...props} />
        ),
        li: ({ node, ...props }) => (
          <li
            className="text-neutral-400 [&_strong]:text-neutral-200"
            {...props}
          />
        ),
      }}
    >
      {content}
    </Markdown>
  )
}
