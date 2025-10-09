'use client';
import React, { useState } from "react";
import PricingColumn from "./PricingColumn";
import { tiers } from "@/data/pricing";

const Pricing: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {tiers.map((tier, index) => (
        <PricingColumn
          key={tier.name}
          tier={tier}
          highlight={index === 1}
          expanded={activeIndex === index}
          onToggle={() =>
            setActiveIndex(activeIndex === index ? null : index)
          }
        />
      ))}
    </div>
  );
};

export default Pricing;
