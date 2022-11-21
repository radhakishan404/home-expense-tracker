import axios from 'axios';

export const readExpenses = async () => {
    try {
        const response = await axios.get("http://localhost:3000/expenses");
        return response.data;
    } catch (error) {
        console.log(error, "error at readExpenses");
        return false;
    }
}

export const createExpenses = async (payload) => {
    try {
        const response = await axios.post("http://localhost:3000/expenses", payload);
        return response.data;
    } catch (error) {
        console.log(error, "error at createExpenses");
        return false;
    }
}

export const deleteExpenses = async (payload, id) => {
    try {
        const response = await axios.put("http://localhost:3000/expenses/" + id, payload);
        return response.data;
    } catch (error) {
        console.log(error, "error at deleteExpenses");
        return false;
    }
}