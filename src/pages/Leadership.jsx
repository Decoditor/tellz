import { LeadershipFounders } from "@/components/sections/leadership/LeadershipFounders"
import { LeadershipHero } from "@/components/sections/leadership/LeadershipHero"
import { LeadershipPageCTA } from "@/components/sections/leadership/LeadershipPageCTA"
import { LeadershipValues } from "@/components/sections/leadership/LeadershipValues"
import { LeadershipVision } from "@/components/sections/leadership/LeadershipVision"

export default function Leadership() {
  return (
    <>
      <LeadershipHero />
      <LeadershipFounders />
      <LeadershipValues />
      <LeadershipVision />
      <LeadershipPageCTA />
    </>
  )
}
