import BrandLinkedinIcon from '@icons/brand-linkedin-icon'
import BrandXIcon from '@icons/brand-x-icon'
import MailIcon from '@icons/mail-icon'
import Button from '@ui/button'

export default function SocialMediasSection() {
  return (
    <section>
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-16">
        <h2 className="w-full max-w-50">Social Medias</h2>
        <ul className="space-y-1">
          <li>
            <Button
              href=""
              variant="link"
              size="medium"
              leftIcon={<BrandLinkedinIcon />}
            >
              Forward
            </Button>
          </li>
          <li>
            <Button
              href=""
              variant="link"
              size="medium"
              leftIcon={<BrandXIcon />}
            >
              @forwardapp
            </Button>
          </li>
          <li>
            <Button
              href=""
              variant="link"
              size="medium"
              leftIcon={<MailIcon />}
            >
              hi@forward.app
            </Button>
          </li>
        </ul>
      </div>
    </section>
  )
}
