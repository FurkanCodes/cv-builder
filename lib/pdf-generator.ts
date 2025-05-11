import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

export async function generatePDF(element: HTMLElement, filename: string) {
  try {
    await document.fonts.ready;
    const imgData = await toPng(element, {
      quality: 2,
      pixelRatio: 2,
      cacheBust: true,
    });
    console.log("imgData", imgData);
    // Calculate the PDF dimensions to maintain aspect ratio
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm

    // Create an image element to get dimensions
    const img = new Image();
    img.src = imgData;
    await new Promise((resolve) => (img.onload = resolve));

    const imgHeight = (img.height * imgWidth) / img.width;

    const pdf = new jsPDF("p", "mm", "a4");
    let position = 0;

    // Add image to PDF
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

    // For multi-page PDFs (if CV is longer than A4)
    const heightLeft = imgHeight - pageHeight;
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    }

    // Download PDF
    pdf.save(`${filename.toLowerCase().replace(/\s+/g, "-")}-cv.pdf`);

    return true;
  } catch (error) {
    console.error("Error generating PDF:", error);
    return false;
  }
}
