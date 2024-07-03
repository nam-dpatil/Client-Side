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
