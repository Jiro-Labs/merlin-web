import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
    return (
        <div className="pt-14 sm:pt-16 md:pt-18 lg:pt-20">
            <div className="mx-5">
                <div className="space-y-5 max-w-4xl mx-auto my-40 text-white text-center">
                    <p className="text-5xl bold">Get in touch with us!</p>
                    <p className="text-xl">
                        If You Have Any Ideas, Please Fill Out The Form Below
                        And Our Consultants Will Get In Touch With You Shortly.
                    </p>
                </div>
            </div>
            <div className="text-white max-w-2xl mx-auto my-10 px-5 space-y-5">
                <Input
                    className="p-5 focus:border-violet-600 border-gray-500 hover:border-violet-600"
                    placeholder="Your name"
                />
                <Input
                    className="p-5 focus:border-violet-600 border-gray-500 hover:border-violet-600"
                    placeholder="example@gmail.com"
                    type="email"
                />
                <Input
                    className="p-5 focus:border-violet-600 border-gray-500 hover:border-violet-600"
                    placeholder="Your phone number"
                    type="tel"
                />
                <Textarea
                    className="p-5 focus:border-violet-600 border-gray-500 hover:border-violet-600"
                    placeholder="Fill your text here_____"
                    rows={15}
                />
                <div className="w-full">
                    <Button
                        className="
                        block mx-auto px-6 py-2.5 bg-gradient-to-r from-violet-500 to-purple-600
                        hover:from-violet-600 hover:to-purple-700 
                        rounded-full transition-all duration-300 ease-in-out
                        transform hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25
                        focus:outline-none focus:ring-2 focus:ring-violet-500/50
                        text-sm font-medium"
                    >
                        Connect via Email
                    </Button>
                </div>
            </div>
        </div>
    );
}
