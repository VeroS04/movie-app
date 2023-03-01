import { useEffect, useContext } from 'react'
import { AuthContext } from '../../contexts/auth';
import { tokenGenerator } from "../../helpers/tokenGenerator";
import { servicesUser } from "../../services/users";
import { LoginForm, User } from "../../types"

const useMe = () => {

    const { me, setMe } = useContext(AuthContext)

    const login = async ({ email, pass }: LoginForm) => {

        const { id, name, lastname, password } = await servicesUser.getBy('email', email) as User;

        if(password === pass) {
            const token = tokenGenerator();

            servicesUser.update({ id, token })

            localStorage.setItem('token', token)

            setMe({ id, name, lastname, email })

        }else {
            console.log('login incorrecto');   
        }
    }

    const signup = (user: Omit<User, 'id'>) => {

    }

    const forgotPassword = () => {

    }

    const loginWithToken = async () => {
        const token = localStorage.getItem('token');

        if(token) {
            const { id, name, lastname, email} = await servicesUser.getBy('token', token) as User
            setMe({ id, name, lastname, email })
        }

        
    }

    const logout = () => {

    }

    return { me, login, signup, forgotPassword, logout}
}

export { useMe }