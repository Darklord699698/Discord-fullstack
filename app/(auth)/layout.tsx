const AuthLayout = ({children}: {children:React.ReactNode} ) => {
    return ( 
        <div className="bg-cyan-400 h-full">
            {children}
        </div>
     );
}
 
export default AuthLayout;