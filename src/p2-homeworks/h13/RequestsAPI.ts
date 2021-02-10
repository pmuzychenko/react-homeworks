import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/'
})

export let responseFromServer = ''

export const requestsAPI = {

    sendRequest(checkboxValue: boolean) {

        return instance.post(`auth/test`,{success: checkboxValue})

            .then(response => {
                console.log({...response})
                console.log(response.data.errorText)
                responseFromServer = response.data.errorText
            })

            .catch( error => {
                console.log({...error})
                console.log(error.response ? error.response.data.errorText : error.message)
                responseFromServer = error.response ? error.response.data.errorText : error.message
            })
    }
}