import { FlowCdmxPage } from "@/lib/flow-cdmx-site";
import {
  artistsEs,
  causesEs,
  copyEs,
  partnersEs,
  teamEs,
  ticketsEs,
} from "@/lib/flow-cdmx-content";

export default function Home() {
  return (
    <FlowCdmxPage
      locale="es"
      copy={copyEs}
      partners={partnersEs}
      team={teamEs}
      artists={artistsEs}
      causes={causesEs}
      tickets={ticketsEs}
      visualTheme="champagne"
    />
  );
}
