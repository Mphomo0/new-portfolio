import HeroSection from '@/components/Homepage/HeroSection'
import AboutSection from '@/components/Homepage/AboutSection'
import EducationSection from '@/components/Homepage/EducationSection'
import Experience from '@/components/Homepage/Experience'
import SkillsSection from '@/components/Homepage/SkillsSection'
import ProjectSection from '@/components/Homepage/ProjectSection'
import ContactSection from '@/components/Homepage/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <SkillsSection />
      <EducationSection />
      <ProjectSection />
      <ContactSection />
    </>
  )
}
