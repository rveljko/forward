import Divider from '@dashboard-components/ui/divider'
import FormField from '@dashboard-components/ui/form-field'
import useOnClickOutside from '@hooks/use-on-click-outside'
import BentoCard from '@landing-page-components/ui/bento-card'
import { usePreferences } from '@services/contexts/preferences-context'
import Button from '@ui/button'
import { useState } from 'react'

export default function HelpCenterBentoCard() {
  const { getRemCornerRoundness } = usePreferences()
  const [isOpened, setIsOpened] = useState(false)
  const [message, setMessage] = useState('')

  const ref = useOnClickOutside<HTMLDivElement>(() => {
    if (!isOpened) return
    setMessage('')
    setIsOpened(false)
  })

  return (
    <BentoCard>
      <div className="relative size-full">
        <div
          className={`transition-opacity duration-300 ${isOpened ? 'max-md:opacity-0' : ''}`}
        >
          <BentoCard.Heading>Support When Needed</BentoCard.Heading>
          <BentoCard.Paragraph>
            Contact our help center for support with any questions or concerns
          </BentoCard.Paragraph>
        </div>
        <div
          ref={ref}
          onClick={() => {
            if (isOpened) return
            setIsOpened(true)
          }}
          style={{ borderRadius: getRemCornerRoundness() }}
          className={`border-section-outline absolute top-0 right-0 w-full border transition-all duration-300 max-md:left-0 md:max-w-81 ${isOpened ? 'rotate-0' : 'translate-y-1/2 rotate-4 md:translate-x-1/4 md:translate-y-1/4'}`}
        >
          <div className="p-4">
            <h4>Help Center</h4>
          </div>
          <Divider />
          <div className="p-4">
            <form
              className="flex flex-col"
              onSubmit={(e) => {
                e.preventDefault()
                setMessage('')
                setIsOpened(false)
              }}
            >
              <FormField className="[&_div]:max-w-none">
                <FormField.Label htmlFor="message">Message</FormField.Label>
                <FormField.Textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mb-2 aspect-auto h-28"
                />
              </FormField>
              <Button
                variant="primary"
                size="large"
                className="w-full"
                type="submit"
                disabled={!message}
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </BentoCard>
  )
}
