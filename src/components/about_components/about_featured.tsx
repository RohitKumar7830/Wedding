import { NewspaperSection } from '@/components/NewsPaperSection'
import { Stories } from '@/components/stories'
import { AboutText } from '@/components/about_components/aboutText'
import { Team } from './team'

export const AboutFeatured = () => {
  return (
    <div className="container flex flex-col max-w-7xl w-full py-14">
      <NewspaperSection />

      <AboutText />

      <Team />

      <Stories />

    </div>
  )
}