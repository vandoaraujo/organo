import './Banner.css'
export const Banner = () => {
    return (
        //react permite uso de fragment, utilizar essa tag no caso de necessitar de mais de um componente html
        <>
        <header className="banner">
            <img src="/imagens/Banner.png" alt="O Banner principal da pagina do Organo" />
        </header>
        <h1 style={{textAlign: 'center'}}>Sistema de Cadastro</h1>
        </>
    )
}