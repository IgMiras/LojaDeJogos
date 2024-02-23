import { useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '@/constants';

const useTokenVerification = (router) => {
	useEffect(() => {
		const verificarToken = async () => {
			const token = localStorage.getItem('token');
			if (token) {
				const config = {
					headers: {
						'x-auth-token': token,
					},
				};

				try {
					const response = await axios.post(
						`${API_URL}/auth/verify`,
						null,
						config
					);

					if (response.status === 200) {
						axios.defaults.headers.common['x-auth-token'] = token;
						router.push('/home');
					}
				} catch (error) {
					localStorage.removeItem('token');
					router.push('/');
					console.error('Erro ao verificar o token:', error);
				}
			} else {
				delete axios.defaults.headers.common['x-auth-token'];
				router.push('/');
			}
		};

		verificarToken();
	}, []);
};

export default useTokenVerification;
