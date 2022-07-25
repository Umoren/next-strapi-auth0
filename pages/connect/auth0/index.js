import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const backendUrl = "http://localhost:1337"
const Index = () => {
    const [text, setText] = useState('Loading...');
    const router = useRouter();
    const token = String(router.query.access_token)

    useEffect(() => {

        fetch(`${backendUrl}/api/auth/auth0/callback?access_token=${token}`)
            .then(res => res.json())
            .then(res => {
                localStorage.setItem('jwt', res.jwt);
                localStorage.setItem('username', res.user.username);

                setText('You have been successfully logged in. You will be redirected in a few seconds...');
                router.push('/')
            })
            .catch(err => {
                console.log(err);
                setText('An error occurred, please see the developer console.')
            });
    }, [token]);

    return <p>{text}</p>
};

export default Index;
