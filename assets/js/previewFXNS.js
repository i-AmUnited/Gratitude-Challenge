document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("nameInput");
    const displayName = document.getElementById("displayName");
    const defaultText = "Abdulrasheed Olanrewaju";

    displayName.textContent = defaultText;

    inputField.addEventListener("input", function() {
        displayName.textContent = inputField.value || defaultText;
    });

    const fileInput = document.getElementById("fileInput");
    const previewImage = document.getElementById("previewImage");
    const customFileButton = document.getElementById("customFileButton");

    // Trigger file input when custom button is clicked
    customFileButton.addEventListener("click", function() {
        fileInput.click();
    });

    // Display preview of selected image
    fileInput.addEventListener("change", function(event) {
        const file = event.target.files[0];
        
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();

            reader.onload = function(e) {
                // Display the preview image
                previewImage.src = e.target.result;
                previewImage.classList.remove("hidden");
            };

            reader.readAsDataURL(file);
        } else {
            // Hide the preview if not an image
            previewImage.classList.add("hidden");
            previewImage.src = "";
        }
    });

    const screenshotButton = document.getElementById("screenshotButton");
    const captureDiv = document.getElementById("captureDiv");

    // screenshotButton.addEventListener("click", function() {
    //     html2canvas(captureDiv, {
    //         scale: 4,
    //     }).then(canvas => {
    //         const link = document.createElement("a");
    //         link.href = canvas.toDataURL("image/png", 1.0); // Full quality
    //         link.download = "screenshot.png";
    //         link.click();
    //     }).catch(err => {
    //         console.error("Screenshot failed", err);
    //     });
    // });

    document.getElementById("screenshotButton").addEventListener("click", () => {
        const node = document.getElementById("captureDiv");
    
        const scaleFactor = 4; // Adjust to your desired scale
    
        domtoimage.toPng(node, {
            width: node.offsetWidth * scaleFactor,
            height: node.offsetHeight * scaleFactor,
            style: {
                transform: `scale(${scaleFactor})`,
                transformOrigin: 'top left',
                width: `${node.offsetWidth}px`,
                height: `${node.offsetHeight}px`
            }
        })
        .then(dataUrl => {
            const link = document.createElement("a");
            link.href = dataUrl;
            link.download = "screenshot-uhd.png";
            link.click();
        })
        .catch(error => console.error("Screenshot failed:", error));
    });
    
    // document.title = "Gratitude challenge - Card generator"
});
