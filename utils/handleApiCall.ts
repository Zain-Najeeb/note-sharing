
interface HandleApiCallProps {
    route: string, 
    content_type?: string, 
    body?: any,
}

export async function HandlePostCall<T>({route, content_type='application/json', body}: HandleApiCallProps):Promise<T>  {
    let response; 
    try {
        response = await fetch(`/api/${route}`, {
            method: 'POST', 
            headers : {
                'Content-Type': content_type
            },
            body: JSON.stringify(body), 
            credentials: 'include',
        }); 
        const data:T = await response.json(); 
        return data; 
    } catch (err) { 
        console.error(err);
        body.error = err; 
        return body; 
    } 
}