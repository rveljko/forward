import FormField from '@dashboard-components/ui/form-field'
import SendIcon from '@icons/send-icon'
import Button from '@ui/button'
import { useState } from 'react'

export default function ConnectWithUsSection() {
  const initialFormFieldValues = {
    subject: '',
    message: '',
  }

  const [formFieldValues, setFormFieldValues] = useState(initialFormFieldValues)

  const isButtonDisabled = !formFieldValues.subject || !formFieldValues.message

  return (
    <section>
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-16">
        <h3 className="w-full max-w-50">Connect With Us</h3>
        <form
          className="w-full max-w-75 space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            setFormFieldValues(initialFormFieldValues)
          }}
        >
          <FormField className="[&_div]:max-w-none">
            <FormField.Label htmlFor="subject">Subject</FormField.Label>
            <FormField.Input
              id="subject"
              placeholder="Error message while trying to..."
              value={formFieldValues.subject}
              onChange={(e) =>
                setFormFieldValues({
                  ...formFieldValues,
                  subject: e.target.value,
                })
              }
              className="max-w-none"
            />
          </FormField>
          <FormField className="[&_div]:max-w-none">
            <FormField.Label htmlFor="message">Message</FormField.Label>
            <FormField.Textarea
              id="message"
              placeholder="I encountered an error message while trying to..."
              value={formFieldValues.message}
              onChange={(e) =>
                setFormFieldValues({
                  ...formFieldValues,
                  message: e.target.value,
                })
              }
              className="w-full max-w-none"
            />
          </FormField>
          <Button
            variant="primary"
            size="large"
            leftIcon={<SendIcon />}
            className="w-full"
            type="submit"
            disabled={isButtonDisabled}
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}
