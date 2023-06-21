import Users from "../modals/userModel.js";
import encrypt from "encryptjs";
import axios from "axios";


export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        var secretkey = 'ios';
        var plaintext = password;
        var cipherText = encrypt.encrypt(plaintext, secretkey, 256);
    
        const user = new Users({
            name: name,
            email: email,
            password: cipherText
        });

        await user.save();
        return res.send("Resgistration Succesfull!")

    } catch (error) {
        return res.send(error)
    }
}

export const searchByLocation = async (req, res) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://airbnb13.p.rapidapi.com/search-location',
            params: {
              location: 'Paris',
              checkin: '2023-09-16',
              checkout: '2023-09-17',
              adults: '1',
              children: '0',
              infants: '0',
              pets: '0',
              page: '1',
              currency: 'USD'
            },
            headers: {
              'X-RapidAPI-Key': 'ae7574a49bmshcb17d6076f70148p140c73jsnce838e5b10ce',
              'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
            }
          };
          
          const response = await axios.request(options);
          console.log(response.data);
          return res.send(response.data);

    } catch (error) {
        return res.send(error)
    }
}

export const Calendar = async (req, res) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://airbnb13.p.rapidapi.com/calendar',
            params: {
              room_id: '18951965',
              currency: 'USD',
              year: '2023',
              month: '12',
              count: '1'
            },
            headers: {
              'X-RapidAPI-Key': 'ae7574a49bmshcb17d6076f70148p140c73jsnce838e5b10ce',
              'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
            }
          };
          
          
          const response = await axios.request(options);
          console.log(response.data);
          return res.send(response.data);

    } catch (error) {
        return res.send(error)
    }
}

export const findLocationsByQuery = async (req, res) => {
    try {
        const {city} = req.body;
        const options = {
            method: 'GET',
            url: 'https://airbnb13.p.rapidapi.com/autocomplete',
            params: {query: city},
            headers: {
              'X-RapidAPI-Key': 'ae7574a49bmshcb17d6076f70148p140c73jsnce838e5b10ce',
              'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
            }
          };
          
          const response = await axios.request(options);
          console.log(response.data);
          return res.send(response.data);

    } catch (error) {
        return res.send(error)
    }
}

export const searchByGEOCoordinates = async (req, res) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://airbnb13.p.rapidapi.com/search-geo',
            params: {
              ne_lat: '52.51',
              ne_lng: '13.41',
              sw_lat: '52.41',
              sw_lng: '13.31',
              checkin: '2023-09-15',
              checkout: '2023-09-16',
              adults: '1',
              children: '0',
              infants: '0',
              pets: '0',
              page: '1',
              currency: 'USD'
            },
            headers: {
              'X-RapidAPI-Key': 'ae7574a49bmshcb17d6076f70148p140c73jsnce838e5b10ce',
              'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
            }
          };
          
          const response = await axios.request(options);
          console.log(response.data);
          return res.send(response.data);

    } catch (error) {
        return res.send(error)
    }
}