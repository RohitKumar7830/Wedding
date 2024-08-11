import { NewspaperSection } from '../NewsPaperSection'
import { Stories } from '../stories'
import { AboutText } from './aboutText'
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