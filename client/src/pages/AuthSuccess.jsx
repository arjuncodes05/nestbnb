import { useEffect } from 'react'
import { useAppContext } from '../context/AppContext.jsx'

const AuthSuccess = () => {
    const {setUser} = useAppContext();
    const {BASE_URL, setToastInfo} = useAppContext();
    
    useEffect(() => {
        const handleAuth = async()=>{
            const params = new URLSearchParams(window.location.search)
            const accessToken = params.get("token")
            if(accessToken){
                localStorage.setItem("accessToken", accessToken)
                try {
                    const res = await fetch(`${BASE_URL}/auth/me`, {
                        headers: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    })
                    const response = await res.json()
                    
                    if(response.success){
                        setUser(response.user)
                        if (window.opener) { 
                            // this executes when we are on window, and new auth tab is opened
                            window.opener.postMessage({ type: "AUTH_SUCCESS" }, "*");
                            window.close();
                        } else {
                            // this executes when we are on mobile, and the auth happened on same tab-
                            window.location.href = "/";
                        }
                    }
                } catch (error) {
                    setToastInfo({
                        visible: true,
                        message: error.message,
                        type: error
                    })
                }
            }
        }
        handleAuth()
    }, [])
    
  return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md rounded-xl bg-white shadow-lg p-8 text-center">
            {/* Spinner */}
            <div className="flex justify-center mb-6">
                <div className="h-12 w-12 rounded-full border-4 border-gray-200 border-t-blue-600 animate-spin" />
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Logging you in
            </h2>

            {/* Subtitle */}
            <p className="text-sm text-gray-500">
                Please wait while we securely set up your account.
            </p>

            {/* Footer hint */}
            <p className="mt-6 text-xs text-gray-400">
                You’ll be redirected automatically
            </p>
            </div>
        </div>
  )
}

export default AuthSuccess