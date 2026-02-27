import config from '../config/config';

// API Configuration
const API_BASE_URL = config.API_BASE_URL;

// Clear corrupted data on load
const clearCorruptedData = () => {
    const user = localStorage.getItem(config.USER_KEY);
    const token = localStorage.getItem(config.TOKEN_KEY);
    
    if (user === 'undefined' || user === null) {
        localStorage.removeItem(config.USER_KEY);
    }
    if (token === 'undefined' || token === null) {
        localStorage.removeItem(config.TOKEN_KEY);
    }
};

// Clear corrupted data immediately
clearCorruptedData();
const setToken = (token) => {
    localStorage.setItem(config.TOKEN_KEY, token);
};

const getToken = () => {
    const token = localStorage.getItem(config.TOKEN_KEY);
    console.log("🔍 AuthService getToken - Raw token:", token);
    console.log("🔍 AuthService getToken - Token length:", token?.length || 0);
    console.log("🔍 AuthService getToken - Token type:", typeof token);
    return token;
};

const removeToken = () => {
    localStorage.removeItem(config.TOKEN_KEY);
};

// Store user data in localStorage
const setUser = (user) => {
    console.log('🔍 AuthService setUser - Storing user:', user);
    localStorage.setItem(config.USER_KEY, JSON.stringify(user));
};

const getUser = () => {
    const user = localStorage.getItem(config.USER_KEY);
    try {
        return user && user !== 'undefined' ? JSON.parse(user) : null;
    } catch (error) {
        console.error('🔍 getUser JSON parse error:', error, 'user:', user);
        localStorage.removeItem(config.USER_KEY); // Clear corrupted data
        return null;
    }
};

const removeUser = () => {
    localStorage.removeItem(config.USER_KEY);
};

// Check if user is logged in
const isLoggedIn = () => {
    const token = getToken();
    const user = getUser();
    return !!(token && user);
};

// Get stored user data
const getStoredUser = () => {
    return getUser();
};

// Login function
const login = async (username, password) => {
    try {
        console.log('🔍 AuthService login attempt:', { username, passwordLength: password?.length });
        console.log('🔍 API_BASE_URL:', API_BASE_URL);
        
        // Single auth endpoint - backend allows all roles now
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        });

        console.log('🔍 Response status:', response.status);
        const data = await response.json();
        console.log('🔍 Response data:', data);

        if (response.ok) {
            console.log('🔍 Login successful');
            
            const token = data.token || data.data?.token;
            const user = data.user || data.data?.user;
            
            console.log('🔍 Final token:', token);
            console.log('🔍 Final user:', user);
            console.log('🔍 User role:', user?.role);
            
            // Store user with profile image
            const userWithProfile = {
                ...user,
                profile: {
                    ...user?.profile,
                    profileImage: user?.profile?.profileImage || "https://picsum.photos/seed/user123/80/80.jpg"
                }
            };
            
            setToken(token);
            setUser(userWithProfile);
            return { success: true, data };
        } else {
            console.log('🔍 Error response:', data);
            return { success: false, error: data.message || 'Login failed' };
        }
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, error: 'Network error. Please try again.' };
    }
};

// Register function
const register = async (userData) => {
    try {
        console.log('🔍 AuthService register attempt:', userData);
        console.log('🔍 API_BASE_URL:', API_BASE_URL);
        
        // Single register endpoint
        const response = await fetch(`${API_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });

        console.log('🔍 Register response status:', response.status);
        const data = await response.json();
        console.log('🔍 Register response data:', data);

        if (response.ok) {
            console.log('🔍 Register successful');
            
            const token = data.token || data.data?.token;
            const user = data.user || data.data?.user || data.data?.data?.user;
            
            console.log('🔍 Register token:', token);
            console.log('🔍 Register user:', user);
            console.log('🔍 Register user role:', user?.role);
            
            if (token && user) {
                const userWithProfile = {
                    ...user,
                    profile: {
                        ...user?.profile,
                        profileImage: user?.profile?.profileImage || "https://picsum.photos/seed/user123/80/80.jpg"
                    }
                };
                setToken(token);
                setUser(userWithProfile);
            }
            
            return { success: true, data };
        } else {
            console.log('🔍 Register error response:', data);
            return { success: false, error: data.message || 'Registration failed' };
        }
    } catch (error) {
        console.error('Registration error:', error);
        return { success: false, error: 'Network error. Please try again.' };
    }
};

// Logout function
const logout = () => {
    removeToken();
    removeUser();
    // Use React Router navigation instead of window.location
    return { success: true, message: 'Logged out successfully' };
};

// Update profile function
const updateProfile = async (profileData) => {
    try {
        const token = getToken();
        if (!token) {
            return { success: false, message: 'No authentication token found' };
        }

        console.log('🔍 Sending profile data:', profileData);

        const response = await fetch(`${API_BASE_URL}/users/profile`, {
            method: 'PUT',
            headers: getAuthHeaders(),
            body: JSON.stringify(profileData)
        });

        console.log('🔍 Response status:', response.status);
        console.log('🔍 Response headers:', response.headers);

        const responseText = await response.text();
        console.log('🔍 Response text:', responseText);

        let data;
        try {
            data = JSON.parse(responseText);
        } catch (parseError) {
            console.error('🔍 JSON Parse Error:', parseError);
            return { success: false, message: 'Invalid server response' };
        }

        if (response.ok) {
            // Update stored user data
            const updatedUser = { ...getStoredUser(), ...profileData };
            localStorage.setItem('user', JSON.stringify(updatedUser));
            return { success: true, message: 'Profile updated successfully', user: updatedUser };
        } else {
            return { success: false, message: data.message || 'Failed to update profile' };
        }
    } catch (error) {
        console.error('Profile update error:', error);
        return { success: false, message: 'Network error. Please try again.' };
    }
};

// Get auth headers for API calls
const getAuthHeaders = () => {
    const token = getToken();
    return {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })
    };
};

// Verify token function
const verifyToken = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}${config.ENDPOINTS.AUTH.VERIFY}`, {
            method: 'GET',
            headers: getAuthHeaders()
        });

        if (response.ok) {
            const data = await response.json();
            setUser(data.user);
            return { success: true, user: data.user };
        } else {
            logout();
            return { success: false, error: 'Token expired' };
        }
    } catch (error) {
        console.error('Token verification error:', error);
        logout();
        return { success: false, error: 'Network error' };
    }
};

export {
    login,
    register,
    logout,
    isLoggedIn,
    getToken,
    getStoredUser,
    getAuthHeaders,
    verifyToken,
    updateProfile,
    setToken,
    setUser
};
