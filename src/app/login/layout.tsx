import React from 'react'
export const metadata = {
    title: 'Login Blog App ',
    description: 'Blogging Platform for Full Stack Devlopers',
}
const LoginLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-col h-[90vh]'>
            <div className='flex-grow'>
                {children}
            </div>
            <h1 className='text-center'>Footer</h1>
        </div>
    )
}

export default LoginLayout
