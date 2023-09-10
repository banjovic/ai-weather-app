const getBasePath = () => {
    let base_url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://ai-weather-app-tau.vercel.app'
    return base_url
}

export default getBasePath