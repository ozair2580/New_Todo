import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import usecustomApihook from '../Utils/usecustomApihook';

export const api = createAsyncThunk("counter", async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        return await res.json();
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
});

const initialState = {
    data: [],
    error: ""
}

export const deleteApi=createAsyncThunk(("deleteApi",async (id)=>{
 
 try {
    const res=await fetch(`https://fakestoreapi.com/products/${id}`,{
    method:'DELETE'
 })
 res=await res.json();
 console.log(res)
 return res;
 } catch (error) {
    throw new Error("delete api not work")
 }
}))

export const  SearchApi=createAsyncThunk("searchApi",async (data)=>{
   const res=await fetch(`https://fakestoreapi.com/products?sort=${data}`) 
   return await res.json();
})

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    extraReducers: (builder) => {
        
        builder
            .addCase(api.pending, (state) => {
                state.error = ""; // Reset error state
            })
            .addCase(api.fulfilled, (state, action) => {
                state.data = action.payload; // Update data state with fetched data
            })
            .addCase(api.rejected, (state, action) => {
                state.error = action.error.message; // Update error state if fetch failed
            })

            .addCase(deleteApi.fulfilled,(state,action)=>{
                console.log(action)
            return state.data=state.data.filter((item)=>item.id!==action.payload.id)
            })
           .addCase(deleteApi.rejected,(state,action)=>{
            state.error=action.payload
            })
           .addCase(SearchApi.fulfilled,(state,action)=>{
              state.data=action.payload
            });

    },
    reducers: {
        search: (state, action) => {
            const payload = action.payload.trim();
            if (payload.length > 0) {
                state.data.push(payload); // Push payload to data array
            }
        },
        // handledeletedata: (state, action) => {
        //     const { check, id } = action.payload;
        //     if (check) {
        //         state.data = state.data.filter((item) => item.id !== id); // Filter out item with matching id
        //     } else {
        //         state.error = "Please check input"; // Update error state
        //     }
        // },
        handleupdate: (state, action) => {
            const { id, search } = action.payload;
            state.data[id] = search; // Update data at specified index
        }
    }
});

export const { search, handleupdate } = counterSlice.actions;

export default counterSlice.reducer;
