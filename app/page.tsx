import { SiteNav } from '@/components/site/site-nav'
import { Hero } from '@/components/site/hero'
import { WhoWeAre } from '@/components/site/who-we-are'
import { ServiceSlides } from '@/components/site/service-slides'
import { PrintCampaigns } from '@/components/site/print-campaigns'
import { Work } from '@/components/site/work'
import { Testimonial } from '@/components/site/testimonial'
import { CtaFooter } from '@/components/site/cta-footer'

export default function Page() {
  return (
    <main className="bg-background">
      <SiteNav />
      <Hero />
      <WhoWeAre />
      <ServiceSlides />
      <PrintCampaigns />
      <Work />
      <Testimonial />
      <CtaFooter />
    </main>
  )
}
