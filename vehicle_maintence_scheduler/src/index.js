process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJsb2tlc2hrdW1hci52MjAyNUB2aXRzdHVkZW50LmFjLmluIiwiZXhwIjoxNzc4OTM0MDc5LCJpYXQiOjE3Nzg5MzMxNzksImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJmNjcwMDdmNy0zZDY2LTRmMzUtOWYwMC02YTYyNzMxMjM3OGIiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJsb2tlc2hrdW1hciB2Iiwic3ViIjoiNDNhZGQwOGUtZmIyMS00OGQwLTk2YmUtZDc3MzM4NGE1OWQ2In0sImVtYWlsIjoibG9rZXNoa3VtYXIudjIwMjVAdml0c3R1ZGVudC5hYy5pbiIsIm5hbWUiOiJsb2tlc2hrdW1hciB2Iiwicm9sbE5vIjoiMjVtY3MwMDk3IiwiYWNjZXNzQ29kZSI6IlNmRnVXZyIsImNsaWVudElEIjoiNDNhZGQwOGUtZmIyMS00OGQwLTk2YmUtZDc3MzM4NGE1OWQ2IiwiY2xpZW50U2VjcmV0IjoiY016a1pDckJqelptZVFRciJ9.2SXvP7pGg6JDB0uV0itU11iYEHlzvJp8SeF4Zo8eARs";

const headers = {
    Authorization: `Bearer ${TOKEN}`
};

async function solve() {

    try {

        // Fetch depots
        const depotResponse = await axios.get(
            "https://4.224.186.213/evaluation-service/depots",
            { headers }
        );

        // Fetch vehicles
        const vehicleResponse = await axios.get(
            "https://4.224.186.213/evaluation-service/vehicles",
            { headers }
        );

        const depots = depotResponse.data.depots;
        const vehicles = vehicleResponse.data.vehicles;

        // Process each depot
        for (const depot of depots) {

            const limit = depot.MechanicHours;

            // Sort by best impact per duration ratio
            const sortedVehicles = [...vehicles].sort(
                (a, b) =>
                    (b.Impact / b.Duration) -
                    (a.Impact / a.Duration)
            );

            let totalHours = 0;
            let totalImpact = 0;

            const selected = [];

            for (const vehicle of sortedVehicles) {

                if (
                    totalHours + vehicle.Duration
                    <= limit
                ) {

                    selected.push(vehicle);

                    totalHours += vehicle.Duration;

                    totalImpact += vehicle.Impact;
                }
            }

            // Output
            console.log("\n====================");

            console.log("Depot ID:", depot.ID);

            console.log(
                "Mechanic Hours:",
                limit
            );

            console.log(
                "Total Impact:",
                totalImpact
            );

            console.log("\nSelected Tasks:");

            selected.forEach(task => {

                console.log(
                    `TaskID: ${task.TaskID}
Duration: ${task.Duration}
Impact: ${task.Impact}
------------------------`
                );

            });

        }

    } catch (error) {

        if (error.response) {

            console.log(error.response.data);

        } else {

            console.log(error.message);

        }

    }

}

solve();