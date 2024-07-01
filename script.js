// let formData = document.querySelector(".form")
// formData.addEventListener("keypress", (event) => {
//     if (event.key === "Enter"){
//         event.preventDefault();
//         let resFormData = new FormData(formData)
//         let data = Object.fromEntries(resFormData)
//         console.log(data);
//         fetch()
//     }
// })


// const url = "http://localhost:8080/";

// const getApi = async () => {
//     console.log("getting data....");
//     let response = await fetch(URL)
//     console.log(response);
//     let data = await response.json();
//     console.log(data);
//     return data;
// };

// let inputClick = document.querySelectorAll('.inputs')
// inputClick.addEventListener("keypress", (event) => {
//     event.preventDefault();
//     console.log("enter button working");
//     if(event.key === "Enter"){
//         console.log("enter button working");

//     }
// })


// inputClick.forEach(element => {
//     element.addEventListener("keypress", (event) => {
//         event.preventDefault();
//         console.log("enter button working");
//         if(event.key === "Enter"){
//             console.log("enter button working");
    
//         }
//     })
// });

// const data = {

//     "name": "A",
//     "email": "john.doe@example.com",
//     "title": "Software Engineer",
//     "hireDate": null,
//     "salary": 75000.0,
//     "payment": false
//   }
// const postData = async (url, data) => {
//     try {
        
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     });
//       console.log(response.status);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const result = await response.json();
//         console.log('Success:', result);
//     }
//     catch (error) {
//       console.error('Error:', error.message);
//     }
//   }

//   postData(url, data);

// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('employeeForm');
//     const inputs = form.querySelectorAll('input');

//     inputs.forEach(input => {
//         input.addEventListener('keypress', function (event) {
//             if (event.key === 'Enter') {
//                 event.preventDefault();
//                 sendData();
//             }
//         });
//     });
// });

// async function sendData() {
//     console.log("it is calling");
//     const url = 'http://localhost:8080/';
//     const form = document.getElementById('employeeForm');
//     const formData = new FormData(form);

//     let data = {};
//     formData.forEach((value, key) => {
//         console.log("form data Key and value :" + key + value);
//         data[key] = value;
//     });
//     console.log("final data object : "+data);
    // try {
    //     const response = await fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     });

    //     if (!response.ok) {
    //         throw new Error(`HTTP error! Status: ${response.status}`);
    //     }

    //     const result = await response.json();
    //     console.log('Success:', result);
    // } catch (error) {
    //     console.error('Error:', error);
    // }
// }

const url = "http://localhost:8080/";

// event handler for enter key press on input tag
const inputs = document.querySelectorAll('input')
inputs.forEach(input => {
    input.addEventListener('keypress', async (event) => {
        // event.preventDefault()
        console.log("entered");
        if(event.key === 'Enter') {
            const result = data()
            var read = await sendData(result);
            let r = {
                "name": "A",
                "email": "john.doe@example.com",
                "title": "Software Engineer",
                "hireDate": null,
                "payment": false
            }
            console.log("------------------------------");
            reflectData(read)
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
    console.log('Success:', result);
    return result;
} catch (error) {
    console.error('Error:', error);
}
}

// reflect data on rows
const reflectData = (result) => {
    console.log(Object.keys(result));
    console.log(Object.values(result)[0]);
    const tds = document.querySelectorAll('.td')
    let index = 1;
    tds.forEach((td) => {
        td.innerHTML = Object.values(result)[index++];
    })

    // console.log(tds[0]);
    // console.log(tds[1].getAttribute('name'));
    tds.forEach(td => {
        
    })
}
 let r = {
    "name": "A",
    "email": "john.doe@example.com",
    "title": "Software Engineer",
    "hireDate": null,
    "payment": false
}
// reflectData(r)

