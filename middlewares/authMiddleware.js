import Users from "../modals/userModel.js";
import encrypt from 'encryptjs';



export const checksForRegister = async (req, res, next) => {   
    try {
        const { name, email, password} = req.body;
        if (!name) return res.send("Name is required! in middleware");
        if (!email) return res.send("email is requierd! in middleware");
        if (!password) return res.send("password is requierd! in middleware");
       
        if (password.length <= 8) {
            return res.send("User Password length is less than 8 !")
        }
        const response = await Users.find({ email: email }).exec();
        console.log(response, "response")
        if (response.length) {
            return res.send("Email is already Taken or You are already resgistered!!");
        }
        next();

    } catch (error) {
        return res.send(error)
    }
}


export const isUserValid = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email) return res.send("email is requierd! in middleware");
        if (!password) return res.send("password is requierd! in middleware");
        const user = await Users.find({ email }).exec();
        var secretkey = 'ios';
        // var plaintext = password;
        // var cipherText = encrypt.encrypt(user[0].password, secretkey, 256);
        var decipherPassword = encrypt.decrypt(user[0].password, secretkey, 256);
    
        if (decipherPassword == password) {
            next();
        } else {
            return res.send("Credentials not matched.")
        }

    } catch (error) {
        return res.send(error)
    }
}

