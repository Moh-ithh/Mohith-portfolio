import * as React from "react";
import { DomainCard } from "./domain-card";
import { domainsConfig } from "@/config/domains";

export function DomainGrid() {
  const featuredDomains = [...domainsConfig]
    .filter((domain) => domain.featured)
    .sort((a, b) => a.order - b.order);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {featuredDomains.map((domain) => (
        <DomainCard key={domain.id} domain={domain} />
      ))}
    </div>
  );
}
