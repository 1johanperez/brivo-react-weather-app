// import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Button } from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';

import { useNavigate } from 'react-router-dom';
const NavbarComponent = () => {
	const navigate = useNavigate();
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static' style={{ backgroundColor: '#26a7de' }}>
				<Toolbar>
					<IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						<Button color='inherit' onClick={() => navigate('/')}>
							Login
						</Button>
					</Typography>
					<div style={{ margin: 30 }} />
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						<Button color='inherit' onClick={() => navigate('/home')}>
							Home
						</Button>
					</Typography>
					<div style={{ margin: 30 }} />

					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						<Button color='inherit' onClick={() => navigate('/')}>
							Logout
						</Button>
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default NavbarComponent;
