import LogoImage from "../Images/Logo.png"
export default function Logo({height,width}){
    return(
        <>
        <img src={LogoImage} alt="Logo" height={height} width={width}/>
        </>
    )
}