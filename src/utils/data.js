export const doughnutData = {
    labels: ["Chapa", "Paypal", "Stripe"],
    datasets: [
        {
            //  label: "Transaction history",
            data: [300, 50, 100],
            backgroundColor: ["#00d25b", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
            hoverOffset: 4,
        },
    ],
}

export const doughnutOption = {
    cutout: 70,
    radius: 80
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octobet'];

export const lineData = {
    labels,
    datasets: [
        {
            fill: true,
            label: "Salse",
            // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            data: [250, 220, 250, 200, 210, 250, 240, 200, 220, 230],
            borderColor: "#000000",
            backgroundColor: "rgba(127, 240, 86, 0.2)",
        },
        {
            fill: true,
            label: "Revenue",
            // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            data: [150, 120, 150, 100, 110, 150, 140, 100, 120, 130],
            borderColor: "#000000",
            backgroundColor: "#00d25b",
        },
    ],
}

export const lineOptions = {
    responsive: true,
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Salse & Revenue",
        },
    },
};