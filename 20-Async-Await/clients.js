async function getClientsFromAPI (){
    const url = "https://jsonplaceholder.typicode.com/users/3";
    try{
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Client data:", data);
    }
    catch (error) {
        console.error("Error fetching client data:", error);
    }
    
}
getClientsFromAPI();