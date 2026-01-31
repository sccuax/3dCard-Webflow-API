import { CardBody, CardContainer, CardItem } from "./ThreeDCard";

export function ThreeDCardDemo() {
    return (
        <CardContainer className="flex items-center justify-center 
        relative transition-all duration-200 ease-linear">
            <CardBody className="bg-gray-50 relative dark:hover:shadow-2xl 
            dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2]
            border-black/[0.1] w-full h-auto rounded-xl p-6 border gap-8 flex flex-col">
                
                <CardItem
                    translateZ="50"
                    heading="Make things float in air"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                />
                
                <CardItem
                    translateZ="60"
                    text="Hover over this card to unleash the power of CSS perspective"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                />
                
                <CardItem 
                    translateZ="100" 
                    imagen="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3"
                    className="h-60 w-full mt-4 object-cover rounded-xl group-hover/card:shadow-xl"
                />
                
                <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        <a href="https://twitter.com/mannupaaji" target="_blank">
                            Try now →
                        </a>
                    </CardItem>
                    
                    <CardItem
                        translateZ={20}
                        textButton="Sign up"
                        className="px-4 py-2 border-solid border-2 
                        border-gray-400 rounded-xl bg-blue-900
                        text-white text-xs font-bold active:scale-95"
                    />
                </div>
            </CardBody>
        </CardContainer>
    );
}

export default ThreeDCardDemo;