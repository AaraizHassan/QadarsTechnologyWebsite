// import clsx from "clsx";
// import { BsFillCheckCircleFill } from "react-icons/bs";

// import { IPricing } from "@/types";

// interface Props {
//     tier: IPricing;
//     highlight?: boolean;
// }

// const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
//     const { name, price, features } = tier;

//     return (
//         <div className={clsx("w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 lg:max-w-full", { "shadow-lg": highlight })}>
//             <div className="p-6 border-b border-gray-200 rounded-t-xl">
//                 <h3 className="text-2xl font-semibold mb-4">{name}</h3>
//                 <p className="text-3xl md:text-5xl font-bold mb-6">
//                     <span className={clsx({ "text-secondary": highlight })}>
//                         {typeof price === 'number' ? `$${price}` : price}
//                     </span>
//                     {typeof price === 'number' && <span className="text-lg font-normal text-gray-600">/mo</span>}
//                 </p>
//                 <button className={clsx("w-full py-3 px-4 rounded-full transition-colors", { "bg-primary hover:bg-primary-accent": highlight, "bg-hero-background hover:bg-gray-200": !highlight })}>
//                     Get Started
//                 </button>
//             </div>
//             <div className="p-6 mt-1">
//                 <p className="font-bold mb-0">Stack Highlights:</p>
//                 {/* <p className="text-foreground-accent mb-5">Stack Highlights:</p> */}
//                 <ul className="space-y-4 mb-8">
//                     {features.map((feature, index) => (
//                         <li key={index} className="flex items-center">
//                             <BsFillCheckCircleFill className="h-5 w-5 text-secondary mr-2" />
//                             <span className="text-foreground-accent">{feature}</span>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default PricingColumn


import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IPricing } from "@/types";

interface Props {
    tier: IPricing & { deliverables?: string[] };
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { name, price, features, deliverables } = tier;

    return (
        <div
            className={clsx(
                "w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 lg:max-w-full",
                { "shadow-lg": highlight }
            )}
        >
            <div className="p-6 border-b border-gray-200 rounded-t-xl">
                <h3 className="text-2xl font-semibold mb-3">{name}</h3>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    {typeof price === "number" ? `$${price}` : price}
                </p>
            </div>

            <div className="p-6 mt-1">
                {/* Stack Highlights */}
                <p className="font-bold mb-2">Stack Highlights:</p>
                <ul className="space-y-2 mb-6">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                            <BsFillCheckCircleFill className="h-4 w-4 text-secondary mr-2" />
                            <span className="text-foreground-accent">{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* What We Deliver */}
                {deliverables && (
                    <>
                        <p className="font-bold mb-2">What We Deliver:</p>
                        <ul className="space-y-2">
                            {deliverables.map((item, idx) => (
                                <li key={idx} className="text-sm text-gray-700">
                                    ✔ {item}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};

export default PricingColumn;
