import { Box, Button, OutlinedInput, Typography } from "@mui/material";
import { useApp } from "../AppProvider";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { blue } from "@mui/material/colors";

export default function Login() {
    const {setAuth} = useApp();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: {errors}, } = useForm();

    const submitLogin = () => {
        setAuth(true);
        navigate("/");
    }

    return (
        <>
            <Box>
                <Typography variant="h3">
                    Login
                </Typography>

                <form onSubmit={handleSubmit(submitLogin)}>
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
                    <Button type="submit" fullWidth sx={{ backgroundColor: blue[600], mt: 2 }}>Log in</Button>
                </form>
            </Box>
        </>
    )
}