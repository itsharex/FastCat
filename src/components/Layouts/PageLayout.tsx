import clsx from 'clsx'
import { Image } from '@nextui-org/image'

export interface PageLayoutProps {
    title : string,
    image? : string,
}

function ImageContainer({ image }: { image: string | undefined }) {
    return (
        <>
            {image && (
                <Image
                    removeWrapper={true}
                    className="absolute inset-0 w-full h-full -z-[0] overflow-hidden object-cover "
                    src={image}
                    alt="Background"
                />
            )}
        </>
    )
}

export function PageLayout({ props, children }: { props: PageLayoutProps, children: React.ReactNode }) {
    return (
        <div className="Page Layout flex flex-col">
            <header className="Page Header">
                <h1 className="font-sans text-3xl mt-4 ml-7">{props.title}</h1>
            </header>

            <div className={clsx('Page Main relative rounded-3xl ml-3 mt-1 w-[95%] h-[31.35rem]',
                !props.image && "bg-gradient-to-tr from-white to-zinc-100",
            )}>
                <ImageContainer image={props.image} />

                <div className="Content relative z-10">
                    {children}
                </div>
            </div>
        </div>
    )
}