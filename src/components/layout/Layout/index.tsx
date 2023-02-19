import { FC, ReactNode } from "react"
import { Aside } from "../Aside"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { Main } from "../Main"


type Props = {
    children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {

    return (

        <>
            <Header />
            <div className="d-flex flex-grow-1">
                <Aside />
                <Main>
                    { children }
                </Main>
            </div>
            <Footer />
        </>
    )
}

export { Layout }