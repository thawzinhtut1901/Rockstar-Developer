import { Box, Button, OutlinedInput, Typography } from "@mui/material";
import { useApp } from "../AppProvider";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { blue } from "@mui/material/colors";

export default function Register() {
    const {setAuth} = useApp();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: {errors}, } = useForm();

    const submitRegister = () => {
        setAuth(true);
        navigate("/");
    }

    return (
        <>
            <Box>
                <Typography variant="h3">
                    Register
                </Typography>

                <form onSubmit={handleSubmit(submitRegister)}>
                    <OutlinedInput 
                        sx={{ mt: 2 }}
                        {...register("name", {required: true})}
                        fullWidth
                        placeholder="name"
                    />
                    {
                        errors.name && (
                            <Typography color="error">name is required</Typography>
                        )
                    }

                    <OutlinedInput 
                        sx={{ mt: 2 }}
                        {...register("username", {required: true})}
                        fullWidth
                        placeholder="username"
                    />
                    {
                        errors.username && (
                            <Typography color="error">username is required</Typography>
                        )
                    }

                    <OutlinedInput 
                        sx={{ mt: 2 }}
                        {...register("bio")}
                        fullWidth
                        placeholder="bio"
                    />

                    <OutlinedInput 
                        type="password"
                        {...register("password", {required: true})}
                        sx={{ mt: 2 }}
                        fullWidth
                        placeholder="Password"
                    />
                                        {
                        errors.username && (
                            <Typography color="error">password is required</Typography>
                        )
                    }
                    <Button type="submit" fullWidth sx={{ backgroundColor: blue[600], mt: 2 }}>Register</Button>
                </form>
            </Box>
        </>
    )
}