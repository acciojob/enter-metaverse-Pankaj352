 document.getElementById("enterBtn").addEventListener("click", function() {
            const statusElement = document.getElementById("status");
            const newElement = document.createElement("h1");
            newElement.id = "status";
            newElement.textContent = "Entered Metaverse";
            statusElement.replaceWith(newElement);
        });