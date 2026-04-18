import { FlowCdmxPage } from "@/lib/flow-cdmx-site";
import {
  artistsEs,
  causesEs,
  copyEs,
  partnersEs,
  possibleArtistsEs,
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
      possibleArtists={possibleArtistsEs}
      causes={causesEs}
      tickets={ticketsEs}
    />
  );
}
