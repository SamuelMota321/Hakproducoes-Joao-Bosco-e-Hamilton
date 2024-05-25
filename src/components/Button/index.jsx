export const Button = ({ text, ...rest }) => {
    const handleClick = () => {
        window.location.href ='https://www.bilheteriadigital.com/joao-bosco-amp-hamilton-de-holanda-eu-vou-pro-samba-29-de-junho'
        
    }

    return (
    <button {...rest} onClick={handleClick}>{text}</button>
)
}