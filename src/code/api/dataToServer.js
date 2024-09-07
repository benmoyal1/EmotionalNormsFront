/**
 * Thi function sends the data that is stored in the expreriment object 
 * to the server accordint to the api implementation on express-backend-exp
 * it sends the path of the S3 that it will store it 
 * and the data 
 * @param {experimant object with results } expObj 
 * @returns 
 */
async function sendDataToServer(expObj) {
    console.log("sending")

    const now = new Date();
    const formatTime = num => String(num).padStart(2, '0');
    const currentTime = `${formatTime(now.getHours())}-${formatTime(now.getMinutes())}-${formatTime(now.getSeconds())}`;    
    const path = `Experiment_data/${expObj.gender}/exp_${expObj.subject}_${currentTime}.csv`;
    const pathExample = `example/${expObj.gender}/exp_${expObj.subject}_${currentTime}.csv`;

    try {
        const devUrl = 'http://localhost:3000/';
        const serverUrl = 'https://express-backend-exp.vercel.app/data/sendDataToS3';
        const response = await fetch(serverUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data: expObj.experimentData,
                'Subject':expObj.subject,
                'gender':expObj.gender,
                'path':pathExample})
        }); 
        const result = await response.json(); 
        return result;
    } catch (error) {
        console.error('Error:', error);
    }
}


export {sendDataToServer};