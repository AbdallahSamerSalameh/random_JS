// // function loadToLocalStorage(){
// //     const storeData = localStorage.getItem('myData');
// //     const output = document.getElementById('output');
// //         if(storeData){
// //            output.textContent = "storeData = " + storeData;
// //         }
// //         else{
// //            output.textContent = "No Data Found";
// //         }
// //    }
// // let user ={
// //     name: "Alaa",
// //     age: 27,
// //     job:"Full Altra pro max stack"
// // };
// // localStorage.setItem("user",JSON.stringify(user));
// // let stroredUser = JSON.parse(localStorage.getItem("user"));
// // console.log("user Name:", stroredUser.name);
// // console.log("user Name:", stroredUser.age);
// // console.log("user Name:", stroredUser.job);
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // // // // // // // function saveToLocalStorage(){
// // // // // // // //     const user = {
// // // // // // // //         name:document.getElementById('username').value,
// // // // // // // //         age:document.getElementById('userage').value,
// // // // // // // //         address:document.getElementById('useraddress').value,
// // // // // // // //         email:document.getElementById('useremail').value
// // // // // // // //     };
// // // // // // // //     localStorage.setItem(document.getElementById('username').value ,user);
// // // // // // // //     document.getElementById('table').innerHTML
// // // // // // // //     alert("Data has been saved");
// // // // // // // // }
// // // // // // // // function removeFRomLocalStorage(){
// // // // // // // //     localStorage.removeItem('myData');
// // // // // // // //     alert("Data is removed");
// // // // // // // // }
// // // // // // // /////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // // // // // function saveToLocalStorage(){
// // // // // // //     const user = {
// // // // // // //         name: document.getElementById('username').value,
// // // // // // //         age: document.getElementById('userage').value,
// // // // // // //         address: document.getElementById('useraddress').value,
// // // // // // //         email: document.getElementById('useremail').value
// // // // // // //     };
// // // // // // //     localStorage.setItem(document.getElementById('username').value, JSON.stringify(user));

// // // // // // //     const table = document.getElementById('table');
// // // // // // //     const newRow = table.insertRow();
// // // // // // //     const nameCell = newRow.insertCell(0);
// // // // // // //     const ageCell = newRow.insertCell(1);
// // // // // // //     const addressCell = newRow.insertCell(2);
// // // // // // //     const emailCell = newRow.insertCell(3);
// // // // // // //     const actionCell = newRow.insertCell(4);

// // // // // // //     nameCell.innerHTML = user.name;
// // // // // // //     ageCell.innerHTML = user.age;
// // // // // // //     addressCell.innerHTML = user.address;
// // // // // // //     emailCell.innerHTML = user.email;
// // // // // // //     actionCell.innerHTML = 

// // // // // // //     alert("Data has been saved");
// // // // // // // }
// // // // // // // /////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // // // // function saveToLocalStorage(){
// // // // // //     const user = {
// // // // // //         name: document.getElementById('username').value,
// // // // // //         age: document.getElementById('userage').value,
// // // // // //         address: document.getElementById('useraddress').value,
// // // // // //         email: document.getElementById('useremail').value
// // // // // //     };
// // // // // //     localStorage.setItem(document.getElementById('username').value, JSON.stringify(user));

// // // // // //     const table = document.getElementById('table');
// // // // // //     const newRow = table.insertRow();
// // // // // //     const nameCell = newRow.insertCell(0);
// // // // // //     const ageCell = newRow.insertCell(1);
// // // // // //     const addressCell = newRow.insertCell(2);
// // // // // //     const emailCell = newRow.insertCell(3);
// // // // // //     const actionCell = newRow.insertCell(4);

// // // // // //     nameCell.innerHTML = user.name;
// // // // // //     ageCell.innerHTML = user.age;
// // // // // //     addressCell.innerHTML = user.address;
// // // // // //     emailCell.innerHTML = user.email;

// // // // // //     const deleteButton = document.createElement('button');
// // // // // //     deleteButton.innerHTML = 'Delete';
// // // // // //     deleteButton.onclick = function() {
// // // // // //         localStorage.removeItem(user.name);
// // // // // //         table.deleteRow(newRow.rowIndex);
// // // // // //     };

// // // // // //     const editButton = document.createElement('button');
// // // // // //     editButton.innerHTML = 'Edit';
// // // // // //     editButton.onclick = function() {
// // // // // //         document.getElementById('username').value = user.name;
// // // // // //         document.getElementById('userage').value = user.age;
// // // // // //         document.getElementById('useraddress').value = user.address;
// // // // // //         document.getElementById('useremail').value = user.email;
// // // // // //         table.deleteRow(newRow.rowIndex);
// // // // // //         localStorage.removeItem(user.name);
// // // // // //     };

// // // // // //     actionCell.appendChild(deleteButton);
// // // // // //     actionCell.appendChild(editButton);

// // // // // //     alert("Data has been saved");
// // // // // // }
// // // // // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // // // function saveToLocalStorage(){
// // // // //     const user = {
// // // // //         name: document.getElementById('username').value,
// // // // //         age: document.getElementById('userage').value,
// // // // //         address: document.getElementById('useraddress').value,
// // // // //         email: document.getElementById('useremail').value
// // // // //     };
// // // // //     localStorage.setItem(document.getElementById('username').value, JSON.stringify(user));

// // // // //     const table = document.getElementById('table');
// // // // //     const newRow = table.insertRow();
// // // // //     newRow.classList.add('border-2', 'border-black');

// // // // //     const nameCell = newRow.insertCell(0);
// // // // //     const ageCell = newRow.insertCell(1);
// // // // //     const addressCell = newRow.insertCell(2);
// // // // //     const emailCell = newRow.insertCell(3);
// // // // //     const actionCell = newRow.insertCell(4);

// // // // //     nameCell.classList.add('border-2', 'border-black');
// // // // //     ageCell.classList.add('border-2', 'border-black');
// // // // //     addressCell.classList.add('border-2', 'border-black');
// // // // //     emailCell.classList.add('border-2', 'border-black');
// // // // //     actionCell.classList.add('border-2', 'border-black');

// // // // //     nameCell.innerHTML = user.name;
// // // // //     ageCell.innerHTML = user.age;
// // // // //     addressCell.innerHTML = user.address;
// // // // //     emailCell.innerHTML = user.email;

// // // // //     const deleteButton = document.createElement('button');
// // // // //     deleteButton.innerHTML = 'Delete';
// // // // //     deleteButton.onclick = function() {
// // // // //         localStorage.removeItem(user.name);
// // // // //         table.deleteRow(newRow.rowIndex);
// // // // //         alert("Data has been deleted");
// // // // //     };

// // // // //     const editButton = document.createElement('button');
// // // // //     editButton.innerHTML = 'Edit';
// // // // //     editButton.onclick = function() {
// // // // //         document.getElementById('username').value = user.name;
// // // // //         document.getElementById('userage').value = user.age;
// // // // //         document.getElementById('useraddress').value = user.address;
// // // // //         document.getElementById('useremail').value = user.email;
// // // // //         table.deleteRow(newRow.rowIndex);
// // // // //         localStorage.removeItem(user.name);
// // // // //     };

// // // // //     actionCell.appendChild(deleteButton);
// // // // //     actionCell.appendChild(editButton);

// // // // //     alert("Data has been saved");
// // // // // }
// // // // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // // let editMode = false;
// // // // let editRow = null;

// // // // function saveToLocalStorage(){
// // // //     const user = {
// // // //         name: document.getElementById('username').value,
// // // //         age: document.getElementById('userage').value,
// // // //         address: document.getElementById('useraddress').value,
// // // //         email: document.getElementById('useremail').value
// // // //     };
// // // //     localStorage.setItem(document.getElementById('username').value, JSON.stringify(user));

// // // //     if (editMode) {
// // // //         editRow.cells[0].innerHTML = user.name;
// // // //         editRow.cells[1].innerHTML = user.age;
// // // //         editRow.cells[2].innerHTML = user.address;
// // // //         editRow.cells[3].innerHTML = user.email;
// // // //         editMode = false;
// // // //         editRow = null;
// // // //     } else {
// // // //         const table = document.getElementById('table');
// // // //         const newRow = table.insertRow();
// // // //         newRow.classList.add('border-2', 'border-black');

// // // //         const nameCell = newRow.insertCell(0);
// // // //         const ageCell = newRow.insertCell(1);
// // // //         const addressCell = newRow.insertCell(2);
// // // //         const emailCell = newRow.insertCell(3);
// // // //         const actionCell = newRow.insertCell(4);

// // // //         nameCell.classList.add('border-2', 'border-black');
// // // //         ageCell.classList.add('border-2', 'border-black');
// // // //         addressCell.classList.add('border-2', 'border-black');
// // // //         emailCell.classList.add('border-2', 'border-black');
// // // //         actionCell.classList.add('border-2', 'border-black');

// // // //         nameCell.innerHTML = user.name;
// // // //         ageCell.innerHTML = user.age;
// // // //         addressCell.innerHTML = user.address;
// // // //         emailCell.innerHTML = user.email;

// // // //         const deleteButton = document.createElement('button');
// // // //         deleteButton.innerHTML = 'Delete';
// // // //         deleteButton.onclick = function() {
// // // //             localStorage.removeItem(user.name);
// // // //             table.deleteRow(newRow.rowIndex);
// // // //             alert("Data has been deleted");
// // // //         };

// // // //         const editButton = document.createElement('button');
// // // //         editButton.innerHTML = 'Edit';
// // // //         editButton.onclick = function() {
// // // //             document.getElementById('username').value = user.name;
// // // //             document.getElementById('userage').value = user.age;
// // // //             document.getElementById('useraddress').value = user.address;
// // // //             document.getElementById('useremail').value = user.email;
// // // //             editMode = true;
// // // //             editRow = newRow;
// // // //         };

// // // //         actionCell.appendChild(deleteButton);
// // // //         actionCell.appendChild(editButton);
// // // //     }

// // // //     alert("Data has been saved");
// // // // }
// // // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // let editMode = false;
// // // let editRow = null;

// // // function saveToLocalStorage(){
// // //     const user = {
// // //         name: document.getElementById('username').value,
// // //         age: document.getElementById('userage').value,
// // //         address: document.getElementById('useraddress').value,
// // //         email: document.getElementById('useremail').value
// // //     };
// // //     localStorage.setItem(document.getElementById('username').value, JSON.stringify(user));

// // //     if (editMode) {
// // //         editRow.cells[0].innerHTML = user.name;
// // //         editRow.cells[1].innerHTML = user.age;
// // //         editRow.cells[2].innerHTML = user.address;
// // //         editRow.cells[3].innerHTML = user.email;
// // //         editMode = false;
// // //         editRow = null;
// // //     } else {
// // //         const table = document.getElementById('table');
// // //         const newRow = table.insertRow();
// // //         newRow.classList.add('border-2', 'border-black');

// // //         const nameCell = newRow.insertCell(0);
// // //         const ageCell = newRow.insertCell(1);
// // //         const addressCell = newRow.insertCell(2);
// // //         const emailCell = newRow.insertCell(3);
// // //         const actionCell = newRow.insertCell(4);

// // //         nameCell.classList.add('border-2', 'border-black');
// // //         ageCell.classList.add('border-2', 'border-black');
// // //         addressCell.classList.add('border-2', 'border-black');
// // //         emailCell.classList.add('border-2', 'border-black');
// // //         actionCell.classList.add('border-2', 'border-black');

// // //         nameCell.innerHTML = user.name;
// // //         ageCell.innerHTML = user.age;
// // //         addressCell.innerHTML = user.address;
// // //         emailCell.innerHTML = user.email;

// // //         const deleteButton = document.createElement('button');
// // //         deleteButton.innerHTML = 'Delete';
// // //         deleteButton.classList.add('btn', 'btn-danger');
// // //         deleteButton.onclick = function() {
// // //             localStorage.removeItem(user.name);
// // //             table.deleteRow(newRow.rowIndex);
// // //             alert("Data has been deleted");
// // //         };

// // //         const editButton = document.createElement('button');
// // //         editButton.innerHTML = 'Edit';
// // //         editButton.classList.add('btn', 'btn-warning');
// // //         editButton.onclick = function() {
// // //             document.getElementById('username').value = user.name;
// // //             document.getElementById('userage').value = user.age;
// // //             document.getElementById('useraddress').value = user.address;
// // //             document.getElementById('useremail').value = user.email;
// // //             editMode = true;
// // //             editRow = newRow;
// // //             alert("Data has been edited");
// // //         };

// // //         actionCell.appendChild(deleteButton);
// // //         actionCell.appendChild(editButton);
// // //     }

// // //     alert("Data has been saved");
// // // }
// // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // let editMode = false;
// // let editRow = null;

// // function saveToLocalStorage(){
// //     const user = {
// //         name: document.getElementById('username').value,
// //         age: document.getElementById('userage').value,
// //         address: document.getElementById('useraddress').value,
// //         email: document.getElementById('useremail').value
// //     };
// //     localStorage.setItem(document.getElementById('username').value, JSON.stringify(user));

// //     if (editMode) {
// //         editRow.cells[0].innerHTML = user.name;
// //         editRow.cells[1].innerHTML = user.age;
// //         editRow.cells[2].innerHTML = user.address;
// //         editRow.cells[3].innerHTML = user.email;
// //         editMode = false;
// //         editRow = null;
// //     } else {
// //         const table = document.getElementById('table');
// //         const newRow = table.insertRow();
// //         newRow.classList.add('border-2', 'border-black');

// //         const nameCell = newRow.insertCell(0);
// //         const ageCell = newRow.insertCell(1);
// //         const addressCell = newRow.insertCell(2);
// //         const emailCell = newRow.insertCell(3);
// //         const actionCell = newRow.insertCell(4);

// //         nameCell.classList.add('border-2', 'border-black');
// //         ageCell.classList.add('border-2', 'border-black');
// //         addressCell.classList.add('border-2', 'border-black');
// //         emailCell.classList.add('border-2', 'border-black');
// //         actionCell.classList.add('border-2', 'border-black');

// //         nameCell.innerHTML = user.name;
// //         ageCell.innerHTML = user.age;
// //         addressCell.innerHTML = user.address;
// //         emailCell.innerHTML = user.email;

// //         const deleteButton = document.createElement('button');
// //         deleteButton.innerHTML = 'Delete';
// //         deleteButton.classList.add('btn', 'btn-danger');
// //         deleteButton.onclick = function() {
// //             localStorage.removeItem(user.name);
// //             table.deleteRow(newRow.rowIndex);
// //             alert("Data has been deleted");
// //         };

// //         const editButton = document.createElement('button');
// //         editButton.innerHTML = 'Edit';
// //         editButton.classList.add('btn', 'btn-warning');
// //         editButton.onclick = function() {
// //             document.getElementById('username').value = user.name;
// //             document.getElementById('userage').value = user.age;
// //             document.getElementById('useraddress').value = user.address;
// //             document.getElementById('useremail').value = user.email;
// //             editMode = true;
// //             editRow = newRow;
// //             alert("Data has been edited");
// //         };

// //         actionCell.appendChild(deleteButton);
// //         actionCell.appendChild(editButton);
// //     }

// //     alert("Data has been saved");
// // }
// // document.getElementById("addbtn").addEventListener("click", saveToLocalStorage);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// let editMode = false;
// let editRow = null;
// let originalName = '';

// function saveToLocalStorage(){
//     const user = {
//         name: document.getElementById('username').value,
//         age: document.getElementById('userage').value,
//         address: document.getElementById('useraddress').value,
//         email: document.getElementById('useremail').value
//     };

//     if (editMode) {
//         // Remove the old entry from local storage
//         localStorage.removeItem(originalName);

//         // Update the row with new data
//         editRow.cells[0].innerHTML = user.name;
//         editRow.cells[1].innerHTML = user.age;
//         editRow.cells[2].innerHTML = user.address;
//         editRow.cells[3].innerHTML = user.email;

//         // Reset edit mode
//         editMode = false;
//         editRow = null;
//         originalName = '';
//     } else {
//         const table = document.getElementById('table');
//         const newRow = table.insertRow();
//         newRow.classList.add('border-2', 'border-black');

//         const nameCell = newRow.insertCell(0);
//         const ageCell = newRow.insertCell(1);
//         const addressCell = newRow.insertCell(2);
//         const emailCell = newRow.insertCell(3);
//         const actionCell = newRow.insertCell(4);

//         nameCell.classList.add('border-2', 'border-black');
//         ageCell.classList.add('border-2', 'border-black');
//         addressCell.classList.add('border-2', 'border-black');
//         emailCell.classList.add('border-2', 'border-black');
//         actionCell.classList.add('border-2', 'border-black');

//         nameCell.innerHTML = user.name;
//         ageCell.innerHTML = user.age;
//         addressCell.innerHTML = user.address;
//         emailCell.innerHTML = user.email;

//         const deleteButton = document.createElement('button');
//         deleteButton.innerHTML = 'Delete';
//         deleteButton.classList.add('btn', 'btn-danger');
//         deleteButton.onclick = function() {
//             localStorage.removeItem(user.name);
//             table.deleteRow(newRow.rowIndex);
//             alert("Data has been deleted");
//         };

//         const editButton = document.createElement('button');
//         editButton.innerHTML = 'Edit';
//         editButton.classList.add('btn', 'btn-warning');
//         editButton.onclick = function() {
//             document.getElementById('username').value = user.name;
//             document.getElementById('userage').value = user.age;
//             document.getElementById('useraddress').value = user.address;
//             document.getElementById('useremail').value = user.email;
//             editMode = true;
//             editRow = newRow;
//             originalName = user.name;
//             alert("Data is ready to be edited");
//         };

//         actionCell.appendChild(deleteButton);
//         actionCell.appendChild(editButton);
//     }

//     // Save the updated data to local storage
//     localStorage.setItem(user.name, JSON.stringify(user));

//     alert("Data has been saved");
// }
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
let editMode = false;
let editRow = null;
let originalKey = '';

function saveToLocalStorage(){
    const user = {
        name: document.getElementById('username').value,
        age: document.getElementById('userage').value,
        address: document.getElementById('useraddress').value,
        email: document.getElementById('useremail').value
    };

    let key;
    if (editMode) {
        // Use the original key for editing
        key = originalKey;

        // Update the row with new data
        editRow.cells[0].innerHTML = user.name;
        editRow.cells[1].innerHTML = user.age;
        editRow.cells[2].innerHTML = user.address;
        editRow.cells[3].innerHTML = user.email;

        // Reset edit mode
        editMode = false;
        editRow = null;
        originalKey = '';
    } else {
        // Create a unique key using a timestamp
        key = `${user.name}_${Date.now()}`;

        const table = document.getElementById('table');
        const newRow = table.insertRow();
        newRow.classList.add('border-2', 'border-black');

        const nameCell = newRow.insertCell(0);
        const ageCell = newRow.insertCell(1);
        const addressCell = newRow.insertCell(2);
        const emailCell = newRow.insertCell(3);
        const actionCell = newRow.insertCell(4);

        nameCell.classList.add('border-2', 'border-black');
        ageCell.classList.add('border-2', 'border-black');
        addressCell.classList.add('border-2', 'border-black');
        emailCell.classList.add('border-2', 'border-black');
        actionCell.classList.add('border-2', 'border-black');

        nameCell.innerHTML = user.name;
        ageCell.innerHTML = user.age;
        addressCell.innerHTML = user.address;
        emailCell.innerHTML = user.email;

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.onclick = function() {
            localStorage.removeItem(key);
            table.deleteRow(newRow.rowIndex);
            alert("Data has been deleted");
        };

        const editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
        editButton.classList.add('btn', 'btn-warning');
        editButton.onclick = function() {
            document.getElementById('username').value = user.name;
            document.getElementById('userage').value = user.age;
            document.getElementById('useraddress').value = user.address;
            document.getElementById('useremail').value = user.email;
            editMode = true;
            editRow = newRow;
            originalKey = key;
            alert("Data is ready to be edited");
        };

        actionCell.appendChild(deleteButton);
        actionCell.appendChild(editButton);
    }

    // Save the updated data to local storage
    localStorage.setItem(key, JSON.stringify(user));

    alert("Data has been saved");
}

document.getElementById("addbtn").addEventListener("click", saveToLocalStorage);








