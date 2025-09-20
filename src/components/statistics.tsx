import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

export const StatisticsNumber = ({ children }: PropsWithChildren) => {
    return <p className="text-3xl text-right">{children}</p>;
};

export const StatisticsDescription = ({ children }: PropsWithChildren) => {
    return <p className="text-right">{children}</p>;
};

interface Props {
    src: string;
    alt: string;
    orientation: 'top' | 'bottom';
}

export const Statistics = ({
    src,
    alt,
    orientation,
    children,
}: PropsWithChildren<Props>) => {
    return (
        <div className="relative size-50 px-5 bg-white text-purple-900 font-bold text-right">
            <div
                className={cn(
                    'absolute aspect-square h-25',
                    orientation === 'top' ? 'top-[-30]' : 'bottom-[-50]',
                )}
            >
                <Image className="object-contain" src={src} alt={alt} fill />
            </div>
            <div className="h-full flex flex-col justify-center items-end">
                {children}
            </div>
            <div
                className={cn(
                    'z-25 w-10 h-16 absolute right-0 transform translate-x-2/2 bg-white clip-triangle',
                    orientation === 'top'
                        ? 'top-0 translate-y-1/4'
                        : 'bottom-0 -translate-y-1/4',
                )}
            ></div>
            <div
                className={cn(
                    'z-25 size-10 absolute left-1/2 transform -translate-x-1/2',
                    orientation === 'top'
                        ? 'bottom-[-35]'
                        : 'top-[-35] rotate-180',
                )}
            >
                <Image className="object-contain" src="/line.svg" alt="" fill />
            </div>
        </div>
    );
};
