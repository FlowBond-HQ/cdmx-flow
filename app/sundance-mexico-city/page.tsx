import { FlowCdmxPage } from "@/lib/flow-cdmx-site";
import {
  artistsEn,
  causesEn,
  copyEn,
  partnersEn,
  teamEn,
  ticketsEn,
} from "@/lib/flow-cdmx-content";

export default function SundanceMexicoCityPage() {
  return (
    <FlowCdmxPage
      locale="en"
      copy={copyEn}
      partners={partnersEn}
      team={teamEn}
      artists={artistsEn}
      causes={causesEn}
      tickets={ticketsEn}
    />
  );
}
