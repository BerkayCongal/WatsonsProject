import { supabase } from "./main"

export  const auth = async () => {
    const { data, error } = await supabase.auth.getUserIdentities()
    if(error || data === null) return null 
    location.href = "/"
    return data
} 

export  const isSign = async () => {
    const { data, error } = await supabase.auth.getUserIdentities()
    if(error || data === null) return null 
    return data
} 