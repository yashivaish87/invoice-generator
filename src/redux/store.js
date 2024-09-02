import { configureStore } from '@reduxjs/toolkit'
import invoicesSlice from '../redux/invoiceSlice'

const store = configureStore({
    reducer: {
        invoices : invoicesSlice.reducer,
    }
})

export default store