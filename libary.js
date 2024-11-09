
    // Function to toggle table selection
    function toggleTableSelection(element, tableNumber) {
      const selectedTable = document.querySelector(".table.selected");
      if (selectedTable) {
        selectedTable.classList.remove("selected");
      }
      const table = element.querySelector(".table");
      table.classList.toggle("selected");
    }

    function showSummary() {
      const tableNumber = document.getElementById("tableNumber").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;
      const food = document.getElementById("food").value;
      const address = document.getElementById("address").value;

      let services = [];
      if (document.getElementById("music").checked) services.push("Music");
      if (document.getElementById("cake").checked) services.push("Cake");
      if (document.getElementById("decorations").checked) services.push("Decorations");

      const summaryDetails = `Table: ${tableNumber}<br>Date: ${date}<br>Time: ${time}<br>Food: ${food}<br>Address: ${address}<br>Services: ${services.join(", ") || 'None'}`;
      document.getElementById("summaryDetails").innerHTML = summaryDetails;

      // Save data to local storage
      const bookingData = {
        tableNumber: tableNumber,
        date: date,
        time: time,
        food: food,
        address: address,
        services: services
      };

      localStorage.setItem('bookingData', JSON.stringify(bookingData));

      const summary = document.getElementById("summary");
      summary.style.display = "block";

      // Show QR Code
      document.getElementById("qrCode").style.display = "block";

      // Hide summary after 2 seconds
      setTimeout(() => {
        summary.style.display = "none";
        document.getElementById("qrCode").style.display = "none";
        window.alert(" you can see this data in library");
      window.location.href='home.html'
      }, 2000); 
      
    }

    window.onload = function() {
      const storedData = JSON.parse(localStorage.getItem('bookingData'));
      if (storedData) {
        document.getElementById("summaryDetails").innerHTML = `Last Booking:<br>
        Table: ${storedData.tableNumber}<br>
        Date: ${storedData.date}<br>
        Time: ${storedData.time}<br>
        Food: ${storedData.food}<br>
        Address: ${storedData.address}<br>
        Services: ${storedData.services.join(", ") || 'None'}`;
      }


    };






        // Function to load data from local storage and populate the table
