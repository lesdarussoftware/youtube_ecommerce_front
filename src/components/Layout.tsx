import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Layout({ children }: { children: React.ReactNode }) {

    const navigate = useNavigate();

    const navItems = [
        { label: 'Inicio', pathname: '/', action: () => navigate('/') },
        { label: 'Productos', pathname: '/productos', action: () => navigate('/productos') },
        { label: 'Categorías', pathname: '/categorias', action: () => navigate('/categorias') }
    ];

    return (
        <Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: '#012561',
                color: '#FFF',
                padding: '10px',
                alignItems: 'center',
                borderRadius: 1
            }}>
                <Typography variant="h3">
                    Lesdarus Store
                </Typography>
                <List sx={{ display: 'flex' }}>
                    {navItems.map((item) => {
                        return (
                            <ListItem key={item.label} onClick={item.action} sx={{ cursor: 'pointer' }}>
                                <ListItemText primary={item.label.toUpperCase()} />
                            </ListItem>
                        )
                    })}
                </List>
            </Box>
            {children}
        </Box>
    )
}