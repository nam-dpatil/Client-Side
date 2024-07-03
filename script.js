
const url = "http://localhost:8080/";

const dataTableRow = document.querySelectorAll('#data-tr')

let r = {
    "name": "A",
    "email": "john.doe@example.com",
    "title": "Software Engineer",
    "hireDate": null,
    "salary": 100,
    "payment": false
}

// ----------------------- Get Api --------------------------

// getAPI resquest 
const getApi = async () => {
    console.log("getting data....");
    let response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    let data = await response.json();
    return data;
};

const createElement = (values, rowIndex) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <th class="id-num" scope="row">${rowIndex}</th>
        <td class="td">${values.name}</td>
        <td class="td">${values.email}</td>
        <td class="td">${values.title}</td>
        <td class="td">${values.hireDate || ''}</td>
        <td class="td">${values.salary || ''}</td>
        <td><button type="button" class="btn btn-success" id="payment-button">Payment</button></td>
        <td><button type="button" class="btn btn-danger" id="payment-Update">Update</button></td>
        <td><button type="button" class="btn btn-warning" id="payment-Delete">Delete</button></td>
    `;
    return tr;
};

let tableRow;
const createRowsFromDB = async () => {
    try {
        const response = await getApi();
        const tbody = document.getElementById('table-body');
        let rowIndex = 1;

        response.forEach((element) => {
            tableRow = createElement(element, element.id);
            tbody.insertBefore(tableRow, tbody.firstChild); // Insert the new row at the beginning
        });
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};

document.addEventListener('DOMContentLoaded', createRowsFromDB);



// event handler for enter key press on input tag
const inputs = document.querySelectorAll('#data-tr .td')
console.log(inputs);
inputs.forEach(input => {
    input.addEventListener('keypress', async (event) => {
        // event.preventDefault()
        console.log("entered");
        if(event.key === 'Enter') {
            const result = data()
            var read = await sendData(result);
            reflectData(read)
            // tem()
        }
    })
})

// collect data from html form and conver in js object using FormData class
const data = () => {
    const inputsData = document.getElementById('employeeForm')
    const formData = new FormData(inputsData);
    
    let data = { };
    formData.forEach((value, key) => {
        data[key] = value
    });
    return data;
}

// calling post api 
const sendData = async (data) => {

try {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
} catch (error) {
    console.error('Error:', error);
}
}

// reflect data on rows
const reflectData = (result) => {
    // createElement()
    const tds = document.querySelectorAll('.td')
    let index = 1;
    tds.forEach((td) => {
        td.innerHTML = Object.values(result)[index++];
    })
}

// ---------------------Delete employee data by id---------------------------

let tableData =  document.querySelectorAll('.id-num')

console.log("table dat"+tableData.forEach((data) => {
    console.log(data);
}));
let id = tableData.id;
tableData.forEach((data) => {
    data.addEventListener('onClick', (event) => {
        const url = "http://localhost:8080/";

    })
})