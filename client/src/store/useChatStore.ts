import { axiosInstance } from '@/lib/axios';
import {create} from 'zustand';

interface ChatStore {
    users: any[];
    fetchUser : () => Promise<void>;
    isLoading:boolean;
    error: string | null;
}

export const useChatStore = create<ChatStore>((set)=>({
    users:[],
    isLoading: false,
    error: null,

    fetchUser:async()=>{
set({isLoading:true, error:null})
try {
    const response = await axiosInstance.get("/users")
    set({users: response.data})
} catch (error:any) {
    set({error:error.response.data.message})
}  finally{
    set({isLoading:false})
}
}
}))

