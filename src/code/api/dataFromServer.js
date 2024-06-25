async function getParticipantNum() {
    try {
        const devUrl = 'http://localhost:3000/';
        const serverUrl = 'https://emotional-norms-server.vercel.app/data/participantCounter';
        const response = await fetch(serverUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json(); // Parse response as JSON
        console.log(result)
        return result;
        
    } catch (error) {
        console.error('Error:', error);
    }
}
export {getParticipantNum};