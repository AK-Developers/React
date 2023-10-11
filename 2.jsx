ReactDOM.render(
    <ul>
        <li>Hi. Aryan!</li>
        <li>How are u?</li>
        <li>If you are good ThubmsUp</li>
    </ul>,
    document.getElementById('root')
)
//React can be used to insert data dynamically into the html elements
let laptopDetails = ["HP Victus 15", "Ryzen 7 5000 Series", "RTX 3050", "Office 2021-Lifetime", "Backlit keyboard"]
ReactDOM.render(
    <ul>
        <li>{laptopDetails[0]}</li>
        <ul>
            <li>{laptopDetails[1]}</li>
            <li>{laptopDetails[2]}</li>
            <li>{laptopDetails[3]}</li>
            <li>{laptopDetails[4]}</li>
        </ul>
    </ul>,
    document.getElementById("laptop")
)