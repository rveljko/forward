import CategoryShowcase from '@/components/drafts/category-showcase'
import Badge from '@/components/ui/badge'
import Button from '@/components/ui/button'
import ArrowRightIcon from '@/icons/arrow-right-icon'
import Section from '@/sections/section'

export default function CategoriesSection() {
  return (
    <Section className="divide-y divide-neutral-200">
      <div className="flex flex-col gap-8 p-6 md:p-8">
        <div className="flex flex-col gap-2">
          <Badge color="green">Categories</Badge>
          <Section.Heading2>
            Organize every draft with <br />
            <span className="text-neutral-500">
              categories that match how you think
            </span>
          </Section.Heading2>
          <Section.Paragraph>
            Separate ideas, meetings, inspiration, and general notes so finding
            the right draft takes less time every single day
          </Section.Paragraph>
        </div>
        <Button
          href="https://dashboard-forward-demo-app.netlify.app/drafts"
          target="_blank"
          rel="noopener noreferrer"
          variant="link"
          rightIcon={<ArrowRightIcon />}
        >
          Explore Categories
        </Button>
      </div>
      <CategoryShowcase />
    </Section>
  )
}
