import { ctaDetails } from "@/data/cta"

const CTA: React.FC = () => {
    return (
        <section id="cta" className="mt-10 mb-5 lg:my-20">
            <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
                <div className="h-full w-full">
                    {/* Background with blue gradient grid pattern */}
                    <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full 
                        bg-[#03122f] 
                        bg-[linear-gradient(to_right,#0a2a52_1px,transparent_1px),linear-gradient(to_bottom,#0a2a52_1px,transparent_1px)] 
                        bg-[size:6rem_4rem]">
                        <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 
                            bg-[radial-gradient(circle_600px_at_50%_500px,#004aad,transparent)]">
                        </div>
                    </div>

                    {/* Content */}
                    <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">
                            {ctaDetails.heading}
                        </h2>

                        <p className="mx-auto max-w-xl md:px-5 text-blue-100">
                            {ctaDetails.subheading}
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4">
                            {/* <button className="bg-[#004aad] hover:bg-[#0066cc] text-white font-semibold py-2 px-6 rounded-full transition duration-300">
                                Get Started
                            </button> */}
                            {/* Optional: Uncomment for app store buttons later */}
                            {/* <AppStoreButton /> */}
                            {/* <PlayStoreButton /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA
