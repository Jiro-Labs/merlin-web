import { Hexagon } from "@/components/hexagon";

export default function About() {
    return (
        <div className="space-y-20 pt-14 sm:pt-16 md:pt-18 lg:pt-20">
            <div className="mx-5 mt-40">
                <div className="space-y-5 max-w-3xl mx-auto text-white text-center">
                    <p className="text-5xl bold">About Merlin Labs</p>
                    <p className="text-xl">
                        Merlin Labs specializes in developing IT solutions and
                        comprehensive digital marketing strategies specifically
                        designed for the Web3 ecosystem.
                    </p>
                </div>
            </div>
            <div className="max-w-2xl w-full relative mx-auto">
                {/* biome-ignore lint/performance/noImgElement: use img instead of Image for responsive image */}
                <img className="mx-auto" src="/about.svg" alt="reason" />
            </div>
            <div className="space-y-15 text-white max-w-2xl mx-auto my-10 px-5 space-y-5">
                <div className="grid grid-cols-[auto_auto] gap-10">
                    <div className="w-[96px] h-fit relative">
                        <Hexagon fill="#6A2CE0" />
                        <p className="text-2xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                            01
                        </p>
                    </div>
                    <div>
                        <p className="text-2xl bold text-violet-700">VISION</p>
                        <p>
                            To be the core driving force and premier growth
                            partner architecting the success of groundbreaking
                            projects in the global Web3 ecosystem.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-[auto_auto] gap-10">
                    <div className="w-[96px] h-fit relative">
                        <Hexagon fill="#4B11BF" />
                        <p className="text-2xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                            02
                        </p>
                    </div>
                    <div>
                        <p className="text-2xl bold text-violet-800">MISSION</p>
                        <p>
                            To provide comprehensive growth solutions for Web3
                            projects, combining technology, marketing, and a
                            powerful network to ensure partner success.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-[auto_auto] gap-10">
                    <div className="w-[96px] h-fit relative">
                        <Hexagon fill="#390A93" />
                        <p className="text-2xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                            03
                        </p>
                    </div>
                    <div>
                        <p className="text-2xl bold text-violet-900">VISION</p>
                        <ul className="px-6 list-disc space-y-3 my-3">
                            <li>
                                Proven Solutions: Delivering full-stack growth
                                solutions with a strong track record.
                            </li>
                            <li>
                                Powerful Network: Leveraging an extensive
                                network of VCs and KOLs to amplify impact.
                            </li>
                            <li>
                                Strategic Partnership: Our clients' success is
                                our ultimate metric.
                            </li>
                            <li>
                                Deep Expertise: An experienced team mastering
                                the Web3 landscape.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
