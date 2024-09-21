interface HandleApiCallProps {
    route: string, 
    content_type: string, 
    body?: any,
}

export function HandlePostCall<T>({route, content_type, body}: HandleApiCallProps): T  {
    let response:T 
    try {

    } catch (err) {
        console.error(); 
    } 
}