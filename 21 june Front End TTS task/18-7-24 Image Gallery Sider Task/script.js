let totalCnt = 1; // Start with the first image
        const totalImages = 6; // Total number of images

        function showSlide(index) {
            for (let i = 1; i <= totalImages; i++) {
                document.getElementById("img" + i).style.display = "none";
                // img1 img2 img3 img4
            }
            document.getElementById("img" + index).style.display = "block";
            // img2
        }

        function changeSlide(n) {
            totalCnt += n;
            
            if (totalCnt > totalImages) {
                totalCnt = 1; 
            } else if (totalCnt < 1) {
                totalCnt = totalImages; 
            }
            showSlide(totalCnt);
        }

        // Initial display
        showSlide(totalCnt);