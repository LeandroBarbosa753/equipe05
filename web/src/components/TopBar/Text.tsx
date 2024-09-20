import { TextProps } from "@/interface/textMenu"

function LogoText() {
    return (
        <h1 className='ml-[0.833rem] h-[1.6rem] text-[1.2rem] font-medium leading-[1.1rem] xL:w-[10.4rem] xl:h-[3.2rem] xl:text-[1.8rem] xl:leading-[3.2rem] xl:ml-[0.8rem] font-inter whitespace-nowrap'>Código Certo</h1>
    )
}

function TextLink({ text }: TextProps) {
    return (
        <p className='xl:w-full xl:h-[3.2rem] xl:text-[1.8rem] leading-[3.2rem] xl:whitespace-nowrap font-manrope font-medium'>{text}</p>
    )
}

export {
    LogoText,
    TextLink
}